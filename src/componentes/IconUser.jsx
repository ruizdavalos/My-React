import { useContext } from "react"
import { FaUserCircle } from "react-icons/fa"
import { contexto } from "./MiContexto"


export const IconsUser = () => {

    const {userr} = useContext( contexto)


    return(
        <>
            {userr?<FaUserCircle className="iconsUser2"/> : <FaUserCircle className="iconsUser"/>}
        </>
    )
}