import Nav from "./Nav";
const UserLayout = ({children})=>{
    return(
        <>
        <Nav/>
        {children}
        <div className="footer fixed-bottom bg-dark">
            <h3 className="text-light text-center">Footer</h3>
        </div>
        </>
    )
}

export default UserLayout;