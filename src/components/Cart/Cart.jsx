import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div>
            <h1>Carrito Vacío</h1>
            <button type="submit" className="btn btn-success"><Link className="text-decoration-none" to={"/checkout"}>Finalizar Compra</Link></button>
        </div>

    );
}

export default Cart;
