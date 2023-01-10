import React from 'react';
import {useNavigate} from 'react-router-dom' 
import { toast } from 'react-toastify';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from '../../assets/firebase';
import { useCartContext } from '../../Context/CartContext';



const CheckOut = () => {
    const {totalPrice, cart, emptyCart} = useCartContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...cart]
        aux.forEach(prodCart =>{
            getProducto(prodCart.id).then(prodBDD =>{
                if(prodBDD.stock >= prodCart.cant){
                    prodBDD.stock -= prodCart.cant
                    updateProducto(prodCart.id, prodBDD)
                }else{
                    toast.error(`El producto ${prodBDD.nombre} no tiene stock`)                    
                    emptyCart()
                    navigate("/")                      
                }
            })
        })
        createOrdenCompra(cliente, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item => {
                toast.success(`¡Muchas gracias por su compra, el id de su orden es ${item.id}`)
                emptyCart()
                e.target.reset()
                navigate("/")
            }).catch(error =>{
                toast.error("Lo sentimos, no pudimos generar la orden")
            })
        })
    }

    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="email2" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" required/>
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>
        </div>
    );
}

export default CheckOut;
