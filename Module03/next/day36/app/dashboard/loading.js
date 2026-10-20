export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8 animate-pulse">
      <div className="h-10 w-64 rounded-md bg-amber-900/10" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="h-80 rounded-2xl bg-white p-6 ring-1 ring-amber-900/10 space-y-4">
          <div className="h-6 w-1/2 rounded bg-amber-900/10" />
          <div className="h-56 rounded bg-amber-900/5" />
        </div>
        <div className="h-80 rounded-2xl bg-white p-6 ring-1 ring-amber-900/10 space-y-4">
          <div className="h-6 w-1/2 rounded bg-amber-900/10" />
          <div className="h-56 rounded bg-amber-900/5" />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 ring-1 ring-amber-900/10 space-y-3">
        <div className="h-6 w-48 rounded bg-amber-900/10" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-10 w-full rounded bg-amber-900/5" />
        ))}
      </div>
    </main>
  );
}