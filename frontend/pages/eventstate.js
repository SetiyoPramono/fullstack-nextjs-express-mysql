import Evenstate from "../component/Eventstate";
import Nav from "../component/user/Nav";


const eventstate = () =>{
    return(
        <>
            <Nav/>
            <div className="container m-4">
            <Evenstate />
            </div>
        </>
    )
}

export default eventstate;