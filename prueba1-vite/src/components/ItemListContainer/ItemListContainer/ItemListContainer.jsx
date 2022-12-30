import './ItemListContainer.css'
import { Item } from "../../Item/Item"
import { NavBar } from "../../NavBar/NavBar"
import {Titulo} from "../../Titulo/Titulo"
import { NavItem } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { gFetch } from '../../../helpers/gFetch';
import { Link, useParams } from 'react-router-dom';
import ItemList from '../../ItemList/ItemList';


gFetch()


const ItemListContainer = ({}) => {
  let tituloApp = "YOU Languaje Method";
  const [products, setProduct]= useState([])
  const[loading, setLoading] = useState(true)

  const {id} = useParams ()
  useEffect(() => {
    if (id) {
      gFetch( )
      .then(data=>setProduct(data.filter(product=> product.idioma==id)))
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))

    } else {
      gFetch( )
      .then(data=>setProduct(data))
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
    }
    
    },
    [id])

  return (
    <div className="contenedor-items">     
      {loading ?  <h2>Cargando...</h2>: 
      <ItemList products={products}/>
      }
    </div>
  )
}
export default ItemListContainer