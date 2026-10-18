import Image from "next/image";
import Link from "next/link";
import { getSpecials } from "@/lib/dishes";
import { formatETB } from "@/lib/money";
import { imageFor } from "@/lib/dishes";

export default function HomePage() {
  const specials = getSpecials();

  return (
    <main>
      <section className="relative overflow-hidden bg-[#3b140d] text-[#faf6f1]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
              Addis Ababa delivery
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">
              Injera, berbere, and tonight&apos;s specials at your door.
            </h1>
            <p className="mt-5 max-w-md text-amber-100/90">
              Order Doro Wat, Tibs and Kitfo from kitchens in Bole and
              Kazanchis. Paid with TeleBirr.
            </p>
            <Link
              href="/menu"
              className="mt-8 inline-block rounded-full bg-amber-400 px-6 py-3 font-semibold text-[#3b140d]"
            >
              Open the menu
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-amber-200/20">
            <Image
              src="/hero.svg"
              alt="A round platter of Ethiopian dishes on injera"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-serif text-3xl">Today&apos;s specials</h2>
        <p className="mt-2 text-[#5c4638]">
          Static on the home page — these dishes are known at build time.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specials.map((dish) => (
            <li
              key={dish.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-amber-900/10"
            >
              <div className="relative h-44">
                <Image
                  src={imageFor(dish)}
                  alt={`${dish.nameEn} — ${dish.description}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{dish.nameEn}</h3>
                <p className="mt-1 text-sm text-[#5c4638]">{dish.nameAm}</p>
                <p className="mt-3 font-medium">{formatETB(dish.priceETB)}</p>
                <Link
                  href={`/menu/${dish.id}`}
                  className="mt-3 inline-block text-sm text-[#b33a1a]"
                >
                  View dish
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
