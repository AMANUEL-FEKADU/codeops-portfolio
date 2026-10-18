import Counter from "./Counter";
import { getCategories } from "@/lib/dishes";

export default function MenuLayout({ children }) {
  const categories = getCategories().filter((item) => item !== "All");

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[260px_1fr]">
      <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
        <h2 className="font-serif text-2xl">Kitchen sidebar</h2>
        <p className="text-sm text-[#5c4638]">
          This layout stays mounted when you open a dish.
        </p>
        <ul className="space-y-1 text-sm">
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
        <Counter />
      </aside>
      <div>{children}</div>
    </div>
  );
}
