
import { getOrders } from "@/lib/orders";
import MapPanel from "../MapPanel";
import TrackingInfo from "../TrackingInfo";
import LiveStatus from "../LiveStatus";
import { etb, when } from "@/lib/format";

export default async function TrackPage({ params }) {
  const { id } = await params;
  const orders = await getOrders();
  const order = orders.find((o) => o.id === id) || orders[0]; // fallback to first order

  if (!order) {
    return <div className="p-10 text-center">Order not found</div>;
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 space-y-6">
      <h1 className="font-serif text-3xl font-bold text-[#3b140d]">
        Tracking Order #{order.id}
      </h1>

      <MapPanel />

      <TrackingInfo
        courierName={order.courierName || "Almaz"}
        area={order.area || "Bole"}
        address={order.address || "Bole Road, Near Friendship Building"}
        eta={when.format(new Date(order.placedAt || Date.now()))}
      />

      <LiveStatus id={order.id} initialStatus={order.status} />
    </main>
  );
}