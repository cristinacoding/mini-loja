import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (produto) => {
    setCart((prevCart) => [...prevCart, produto]);
  }

  console.log(cart)

  return (    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage addToCart={addToCart}/>} /> 
        <Route path="/products" element={<ProductsPage addToCart={addToCart}/>} />
        <Route path="/checkout" element={<CheckoutPage cart={cart}></CheckoutPage>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;