import styles from "../styles/ProductsList.module.css";
import productsData from "../assets/data/products.json";
import Product from "./Product";

function ProductsList( {addToCart} ) {
  return (
    <div className={styles.productsList}>
      {productsData.products.map((product) => (
        <Product key={product.id} product={product} addToCart={{addToCart}}/>
      ))}
    </div>
  );
}

export default ProductsList;
