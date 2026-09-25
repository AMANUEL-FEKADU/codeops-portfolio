import React from 'react'
import styles from './Modal.module.css'

export default function ModalPanel({ panelRef, onClose, children }) {
  return (
    <div className={styles.panel} tabIndex={-1} ref={panelRef}>
      <button 
        className={styles.closeBtn} 
        onClick={onClose} 
        aria-label="Close modal"
      >
        &times;
      </button>
      {children}
    </div>
  )
}