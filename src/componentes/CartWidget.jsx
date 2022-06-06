


import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { contexto } from "./MiContexto";

export const CartWidget  = () => {

    const{carrito } = useContext(contexto)
    const productosEnCarrito =  carrito.length


    return (
        <div className="caetWidgetContainer">
            <TiShoppingCart alt="icons-carrito" className='header__cartWidget'  />
            {productosEnCarrito? <p className="numeroPositivo"> {productosEnCarrito} </p> : <p className="numeroCero"> {productosEnCarrito} </p>}
        </div>
    )
}


