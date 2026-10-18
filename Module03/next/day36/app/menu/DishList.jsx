import { PAGE_SIZE } from "@/lib/dishes";
import DishCard from "./DishCard";

export default function DishList({ dishes }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {dishes.map((dish, index) => (
        <DishCard
          key={dish.id}
          dish={dish}
          page={Math.floor(index / PAGE_SIZE) + 1}
        />
      ))}
    </div>
  );
}
