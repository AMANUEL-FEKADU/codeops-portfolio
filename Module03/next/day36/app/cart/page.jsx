// app/cart/page.jsx
"use client";

import Link from "next/link";
import { useCart } from "@/app/Providers";
import { formatETB } from "@/lib/money";
import GoCheckout from "@/components/GoCheckout";

export default function CartPage() {
  const { cart, total, setQuantity, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="font-serif text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-[#5c4638]">
          You haven&apos;t added any delicious dishes yet.
        </p>
        <Link
          href="/menu"
          className="mt-6 inline-block rounded-full bg-[#b33a1a] px-6 py-3 font-semibold text-white"
        >
          Explore the menu
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between border-b border-amber-900/15 pb-4">
        <h1 className="font-serif text-4xl">Your Cart</h1>
        <button
          onClick={clearCart}
          className="text-sm font-medium text-red-600 hover:underline"
        >
          Clear cart
        </button>
      </div>

      <ul className="mt-6 divide-y divide-amber-900/10">
        {cart.map((item) => (
          <li key={item.dishId} className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-[#5c4638]">{formatETB(item.priceETB)} each</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-lg border border-amber-900/20 bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity(item.dishId, item.quantity - 1)}
                  className="px-3 py-1 font-bold hover:bg-amber-50"
                >
                  -
                </button>
                <span className="px-3 py-1 text-sm font-medium">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(item.dishId, item.quantity + 1)}
                  className="px-3 py-1 font-bold hover:bg-amber-50"
                >
                  +
                </button>
              </div>
              <span className="w-24 text-right font-semibold">
                {formatETB(item.priceETB * item.quantity)}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col items-end gap-4 border-t border-amber-900/15 pt-6">
        <div className="flex gap-8 text-xl font-bold">
          <span>Total:</span>
          <span>{formatETB(total)}</span>
        </div>
        <GoCheckout />
      </div>
    </main>
  );
}