import IngredientList from "./IngredientList";

const MealItem = ({ meal }) => {
  return (
    <div className="meal-item">
      <h1>{meal.id}</h1>
      <h2>{meal.servings}</h2>
      <IngredientList ingredients={meal.ingredients} />
    </div>
  );
};

export default MealItem;
