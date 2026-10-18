import menu from "./menu.json";
import { dishImages } from "@/public/assets/dishImages";

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
  if (dish && dish.slug && dishImages[dish.slug]) {
    return dishImages[dish.slug];
  }
  
  return dishImages["doro-wat"] || "/assets/doro-wot.png";
}

export function searchDishes(query) {
  const term = (query || "").trim().toLowerCase();
  if (!term) return menu;

  return menu.filter((dish) => {
    const nameEn = (dish.nameEn || "").toLowerCase();
    const nameAm = (dish.nameAm || "").toLowerCase();
    const category = (dish.category || "").toLowerCase();
    const description = (dish.description || "").toLowerCase();

    return (
      nameEn.includes(term) ||
      nameAm.includes(term) ||
      category.includes(term) ||
      description.includes(term)
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