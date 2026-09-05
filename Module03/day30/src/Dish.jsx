function Dish({ dish, addOrder }) {
  return (
    <div className="dish-card">
      <h2>{dish.name}</h2>
      <h2>{dish.price} ETB</h2>
      {dish.spicy && <span>🌶️ Spicy</span>}
      <button onClick={() => addOrder(dish)}>ADD</button>
    </div>
  );
}

export default Dish;