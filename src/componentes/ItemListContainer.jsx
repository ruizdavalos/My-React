
import { ItemList } from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";



// db es referencia a toda base de datos donde estan todas las colecciones
import { db } from "./Firebase";
// Collection es una funcion que nos da una referencia a una coleccion de la base de datos
import { collection, getDoc, doc, getDocs, addDoc, query, where, orderBy } from 'firebase/firestore'   //ordeBy()


export const ItemListContainer  = () => {

    const [ cargando , setCargando] = useState( true )
    const [ listaProductos , setListaProductos] = useState([] )
    const { nombreDeBase } = useParams() 


    useEffect( () => {

        const productosCollection = collection( db, `productos`) 
        const ir = nombreDeBase == 'productos'  || nombreDeBase == undefined?  query( productosCollection ) :  query( productosCollection, where("categoria", "==", nombreDeBase) )
        const consultaPorCategoria =  ir
        const  consulta = getDocs(consultaPorCategoria)

        consulta
            .then( ( resultado ) => {
                const productos = resultado.docs.map( ( doc ) => {
                    const produtosConId = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return produtosConId
                })
                    setListaProductos( productos )
                    setCargando(false)
            }) 
            .catch( ( err) => {
                console.warn( err )
            } )
            .finally( () => {
                console.log('Se cargo perfecto')
            })

    }, [ nombreDeBase])

    if( cargando ) {
        return(
            <ClipLoader/>
        )
    }else{
        return (
            <ItemList listaProductos={ listaProductos }/>
        )
    }

}


