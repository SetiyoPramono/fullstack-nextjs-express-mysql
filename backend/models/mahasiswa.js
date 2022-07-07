const res = require("express/lib/response");
const dbConfig = require("../config/db.config");
const mahasiswa = require("../controllers/mahasiswa");
const sql = require("./db")


module.exports = {
     insert : (mahasiswaBaru,result) => {
       sql.query("insert into mahasiswa SET ?",mahasiswaBaru,(err,res)=>{
           if (err) {
               console.log("error",err);
               result(err,null)
               return;
           }
           result(null, {id: res.insertId, ...mahasiswaBaru});
       })
    },

    getMahasiswa : (result) =>{
        let query = "Select * From mahasiswa";
        sql.query(query,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            result(null,res)
        })
    },

    getMahasiswaByNim : (nim, result) =>{
        let query = `Select * From mahasiswa Where nim =${nim}`;
        console.log(nim)
        sql.query(query, (err, res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            if (res.length) {
                result(null,res[0]);
                return
            }
            console.log(res)
            result ({kind : "not_found"},null)
        })
    },
    update:(nim,mahasiswa,result)=>{
        sql.query(
            "UPDATE mahasiswa SET nama = ?, angkatan = ?, prodi = ? WHERE nim = ?",
            [mahasiswa.nama, mahasiswa.angkatan, mahasiswa.prodi, nim],
            (err,res) => {
                if (err) {
                    console.log("error",err);
                    result(null,err);
                    return;
                }
                if (res.affectedRows = 0) {
                    result(null, err);
                    return;
                }
                console.log("updated mahasiswa : ",{nim: nim, ...mahasiswa});
                result(null,{nim: nim, ...mahasiswa});   
            }
        )
    },
    delete: (nim, result) =>{
        sql.query("DELETE FROM mahasiswa WHERE nim = ?", nim,(err,res)=>{
            if (err) {
                console.log("error : ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({kind : "not_found"},null);
                return;
            }
            console.log("deleted mahasiswa with NIM : ",nim);
            result(null,res);
        });
    },
    getNilaiByNim:(nim,result) =>{
        try {
            sql.query(`SELECT matakuliah.kdMk, matakuliah.matakuliah,nilai.dosen,nilai.semester,nilai.nilai 
            FROM mahasiswa,matakuliah,nilai
            WHERE mahasiswa.nim=${nim} and nilai.nim=${nim} and nilai.kdMk=matakuliah.kdMk`,(err,res) =>
            {
                result(null,res)
            }
            );
        } catch (error) {
            result(error,null)
        }
    }
}