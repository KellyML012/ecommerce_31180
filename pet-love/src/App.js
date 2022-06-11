import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Category from './pages/Category';
import Products from './pages/Products';
import Contact from './pages/Contact';
import HowToBuy from './pages/HowToBuy';
import NotFound from './pages/NotFound';
import ThemeProvider from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route exact path="/producto/:id" element={ <Detail /> } />
              <Route exact path="/productos/:category" element={ <Category /> } />
              <Route exact path="/productos" element={ <Products /> } />
              <Route exact path='/carrito' element={ <Cart />} />
              <Route exact path="/contacto" element={ <Contact /> } />
              <Route exact path="/como-comprar" element={ <HowToBuy /> } />
              <Route exact path="*" element={ <NotFound /> } />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
