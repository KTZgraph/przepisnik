import MealItem from "../components/molecules/Recipe/MealItem";
import { secondBreakfasts } from "../data/second-breakfast";

const SecondBreakfasts = () => {
  const data = secondBreakfasts;
  return (
    <div className="main__container second-breakfasts">
      {data.map((meal, idx) => (
        <MealItem key={idx} meal={meal} />
      ))}
    </div>
  );
};

export default SecondBreakfasts;
