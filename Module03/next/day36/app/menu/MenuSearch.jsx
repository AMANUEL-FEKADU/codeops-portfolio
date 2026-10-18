"use client";

import { useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useDebounce } from "@/lib/useDebounce";
import { formatETB } from "@/lib/money";

export default function MenuSearch() {
  const [term, setTerm] = useState("");
  const debounced = useDebounce(term, 300);

  const { data, isLoading } = useSWR(
    debounced ? `/api/dishes?q=${encodeURIComponent(debounced)}` : null,
    fetcher,
    { keepPreviousData: true },
  );

  const dishes = data?.items ?? [];

  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-amber-900/10">
      <label htmlFor="menu-search" className="text-sm font-medium">
        Search the menu
      </label>
      <input
        id="menu-search"
        type="search"
        value={term}
        onChange={(event) => setTerm(event.target.value)}
        placeholder="Try kitfo, shiro, tibs…"
        className="mt-2 w-full rounded-xl border border-amber-900/15 px-3 py-2"
      />
      {isLoading && <p className="mt-2 text-xs text-[#5c4638]">Searching…</p>}
      {debounced && (
        <ul className="mt-3 space-y-2">
          {dishes.map((dish) => (
            <li key={dish.id}>
              <Link href={`/menu/${dish.id}`} className="block text-sm">
                {dish.nameEn} · {formatETB(dish.priceETB)}
              </Link>
            </li>
          ))}
          {dishes.length === 0 && !isLoading && (
            <li className="text-sm text-[#5c4638]">
              No dishes found for “{debounced}”.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
