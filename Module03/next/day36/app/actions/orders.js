// app/actions/orders.js
"use server";

import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/session";
import { orderSchema } from "@/lib/schemas";
import { createOrder, getOrder, markCancelled, setOrderStatus } from "@/lib/orders";

function parseItems(formData) {
  const raw = formData.get("items");
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function placeOrder(prevState, formData) {
  const user = await getSession();
  if (!user) {
    return { success: false, error: "Not signed in", fieldErrors: {} };
  }

  const parsed = orderSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    notes: formData.get("notes") || undefined,
    items: parseItems(formData),
  });

  if (!parsed.success) {
    return {
      success: false,
      error: "Validation failed",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const order = await createOrder({ user, ...parsed.data });
    revalidatePath("/orders");
    revalidatePath("/kitchen");
    return { success: true, id: order.id, fieldErrors: {} };
  } catch {
    return {
      success: false,
      error: "Could not place the order",
      fieldErrors: {},
    };
  }
}

export async function cancelOrder(orderId) {
  const user = await getSession();
  if (!user) {
    throw new Error("401: Not signed in");
  }

  const order = await getOrder(orderId);
  if (!order) {
    throw new Error("Order not found");
  }
  if (order.userId !== user.id && user.role !== "staff") {
    throw new Error("403: Forbidden - You do not own this order");
  }

  await markCancelled(orderId);
  revalidatePath("/orders");
  revalidatePath(`/orders/${orderId}`);
  revalidatePath("/kitchen");
  return { success: true, message: `Order ${orderId} cancelled.` };
}

export async function updateKitchenStatus(orderId, status) {
  const user = await getSession();
  if (!user) throw new Error("Not signed in");
  if (user.role !== "staff") throw new Error("Not allowed");
  await setOrderStatus(orderId, status);
  revalidatePath("/kitchen");
  revalidatePath(`/orders/${orderId}`);
}