import { useContext } from "react"
import { Navigate } from "react-router-dom"

import { contexto} from "./MiContexto"



export const ProtecteRoute = ( { children }) =>{

    const { user } = useContext( contexto)

    // if( loading) return <h2>Loading</h2>

    if( !user){
        return <Navigate to='/login'/>
    }else{
        return <>{ children } </>

    }


}