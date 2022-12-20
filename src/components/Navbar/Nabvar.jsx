import BotonDarkMode from './BotonDarkMode/BotonDarkMode'
import Form from "../Form/Form";
import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useDarkModeContext } from '../../Context/DarkModeContext';

const Navbar = () => {
    const {darkMode} = useDarkModeContext()
    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-verde' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
                <h1 className="navbar-brand" href="#"><Link className={`text-decoration-none ${darkMode ? 'text-white' : 'text-success'}`} to={"/"}>Nutrimarket</Link></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Categorias/>
                <Form busqueda={"Buscar producto"}/>
                </div>
                <CartWidget/>
                <BotonDarkMode/>
            </div>
        </nav>
    );
}

export default Navbar;