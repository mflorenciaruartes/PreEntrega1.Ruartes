import {useState} from 'react';

const ItemCount = ({inicial, stock, onAdd}) => {
    const [contador, setContador] = useState(inicial)

    const sumar = () => contador < stock && setContador (contador + 1)
    const restar = () => contador > 1 && setContador (contador - 1)
    
    const agregarAlCarrito = () => onAdd(contador)
        
    

    return (
        <div>
            <button className='btn btn-dark m-1' onClick={sumar}>+</button>
            {contador}
            <button className='btn btn-dark m-1' onClick={restar}>-</button>
            <button className='btn btn-success m-1' onClick={agregarAlCarrito}><i className="fas fa-cart-plus"></i></button>
        </div>
    );
}

export default ItemCount;
