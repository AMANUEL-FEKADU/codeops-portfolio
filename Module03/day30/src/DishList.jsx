import React from 'react';
import Card from "./Card";
import Dish from "./Dish";

const DishList = React.memo(function DishList({ dishes, addOrder }) {
  if (dishes.length === 0) {
    return <p style={{ textAlign: "center" }}>No dishes in this category</p>;
  }

  return (
    <main className="menu">
      {dishes.map((dish) => (
        <Card key={dish.id}>
          <Dish dish={dish} addOrder={addOrder} />
        </Card>
      ))}
    </main>
  );
});

export default DishList;