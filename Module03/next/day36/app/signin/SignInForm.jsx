"use client";

import { useActionState } from "react";
import { signIn } from "@/app/actions/auth";

const initial = { error: "" };

export default function SignInForm({ next }) {
  const [state, action, pending] = useActionState(signIn, initial);

  return (
    <form action={action} className="mt-8 space-y-4">
      <input type="hidden" name="next" value={next} />
      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          required
          className="mt-1 w-full rounded-xl border border-amber-900/15 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1 w-full rounded-xl border border-amber-900/15 px-3 py-2"
        />
      </div>
      {state?.error && <p className="text-sm text-red-700">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-[#3b140d] py-3 text-amber-100"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
