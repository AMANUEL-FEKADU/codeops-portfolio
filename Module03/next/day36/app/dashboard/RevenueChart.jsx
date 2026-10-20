"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
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

export default function RevenueChart({ data }) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="area" stroke="#3b140d" fontSize={12} />
          <YAxis
            tickFormatter={formatETB}
            width={90}
            stroke="#3b140d"
            fontSize={12}
            domain={[0, "auto"]} 
          />
          <Tooltip
            formatter={(value) => [formatETB(value), "Revenue"]}
            contentStyle={{ backgroundColor: "#fff", borderRadius: "12px" }}
          />
          <Bar dataKey="revenue" fill="#b33a1a" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}