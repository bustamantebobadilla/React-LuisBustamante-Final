import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import CartContainer from './components/CartContainer/CartContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './Context/CartContex';


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer saludo={'Greeting'} /> }/>
            <Route path='/category/:id' element={<ItemListContainer saludo={'Greeting'} /> }/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/> }/>
            <Route path='/cart' element={<CartContainer/> }/>
            <Route path='*' element={<Navigate to='/' />}/>
          </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
