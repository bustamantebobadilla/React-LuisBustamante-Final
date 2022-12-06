import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <img src="./media/You_logo.jpg" className="logo"></img>
        <a className= "nav-link" href=" ">Inglés</a>
        <a className= "nav-link" href=" ">Español</a>
        <a className= "nav-link"  href=" ">Francés</a>
        <a className= "nav-link" href=" ">Contacto</a>
        <a className= "nav-link" href=" ">
        <CartWidget/>
        </a>
      </div>
    </nav>
  );
};
