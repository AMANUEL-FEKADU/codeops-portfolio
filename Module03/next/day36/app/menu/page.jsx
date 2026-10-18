// app/menu/page.jsx
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

  // Filter by search query first
  let filtered = searchDishes(query);

  // Filter by category if one is selected
  if (selectedCategory && selectedCategory !== "All") {
    filtered = filtered.filter(
      (dish) => dish.category === selectedCategory
    );
  }

  const { items, totalPages, page: currentPage } = paginateDishes(filtered, page);

  return (
    <div className="space-y-6">
      <MenuSearch defaultValue={query} />

      <FilterShell>
        <DishList dishes={items} />
      </FilterShell>

      {totalPages > 1 && (
        <MenuPager currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}