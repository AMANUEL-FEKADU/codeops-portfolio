// app/menu/MenuSearch.jsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function MenuSearch({ defaultValue = "" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [term, setTerm] = useState(defaultValue);

  useEffect(() => {
    setTerm(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (term.trim()) {
        params.set("q", term.trim());
      } else {
        params.delete("q");
      }
      params.delete("page"); // Reset pagination back to page 1 on search

      router.push(`/menu?${params.toString()}`);
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [term, router, searchParams]);

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-amber-900/10">
      <label htmlFor="search" className="block text-sm font-medium text-[#3b140d]">
        Search the menu
      </label>
      <input
        id="search"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Try kitfo, shiro, tibs…"
        className="mt-2 w-full rounded-xl border border-amber-900/15 px-4 py-2.5 text-sm text-[#3b140d] outline-none focus:border-[#3b140d] focus:ring-1 focus:ring-[#3b140d]"
      />
    </div>
  );
}