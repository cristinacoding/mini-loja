import styles from "../styles/ProductsList.module.css";
import productsData from "../assets/data/products.json";
import Product from "./Product";

function ProductsList() {
  return (
    <div className={styles.productsList}>
      {productsData.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
