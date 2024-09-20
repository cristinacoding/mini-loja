import React, { useState, useEffect  } from 'react'
import ProductCart from '../components/ProductCart'

function CheckoutPage({ cart, setCart }) {

   // Total price state
   const [totalPrice, setTotalPrice] = useState(0);

   // Update totalPrice whenever cart changes
   useEffect(() => {
     const updatedTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
     setTotalPrice(updatedTotal);
   }, [cart]);

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <div>CheckoutPage</div>

      <p>{totalPrice}</p>

      {cart.map((product) => (
        <ProductCart key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}

    </div>
  )
}

export default CheckoutPage