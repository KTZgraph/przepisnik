import ProductItem from "./ProductItem";

const IngredientList = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((pNested, idx) => (
        <li key={idx}>
          <h4>{idx}</h4>
          {pNested.map((p) => (
            <ProductItem key={p.productId} productId={p.productId} />
          ))}
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
