import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import { v4 as uuidv4 } from "uuid";

function CheckoutPage( {cart} ) {

  return (
    <div>     
      <div>CheckoutPage</div>

      {cart.map((product) => (
        <Product key={uuidv4()} product={product}/>
      ))}

    </div>
  )
}

export default CheckoutPage