import ProductList from "../components/ProductList";
import { products } from "../../data/producs";

const Products = () => {
  return <ProductList items={products} />;
};

export default Products;
