import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getOrder } from "@/lib/orders";
import OrderStatus from "./OrderStatus";
import CancelButton from "./CancelButton";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { id } = await params;
  return { title: `Order ${id}` };
}

export default async function OrderPage({ params }) {
  const user = await getSession();
  if (!user) {
    const { id } = await params;
    redirect(`/signin?next=/orders/${id}`);
  }

  const { id } = await params;
  const order = await getOrder(id);
  if (!order) notFound();
  if (order.userId !== user.id && user.role !== "staff") {
    redirect("/orders");
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <h1 className="font-serif text-4xl">Order live tracking</h1>
      <OrderStatus id={id} initial={order} />
      {order.status !== "cancelled" && order.status !== "delivered" && (
        <CancelButton orderId={id} />
      )}
    </main>
  );
}
