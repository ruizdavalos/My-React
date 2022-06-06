
import { ItemListContainer } from "./ItemListContainer"
import { ItemDetailContainer } from "./ItemDetailContainer"
import { Carrito } from './Carrito'
import { Routes, Route} from "react-router-dom"
import { Register } from "./Register"
import { Login } from "./Login"
import { ProtecteRoute } from "./ProtecteRoute"


export const Main = () => {
    return(
        <main>
                <Routes>
                    <Route path="/" element={ <ItemListContainer/> } />
                    <Route path="/productos/:nombreDeBase" element={ <ItemListContainer/> }/>
                    <Route path="/producto/:id" element={<ItemDetailContainer/>} />
                    <Route path="/carrito" element={
                        <ProtecteRoute>
                            <Carrito/> 
                        </ProtecteRoute>
                        } />
                    <Route path="/registroUsuario" element={ <Register/>} />
                    <Route path="/login" element={ <Login/> } />
                </Routes>
        </main>
    )
}
