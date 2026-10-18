"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { placeOrder } from "@/app/actions/orders";
import { useCart } from "@/app/Providers";

const initialState = { success: false, fieldErrors: {}, error: "" };

export default function CheckoutForm({ defaultName }) {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [state, formAction, pending] = useActionState(placeOrder, initialState);

  useEffect(() => {
    if (state?.success && state.id) {
      clearCart();
      router.push(`/orders/${state.id}`);
    }
  }, [state, clearCart, router]);

  return (
    <form action={formAction} className="mt-8 space-y-4">
      <input
        type="hidden"
        name="items"
        value={JSON.stringify(
          cart.map((line) => ({
            dishId: line.dishId,
            quantity: line.quantity,
          })),
        )}
      />
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          defaultValue={defaultName}
          required
          className="mt-1 w-full rounded-xl border border-amber-900/15 px-3 py-2"
        />
        {state?.fieldErrors?.name && (
          <p className="mt-1 text-sm text-red-700">{state.fieldErrors.name[0]}</p>
        )}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone (09… or +2519…)
        </label>
        <input
          id="phone"
          name="phone"
          required
          className="mt-1 w-full rounded-xl border border-amber-900/15 px-3 py-2"
        />
        {state?.fieldErrors?.phone && (
          <p className="mt-1 text-sm text-red-700">{state.fieldErrors.phone[0]}</p>
        )}
      </div>
      <div>
        <label htmlFor="notes" className="block text-sm font-medium">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="mt-1 w-full rounded-xl border border-amber-900/15 px-3 py-2"
        />
      </div>
      {state?.error && !state.success && (
        <p className="text-sm text-red-700">{state.error}</p>
      )}
      {state?.fieldErrors?.items && (
        <p className="text-sm text-red-700">{state.fieldErrors.items[0]}</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-[#b33a1a] py-3 font-semibold text-white disabled:opacity-60"
      >
        {pending ? "Sending…" : "Place order"}
      </button>
    </form>
  );
}
