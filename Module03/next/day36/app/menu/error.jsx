"use client";

export default function Error({ error, reset }) {
  return (
    <div className="rounded-2xl bg-white p-8 ring-1 ring-red-200">
      <h2 className="text-xl font-semibold">The menu could not load</h2>
      <p className="mt-2 text-[#5c4638]">{error?.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-4 rounded-full bg-[#b33a1a] px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}
