import './ItemListContainer.css'
import { Item } from "../../Item/Item"
import { NavBar } from "../../NavBar/NavBar"
import {Titulo} from "../../Titulo/Titulo"
import { NavItem } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

  let obj= [
    {id:'1', nombre:'Clases personalizadas', idioma:'Inglés', disponibilidad: '16', precio:'$ 250',  foto: "./media/You_logo.jpg"},
    {id:'2', nombre:'Regularizacion', idioma:'Inglés', disponibilidad: '11', precio:'$250',foto: "./media/You_logo.jpg"},
    {id:'3', nombre:'Grupos de conversación', idioma:'Inglés', disponibilidad: '27', precio:'$ 200',foto:"./media/You_logo.jpg"},
    {id:'4', nombre:'Clases personalizadas', idioma:'Español', disponibilidad: '18', precio:'$ 250',foto: "./media/You_logo.jpg"},
    {id:'5', nombre:'Regularizacion', idioma:'Español', disponibilidad: '22', precio:'$ 200',foto: "./media/You_logo.jpg" },
    {id:'6', nombre:'Grupos de conversación', idioma:'Español', disponibilidad: '13', precio:'$ 200',foto: "./media/You_logo.jpg" },
    {id:'7', nombre:'Clases personalizadas', idioma:'Frances', disponibilidad: '12', precio:'$ 300',foto:"./media/You_logo.jpg" },
    {id:'8', nombre:'Regularizacion', idioma:'Frances', disponibilidad: '7', precio:'$ 250',foto: "./media/You_logo.jpg"},
    {id:'9', nombre:'Grupos de conversación', idioma:'Frances', disponibilidad: '9', precio:'$ 250',foto:"./media/You_logo.jpg"},
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
    <section>{loading ?  <h2>Cargando...</h2>:
      products.map(product => 
      <div style={{ marginLeft: 100}} className='col-md-3'key={product.id}
      >    
      <div className="card w-100 mt-5" >
      <div className="card-header">
        {`${product.nombre} - ${product.idioma}`}
      </div>
      <div className="card-body">
      <img src={product.foto} alt='' className='w-50' />
        {product.precio}                                                            
      </div>
      <div className="card-footer">                                                        
      <button className="btn btn-outline-primary btn-block">detalle del producto</button>
      </div>
    </div>
  </div> 
    ) 
  }           
    </section>   
        <p className='alert alert-danger'>{conteo}</p>
        <button className='btn btn-outline-primary' onClick={restacontador}>-</button>
        <button className='btn btn-outline-primary' onClick={sumacontador}>+</button>
    </div>

  );
};

export default ItemListContainer