import { async } from "@firebase/util"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { contexto } from "./MiContexto"



export const  Register = () => {
    const navigator = useNavigate()
    const { register }= useContext( contexto )
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
            await register( user.email, user.password )
            navigator('/')
            console.log('Se registro correctamente!')

        }catch ( error){
            console.log('Ese usuario ya esta registrado')
        }
        
    }


    return(

        <form onSubmit={ onSubmit } className="seccionUsuario">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="empresa@gmail.com"
                onChange={onChange}/><br></br>

            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" placeholder="****** "
                onChange={onChange}/>

            <button >Registrar</button>

        </form>


    )
}