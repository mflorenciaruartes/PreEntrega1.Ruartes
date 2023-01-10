import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import { getProductos} from "../../assets/firebase";

//consulto base de datos BDD
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()
    useEffect(() => {
        if(category){
            getProductos().then(products =>{
                const productsList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            getProductos().then(products =>{
                const productsList = products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
        //cargarBDD().then(productos => console.log(productos))

       
    }, [category]); 
    
    return (
        <>
            <div className= 'row cardProductos d-flex justify-content-center'>
                {productos}
            </div>
        </>
    );
}

export default ItemListContainer;
