
"use client";

const cell = (v) => {
  const s = String(v ?? "");
  return /[",\n]/.test(s)
    ? `"${s.replace(/"/g, '""')}"` 
    : s;
};

export default function ExportButton({ orders }) {
  const handleExport = () => {
    const headers = ["ID", "Customer", "Area", "Status", "Total"];
    const rows = orders.map((o) => [
      o.id,
      o.customerName || "Guest",
      o.area || "Bole",
      o.status,
      o.total,
    ]);

    const csvContent = [
      headers.map(cell).join(","),
      ...rows.map((r) => r.map(cell).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "orders-export.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#3b140d] ring-1 ring-amber-900/10 hover:bg-amber-50"
    >
      Export CSV
    </button>
  );
}