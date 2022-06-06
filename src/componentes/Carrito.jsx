

import  { useContext, useState } from "react"
import  { Toaster, toast } from 'react-hot-toast';
import  { useNavigate } from "react-router-dom"
import  { contexto } from "./MiContexto"
import  { db } from './Firebase'
import { collection, addDoc } from "firebase/firestore";



export const Carrito = () => {

    const navigate = useNavigate()
    const { carrito, eliminarProducto, vaciarCarrito, precioTotal, logout, userr} = useContext( contexto )
    const[ condicion, setCondicion] = useState( true )
    const [terminar, setTerminar ] = useState( false )
    const [ idDeCompra, setIdDeCompra ] = useState ()


    if (carrito) {
        condicion
    }else{
        setCondicion(false)
    }

    const handleSeguir = () => {
        navigate('/productos/productos')
    }

    const handleIrAComprar = () => {
        navigate('/productos/productos')
    }

    const delet = (e) => {
        const eliminarId =  e.target.value
        eliminarProducto( eliminarId , setCondicion)
        toast.success( 'Se elimino el producto')
        if(!carrito){
            setCondicion(false)
        }
    }

    const handleVaciar = () => {
        vaciarCarrito()
        setCondicion(false)
    }

    const terminarCompra = () => {
        const ordenesColeccion = collection( db, 'ordenes' )
        

        const orden = {
            buyer : {
                email : userr.email
            },
            item : carrito,
            fecha :  new Date(),
            total : precioTotal
        }

        const consulta = addDoc(ordenesColeccion, orden)
        consulta
            .then( (e ) =>{
                const  idCompra = e.id
                setIdDeCompra( idCompra )
            })

        setTerminar( true )
        setCondicion(false)
        vaciarCarrito()
    }

    const handleLogout =  () =>{
        logout()
        vaciarCarrito()
    }


    if( condicion ) {
        return (
            <>
                <h2>Carrito</h2><br/>
                <h2> Costo total del carrito : $ {precioTotal}</h2>

                <section className="sectionCarritoContainer">
                    {carrito.map( ( producto ) =>{
                            return (
                                <>
                                    <article className="cardCarritoContainer">
                                        <div className="img"><img src={producto.img} alt="" /></div>
                                        <h3 >{producto.nombre}</h3>
                                        <p> Precio : ${producto.precio}</p>
                                        <p> Unidades : {producto.unidad}</p>

                                        <button className="botonDelete" value={producto.id}  onClick={delet}>Eliminar</button>
                                        <Toaster position="top-right"  />
                                    </article>
                                </>
                            )
                    }) }
                </section>

                    <div className="sectionButtonCart">
                        <button className="button" onClick={handleSeguir}> Seguir Comprando</button>
                        <button onClick={handleVaciar}> Vaciar Carrito</button>
                        <button onClick={terminarCompra}> Teminar  Compra</button>
                        <button onClick={handleLogout}>Cerrar seccion</button>
                    </div>
            </>
        )

    }else if ( terminar ) {
        return(
            <>
                <h2> Gracias por su compra : {userr.email}  </h2>
                <p> Numero de orden : {idDeCompra}</p>
            </>
        )
    }else{
        return (
            <>
            <h2> Carrito Vacio</h2><br/>
            <button onClick={handleIrAComprar}> Ir A Comprar</button>
            <Toaster position="top-right"  />
            </>
        )
    }
}   