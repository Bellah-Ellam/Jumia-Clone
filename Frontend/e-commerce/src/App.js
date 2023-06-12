import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import { Route, Routes, Navigate } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import { AuthProvider } from './context/AuthContext'
import Signup from './components/buttons/Signup';
import { ProductProvider } from './context/ProductContext';


function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>

          <Footer />
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
