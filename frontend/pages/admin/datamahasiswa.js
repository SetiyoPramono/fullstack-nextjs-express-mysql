import "bootstrap/dist/css/bootstrap.min.css"
import DataMahasiswa from "../../component/admin/DataMahasiswa"
const datamahasiswa =({data}) =>{
    {Array.isArray(data)? data=data : data =[data]}
    return(
        <>
        <div>
        <DataMahasiswa data ={data}/>
        </div>
        </>
    )
}

export async function getServerSideProps({query}) {
    const nim = query.nim;
    
    let url = 'http://localhost:5000/mahasiswa'
    if (typeof nim === 'string') {
        url = `http://localhost:5000/mahasiswa/${nim}`
    }
    
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
}

export default datamahasiswa;