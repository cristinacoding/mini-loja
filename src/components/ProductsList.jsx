import "../App.css";
import productsData from "../assets/products.json";
import Product from "./Product";

function ProductsList() {
  return (
    <div className="productsList">
      {productsData.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
