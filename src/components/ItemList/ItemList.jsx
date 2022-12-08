//genero array de objeto productos - modifica array de objeto
import Item from "../Item/Item";
const ItemList = ({productsList}) => {
    return (
        <>
            {productsList.map(producto => <Item key={producto.id} prod = {producto}/>)}
        </>
    );
}

export default ItemList;
