"use client";

import { useRouter } from "next/navigation";

export default function GoCheckout() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push("/checkout")}
      className="rounded-full bg-[#b33a1a] px-5 py-3 font-semibold text-white"
    >
      Proceed to checkout
    </button>
  );
}
