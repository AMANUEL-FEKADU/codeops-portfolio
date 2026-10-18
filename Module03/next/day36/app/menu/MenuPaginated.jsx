"use client";

import useSWR from "swr";
import { useRouter, useSearchParams } from "next/navigation";
import { fetcher } from "@/lib/fetcher";

export default function MenuPaginated() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  const { data } = useSWR(`/api/dishes?page=${page}`, fetcher, {
    keepPreviousData: true,
  });

  return (
    <div>
      <h2 >Menu Page {page}</h2>

      <ul >
        {Array.isArray(data) &&
          data.map((dish) => (
            <li key={dish.id || dish._id} >
              {dish.name || dish.title}
            </li>
          ))}
      </ul>

      <div >
        <button
          disabled={page <= 1}
          onClick={() => router.push(`/menu?page=${page - 1}`)}
        >
          Previous
        </button>

        <span>Page {page}</span>

        <button
          onClick={() => router.push(`/menu?page=${page + 1}`)}
        >
          Next
        </button>
      </div>
    </div>
  );
}