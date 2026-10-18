import Link from "next/link";
import CartBadge from "./CartBadge";
import SessionNav from "./SessionNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-amber-900/20 bg-[#3b140d]/95 text-[#faf6f1] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-serif text-xl tracking-wide">
          Addis Eats
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm sm:gap-5">
          <Link href="/" className="hover:text-amber-200">
            Home
          </Link>
          <Link href="/menu" className="hover:text-amber-200">
            Menu
          </Link>
          <Link href="/cart" className="hover:text-amber-200">
            Cart
          </Link>
          <Link href="/checkout" className="hover:text-amber-200">
            Checkout
          </Link>
          <Link href="/orders" className="hover:text-amber-200">
            Orders
          </Link>
          <CartBadge />
          <SessionNav />
        </nav>
      </div>
    </header>
  );
}
