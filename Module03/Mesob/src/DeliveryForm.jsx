import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userCartStore } from './userCartStore'
import { validate } from './validate'
import { dishImages } from './assets/dishImages'
import styles from './DeliveryForm.module.css'

export default function DeliveryForm() {
  const navigate = useNavigate()

  const items = userCartStore((state) => state.items)
  const clearCart = userCartStore((state) => state.clear)

  const total = items.reduce(
    (sum, item) => sum + (item.priceETB || item.price || 0),
    0
  )

  const groupedItems = items.reduce((acc, item) => {
    const existing = acc.find((i) => i.id === item.id)
    if (existing) {
      existing.qty += 1
    } else {
      acc.push({ ...item, qty: 1 })
    }
    return acc
  }, [])

  const [form, setForm] = useState({
    name: '',
    phone: '',
    area: 'Bole',
    notes: '',
  })

  const [touched, setTouched] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleBlur(e) {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
  }

  const errors = validate(form)
  const shouldShowError = (field) => touched[field] && errors[field]

  async function handleSubmit(e) {
  e.preventDefault()
  if (items.length === 0) return

  setTouched({ name: true, phone: true, area: true, notes: true })

  const firstErrorField = Object.keys(errors)[0]
  if (firstErrorField) {
    document.getElementById(firstErrorField)?.focus()
    return
  }

  if (submitting) return
  setSubmitting(true)
  setServerError('')

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const completedOrder = {
      orderId: Math.floor(100000 + Math.random() * 900000),
      orderDate: new Date().toLocaleString(),
      items: groupedItems,
      total,
      customer: form,
    }

    clearCart()
    navigate('/receipt', { replace: true, state: { order: completedOrder } })
  } catch (err) {
    setServerError(err.message)
  } finally {
    setSubmitting(false)
  }
}

  return (
    <div className={styles.container}>
      <div className={styles.summarySection}>
        <h2>Order Summary</h2>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className={styles.itemList}>
            {groupedItems.map((item) => {
              const imageSrc = dishImages[item.slug] || item.image

              return (
                <li key={item.id} className={styles.itemCard}>
                  <img 
                    src={imageSrc} 
                    alt={item.name} 
                    className={styles.itemImage} 
                  />
                  <div className={styles.itemDetails}>
                    <div className={styles.itemHeader}>
                      <h4 className={styles.itemName}>{item.name}</h4>
                      <span className={styles.itemPrice}>
                        {item.priceETB || item.price} ETB
                      </span>
                    </div>
                    
                    {item.description && (
                      <p className={styles.itemDescription}>{item.description}</p>
                    )}

                    <div className={styles.itemMeta}>
                      {item.spicey && (
                        <span className={styles.badge}>🌶️ Spicy Berbere</span>
                      )}
                      {item.isSpecial && (
                        <span className={styles.badge}>⚙️ Chef Signature</span>
                      )}
                      {(item.spicey || item.isSpecial) && <span className={styles.dot}>•</span>}
                      <span className={styles.qty}>Qty: {item.qty}</span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <div className={styles.formSection}>
        <h2>Delivery & Checkout</h2>

        {serverError && (
          <div role="alert" className={styles.serverError}>
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!shouldShowError('name')}
            />
            {shouldShowError('name') && (
              <p className={styles.errorText} role="alert">{errors.name}</p>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="phone">TeleBirr Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="09... or +2519..."
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!shouldShowError('phone')}
            />
            {shouldShowError('phone') && (
              <p className={styles.errorText} role="alert">{errors.phone}</p>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="area">Delivery Area</label>
            <select
              id="area"
              name="area"
              value={form.area}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="Bole">Bole</option>
              <option value="Kazanchis">Kazanchis</option>
              <option value="Megenagna">Megenagna</option>
              <option value="Piassa">Piassa</option>
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="notes">Delivery Notes (Optional)</label>
            <textarea
              id="notes"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <button 
            type="submit" 
            disabled={submitting || items.length === 0} 
            className={styles.submitBtn}
          >
            {submitting ? 'Sending your order...' : `Order — ${total.toLocaleString()} ETB`}
          </button>
        </form>
      </div>
    </div>
  )
}