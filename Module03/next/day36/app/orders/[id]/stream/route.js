import { getOrders } from "@/lib/orders";

async function getStatus(id) {
  const orders = await getOrders();
  const order = orders.find((o) => o.id === id);
  return order ? order.status : "unknown";
}

export async function GET(request, { params }) {
  const { id } = await params;
  
  const stream = new ReadableStream({
    async start(controller) {
      const send = (data) =>
        controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
      
      send(await getStatus(id));
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}