import React from 'react'
import {  useCartContext } from '../../Context/CartContex'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({product}) => {

    const {agregarCarrito} = useCartContext

    const onAdd  = (cant)=>{
        agregarCarrito({...product,cant})
    }
    return (
    <div>
        <div className="container border border-3 border-primary rounded">
            <div className="row">
                <div className="col">
                    <img className="w-50" src={"../media/You_logo.jpg"} alt='foto producto'/>
                    <h3>Nombre:{product.nombre}</h3>
                    <h3>Categoria:{product.idioma}</h3>
                    <h4>Precio:{product.precio}</h4>
                </div>
                <div className="col">
                    <ItemCount
                    onAdd={onAdd}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail
