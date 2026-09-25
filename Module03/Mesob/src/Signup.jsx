import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import styles from './Signup.module.css'

export default function Signup() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()

  const from = location.state?.from?.pathname || '/menu'

  const [form, setForm] = useState({
    name: '',
    ph: '',
    em: '',
    password: '',
    confirmPassword: '',
  })

  const [touched, setTouched] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleBlur(e) {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  function validate(values) {
    const errors = {}
    if (!values.name.trim()) errors.name = 'Name is required'
    if (!values.ph.trim()) errors.ph = 'Phone is required'
    if (!values.em.trim()) {
      errors.em = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.em)) {
      errors.em = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Password is required'
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match'
    }
    return errors
  }

  const errors = validate(form)
  const shouldShowError = (field) => touched[field] && errors[field]

  const handleSignIn = (e) => {
    e.preventDefault()
    setTouched({
      name: true,
      ph: true,
      em: true,
      password: true,
      confirmPassword: true,
    })

    if (Object.keys(errors).length > 0) return

    login({ loggedIn: true, name: form.name, email: form.em })
    navigate(from, { replace: true })
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sign Up</h2>
      <form onSubmit={handleSignIn} noValidate className={styles.form}>
        <div className={styles.fieldGroup}>
          <label htmlFor="name">Name</label>
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
          <label htmlFor="ph">Phone</label>
          <input
            id="ph"
            type="tel"
            name="ph"
            value={form.ph}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!shouldShowError('ph')}
          />
          {shouldShowError('ph') && (
            <p className={styles.errorText} role="alert">{errors.ph}</p>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="em">Email</label>
          <input
            id="em"
            type="email"
            name="em"
            value={form.em}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!shouldShowError('em')}
          />
          {shouldShowError('em') && (
            <p className={styles.errorText} role="alert">{errors.em}</p>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!shouldShowError('password')}
          />
          {shouldShowError('password') && (
            <p className={styles.errorText} role="alert">{errors.password}</p>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!shouldShowError('confirmPassword')}
          />
          {shouldShowError('confirmPassword') && (
            <p className={styles.errorText} role="alert">{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" className={styles.submitBtn}>
          Sign Up
        </button>
      </form>
    </div>
  )
}