import './ItemListContainer.css'
import { Item } from "../../Item/Item"
import { NavBar } from "../../NavBar/NavBar"
import {Titulo} from "../../Titulo/Titulo"
import { NavItem } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { gFetch } from '../../../helpers/gFetch';
import { Link, useParams } from 'react-router-dom';

  let obj= [
    {id:'1', nombre:'Clases personalizadas', idioma:'ingles', disponibilidad: '16', precio:'$ 250',  foto: "./media/You_logo.jpg"},
    {id:'2', nombre:'Regularizacion', idioma:'ingles', disponibilidad: '11', precio:'$250',foto: "./media/You_logo.jpg"},
    {id:'3', nombre:'Grupos de conversación', idioma:'ingles', disponibilidad: '27', precio:'$ 200',foto:"./media/You_logo.jpg"},
    {id:'4', nombre:'Clases personalizadas', idioma:'español', disponibilidad: '18', precio:'$ 250',foto: "./media/You_logo.jpg"},
    {id:'5', nombre:'Regularizacion', idioma:'español', disponibilidad: '22', precio:'$ 200',foto: "./media/You_logo.jpg" },
    {id:'6', nombre:'Grupos de conversación', idioma:'español', disponibilidad: '13', precio:'$ 200',foto: "./media/You_logo.jpg" },
    {id:'7', nombre:'Clases personalizadas', idioma:'frances', disponibilidad: '12', precio:'$ 300',foto:"./media/You_logo.jpg" },
    {id:'8', nombre:'Regularizacion', idioma:'frances', disponibilidad: '7', precio:'$ 250',foto: "./media/You_logo.jpg"},
    {id:'9', nombre:'Grupos de conversación', idioma:'frances', disponibilidad: '9', precio:'$ 250',foto:"./media/You_logo.jpg"},
]
gFetch()


const ItemListContainer = ({}) => {
  let tituloApp = "YOU Languaje Method";
  const [products, setProduct]= useState([])
  const[loading, setLoading] = useState(true)

  const {id} = useParams ()
  useEffect(() => {
    if (id) {
      gFetch( )
      .then(data=>setProduct(data.filter(prod=> prod.idioma==id)))
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
      <Link to= {`/detail/${product.id}`}>                                                    
        <button className="btn btn-outline-primary btn-block">Más Información</button>
      </Link>
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