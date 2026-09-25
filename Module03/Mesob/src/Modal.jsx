// Modal.jsx
import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css' 

export default function Modal({ isOpen, onClose, children, title = "Dish Details" }) {
  const modalRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement

      modalRef.current?.focus()

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        previousFocusRef.current?.focus()
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <div 
      className={styles.overlay} 
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div 
        className={styles.panel} 
        tabIndex={-1} 
        ref={modalRef}
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}