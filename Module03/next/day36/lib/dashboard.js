// lib/dashboard.js
import { getOrders } from "@/lib/orders"; 

export async function getDashboardData() {
  const allOrders = await getOrders(); 

  const areaMap = {};
  const dateMap = {};

  allOrders.forEach((order) => {
    const area = order.area || order.neighbourhood || "Bole";
    const dateStr = order.createdAt
      ? order.createdAt.split("T")[0]
      : "2026-06-01";
    const total = Number(order.totalETB || order.total || 0);

    areaMap[area] = (areaMap[area] || 0) + total;

    if (!dateMap[dateStr]) {
      dateMap[dateStr] = { date: dateStr, count: 0, revenue: 0 };
    }
    dateMap[dateStr].count += 1;
    dateMap[dateStr].revenue += total;
  });

  const revenueByArea = Object.entries(areaMap).map(([area, revenue]) => ({
    area,
    revenue,
  }));

  const ordersOverTime = Object.values(dateMap).sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  return {
    revenueByArea,
    ordersOverTime,
  };
}