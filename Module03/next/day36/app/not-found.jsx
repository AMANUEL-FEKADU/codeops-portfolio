import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-serif text-4xl">That plate is not on the menu</h1>
      <p className="mt-3 text-[#5c4638]">
        The page or dish you asked for does not exist.
      </p>
      <Link
        href="/menu"
        className="mt-6 inline-block rounded-full bg-[#b33a1a] px-5 py-3 text-white"
      >
        Back to the menu
      </Link>
    </main>
  );
}
