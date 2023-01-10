import { Link } from "react-router-dom";

import { useCartContext } from "../../Context/CartContext";

const Cart = () => {
    const {cart, emptyCart, removeItem, totalPrice } = useCartContext()

    return (
        <>
            {cart.length === 0 ?
            <>
                <h1>Carrito Vacío</h1>
                <button type="submit" className="btn btn-success"><Link className="text-decoration-none" to={"/"}>Seguir comprando</Link></button>
                
            </> 
            :
            <>
                <div className="container cartContainer">
                    {
                        cart.map (prod =>
                            <div className="card mb-2 d-flex flex-row align-items-center" key={prod.id}>
                                <div className="col-md-4 w-25">
                                    <img src={prod.img} className='img-fluid' alt="productos" />
                                </div>
                                <div className="col-md-8 cardBody">
                                    <h3 className="card-title">{`${prod.nombre} ${prod.marca}`}</h3>
                                    <p className="card-text">Cantidad: {prod.cant}</p>
                                    <p className="card-text">Precio unitario: $ { new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                                    <p className="card-text">Precio total: $ { new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant)}</p>
                                    <button className="btn btn-danger m-1" onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                                </div>

                            </div>
                        )}


                    <div>
                    <p>Total a pagar: ${ new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                    <button className="btn btn-danger m-1" onClick={emptyCart}>Vaciar carrito</button>
                    <button type="submit" className="btn btn-success m-1"><Link className="text-decoration-none" to={"/"}>Seguir comprando</Link></button>
                    <button type="submit" className="btn btn-success m-1"><Link className="text-decoration-none" to={"/checkout"}>Finalizar Compra</Link></button>
                    </div>


                </div>
                
            </>
            }
        </>

    );
}

export default Cart;


