import MealItem from "../../shared/components/MealItem";
import { secondBreakfasts } from "../../data/second-breakfast";

const SecondBreakfasts = () => {
  const data = secondBreakfasts;
  return (
    <div>
      {data.map((meal, idx) => (
        <MealItem key={idx} meal={meal} />
      ))}
    </div>
  );
};

export default SecondBreakfasts;
