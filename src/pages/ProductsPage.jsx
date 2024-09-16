import React from "react"
import ProductsList from "../components/ProductsList"

function ProductsPage( {addToCart} ) {
  return (
    <div>
      <h2>Products</h2>
      <ProductsList>{addToCart}</ProductsList>
    </div>
  );
}

export default ProductsPage;
