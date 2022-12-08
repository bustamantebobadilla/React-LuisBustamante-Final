import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../helpers/gFetch';
import ItemCount from '../ItemCount/ItemCount'

    const ItemDetailContainer =() =>{
        const [product,setProduct] =useState({})

        const{ productId }= useParams()
    
        useEffect(()=>{
            gFetch()
            .then(respProd=> setProduct (respProd.find(prod=>prod.id===productId)))
            .catch(err => console.log(err))
        }
        )
        console.log ('product',product)
        return (
            <div className="container border border-3 border-primary rounded">
                <div className="row">
                    <div className="col">
                        <img className="w-50" src={product.foto} alt='foto producto'/>
                        <h3>Nombre:{product.nombre}</h3>
                        <h3>Categoria:{product.idioma}</h3>
                        <h4>Precio:{product.precio}</h4>
                    </div>
                    <div className="col">
                    <ItemCount/>
                    </div>
                </div>
    
            </div>
        )
    }
    export default ItemDetailContainer
    
    