
"use client";

import { useTransition } from "react";
import { cancelOrder } from "@/app/actions/orders";

export default function CancelButton({ orderId }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await cancelOrder(orderId);
        });
      }}
      className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 disabled:opacity-50"
    >
      {isPending ? "Cancelling..." : "Cancel Order"}
    </button>
  );
}