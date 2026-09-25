import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userCartStore } from './userCartStore'
import styles from './OrderCart.module.css'

export default function OrderCart() {
  const navigate = useNavigate()
  
  const items = userCartStore((state) => state.items)
  const removeItem = userCartStore((state) => state.remove)
  const clearCart = userCartStore((state) => state.clear)

  const total = items.reduce(
    (sum, item) => sum + (item.priceETB || item.price || 0),
    0
  )

  return (
    <div className={styles.container}>
      <h2>Your Cart & Order Summary</h2>

      {items.length === 0 ? (
        <div className={styles.emptyState}>
          <p>Your cart is empty.</p>
          <Link to="/menu">Browse Menu</Link>
        </div>
      ) : (
        <>
          <ul className={styles.itemList}>
            {items.map((item, index) => (
              <li 
                key={`${item.id}-${index}`}
                className={styles.itemRow}
              >
                <div>
                  <strong>{item.name}</strong> — {item.priceETB || item.price} ETB
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className={styles.removeBtn}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.summarySection}>
            <h3>Total: {total.toLocaleString()} ETB</h3>
            
            <div className={styles.actionsGroup}>
              <button onClick={clearCart}>Clear Cart</button>
              <button 
                onClick={() => navigate('/checkout')}
                className={styles.checkoutBtn}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}