import React, { useEffect, useRef } from 'react'
import styles from './Searchbox.module.css'

function Searchbox() {
  const searchRef = useRef(null)

  useEffect(() => {
    searchRef.current?.focus()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          ref={searchRef}
          type="text"
          className={styles.searchInput}
          placeholder="search for a meal..."
        />
      </div>
    </div>
  )
}

export default Searchbox