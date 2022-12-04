import './ItemListContainer.css'
import { Item } from "../../Item/Item"
import { NavBar } from "../../NavBar/NavBar"
import {Titulo} from "../../Titulo/Titulo"
import { NavItem } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

  let obj= [
    {id:'1', nombre:'clases personalizadas', idioma:'Inglés', disponibilidad: '16', precio:'250'},
    {id:'2', nombre:'regularizacion', idioma:'Inglés', disponibilidad: '11', precio:'250'},
    {id:'3', nombre:'grupos de conversación', idioma:'Inglés', disponibilidad: '27', precio:'200'},
    {id:'4', nombre:'clases personalizadas', idioma:'Español', disponibilidad: '18', precio:'250'},
    {id:'5', nombre:'regularizacion', idioma:'Español', disponibilidad: '22', precio:'200'},
    {id:'6', nombre:'grupos de conversación', idioma:'Español', disponibilidad: '13', precio:'200'},
    {id:'7', nombre:'clases personalizadas', idioma:'Frances', disponibilidad: '12', precio:'300'},
    {id:'8', nombre:'regularizacion', idioma:'Frances', disponibilidad: '7', precio:'250'},
    {id:'9', nombre:'grupos de conversación', idioma:'Frances', disponibilidad: '9', precio:'250'},
]
const gFetch=()=>{
  return new Promise((resolve, reject) => {
    const condition =true
    if (condition) {
      setTimeout(()=>{
        resolve(obj)
      },3000)
    } else {
      reject('nada')
    }
  })
}
const ItemListContainer = ({}) => {
  let tituloApp = "YOU Languaje Method";
  const [products, setProduct]= useState([])
  const[loading, setLoading] = useState(true)
  useEffect(() => {
      gFetch( )
      .then(data=>setProduct(data))
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
      }, [])
  const [conteo, setCount] = useState(0)
  const sumacontador = ()=>{
    setCount(conteo + 1)
  }
  const restacontador = ()=>{
    setCount(conteo - 1)
  } 
  return (
    <div className="contenedor-items">
      <Titulo
        titulo={tituloApp}
      />
      <Item />   
      <section>{loading ?  <h2>Cargando...</h2>:products.map(product => <li key={product.id}>{product.nombre}</li>)}</section>   
      <p className='alert alert-danger'>{conteo}</p>
      <button className='btn btn-outline-primary' onClick={restacontador}>-</button>
      <button className='btn btn-outline-primary' onClick={sumacontador}>+</button>
    </div>
  );
};

export default ItemListContainer

//<section>{loading ?  <h2>Cargando...</h2>:products.map(product => <li key={product.id}>{product.nombre}</li>)}</section>