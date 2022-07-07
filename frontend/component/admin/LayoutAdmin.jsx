import SideBars from "./SideBars"
const LayoutAdmin = ({children}) =>{
    return(
        <>
            <SideBars>
                {children}
            </SideBars>
        </>
    )
}

export default LayoutAdmin;