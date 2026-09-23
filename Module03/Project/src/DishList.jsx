import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dish.module.css';
import { useCart } from './CartContext';

const DishItem = memo(function DishItem({ dish, onAdd }) {
  console.log(`[Render] DishItem: ${dish.nameEn}`);

  return (
    <div className={styles.card}>
      {dish.image && (
        <Link to={`/menu/${dish.id}`} className={styles.link}>
          <img src={dish.image} alt={dish.nameEn} className={styles.image} />
        </Link>
      )}

      <Link to={`/menu/${dish.id}`} className={styles.titleLink}>
        <h3>{dish.nameEn}</h3>
      </Link>

      <p>{dish.description}</p>
      <span>{dish.priceETB} ETB</span>
      <button onClick={() => onAdd(dish)}>Add to Cart</button>
    </div>
  );
});

function DishList({ dishes }) {
  const { dispatch } = useCart();

  const handleAddToCart = useCallback((dish) => {
    dispatch({ type: 'ADD', payload: dish });
  }, [dispatch]);

  return (
    <div className={styles.gridContainer}>
      {dishes.map((dish) => (
        <DishItem key={dish.id} dish={dish} onAdd={handleAddToCart} />
      ))}
    </div>
  );
}

export default memo(DishList);