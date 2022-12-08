import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import CartContainer from './components/CartContainer/CartContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo={'Greeting'} /> }/>
        <Route path='/detalle' element={<ItemDetailContainer/> }/>
        <Route path='/cart' element={<CartContainer/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
