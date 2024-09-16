import styles from "../styles/ProductsList.module.css";
import productsData from "../assets/data/products.json";
import Product from "./Product";
import { v4 as uuidv4 } from "uuid";

function ProductsList( {addToCart} ) {

  return (
    <div className={styles.productsList}>
      {productsData.products.map((product) => (
        <Product key={uuidv4()} product={product} addToCart={addToCart}/>
      ))}
    </div>
  );
}

export default ProductsList;
