import React, { createContext, useContext, useReducer, useMemo } from 'react';
import { cartReducer } from './cartReducer';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.priceETB * item.quantity,
    0
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const value = useMemo(
    () => ({ cart, dispatch, totalAmount, totalItems }),
    [cart, totalAmount, totalItems]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}