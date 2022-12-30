import React from 'react'
import { useCartContext } from '../../Context/CartContex'

const CartContainer=()=> {
  const {cartList,vaciarCarrito} = useCartContext()
  return (
    <div>
      {cartList.map(product=> <div key={product.id}> 
                              <div className= "w-50">
                            <img src={product.foto} alt="" />
                              </div>
                            Nombre: {product.nombre}
                            Precio: {product.precio}
                            Cantidad: {product.cant}</div>)}
                            <button className ="btn btn-danger" onClick = {vaciarCarrito}>Vaciar Carrito</button>
    </div>
    
  )
}
export default CartContainer