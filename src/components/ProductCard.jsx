/* eslint-disable react/prop-types */
import React from "react";
import { Star } from 'lucide-react';

function ProductCard({ product }) {
  return (
    <div className="productCard">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="productInfo">
        <p>{product.brand}</p>
        <p>{product.volume}</p>
        <p>{product.rating} <Star size={16}/></p>
        <span className="productProperty">${product.price}</span>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
