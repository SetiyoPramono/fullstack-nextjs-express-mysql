import "bootstrap/dist/css/bootstrap.min.css"
import Akademik from "../../component/user/Akademik";
import UserLayout from "../../component/user/UserLayout";


export default function data_dosen() {
    return (
        <UserLayout>
            <div className="container mt-3">
            <Akademik/>
            </div>
        </UserLayout>
    )
}