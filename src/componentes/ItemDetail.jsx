
import { ItemCount } from "./ItemCount"
import { useContext, useState } from "react"
import { contexto } from "./MiContexto"
import { Navigate, useNavigate } from "react-router-dom"

export const ItemDetail = ( { listaProductos} ) => { 

    const { agregarProducto, userr } = useContext( contexto )
    const navigate = useNavigate()
    const [isCounter, setIsCounter] = useState(false)
    const [ stock, setStock ]  = useState( 8 )
    const [ cantidadAgregada, setCantidadAgregada ] = useState(0)

    const onContador = (contador) => {
        const producto = {
            id : listaProductos.id,
            img : listaProductos.img,
            nombre : listaProductos.nombre,
            detalle : listaProductos.detalle,
            precio : listaProductos.precio,
            unidad : contador,
            stock: listaProductos.stock
        }

        agregarProducto( producto )
    }

    const onAdd = (contador) => {
        
        if ( stock >= contador) {
            setStock( stock - contador )
            setCantidadAgregada(contador)
            setIsCounter(true)
            onContador( contador )

        }else  setStock( 'Sin stock')
    }

    const handleClick = () => {
        navigate( '/carrito' )
    }


    if(listaProductos){
        return (
            <>
                <article className="cardDetailContainer">
                    <h3> {listaProductos.nombre} </h3>
                    <div className="imgYDetalle">
                        <img src= {listaProductos.img} alt="Imagen del producto" />
                        <div className="detalleYBtn">
                            <p className="detalle"> {listaProductos.detalle} </p>
                            { isCounter? <p>Se agrego {cantidadAgregada} unidades a carrito  </p> : <p>En stock :   {stock}</p> }
                            <div className='buttonContainer' >
                                {isCounter? <button onClick={handleClick} className='button'> Ir a carrito</button> : <ItemCount  onAdd={onAdd} inicio={1} stockInicial={stock}/>}
                            </div>
                        </div>
                    </div>
                </article>
            </>
        )
    }else{
        return <Navigate to='/login'/>
    }
}

