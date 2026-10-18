"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

function readCart() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("addis-cart") || "[]");
  } catch {
    return [];
  }
}

export function Providers({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(readCart());
  }, []);

  useEffect(() => {
    localStorage.setItem("addis-cart", JSON.stringify(cart));
    document.cookie = `cart=${encodeURIComponent(JSON.stringify(cart))}; path=/; samesite=lax`;
  }, [cart]);

  const value = useMemo(() => {
    const addItem = (dish) => {
      setCart((current) => {
        const found = current.find((line) => line.dishId === dish.id);
        if (found) {
          return current.map((line) =>
            line.dishId === dish.id
              ? { ...line, quantity: line.quantity + 1 }
              : line,
          );
        }
        return [
          ...current,
          {
            dishId: dish.id,
            name: dish.nameEn,
            priceETB: dish.priceETB,
            quantity: 1,
          },
        ];
      });
    };

    const setQuantity = (dishId, quantity) => {
      setCart((current) =>
        current
          .map((line) =>
            line.dishId === dishId ? { ...line, quantity } : line,
          )
          .filter((line) => line.quantity > 0),
      );
    };

    const clearCart = () => setCart([]);
    const count = cart.reduce((sum, line) => sum + line.quantity, 0);
    const total = cart.reduce(
      (sum, line) => sum + line.priceETB * line.quantity,
      0,
    );

    return { cart, addItem, setQuantity, clearCart, count, total };
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside Providers");
  return ctx;
}
