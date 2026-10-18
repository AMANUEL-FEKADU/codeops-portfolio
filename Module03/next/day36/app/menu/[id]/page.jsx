import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDish, getDishes, imageFor } from "@/lib/dishes";
import { formatETB } from "@/lib/money";
import AddToCartButton from "@/components/AddToCartButton";

export async function generateStaticParams() {
  return getDishes().map((dish) => ({ id: dish.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = getDish(id);
  if (!dish) return { title: "Dish not found" };
  return {
    title: dish.nameEn,
    description: `${dish.nameEn} — ${dish.priceETB} ETB. ${dish.description}`,
    openGraph: {
      title: `${dish.nameEn} · Addis Eats`,
      description: `${dish.description} ${dish.priceETB} ETB.`,
    },
    alternates: { canonical: `/menu/${id}` },
  };
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = getDish(id);
  if (!dish) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: dish.nameEn,
    description: dish.description,
    offers: {
      "@type": "Offer",
      price: dish.priceETB,
      priceCurrency: "ETB",
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/menu" className="text-sm text-[#b33a1a]">
        Back to menu
      </Link>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src={imageFor(dish)}
            alt={`${dish.nameEn} — ${dish.description}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-[#b33a1a]">
            {dish.category}
          </p>
          <h1 className="mt-2 font-serif text-4xl">{dish.nameEn}</h1>
          <p className="mt-1 text-[#5c4638]">{dish.nameAm}</p>
          <p className="mt-4 text-[#5c4638]">{dish.description}</p>
          <p className="mt-4 text-sm">Spice: {dish.spiceLevel}</p>
          <p className="text-sm">{dish.servings}</p>
          <p className="mt-6 text-2xl font-semibold">
            {formatETB(dish.priceETB)}
          </p>
          <div className="mt-6">
            <AddToCartButton dish={dish} />
          </div>
        </div>
      </div>
    </article>
  );
}
