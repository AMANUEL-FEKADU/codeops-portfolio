import React from 'react'
import { useLocation, Link, Navigate } from 'react-router-dom'
import { dishImages } from './assets/dishImages'
import styles from './Receipt.module.css'

export default function Receipt() {
  const location = useLocation()
  const orderData = location.state?.order

  if (!orderData) {
    return <Navigate to="/menu" replace />
  }

  const { items, total, customer, orderId, orderDate } = orderData

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>Order Receipt</h2>
          <p className={styles.orderId}>Order #{orderId}</p>
          <p className={styles.date}>{orderDate}</p>
        </div>

        <div className={styles.customerInfo}>
          <h4>Delivery Details</h4>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p><strong>Area:</strong> {customer.area}</p>
          {customer.notes && <p><strong>Notes:</strong> {customer.notes}</p>}
        </div>

        <div className={styles.itemsSection}>
          <h4>Items Ordered</h4>
          <ul className={styles.itemList}>
            {items.map((item) => {
              const imageSrc = dishImages[item.slug] || item.image
              return (
                <li key={item.id} className={styles.itemRow}>
                  <img src={imageSrc} alt={item.name} className={styles.itemImage} />
                  <div className={styles.itemDetails}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemQty}>Qty: {item.qty}</p>
                  </div>
                  <span className={styles.itemPrice}>
                    {((item.priceETB || item.price) * item.qty).toLocaleString()} ETB
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.totalSection}>
          <h3>Total Paid: {total.toLocaleString()} ETB</h3>
        </div>

        <div className={styles.actions}>
          <Link to="/menu" className={styles.homeBtn}>Back to Menu</Link>
        </div>
      </div>
    </div>
  )
}