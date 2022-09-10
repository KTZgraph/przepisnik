import ProductItem from "../components/molecules/Recipe/ProductItem";
import { products } from "../data/producs";

const Products = () => {
  return (
    <div className="main__container products">
      {products.map((p) => (
        <ProductItem productId={p.id} />
      ))}
    </div>
  );
};

export default Products;
