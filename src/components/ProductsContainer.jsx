import "../App.css";
import products from "../assets/products.json";
import ProductCard from "./ProductCard";

function ProductsContainer() {
  return (
    <div className="productsContainer">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsContainer;
