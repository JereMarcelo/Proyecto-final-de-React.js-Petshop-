import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart'

function App() {
    
  return (
    <div className="App">
      <NotificationProvider> 
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path='/' element={<ItemListContainer />}/>  
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/contact' element={<h1>CONTACT</h1>} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
            <Route path='/cart' element={<Cart />}/> 
            <Route path='/checkout' element={<Checkout />}/> 
            <Route path='*' element={<h1>404 NO Encontrado</h1>} />
          </Routes> 
        </BrowserRouter>
      </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;