import React from "react"
import ProductsList from "../components/ProductsList"

function ProductsPage( {addToCart} ) {

  return (
    <div>
      <h2>Products</h2>
      <ProductsList addToCart={addToCart}/>
    </div>
  );
}

export default ProductsPage;
