"use client";

import { useCart } from "@/app/Providers";

export default function AddToCartButton({ dish }) {
  const { addItem } = useCart();
  return (
    <button
      type="button"
      onClick={() => addItem(dish)}
      className="rounded-full bg-[#b33a1a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#9a2f14]"
    >
      Add to order
    </button>
  );
}
