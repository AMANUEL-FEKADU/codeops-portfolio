// app/menu/SlowDishes.jsx
import { getDishes } from "@/lib/dishes";
import DishList from "./DishList";

export default async function SlowDishes() {
  const dishes = getDishes();
  return <DishList dishes={dishes} />;
}