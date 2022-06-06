
// import { async } from "@firebase/util"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Carrito } from "./Carrito"
import { contexto } from "./MiContexto"



export const  Login = () => {
    const navigator = useNavigate()
    const { login, logout, loading,userr }= useContext( contexto )
    const [user, setUser ] = useState({
        email : '',
        password : ''
    })


    const onChange = ({ target : { name, value}}) =>{
        setUser( { ...user, [ name ]: value })
    }

    const onSubmit = async (e) =>{
        e.preventDefault()
        try {
            await login( user.email, user.password )
            // Navigator('/')
            console.log('Se inicio seccion correctamente!')

        }catch ( error){
            console.log('Datos incorrectos')
        }
    }


    if (!userr){
        return(
            <div>
                <form onSubmit={ onSubmit } className="seccionUsuario">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="empresa@gmail.com" onChange={onChange}/><br></br>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" placeholder="****** " onChange={onChange}/>
                    <button >Iniciar</button>
                </form>
        
                    <Link to='/registroUsuario'><p>Registro</p></Link>
            </div>
        )
    }else{
        return <Carrito/>
    }
}