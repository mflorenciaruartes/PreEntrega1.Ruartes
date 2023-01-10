import { Link } from "react-router-dom";

import { useCartContext } from "../../Context/CartContext";


const CartWidget = () => {
    const {getItemQuantity} = useCartContext()

    return (
        <ul className="navbar-nav me-auto align-items-end">
            <li className="nav-link">
                <button className="btn btn-success"><Link className="text-decoration-none" to={"/cart"}>
                    <i className="fas fa-shopping-cart fa-lg"></i>
                    {getItemQuantity() > 0 && <span className="cantCarrito m-2">{getItemQuantity()}</span> }
                    </Link>
                </button>
            </li>
        </ul>
    );
}

export default CartWidget;
