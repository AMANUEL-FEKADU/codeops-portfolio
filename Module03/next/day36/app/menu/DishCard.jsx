// app/menu/DishCard.jsx
import Image from "next/image";
import Link from "next/link";
import { formatETB } from "@/lib/money";
import { imageFor } from "@/lib/dishes";
import AddToCartButton from "@/components/AddToCartButton";

export default function DishCard({ dish }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-amber-900/10">
      <div className="relative h-48 w-full">
        <Image
          src={imageFor(dish)}
          alt={dish.nameEn}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-lg font-bold">{dish.nameEn}</h3>
            <span className="font-semibold text-[#b33a1a]">
              {formatETB(dish.priceETB)}
            </span>
          </div>
          <p className="mt-1 text-xs text-[#5c4638]">{dish.nameAm}</p>
          <p className="mt-2 text-sm text-[#5c4638] line-clamp-2">
            {dish.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between pt-2">
          <Link
            href={`/menu/${dish.id}`}
            className="text-xs font-medium text-[#b33a1a] hover:underline"
          >
            View details
          </Link>
          <AddToCartButton dish={dish} />
        </div>
      </div>
    </div>
  );
}