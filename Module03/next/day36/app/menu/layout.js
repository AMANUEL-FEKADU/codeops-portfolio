// app/menu/layout.js
import { Suspense } from "react";
import CategoryBar from "./CategoryBar";
import { getCategories } from "@/lib/dishes";

export default function MenuLayout({ children }) {
  const categories = getCategories();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <aside className="md:col-span-1">
          <div className="sticky top-20 rounded-2xl bg-[#3b140d]/5 p-5 border border-amber-900/10">
            <h2 className="font-serif text-xl font-bold text-[#3b140d] mb-4">
              Categories
            </h2>
            <Suspense fallback={<div className="h-40 animate-pulse rounded-xl bg-amber-900/10" />}>
              <CategoryBar categories={categories} vertical={true} />
            </Suspense>
          </div>
        </aside>

        <main className="md:col-span-3">{children}</main>
      </div>
    </div>
  );
}