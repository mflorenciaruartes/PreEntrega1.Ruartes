import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item dropdown">
                <button className='btn nav-link dropdown-toggle' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><button className='dropdown-item'><Link className="nav-link" to={"/category/batidora"}>Batidoras</Link></button></li>
                <li><button className='dropdown-item'><Link className="nav-link" to={"/category/licuadora"}>Licuadoras</Link></button></li>
                <li><button className='dropdown-item'><Link className="nav-link" to={"/category/cafetera"}>Cafeteras</Link></button></li>
                <li><button className='dropdown-item'><Link className="nav-link" to={"/category/tostadora"}>Tostadoras</Link></button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className='dropdown-item'><Link className="nav-link" to={"/"}>Ver todos</Link></button></li>
                </ul>
            </li>
            <li className="nav-item">
                <button className='btn'><Link className="nav-link" to={"/"}>Nosotros</Link></button>
            </li>
            <li className="nav-item">
                <button className='btn'><Link className="nav-link" to={"/"}>Contacto</Link></button>
            </li>
        </ul>
    );
}

export default Categorias;
