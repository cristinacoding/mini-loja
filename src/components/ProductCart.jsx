import React, { useState, useEffect  } from 'react'
import styles from '../styles/ProductCart.module.css'
import { X } from 'lucide-react';

function ProductCart({ product, cart, setCart }) {

    const [quantity, setQuantity] = useState(product.quantity)


    // Update the cart when quantity changes
    useEffect(() => {
        const updatedCart = cart.map((item) =>
            item.id === product.id ? { ...item, quantity } : item
        );
        setCart(updatedCart);
    }, [quantity]);

    const removeFromCart = (productId) => {

        if (quantity > 1) {
            setQuantity(quantity - 1)
        } else {
            setCart(cart.filter(item => item.id !== productId));
        }

    };

    return (
        <div className={styles.productCart}>
          <img src={product.img} alt={product.name} />
          <div className={styles.productInfo}>
            <h3>{product.name}</h3>
            <p>{product.brand}, {product.volume}</p>
          </div>
          <p>${product.price}</p>
          <p>{quantity}</p>
          <span>${product.price * quantity}</span>
          <button onClick={() => removeFromCart(product.id)}><X size={16} />Remove</button>
        </div>
      );
}

export default ProductCart