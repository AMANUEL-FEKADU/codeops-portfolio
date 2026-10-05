'use client'

import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function Providers({ children }) {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)