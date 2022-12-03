import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer saludo={'Greeting'} />
    </>
  )
}

export default App
