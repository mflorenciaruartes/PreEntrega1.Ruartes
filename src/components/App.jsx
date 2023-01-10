import './App.css';
import 'react-toastify/dist/ReactToastify.css'
//Router Dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//context
import { DarkModeProvider } from '../Context/DarkModeContext';

//toastify
import { ToastContainer } from 'react-toastify';

//componentes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import CheckOut from './CheckOut/CheckOut';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/category/:category' element={<ItemListContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<CheckOut/>}></Route>
          </Routes>
          <ToastContainer/>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
