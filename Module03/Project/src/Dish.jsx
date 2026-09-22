import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Dish.module.css';

const Dish = ({ name, price, spicy, currency = 'ETB', onAdd }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    if (onAdd) {
      onAdd(price);
    }
  };

  return (
    <div className={styles.card}>
      <h1>{name}</h1>
      <span>Count: {count}</span>
      <p>{price} {currency}</p>
      {Boolean(spicy) && <span>Spicy</span>}
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  currency: PropTypes.string,
  onAdd: PropTypes.func,
};

export default Dish;