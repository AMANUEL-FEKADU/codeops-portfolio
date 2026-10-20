import Link from "next/link";
import { getOrders } from "@/lib/orders";
import { getDashboardData } from "@/lib/dashboard";
import RevenueChart from "./RevenueChart";
import OrdersOverTimeChart from "./OrdersOverTimeChart";
import { AreaTable, OrdersTable } from "./ChartTable";
import OrderTable from "./OrderTable";
import Pager from "./Pager";

export const metadata = {
  title: "Dashboard",
  description: "Addis Eats analytics and order management dashboard.",
};

export const dynamic = "force-dynamic";

export default async function DashboardPage({ searchParams }) {
  const params = await searchParams;
  const sort = params?.sort || "id";
  const dir = params?.dir || "desc";
  const page = Number(params?.page || 1);
  const pageSize = 5;

  const { revenueByArea, ordersOverTime } = await getDashboardData();
  const allOrders = await getOrders();

  // Handle Empty State
  if (!allOrders || allOrders.length === 0) {
    return (
      <main className="mx-auto max-w-lg px-4 py-16 text-center">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-amber-900/10">
          <h1 className="font-serif text-2xl font-bold text-[#3b140d]">
            No Analytics Available Yet
          </h1>
          <p className="mt-2 text-sm text-[#5c4638]">
            No orders have been placed yet. Browse the menu to place your first order.
          </p>
          <Link
            href="/menu"
            className="mt-6 inline-block rounded-full bg-[#b33a1a] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#9a2f14]"
          >
            Browse Menu
          </Link>
        </div>
      </main>
    );
  }

  const sortedOrders = [...allOrders].sort((a, b) => {
    let valA = a[sort] ?? "";
    let valB = b[sort] ?? "";

    if (sort === "total") {
      valA = Number(a.total || 0);
      valB = Number(b.total || 0);
    }

    if (valA < valB) return dir === "asc" ? -1 : 1;
    if (valA > valB) return dir === "asc" ? 1 : -1;
    return 0;
  });

  const totalOrders = sortedOrders.length;
  const totalPages = Math.ceil(totalOrders / pageSize);
  const paginatedOrders = sortedOrders.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <div>
        <h1 className="font-serif text-4xl font-bold text-[#3b140d]">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-[#5c4638]">
          Real-time analytics and order processing overview.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-900/10">
          <h2 className="font-serif text-xl font-bold text-[#3b140d]">
            Revenue by Neighbourhood
          </h2>
          <p className="mb-4 text-xs text-[#5c4638]">
            Total revenue split across kitchen locations (ETB)
          </p>
          <RevenueChart data={revenueByArea} />
          <AreaTable
            data={revenueByArea}
            caption="Accessible breakdown of revenue by neighbourhood"
          />
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-900/10">
          <h2 className="font-serif text-xl font-bold text-[#3b140d]">
            Orders Over Time
          </h2>
          <p className="mb-4 text-xs text-[#5c4638]">
            Daily order volume and trend analysis
          </p>
          <OrdersOverTimeChart data={ordersOverTime} />
          <OrdersTable
            data={ordersOverTime}
            caption="Accessible breakdown of daily orders and revenue"
          />
        </section>
      </div>

      <section className="space-y-4">
        <OrderTable
          orders={paginatedOrders}
          currentSort={sort}
          currentDir={dir}
        />
        <Pager page={page} pages={totalPages} sort={sort} dir={dir} />
      </section>
    </main>
  );
}