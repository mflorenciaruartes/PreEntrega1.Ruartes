import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import CheckOut from './CheckOut/CheckOut';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/category/:category' element={<ItemListContainer/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<CheckOut/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
