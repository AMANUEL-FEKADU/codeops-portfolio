import React, { useContext } from 'react'
import styles from './Header.module.css'
import { useCart } from './CartContext'
function Header() {
    const {items,total}=useCart()
    return (
    <div className={styles.mainheader}>
        <div>
            <h1 className={styles.logo}>Mesob <br /> House</h1>
        </div>
        <div >
            <nav className={styles.navigation}>
                <a href="">Menu</a>
                <a href="">Featured <br /> Dish</a>
                <a href="">Order& <br /> Cart</a>
                <a href="">Delivery& <br /> Checkout</a>
            </nav>
        </div>
        
            <div className={styles.crtbg}>
              <div className={styles.items}>
                <span className={styles.itemCount}>{items.length}</span>
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