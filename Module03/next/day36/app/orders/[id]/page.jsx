// app/orders/[id]/page.jsx
import Link from "next/link";
import { getOrder } from "@/lib/orders";

export const dynamic = "force-dynamic";

export default async function OrderConfirmationPage({ params }) {
  const { id } = await params;
  const order = await getOrder(id);

  return (
    <main className="mx-auto max-w-lg px-4 py-16 text-center">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-amber-900/10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl font-bold">
          ✓
        </div>

        <h1 className="mt-6 font-serif text-3xl font-bold text-[#3b140d]">
          Thank You for Your Order!
        </h1>

       

        <div className="mt-8">
          <Link
            href="/menu"
            className="inline-block rounded-full bg-[#b33a1a] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#9a2f14] transition-colors"
          >
            Back to Menu
          </Link>
        </div>
      </div>
    </main>
  );
}