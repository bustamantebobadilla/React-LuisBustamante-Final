import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <img src="../media/You_logo.jpg" className="logo"></img>
        <NavLink to="/category/ingles ">Inglés</NavLink>
        <NavLink to="/category/español">Español</NavLink>
        <NavLink to="/category/frances ">Francés</NavLink>
        <NavLink to=" ">Contacto</NavLink>
        <Link to = '/cart'>
          <CartWidget/>
        </Link>
      </div> 
    </nav>
  );

};
