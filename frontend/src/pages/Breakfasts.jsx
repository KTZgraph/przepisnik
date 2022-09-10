import MealItem from "../components/molecules/Recipe/MealItem";
import { breakfasts } from "../data/breakfasts";

const Breakfasts = () => {
  const data = breakfasts;
  return (
    <div className="main__container breakfasts">
      {data.map((meal) => (
        <MealItem meal={meal} />
      ))}
    </div>
  );
};

export default Breakfasts;
