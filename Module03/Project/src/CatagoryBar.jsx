import React from 'react';
import styles from './CatagoryBar.module.css';

function CatagoryBar({ select, OnSelect, categories }) {
  return (
    <div className={styles.div}>
      {categories.map((cat) => (
        <button
          key={cat.name}
          value={cat.name}
          onClick={() => OnSelect(cat.name)}
          className={select === cat.name ? styles.active : ''}
        >
          {cat.name} ({cat.count})
        </button>
      ))}
    </div>
  );
}

export default CatagoryBar;