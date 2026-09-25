import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userCartStore } from './userCartStore'
import { validate } from './validate'
import styles from './DeliveryForm.module.css' 

export default function DeliveryForm() {
  const navigate = useNavigate()

  const items = userCartStore((state) => state.items)
  const clearCart = userCartStore((state) => state.clear)

  const total = items.reduce(
    (sum, item) => sum + (item.priceETB || item.price || 0),
    0
  )

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
  const hasErrors = Object.keys(errors).length > 0

  const shouldShowError = (field) => touched[field] && errors[field]

  async function handleSubmit(e) {
    e.preventDefault()

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
      await new Promise((resolve, reject) => setTimeout(resolve, 1500))

      const isSimulatedFailure = false 
      if (isSimulatedFailure) {
        throw new Error('Network timeout: Could not connect to TeleBirr payment gateway.')
      }

      clearCart()
      navigate('/menu', { replace: true })
    } catch (err) {
      setServerError(err.message)
      const firstField = Object.keys(form)[0]
      document.getElementById(firstField)?.focus()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className={styles.container}>
      <h2>Delivery & Checkout</h2>

      {serverError && (
        <div role="alert" style={{ color: 'red', marginBottom: '1rem' }}>
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!shouldShowError('name')}
            aria-describedby={shouldShowError('name') ? 'name-error' : undefined}
          />
          {shouldShowError('name') && (
            <p id="name-error" role="alert" style={{ color: 'red' }}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
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
            aria-describedby={shouldShowError('phone') ? 'phone-error' : undefined}
          />
          {shouldShowError('phone') && (
            <p id="phone-error" role="alert" style={{ color: 'red' }}>
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="area">Delivery Area</label>
          <select
            id="area"
            name="area"
            value={form.area}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!shouldShowError('area')}
            aria-describedby={shouldShowError('area') ? 'area-error' : undefined}
          >
            <option value="Bole">Bole</option>
            <option value="Kazanchis">Kazanchis</option>
            <option value="Megenagna">Megenagna</option>
            <option value="Piassa">Piassa</option>
          </select>
          {shouldShowError('area') && (
            <p id="area-error" role="alert" style={{ color: 'red' }}>
              {errors.area}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="notes">Delivery Notes (Optional)</label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? 'Sending your order...' : `Order — ${total.toLocaleString()} ETB`}
        </button>
      </form>
    </div>
  )
}