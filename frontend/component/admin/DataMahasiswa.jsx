import LayoutAdmin from "./LayoutAdmin";
import MahasiswaByNim from "./MahasiswaByNim";
import Link from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
const DataMahasiswa = ({ data }) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusMahasiswa(nim) {
        try {
            const response = await axios.delete(
                `http://localhost:5000/mahasiswa/${nim}`
            );
            if (response.data.message) {
                setMessage(response.data.message);
            }
            alert(`Mahasiswa dengan NIM ${nim} telah di hapus`)
        } catch (error) {
            console.log({ message: error.message });
        }
        router.push('/admin/datamahasiswa')
    }
    return (
        <>
            <LayoutAdmin>
                <h1 className="text-center">Data Mahasiswa</h1>
                <div className="container mt-3">
                    <MahasiswaByNim />
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Nim</th>
                                <th>Nama</th>
                                <th>Angkatan</th>
                                <th>Prodi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((mhs, idx) => (
                                <tr key={idx}>
                                    <td>{mhs.nim}</td>
                                    <td>{mhs.nama}</td>
                                    <td>{mhs.angkatan}</td>
                                    <td>{mhs.prodi}</td>
                                    <td>
                                        <Link href={`/admin/updatemahasiswa?nim=${mhs.nim}
                                            &nama${mhs.nama}
                                            &angkatan=${mhs.angkatan}
                                            &prodi=${mhs.prodi}`}>
                                            <a class="btn btn-outline-success" role="button">Edit</a>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" value={mhs.nim}
                                            onClick={(e) => hapusMahasiswa(e.target.value)}
                                            class="btn btn-danger btn-md">Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </LayoutAdmin>
        </>
    )
}
export default DataMahasiswa;