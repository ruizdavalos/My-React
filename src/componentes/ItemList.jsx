
import { Item } from "./Item"

export const ItemList = ({ listaProductos }) => {

    return (
        <>
        <section className="itemListContainer">
            {listaProductos.map( ( producto ) =>{
                    return (
                        <Item key={ producto.id} id={producto.id} name={ producto.nombre}  img={ producto.img } price={ producto.precio } />
                    )
            }) }
        </section>
        </>
    )
}

