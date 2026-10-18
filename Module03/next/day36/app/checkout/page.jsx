import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import CheckoutForm from "./CheckoutForm";

export const metadata = {
  title: "Checkout",
  description: "Place an Addis Eats order with TeleBirr-ready details.",
};

export const dynamic = "force-dynamic";

export default async function CheckoutPage() {
  // cookies() / getSession() make this route request-specific.
  await cookies();
  const user = await getSession();
  if (!user) redirect("/signin?next=/checkout");

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <h1 className="font-serif text-4xl">Checkout</h1>
      <p className="mt-2 text-[#5c4638]">
        Signed in as {user.name}. Prices are taken from the kitchen list, not
        from the browser.
      </p>
      <CheckoutForm defaultName={user.name} />
      <p className="mt-6 text-sm">
        <Link href="/cart" className="text-[#b33a1a]">
          Back to cart
        </Link>
      </p>
    </main>
  );
}
