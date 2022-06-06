
import { Link } from "react-router-dom"



const Nav = () => {
    
    return(
        <nav className="header__nav">
            <Link to="/productos/productos" className="nav__link">Productos</Link>
            <Link to='/productos/almohadas'  className="nav__link">Almohadas</Link>
            <Link to='/productos/sabanas'  className="nav__link">Sabanas</Link>
            <Link to='/productos/sommiers'  className="nav__link">Sommiers</Link>
            <Link to='/productos/zapatillas'  className="nav__link">Zapatillas</Link>
        </nav>
    )
}
export default Nav