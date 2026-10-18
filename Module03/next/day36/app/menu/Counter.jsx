"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-amber-900/10">
      <p className="text-xs uppercase tracking-wide text-[#b33a1a]">
        Layout state
      </p>
      <p className="mt-2 text-sm text-[#5c4638]">
        This counter lives in the menu layout. Open a dish — it should keep its
        count.
      </p>
      <button
        type="button"
        onClick={() => setCount((n) => n + 1)}
        className="mt-3 rounded-full bg-[#3b140d] px-3 py-1 text-sm text-amber-100"
      >
        Visits noted: {count}
      </button>
    </div>
  );
}
