import menu from "./menu.json";

export const PAGE_SIZE = 6;

export function getDishes() {
  return menu;
}

export function getDish(id) {
  return menu.find((dish) => String(dish.id) === String(id)) ?? null;
}

export function getSpecials() {
  return menu.filter((dish) => dish.isSpecial);
}

export function getCategories() {
  return ["All", ...new Set(menu.map((dish) => dish.category))];
}

export function imageFor(dish) {
  if (dish.category.includes("Stew")) return "/dishes/stew.svg";
  if (dish.category.includes("Tibs")) return "/dishes/grill.svg";
  if (dish.category.includes("Kitfo")) return "/dishes/kitfo.svg";
  if (dish.category.includes("Tsom") || dish.category.includes("Vegan")) {
    return "/dishes/vegan.svg";
  }
  return "/dishes/drink.svg";
}

export function searchDishes(query) {
  const term = query.trim().toLowerCase();
  if (!term) return menu;
  return menu.filter((dish) => {
    return (
      dish.nameEn.toLowerCase().includes(term) ||
      dish.nameAm.includes(query) ||
      dish.category.toLowerCase().includes(term) ||
      dish.description.toLowerCase().includes(term)
    );
  });
}

export function paginateDishes(list, page = 1, pageSize = PAGE_SIZE) {
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: current,
    totalPages,
    total,
  };
}

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://addiseats.et";
}
