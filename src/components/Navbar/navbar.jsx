import Form from "../Form/Form";
import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><Link className="text-decoration-none" to={"/"}>Nutrimarket</Link></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Categorias/>
                <Form busqueda={"Buscar producto"}/>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default Navbar;
