"use client";

export default function Error({ error, reset }) {
  return (
    <main className="mx-auto max-w-md px-4 py-16 text-center">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-amber-900/10">
        <h2 className="font-serif text-2xl font-bold text-[#3b140d]">
          Failed to load dashboard
        </h2>
        <p className="mt-2 text-sm text-[#5c4638]">
          {error?.message || "An unexpected error occurred while fetching analytics data."}
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-[#b33a1a] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#9a2f14]"
        >
          Try again
        </button>
      </div>
    </main>
  );
}