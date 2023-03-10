import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../helpers/gFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

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
            <ItemDetail product={product}/>
        )
    }
    export default ItemDetailContainer
    
    