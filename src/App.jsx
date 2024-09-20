import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // If the item exists, increase its quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the item does not exist, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  console.log(cart)

  return (    
    <Router>
      <Header cart={cart}></Header>
      <Routes>
        <Route path="/" element={<ProductsPage addToCart={addToCart}/>} /> 
        <Route path="/products" element={<ProductsPage addToCart={addToCart}/>} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart}></CheckoutPage>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;