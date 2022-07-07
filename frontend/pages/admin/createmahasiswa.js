import React from "react";
import LayoutAdmin from "../../component/admin/LayoutAdmin";
import CreateMahasiswa from "../../component/admin/CreateMahasiswa";
const createmahasiswa = () => {
    return(
        <LayoutAdmin>
            <div>
            <CreateMahasiswa/>
            </div>
        </LayoutAdmin>
    )
}

export default createmahasiswa;