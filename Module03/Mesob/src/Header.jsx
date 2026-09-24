import React, { useContext } from 'react'
import styles from './Header.module.css'
import { ThemeContext } from './ThemeContext'
function Header() {
    const {theme,toggle}=useContext(ThemeContext)
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
        
            <div>
              <h2>ETB 4200</h2>
            </div>
            <button onClick={toggle}>Current mode:{theme}</button>
            <div>
                <button>sign up</button>
            </div>

    </div>
  )
}

export default Header