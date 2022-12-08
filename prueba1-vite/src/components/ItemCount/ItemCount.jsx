import React from 'react'
import { useState } from 'react'




export default function ItemCount() {

  const [conteo, setCount] = useState(0)
  const sumacontador = ()=>{
    setCount(conteo + 1)
  }
  const restacontador = ()=>{
    setCount(conteo - 1)
  }
  return (
    <div>
        <p className='alert alert-danger'>{conteo}</p>
        <button className='btn btn-outline-primary' onClick={restacontador}>-</button>
        <button className='btn btn-outline-primary' onClick={sumacontador}>+</button>
      </div>
  )
}