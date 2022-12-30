import { Link } from "react-router-dom";


export const Item = ({product}) => {
  return (
    
      <div style={{ marginLeft: 100}} className='col-md-3'>    
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
};
