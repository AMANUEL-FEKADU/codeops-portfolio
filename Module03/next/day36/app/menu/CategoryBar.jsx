// app/menu/CategoryBar.jsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryBar({ categories = [], vertical = false }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const handleSelect = (category) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    params.delete("page");
    router.push(`/menu?${params.toString()}`);
  };

  const list = Array.isArray(categories) && categories.length > 0 
    ? categories 
    : ["All", "Traditional Stews & Wat", "Tibs & Grills", "Raw & Cured Delicacies / Kitfo", "Fasting & Vegan / Tsom", "Beverages & Tej"];

  return (
    <div
      className={
        vertical
          ? "flex flex-col gap-2"
          : "flex flex-wrap gap-2 my-4"
      }
    >
      {list.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => handleSelect(cat)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors text-left ${
              isActive
                ? "bg-[#3b140d] text-white"
                : "bg-white text-[#3b140d] border border-amber-900/10 hover:bg-amber-900/5"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}