/* eslint-disable react/prop-types */
import React from "react";
import { Star } from 'lucide-react';
import styles from '../styles/ProductCard.module.css'

function ProductCard( { product, addToCart } ) {

  return (
    <div className={styles.productCard}>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>

      <div className={styles.productInfo}>
        <p>{product.description}</p>
        <p>{product.brand}</p>
        <p>{product.volume}</p>
        <p>{product.rating} <Star size={14} color="var(--theme)"  strokeWidth={3}/></p>
        <span className={styles.productPrice}>${product.price}</span>
      </div>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
