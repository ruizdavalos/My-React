


import { createContext, useEffect, useState } from 'react'
export const contexto =  createContext()
const { Consumer, Provider } = contexto    //  leer, usar
import  { Toaster, toast } from 'react-hot-toast';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './Firebase'

export const MiContexto = ({ children}) =>{

    const [ condicion, setCondicion ] = useState( false)
    const [ precioTotal, setPrecioTotal ] = useState( 0 )
    const [ carrito, setCarrito ] = useState( [] )
    const [ total, setTotal ] = useState( 0 )
    const [ userr, setUserr ] = useState( null )
    const [ loading, setLoading ] = useState(true)



    const agregarProducto = (producto ) =>{
        estaEnCarrito( producto )
        if ( condicion  ) {
            toast.success ('Se actualizo el producto de carrito')
        }
    }

    const eliminarProducto = ( eliminarId, setCondicion ) => {
        const eliminarDeCarrito =  carrito.filter( e => e.id != eliminarId)
        setCarrito(eliminarDeCarrito)

        if ( !eliminarDeCarrito.length == 0 ){
            const a = eliminarDeCarrito.map( e => {
                const total  =  e.precio
                return total
            })

            let total = 0 
            for(let i = 0; i < a.length; i++){
                total += a[i]
            }
            setPrecioTotal(total)

        }else{
            setCondicion(false)
            setPrecioTotal(0)
        }
    }

    const vaciarCarrito = () => {
        setCarrito([])
        setPrecioTotal(0)
    }

    const estaEnCarrito = ( producto ) => {
        const enCarrito  = carrito.find( e => e.id == producto.id  )

        if( enCarrito ){
            const total = enCarrito.unidad += producto.unidad
            setPrecioTotal(producto.precio *  total)
            producto.total = producto.precio * producto.unidad
            setCondicion(true)
            
        }else{
            setCarrito([...carrito, producto])
            const total = producto.precio * producto.unidad
            setPrecioTotal( precioTotal + total)
        }
    }


    const register = ( email, password ) => createUserWithEmailAndPassword( auth, email, password )

    const login = (email, password) => signInWithEmailAndPassword( auth, email, password )

    const logout = () => signOut( auth )

    useEffect( () => {

        const unSuscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUserr(currentUser)

            setLoading(false)
        })

        return () => unSuscribe()
    }, [])





    const valorDelContexto = { 
        precioTotal ,
        carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        estaEnCarrito,

        register,
        login,
        logout,
        loading,
        userr
    }



    return (
        <Provider value={ valorDelContexto } >
            { children }
        </Provider>
    )
}