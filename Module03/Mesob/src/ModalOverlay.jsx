import React from 'react'
import styles from './Modal.module.css'

export default function ModalOverlay({ onClick, children }) {
  return (
    <div className={styles.overlay} onClick={onClick}>
      {children}
    </div>
  )
}