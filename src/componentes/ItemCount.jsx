
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { contexto } from "./MiContexto"


export const ItemCount = ( {onAdd , inicio, stockInicial} ) => {

    const [ stock, setStock ] = useState( stockInicial )
    const [ contador, setContador] = useState( inicio )
    const navigator = useNavigate()

    const{ userr } = useContext(contexto)
    
    const restar = () =>{
        if ( contador > 1 ){
            setContador( contador - 1)
        }
    }

    const sumar = () =>{
        if ( contador <  stock ) {
            setContador( contador + 1) 
        }
    }

    const agregar = () => {
        if ( stock >= contador) {
            setStock( stock - contador)
            setContador(1)
            onAdd(contador)
            // navigate('/carrito')

        }else  setContador( 'Sin stock')
    }

    const handleLogin = () => {
        navigator('/login')
    }

    return (
        <>
            <div className="itemCountContainer">
                <div className="countContainer">
                    <button onClick={ restar } >-</button>
                    <p>  {contador}</p>
                    <button onClick={ sumar } >+</button>
                </div>
                <div className='botonComprar'>
                    { userr? <button onClick={ agregar }  > Agregar a carrito</button> :<> <p>Iniciar Seccion para poder comprar</p><button onClick={handleLogin}>Iniciar Sesion</button></>}
                </div>
            </div>
        </>
    )

}