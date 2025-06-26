import { useEffect, useState } from "react";
import { getFoods } from "../services/api";
import FoodCard from "../components/FoodCard";

export default function Home() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoods().then((res) => setFoods(res.data)).catch(console.error);
  }, []);

  return (
    <div>
      <h2>All Foods</h2>
      <div className="grid">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
