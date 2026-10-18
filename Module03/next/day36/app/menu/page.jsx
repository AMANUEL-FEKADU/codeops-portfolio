import { Suspense } from "react";
import { getCategories } from "@/lib/dishes";
import FilterShell from "./FilterShell";
import DishSkeleton from "./DishSkeleton";
import SlowDishes from "./SlowDishes";
import MenuSearch from "./MenuSearch";
import MenuPager from "./MenuPager";

export const metadata = {
  title: "Menu",
  description:
    "Doro Wat, Tibs, Kitfo and Shiro, delivered across Addis Ababa.",
  alternates: { canonical: "/menu" },
};

export const revalidate = 3600;

export default async function MenuPage() {
  const categories = getCategories();

  return (
    <main>
      <h1 className="font-serif text-4xl">The menu</h1>
      <p className="mt-2 max-w-2xl text-[#5c4638]">
        Dishes are fetched on the server and regenerated at most once an hour.
        Search and paging run in the browser with SWR.
      </p>
      <div className="mt-6">
        <MenuSearch />
      </div>
      <div className="mt-8">
        <Suspense fallback={<DishSkeleton />}>
          <FilterShell categories={categories}>
            <Suspense fallback={<DishSkeleton />}>
              <SlowDishes />
            </Suspense>
          </FilterShell>
        </Suspense>
      </div>
      <Suspense>
        <MenuPager />
      </Suspense>
    </main>
  );
}
