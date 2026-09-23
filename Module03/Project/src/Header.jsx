import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import Totalamt from './Totalamt';
import { useAuth } from './AuthContext'; 

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); 

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span>Mesob</span>
        <span>House</span>
      </Link>

      <nav className={styles.navLinks}>
        <NavLink 
          to="/menu" 
          className={({ isActive }) => (isActive ? styles.activePill : styles.link)}
        >
          Menu
        </NavLink>

        <NavLink 
          to="/featured" 
          className={({ isActive }) => (isActive ? styles.activePill : styles.link)}
        >
          Featured<br />Dish
        </NavLink>

        <NavLink 
          to="/ordercart" 
          className={({ isActive }) => (isActive ? styles.activePill : styles.link)}
        >
          Order &<br />Cart
        </NavLink>

        <NavLink 
          to="/delivery" 
          className={({ isActive }) => (isActive ? styles.activePill : styles.link)}
        >
          Delivery &<br />Checkout
        </NavLink>
      </nav>

      <div className={styles.rightSection}>
        <Totalamt />

        <div className={styles.userSection}>
          {user ? (
            <div className={styles.userInfo}>
              <span className={styles.welcomeText}>Welcome</span>
              <span className={styles.userName}>{user.name}</span>
              <button onClick={logout} className={styles.signInBtn}>Sign Out</button>
            </div>
          ) : (
            <button 
              className={styles.signInBtn}
              onClick={() => navigate('/login')}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;