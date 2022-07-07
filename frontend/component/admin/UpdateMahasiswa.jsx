import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

const UpdateMahasiswa =() =>{
    const [_nim, setNim] = useState('');
    const [_nama, setNama] = useState('');
    const [_angkatan, setAngkatan] = useState('');
    const [_prodi, setProdi] = useState('');
    const router = useRouter();
    const {nim, nama, angkatan, prodi} = router.query;

    useEffect(() =>{
        if (typeof nim =='string') {
            setNim(nim);
        }
        if (typeof nama =='string') {
            setNama(nama);
        }
        if (typeof angkatan =='string') {
            setAngkatan(angkatan);
        }
        if (typeof prodi =='string') {
            setProdi(prodi);
        }
    },[nim,nama,angkatan,prodi])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            axios
                .put(`http://localhost:5000/mahasiswa/${_nim}`, {
                    nim : _nim,
                    nama : _nama,
                    angkatan :_angkatan,
                    prodi :_prodi,
                })
                .then(response => {
                    console.log(response)
                });
            alert("Update Data Sukses")
            Router.push('/admin/datamahasiswa')
        } catch (e) {
            console.log({ message : e.message});
        }
    }

    return (
        <div>
            <div className="container mt-4">
            <form onSubmit={submitHandler}>
                        {/* 2 column grid layout with text inputs for the first and last names */}
                        <div className="row mb-4 justify-content-center">
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="nim" 
                                    value={_nim} 
                                    onChange={(e) => setNim(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label htmlFor="form6Example1"><strong>Nim</strong></label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="nama" 
                                    value={_nama}
                                    onChange={(e) => setNama(e.target.value)}
                                    className="form-control mb-2" />
                                    <label className="form-label" htmlFor="form6Example2"><strong>Nama</strong></label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4 justify-content-center">
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="angkatan"
                                    value={_angkatan}
                                    onChange={(e) => setAngkatan(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label htmlFor="form6Example1"><strong>Angkatan</strong></label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="prodi"
                                    value={_prodi}
                                    onChange={(e) => setProdi(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label className="form-label" htmlFor="form6Example2"><strong>Program Studi</strong></label>
                                </div>
                            </div>
                            {/* Submit button */}
                        <button type="submit" className="btn btn-dark justify-content-center col-5">Update</button>
                        </div>
                    </form>
            </div>
        </div>
    );
}

export default UpdateMahasiswa;