

import { Logo } from "../base/Logo"
import { CartWidget } from "./CartWidget"
import Nav from "./Nav"
import { Link } from "react-router-dom"
import { IconsUser } from "./IconUser"

const Header =  () => {
    return (
        <header className="header">
            <Link to='/productos/productos'><Logo/></Link> 
            <Link to=''><Nav/></Link>
            <Link to='/carrito'><CartWidget/></Link>
            <Link to='/login'><IconsUser/></Link>

        </header>
    )
}
export default Header

