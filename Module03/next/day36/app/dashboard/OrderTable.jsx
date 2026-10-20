import Link from "next/link";

const formatETB = (v) =>
  new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    maximumFractionDigits: 0,
  }).format(v);

export default function OrderTable({ orders, currentSort, currentDir }) {
  const getSortLink = (col) => {
    const isCurrent = currentSort === col;
    const newDir = isCurrent && currentDir === "asc" ? "desc" : "asc";
    return `?sort=${col}&dir=${newDir}`;
  };

  const getAriaSort = (col) => {
    if (currentSort !== col) return "none";
    return currentDir === "asc" ? "ascending" : "descending";
  };

  return (
    <div className="overflow-x-auto rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-900/10">
      <table className="w-full text-left text-sm">
        <caption className="pb-4 text-left font-serif text-lg font-bold text-[#3b140d]">
          Recent Orders History
        </caption>
        <thead className="border-b border-amber-900/10 text-[#5c4638]">
          <tr>
            <th
              scope="col"
              aria-sort={getAriaSort("id")}
              className="pb-3 font-semibold"
            >
              <Link href={getSortLink("id")} className="hover:underline">
                Order ID {currentSort === "id" && (currentDir === "asc" ? "↑" : "↓")}
              </Link>
            </th>
            <th scope="col" aria-sort="none" className="pb-3 font-semibold">
              Customer
            </th>
            <th scope="col" aria-sort="none" className="pb-3 font-semibold">
              Area
            </th>
            <th scope="col" aria-sort="none" className="pb-3 font-semibold">
              Status
            </th>
            <th
              scope="col"
              aria-sort={getAriaSort("total")}
              className="pb-3 text-right font-semibold"
            >
              <Link href={getSortLink("total")} className="hover:underline">
                Total {currentSort === "total" && (currentDir === "asc" ? "↑" : "↓")}
              </Link>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-900/5">
          {orders.map((o) => (
            <tr key={o.id} className="hover:bg-amber-50/50">
              <td className="py-3 font-mono text-[#3b140d]">
                <Link href={`/orders/${o.id}`} className="hover:underline font-medium">
                  {o.id}
                </Link>
              </td>
              <td className="py-3 text-[#3b140d]">{o.customerName || "Guest"}</td>
              <td className="py-3 text-[#5c4638]">{o.area || "Bole"}</td>
              <td className="py-3 capitalize text-[#5c4638]">{o.status}</td>
              <td className="py-3 text-right font-mono text-[#3b140d]">
                {formatETB(o.total || 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}