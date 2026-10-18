"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import CategoryBar from "./CategoryBar";

export default function FilterShell({ categories, children }) {
  const [selected, setSelected] = useState("All");
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.querySelectorAll("[data-dish]").forEach((node) => {
      const categoryOk =
        selected === "All" || node.getAttribute("data-dish") === selected;
      const pageOk = Number(node.getAttribute("data-page")) === page;
      node.style.display = categoryOk && pageOk ? "" : "none";
    });
  }, [selected, page]);

  return (
    <div>
      <CategoryBar
        categories={categories}
        selected={selected}
        onSelect={setSelected}
      />
      <div ref={rootRef} className="mt-6">
        {children}
      </div>
    </div>
  );
}
