"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export default function MenuPager() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const { data } = useSWR(`/api/dishes?page=${page}`, fetcher, {
    keepPreviousData: true,
  });

  const totalPages = data?.totalPages ?? 1;

  return (
    <nav className="mt-8 flex items-center justify-center gap-4 text-sm">
      <Link
        href={page > 2 ? `/menu?page=${page - 1}` : "/menu"}
        className={`rounded-full px-4 py-2 ring-1 ring-amber-900/15 ${
          page <= 1 ? "pointer-events-none opacity-40" : ""
        }`}
      >
        Previous
      </Link>
      <span>
        Page {page} of {totalPages}
      </span>
      <Link
        href={`/menu?page=${Math.min(page + 1, totalPages)}`}
        className={`rounded-full px-4 py-2 ring-1 ring-amber-900/15 ${
          page >= totalPages ? "pointer-events-none opacity-40" : ""
        }`}
      >
        Next
      </Link>
    </nav>
  );
}
