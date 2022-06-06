
// import { useState } from "react"
// import { useEffect } from "react"

// export const Presentacional = ({usuarios}) => {
//         //  Estado :  es una variable interna de un componente que guarda un valor a tras del tiempo
//     // const resultado = useState(0)
//     // const contador =  resultado[0]
//     // const setContador = resultado[1]
//     const [ contador , setContador ] = useState( 0 )
//     const [ dark, setDark ] = useState( false )

//     // useEffect( () => {}, [])
//     useEffect( () => {
//         console.log( ' Nuevo render' )
//     }, [])

//     const handleClick = () => {
//         setContador( contador + 1)
//     }

//     const toggleDark = () => {
//         setDark( !dark )
//     }
//     console.log(dark)

//     return (
        
//         <>
//                     Presentacional {usuarios}

//             <p>Contador Actual : {contador} </p>
//             <p>Dark es igual a : {dark} </p>

//             <button onClick={handleClick}>Click Aumentar</button>
//             <button onClick={toggleDark}>Click dark</button>
        
//         </>
//     )
// }
