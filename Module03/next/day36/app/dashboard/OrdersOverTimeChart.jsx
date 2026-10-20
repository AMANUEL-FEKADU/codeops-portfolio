"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const formatETB = (v) =>
  new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    maximumFractionDigits: 0,
  }).format(v);

export default function OrdersOverTimeChart({ data }) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#3b140d" fontSize={12} />
          <YAxis stroke="#3b140d" fontSize={12} allowDecimals={false} />
          <Tooltip
            formatter={(value, name) => [
              name === "revenue" ? formatETB(value) : value,
              name === "revenue" ? "Revenue" : "Orders",
            ]}
            contentStyle={{ backgroundColor: "#fff", borderRadius: "12px" }}
          />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#b33a1a"
            strokeWidth={3}
            dot={{ r: 4, fill: "#b33a1a" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}