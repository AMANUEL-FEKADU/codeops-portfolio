import React from 'react'
import styles from './Header.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { userCartStore } from './userCartStore'
import { useAuth } from './AuthContext'

function Header() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const itemCount = userCartStore((state) => state.items.length)
  const total = userCartStore((state) =>
    state.items.reduce((sum, item) => sum + (item.priceETB || item.price || 0), 0)
  )

  // Verify user has an actual identity
  const isAuthenticated = Boolean(user && (user.name || user.email))
  const displayName = user?.name || user?.email

  return (
    <div className={styles.mainheader}>
      <div>
        <Link to='/'>
          <h1 className={styles.logo}>Mesob <br /> House</h1>
        </Link>
      </div>

      <div>
        <nav className={styles.navigation}>
          <NavLink to='/menu'>Menu</NavLink>
          <NavLink to='/featured'>Featured <br /> Dish</NavLink>
          <NavLink to='/order'>Order & <br />Cart</NavLink>
          <NavLink to='/checkout'>Delivery & <br />Checkout</NavLink>
        </nav>
      </div>

      <div className={styles.crtbg}>
        <div className={styles.items}>
          <span className={styles.itemCount}>{itemCount}</span>
          <span className={styles.itemLabel}>items</span>
        </div>
        <div className={styles.total}>
          <span className={styles.currencyLabel}>ETB</span>
          <span className={styles.totalAmount}>
            {total ? total.toLocaleString() : 0}
          </span>
        </div>
      </div>

      <div>
        {isAuthenticated ? (
          <div className={styles.userGreeting}>
            <span className={styles.welcomeText}>Welcome</span>
            <span className={styles.userName}>{displayName}</span>
          </div>
        ) : (
          <button onClick={() => navigate('/signup')}>
            sign up
          </button>
        )}
      </div>
    </div>
  )
}

export default Header