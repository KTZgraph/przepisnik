import { products } from "../../data/producs";

const ProductItem = ({ productId }) => {
  const product = products.find((p) => p.id === productId);
  return (
    <div>
      <h3>{product.id}</h3>
      <h3>{product.name}</h3>
      <h3>{product.title}</h3>
      <h3>{product.unit}</h3>
    </div>
  );
};

export default ProductItem;
