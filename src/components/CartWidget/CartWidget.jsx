import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <ul className="navbar-nav me-auto align-items-end">
            <li className="nav-link">
                <button className="btn btn-success"><Link to={"/cart"}>
                    <i className="fas fa-shopping-cart fa-lg"></i>
                    <span className="cantCarrito m-2">0</span>
                    </Link>
                </button>
            </li>
        </ul>
    );
}

export default CartWidget;
