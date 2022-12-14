//muestro objeto producto en card - genera car producto
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../Context/DarkModeContext";

const Item = ({prod}) => {
    const {darkMode} = useDarkModeContext()
    return (
        <div className={`card border-success mb-3 cardProducto ${darkMode ? 'cardBodyDark' : 'cardProducto'}`}>
                        <img src={prod.img} className="card-img-top" alt="..." />
                        <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
                            <h5 className="card-title">{prod.nombre} {prod.modelo}</h5>
                            <p className="card-text">*{prod.marca}*</p>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <button className='btn btn-outline-success'><Link className="text-decoration-none" to={`/product/${prod.id}`}>Ver Producto</Link></button>
                        </div>
        </div>
    );
}

export default Item;
