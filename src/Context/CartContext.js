import { useContext, createContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(producto => producto.id === id)
    }

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)){
        const indice = cart.findIndex(prod => prod.id === producto)
        const aux = [...cart]
        aux[indice].cant = cantidad
        setCart(aux)
        }else {
            const nuevoProducto ={
                ...producto,
                cant : cantidad
            }
            setCart([...cart, nuevoProducto])
        }
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const getItemQuantity = () =>{
        return cart.reduce((acum,prod) => acum += prod.cant, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }

    return(
        <CartContext.Provider value={{cart, isInCart, addItem, emptyCart, removeItem, getItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )


}