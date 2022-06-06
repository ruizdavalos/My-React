

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import ClipLoader from "react-spinners/PRopagateLoader";

import { db } from "./Firebase";
import { collection, getDoc, doc, getDocs, addDoc, query} from 'firebase/firestore'


export const ItemDetailContainer  = () => {

    const [ listaProductos , setListaProductos] = useState({})
    const [ cargando, setCargando ] = useState(true)
    const { id } = useParams()

    useEffect( () => {

        const productCollection = collection( db, 'productos' )
        const resultadoDelDoc = doc( productCollection, id)
        const consulta = getDoc( resultadoDelDoc)

        consulta
            .then( ( resultado ) => {

                const productoConId = resultado.data()
                productoConId.id = id
                setListaProductos( productoConId )
                setCargando( false )

            }) 

            .catch( ( err ) => {
                setCargando(false)
                console.error( err )
            } )

            .finally( () => {

            })

    },[id])

    if( cargando) {
        return(
            <>
                <ClipLoader  margin-top='10rem' />
            </>
        )
    }else{
        return (
            <ItemDetail listaProductos={ listaProductos } />
        )
    }
}