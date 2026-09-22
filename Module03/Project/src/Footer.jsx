import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Mesob House (Addis Eats). All rights reserved.</p>
    </footer>
  );
}

export default Footer;