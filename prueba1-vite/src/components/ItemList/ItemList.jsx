import React from 'react'
import { Link } from 'react-router-dom'
import { Item } from '../Item/Item'
import { Titulo } from '../Titulo/Titulo'

const ItemList = ({products}) => {
  return (
        products.map(product => 
        <Item key={product.id} product={product}/>  
        )   
    )
}

export default ItemList
