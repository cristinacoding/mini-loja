import React, { useState, useEffect  } from 'react'
import styles from '../styles/ProductCart.module.css'

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
            <h3>{product.name}</h3>

            <div className={styles.productInfo}>
                <p>{product.brand}</p>
                <p>{product.volume}</p>
                <p>{product.price}</p>
                <p>Qty: {quantity}</p>
                <span className={styles.productPrice}>Subtotal: ${product.price * quantity}</span>
            </div>

            <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
    );
}

export default ProductCart