import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(0)
    const sumar = () => contador < stock && setContador (contador + 1)
    const restar = () => contador > 1 && setContador (contador - 1)
    const agregarAlCarrito = () => {
        onAdd(contador)
        }
    

    return (
        <div>
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
            {contador}
            <button className='btn btn-dark' onClick={() => restar()}>-</button>
            <button className='btn btn-success' onClick={() => console.log(contador)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
