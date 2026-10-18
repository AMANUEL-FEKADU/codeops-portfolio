"use client";

import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { signOut } from "@/app/actions/auth";

export default function SessionNav() {
  const { data: user } = useSWR("/api/session", fetcher);

  if (!user) {
    return (
      <Link href="/signin" className="rounded-full border border-amber-200/40 px-3 py-1">
        Sign in
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {user.role === "staff" && (
        <Link href="/kitchen" className="hover:text-amber-200">
          Kitchen
        </Link>
      )}
      <span className="hidden text-amber-100 sm:inline">{user.name}</span>
      <form action={signOut}>
        <button className="rounded-full border border-amber-200/40 px-3 py-1">
          Sign out
        </button>
      </form>
    </div>
  );
}
