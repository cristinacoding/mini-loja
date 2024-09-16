import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([])

  let addToCart = (produto) =>{
    setCart((prevCart) => [...prevCart, produto]);
  }

  return (    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage addToCart={addToCart}/>} /> 
        <Route path="/products" element={<ProductsPage addToCart={addToCart}/>} />
        <Route path="/checkout" element={<CheckoutPage>{cart}</CheckoutPage>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;