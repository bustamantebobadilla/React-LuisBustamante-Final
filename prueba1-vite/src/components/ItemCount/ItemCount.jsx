import { useState } from "react"
import { gFetch } from "../../helpers/gFetch"

gFetch()

const ItemCount = ({ stock= 10, initial=1, onAdd}) => {
    const [ count, contar] = useState(initial)
    
    const resta = () => {
        if (count > initial) {
            contar(count-1)            
        }
    }
    const suma = () => {
        if ( count< stock) {
            contar(count+1)            
        }
    }

    const handleOnAdd = () => {
        onAdd(count)

        
    }
    
    return (
        <div className="card m-5"> 
            <div className="card-header">
                <label htmlFor="">{count}</label>
            </div>
            <div className="card-body">
                <button  onClick={resta} className="btn btn-outline-primary"> - </button>
                <button onClick={suma}  className="btn btn-outline-primary"> + </button>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-success btn-block" onClick={ handleOnAdd }>Agendar</button>
            </div>
        </div> 
    )
}

export default ItemCount