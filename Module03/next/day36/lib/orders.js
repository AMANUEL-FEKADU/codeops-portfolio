import { promises as fs } from "fs";
import path from "path";
import { getDish } from "./dishes";

const file = path.join(process.cwd(), "data", "orders.json");

const STATUSES = ["received", "cooking", "out-for-delivery", "delivered"];

async function readAll() {
  try {
    const raw = await fs.readFile(file, "utf8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeAll(orders) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(orders, null, 2));
}

function progress(order) {
  if (order.status === "cancelled" || order.status === "delivered") return order;
  const elapsed = Date.now() - new Date(order.createdAt).getTime();
  const step = Math.min(3, Math.floor(elapsed / 8000));
  return { ...order, status: STATUSES[step], updatedAt: new Date().toISOString() };
}

export async function getOrdersFor(userId) {
  const orders = await readAll();
  return orders.filter((order) => order.userId === userId).map(progress);
}

export async function getAllOrders() {
  const orders = await readAll();
  return orders.map(progress);
}

export async function getOrder(id) {
  const orders = await readAll();
  const found = orders.find((order) => order.id === id);
  return found ? progress(found) : null;
}

export async function createOrder({ user, name, phone, notes, items }) {
  const lines = items.map((item) => {
    const dish = getDish(item.dishId);
    if (!dish) throw new Error("Unknown dish");
    return {
      dishId: dish.id,
      name: dish.nameEn,
      quantity: item.quantity,
      unitPrice: dish.priceETB,
      lineTotal: dish.priceETB * item.quantity,
    };
  });

  const order = {
    id: `ord_${Date.now().toString(36)}`,
    userId: user.id,
    customerName: name,
    phone,
    notes: notes || "",
    items: lines,
    total: lines.reduce((sum, line) => sum + line.lineTotal, 0),
    currency: "ETB",
    status: "received",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const orders = await readAll();
  orders.unshift(order);
  await writeAll(orders);
  return order;
}

export async function markCancelled(orderId) {
  const orders = await readAll();
  const index = orders.findIndex((order) => order.id === orderId);
  if (index === -1) return null;
  orders[index] = {
    ...orders[index],
    status: "cancelled",
    updatedAt: new Date().toISOString(),
  };
  await writeAll(orders);
  return orders[index];
}

export async function setOrderStatus(orderId, status) {
  const orders = await readAll();
  const index = orders.findIndex((order) => order.id === orderId);
  if (index === -1) return null;
  orders[index] = {
    ...orders[index],
    status,
    updatedAt: new Date().toISOString(),
  };
  await writeAll(orders);
  return orders[index];
}
