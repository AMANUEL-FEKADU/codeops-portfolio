import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getOrdersFor } from "@/lib/orders";
import { formatETB } from "@/lib/money";
import OrdersTools from "./OrdersTools";

export const metadata = {
  title: "Orders",
  description: "Your Addis Eats orders.",
};

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  const user = await getSession();
  if (!user) redirect("/signin?next=/orders");

  const orders = await getOrdersFor(user.id);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl">Your orders</h1>
      <p className="mt-2 text-[#5c4638]">
        This list is scoped to session id {user.id} — never to an id in the URL.
      </p>
      <OrdersTools />
      {orders.length === 0 ? (
        <p className="mt-8 text-[#5c4638]">No orders yet.</p>
      ) : (
        <ul className="mt-8 space-y-3">
          {orders.map((order) => (
            <li
              key={order.id}
              className="rounded-2xl bg-white p-4 ring-1 ring-amber-900/10"
            >
              <Link href={`/orders/${order.id}`} className="font-medium">
                {order.id}
              </Link>
              <p className="text-sm text-[#5c4638]">
                {order.status} · {formatETB(order.total)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
