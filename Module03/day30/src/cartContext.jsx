import { createContext, useReducer, useMemo } from "react";
import { cartReducer } from "./cartReducer";

export const CartContext = createContext({ items: [], total: 0, dispatch: () => {} });
export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  const total = items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const value = useMemo(() => ({ items, dispatch, total }), [items, total]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}