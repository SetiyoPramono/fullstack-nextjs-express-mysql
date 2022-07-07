const res = require('express/lib/response')
const Mahasiswa = require('../models/mahasiswa')

module.exports = {

    getMahasiswa: (req, res) => {
        Mahasiswa.getMahasiswa((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Terjadi Error",
                });
            } else {
                res.send(data);
            }
        })
    },

    insert : (req,res)=>{
        //Ambil data request dari front end
        if (!req.body) {
            res.status(400).send({message : "Data tidak boleh kosong"})
        }
    Mahasiswa.insert(req.body,(err,data) =>{
        if (err) {
            res.status(500).send({
                message : err.message || "Terjadi Error"
            })
        }else{
            res.send(data) 
        }
    })},

    getMahasiswaByNim : (req,res)=>{
        Mahasiswa.getMahasiswaByNim(req.params.nim,(err,data)=>{
           if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message : `Mahasiswa dengan Nim ${req.params.nim} tidak di temukan`
                })
            }
            else{
                res.status(500).send({
                    message : "Data tidak tersedia"
                })
            }
           }
           else{
               res.send(data)
           }
        }) 
    },

    update : (req,res)=>{
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be  empty"
            });
        }
        Mahasiswa.update(req.params.nim,req.body,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Mahasiswa dengan Nim ${req.params.nim} tidak di temukan`
                    })
                }
                else{
                    res.status(500).send({
                        message : "Data tidak tersedia"
                    })
                }
               }
               else{
                   res.send(data)
               }    
        })
    },

    delete : (req,res)=>{
        Mahasiswa.delete(req.params.nim,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Mahasiswa dengan Nim ${req.params.nim} tidak di temukan`
                    });
                }
                else{
                    res.status(500).send({
                        message : "Data tidak tersedia"
                    });
                }
               }
               else{
                   res.send({message: `Mahasiswa sudah di hapus`});
               }            
        });
    },
    getNilaiByNim : (req,res)=>{
        Mahasiswa.getNilaiByNim(req.params.nim,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Mahasiswa dengan Nim ${req.params.nim} tidak di temukan`
                    });
                }
                else{
                    res.status(500).send({
                        nilai : []
                    });
                }
               }
               else{
                   res.send(data);
               }            
        });
    }
}