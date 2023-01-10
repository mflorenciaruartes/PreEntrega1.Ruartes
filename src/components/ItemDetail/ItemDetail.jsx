import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import { useDarkModeContext } from "../../Context/DarkModeContext";
import { useCartContext } from "../../Context/CartContext";

const ItemDetail = ({item}) => {
    
    const {addItem} = useCartContext()
    const onAdd = (contador) =>{
        addItem(item, contador)
    }
    const {darkMode} = useDarkModeContext()
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={item.img} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                    <div className={`card-body ${darkMode ? 'cardBodyDark' : 'card-body'}`}>
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">Modelo: {item.modelo} </p>
                        <p className="card-text">Marca: {item.marca} </p>
                        <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                        <p className="card-text">Stock: {item.stock} </p>
                        <ItemCount inicial={1} stock= {item.stock} onAdd={onAdd}/><br/>
                        <button className="btn btn-success"><Link className="text-decoration-none" to={"/cart"}>Finalizar Compra</Link></button>
                    </div>
                
            </div> 
        </div>
    );
}

export default ItemDetail;
