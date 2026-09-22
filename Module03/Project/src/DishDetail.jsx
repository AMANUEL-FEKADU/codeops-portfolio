import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from './useFetch';
import { useCart } from './CartContext';
import Loading from './Loading';
import ErrorPage from './ErrorPage';
import styles from './DishDetail.module.css';

function DishDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();

  const { data: rawDishes, loading, error } = useFetch('https://addis-eats-backend.onrender.com/menu/');

  if (loading) return <Loading />;
  if (error) return <ErrorPage message={error} />;

  const dishes = Array.isArray(rawDishes) ? rawDishes : [];
  const dish = dishes.find((item) => String(item.id) === String(id));

  if (!dish) {
    return (
      <div className={styles.container}>
        <h2>Dish Not Found</h2>
        <p>We couldn't find the requested delicacy.</p>
        <Link to="/menu" className={styles.backBtn}>← Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/menu" className={styles.backBtn}>← Back to Menu</Link>
      
      <div className={styles.dishContent}>
        {dish.image && (
          <img src={dish.image} alt={dish.nameEn} className={styles.dishImage} />
        )}

        <div className={styles.details}>
          <span className={styles.category}>{dish.category}</span>
          <h1 className={styles.title}>{dish.nameEn}</h1>
          <p className={styles.description}>{dish.description}</p>

          <div className={styles.priceRow}>
            <span className={styles.price}>{dish.priceETB} ETB</span>
            <button 
              className={styles.addBtn}
              onClick={() => dispatch({ type: 'ADD', payload: dish })}
            >
              Add to Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishDetail;