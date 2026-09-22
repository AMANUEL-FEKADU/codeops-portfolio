import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      
      <main className={styles.mainContent}>
        {/* Child route components render here */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;