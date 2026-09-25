import { createContext, useContext, useReducer, useMemo } from "react"
import { cartReducer } from "./cartReducer"

export const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const total = state.items.reduce((sum, item) => sum + (item.PriceETB ||item.price || 0), 0)

  
  const value = useMemo(() => {
    return { items: state.items, dispatch, total }
  }, [state.items, total]) 

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be inside a CartProvider')
  }
  return context
}