import { useState } from 'react'

const Evenstate = () => {
    
    const [nama, setNama] = useState('')
    const [alamat, setAlamat] = useState('')
    const [gender, setGender] = useState('')
    const [progPil, setProgPil] = useState('')
    const [presAk, setPresAk] = useState('false')
    return (
        <div className="container m-4">
            <div className="row">
                <div className="col-5">
                    <h3>Form Pendaftaran</h3> <hr />
                    <div className="md-2">
                        <label htmlFor="nama">Nama :</label>
                        <input className="form-control" type="text" name="nama" id="nama" value={nama} onChange = {(e)=>setNama(e.target.value)}/>
                    </div>
                    <br />
                    <div className="md-2">
                        <label htmlFor="nama">Alamat : </label>
                        <input className="form-control" type="text" name=" alamat" id="alamat" value={alamat} onChange = {(e)=>setAlamat(e.target.value)}/>
                    </div>
                    <br />
                    <div className="md-3">
                        <label htmlFor="nama" className='fs-5'>Gender : </label>
                        <br /> 
                        <div className='form-check-inline'>
                        <input className="form-check-input" type="radio" name="gender" id="genderPria" checked={()=>setGender('pria')} value="Pria" onChange = {(e)=>setGender(e.target.value)}/>
                        <label htmlFor="" className='form-check-label'> Pria</label>
                        </div>
                        <div className='form-check-inline'>
                        <input className="form-check-input" type="radio" name="gender" id="genderWanita" checked={()=>setGender('wanita')} value="Wanita" onChange = {(e)=>setGender(e.target.value)}/>
                        <label htmlFor="" className='form-check-label'> Wanita</label>
                        </div>
                    </div>
                    <br />
                    <div className="md-2">
                        <label htmlFor="" className='fs-5'>Program Pilihan</label>
                        <select name="programPilihan" id="" className='form-select' value= {progPil} onChange={(e)=>setProgPil(e.target.value)} >
                            <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
                            <option value="S1 Sistem Informasi">S1 Sistem Informasi</option>
                            <option value="S1 Bisnis Digital">S1 Bisnis Digital</option>
                            <option value="D3 Des Kom Vis">D3 Des Kom Vis</option>
                        </select>
                    </div>
                    <br />
                    <div className='md-2'>
                        <label htmlFor="" className='fs-5'>Prestasi</label>
                        <div className='form-check form check-inline'>
                        <input type="checkbox" className='form-check-input' name='chkAkademik' id='chkAkademik' checked ={presAk} onChange= {(e)=>setPresAk(e.target.checked)}/>
                        <label htmlFor="" className='form-check-label'>Prestasi Akademik</label>
                        </div>               
                    </div>
                </div>
                <div className="col-7">
                    <h3>Resume</h3> <hr />
                    <div className="md-2">
                        <h5 className="mb-2">Nama : {nama}</h5>
                    </div>
                    <br />
                    <div className="md-2">
                        <h5 className="mb-2">Alamat : {alamat}</h5>
                    </div>
                    <br />
                    <div className="md-2">
                        <h5 className="mb-2">Gender : {gender}</h5>
                    </div>
                    <br />
                    <div className="md-2">
                        <h5 className="mb-2">Program Pilihan : {progPil}</h5>
                    </div>
                    <br />
                    <div className='md-2'>
                    <h5>Prestasi Akademik : {presAk ? 'ada' : '-'}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Evenstate;