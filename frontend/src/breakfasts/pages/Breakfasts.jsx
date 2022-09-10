import MealItem from "../../shared/components/MealItem";
import { breakfasts } from "../../data/breakfasts";

const Breakfasts = () => {
  const data = breakfasts;
  return (
    <div>
      {data.map((meal) => (
        <MealItem meal={meal} />
      ))}
    </div>
  );
};

export default Breakfasts;
