import './ItemListContainer.css'
import { Item } from "../../Item/Item"
import { NavBar } from "../../NavBar/NavBar"
import {Titulo} from "../../Titulo/Titulo"
import { useState } from 'react';



const ItemListContainer = (obj) => {
  let tituloApp = "YOU Languaje Method";

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
        //subTitulo = {subTitulo}
      />
      <Item />
      <label>{obj.saludo}</label>
      <p className='alert alert-danger'>{conteo}</p>
      <button className='btn btn-outline-primary' onClick={restacontador}>-</button>
      <button className='btn btn-outline-primary' onClick={sumacontador}>+</button>
    </div>
  );
};

export default ItemListContainer