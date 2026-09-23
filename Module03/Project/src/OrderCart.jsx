import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import styles from './OrderCart.module.css';

function OrderCart() {
  const { cart, dispatch, totalAmount, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h2> Your Cart is Empty</h2>
        <p>Looks like you haven't added any Ethiopian delicacies yet!</p>
        <Link to="/menu" className={styles.exploreBtn}>
          Explore Menu
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Order & Cart ({totalItems} items)</h2>

      <div className={styles.itemList}>
        {cart.map((item) => (
          <div key={item.id} className={styles.itemCard}>
            <div>
              <h3 className={styles.itemName}>{item.nameEn}</h3>
              <p className={styles.itemPrice}>{item.priceETB} ETB each</p>
            </div>

            <div className={styles.controls}>
              <span className={styles.quantity}>
                Quantity: <strong>{item.quantity}</strong>
              </span>
              
              <button 
                className={styles.addBtn}
                onClick={() => dispatch({ type: 'ADD', payload: item })}
              >
                +
              </button>

              <button 
                className={styles.removeBtn}
                onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <h3 className={styles.totalText}>
          Total Amount: <span className={styles.totalHighlight}>{totalAmount.toLocaleString()} ETB</span>
        </h3>

        <div className={styles.actions}>
          <button 
            className={styles.clearBtn}
            onClick={() => dispatch({ type: 'CLEAR' })}
          >
            Clear Cart
          </button>

          <Link to="/delivery" className={styles.checkoutBtn}>
            Proceed to Checkout →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderCart;