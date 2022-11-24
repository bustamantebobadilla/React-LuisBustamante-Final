import './ItemListContainer.css'
import { Item } from "../../Item/Item"
import { NavBar } from "../../NavBar/NavBar"
import {Titulo} from "../../Titulo/Titulo"

const ItemListContainer = (obj) => {
    let tituloApp = 'YOU Languaje Method'
  return (
    <div className='contenedor-items'>
    <Titulo
      titulo={tituloApp} 
      //subTitulo = {subTitulo}
    />
      <NavBar/>
      <Item />
      <label>{obj.saludo}</label>
    </div>
  )
}

export default ItemListContainer