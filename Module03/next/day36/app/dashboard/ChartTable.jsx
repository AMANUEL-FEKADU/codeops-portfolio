const formatETB = (v) =>
  new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    maximumFractionDigits: 0,
  }).format(v);

export function AreaTable({ data, caption }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="border-b border-amber-900/10 text-[#5c4638]">
          <tr>
            <th scope="col" className="py-2 font-semibold">
              Neighbourhood
            </th>
            <th scope="col" className="py-2 text-right font-semibold">
              Revenue
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-900/5">
          {data.map((row) => (
            <tr key={row.area}>
              <td className="py-2 text-[#3b140d]">{row.area}</td>
              <td className="py-2 text-right font-mono text-[#3b140d]">
                {formatETB(row.revenue)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function OrdersTable({ data, caption }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="border-b border-amber-900/10 text-[#5c4638]">
          <tr>
            <th scope="col" className="py-2 font-semibold">
              Date
            </th>
            <th scope="col" className="py-2 text-right font-semibold">
              Order Count
            </th>
            <th scope="col" className="py-2 text-right font-semibold">
              Daily Revenue
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-900/5">
          {data.map((row) => (
            <tr key={row.date}>
              <td className="py-2 text-[#3b140d]">{row.date}</td>
              <td className="py-2 text-right font-mono text-[#3b140d]">
                {row.count}
              </td>
              <td className="py-2 text-right font-mono text-[#3b140d]">
                {formatETB(row.revenue)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}