"use server";

import { getSession } from "@/lib/session";


export async function cancelOrder(orderId) {
  const user = await getSession();
  if (!user) {
    throw new Error("401: Not signed in");
  }

  const res = await fetch(`https://addis-eats-backend.onrender.com/orders/${orderId}`);
  if (!res.ok) throw new Error("Order not found");
  const order = await res.json();

  if (order.userId !== user.id) {
    throw new Error("403: Forbidden - You do not own this order");
  }

  return { success: true, message: `Order #${orderId} cancelled.` };
}