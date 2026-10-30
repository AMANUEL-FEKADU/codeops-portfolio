// app/menu/page.jsx
import { Suspense } from "react";
import FilterShell from "./FilterShell";
import MenuSearch from "./MenuSearch";
import MenuPager from "./MenuPager";
import DishList from "./DishList";
import { searchDishes, paginateDishes } from "@/lib/dishes";

export const revalidate = 3600;

export default async function MenuPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.q || "";
  const selectedCategory = params?.category || "All";
  const page = Number(params?.page) || 1;

  let filtered = searchDishes(query);

  if (selectedCategory && selectedCategory !== "All") {
    filtered = filtered.filter(
      (dish) => dish.category === selectedCategory
    );
  }

  const { items, totalPages, page: currentPage } = paginateDishes(filtered, page);

  return (
    <div className="space-y-6">
      {/* Wrap MenuSearch in Suspense to satisfy useSearchParams requirement */}
      <Suspense fallback={<div className="h-10 w-full animate-pulse bg-amber-900/10 rounded-xl" />}>
        <MenuSearch defaultValue={query} />
      </Suspense>

      <FilterShell>
        <DishList dishes={items} />
      </FilterShell>

      {totalPages > 1 && (
        <MenuPager currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}