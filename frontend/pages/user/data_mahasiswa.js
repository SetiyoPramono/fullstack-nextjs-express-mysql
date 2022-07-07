import "bootstrap/dist/css/bootstrap.min.css"
import Data_Mahasiswa from "../../component/user/Data_Mahasiswa";
import UserLayout from "../../component/user/UserLayout";
import { useRouter } from "next/router";

export default function data_mahasiswa() {
    const router = useRouter()
    const {id,nama} = router.query
    return (
        <UserLayout>
            <div className="container mt-3">
            <p>id yang di kirim : {id} degan nama : {nama}</p>
            <Data_Mahasiswa/>
            </div>
        </UserLayout>
    )
}