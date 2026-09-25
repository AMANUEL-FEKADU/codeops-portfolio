import React, { useContext } from 'react'
import styles from './Header.module.css'
import { useCart } from './CartContext'
import { Link , NavLink} from 'react-router-dom'
import { userCartStore } from './userCartStore'

function Header() {
    // const {items,total}=useCart()
    const itemCount = userCartStore((state) => state.items.length)
    const total = userCartStore((state) =>
    state.items.reduce((sum, item) => sum + (item.priceETB || item.price || 0), 0)
  )
    return (
    <div className={styles.mainheader}>
        <div>
          <Link to='/'>  <h1 className={styles.logo}>  Mesob <br /> House</h1></Link>
        </div>
        <div >
            <nav className={styles.navigation}>
                <NavLink to='/menu'>Menu</NavLink>
                <NavLink to='/featured'> Featured <br /> Dish</NavLink>
                <NavLink to='/order'>Order& <br />Cart</NavLink>
                <NavLink to='/checkout'>Delivery& <br />Checkout</NavLink>
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
                <button>sign up</button>
            </div>

    </div>
  )
}

export default Header