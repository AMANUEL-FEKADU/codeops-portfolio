import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.message}>
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className={styles.homeBtn}>
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;