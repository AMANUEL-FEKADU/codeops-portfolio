"use client";

import Link from "next/link";
import { useCart } from "@/app/Providers";

export default function CartBadge() {
  const { count } = useCart();
  return (
    <Link
      href="/cart"
      className="rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-[#3b140d]"
    >
      {count} in cart
    </Link>
  );
}
