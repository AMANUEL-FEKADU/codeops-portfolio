"use client";

export default function CategoryBar({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={`rounded-full px-3 py-1.5 text-sm ${
            selected === category
              ? "bg-[#3b140d] text-amber-100"
              : "bg-white text-[#3b140d] ring-1 ring-amber-900/15"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
