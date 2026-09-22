import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dish.module.css';
import { useCart } from './CartContext';

// 1. Child Component: Renders a SINGLE dish card (Memoized)
const DishItem = memo(function DishItem({ dish, onAdd }) {
  console.log(`[Render] DishItem: ${dish.nameEn}`);

  return (
    <div className={styles.card}>
      {/* 1. Optional Image Link */}
      {dish.image && (
        <Link to={`/menu/${dish.id}`} className={styles.link}>
          <img src={dish.image} alt={dish.nameEn} className={styles.image} />
        </Link>
      )}

      {/* 2. Title Link pointing to detailed route */}
      <Link to={`/menu/${dish.id}`} className={styles.titleLink}>
        <h3>{dish.nameEn}</h3>
      </Link>

      <p>{dish.description}</p>
      <span>{dish.priceETB} ETB</span>
      <button onClick={() => onAdd(dish)}>Add to Cart</button>
    </div>
  );
});

// 2. Parent Component: Receives the ARRAY of dishes from Menu.jsx
function DishList({ dishes }) {
  const { dispatch } = useCart();

  // Memoize handler so DishItem props remain stable
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

// Export the main container wrapped in memo
export default memo(DishList);