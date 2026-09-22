import React from 'react';
import styles from './Totalamt.module.css';
import { useCart } from './CartContext.jsx';

function Totalamt() {
  const { totalAmount, totalItems } = useCart();

  return (
    <div className={styles.badge}>
      <span className={styles.countTag}>
        {totalItems} items
      </span>
      <span className={styles.amount}>
        ETB {totalAmount.toLocaleString()}
      </span>
    </div>
  );
}

export default Totalamt;