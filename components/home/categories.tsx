// components/home/categories.tsx

"use client"

import { Grape } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const CATEGORIES = [
  {
    id: 1,
    name: "Tropis & Lokal",
    image: "/images/categories/bread.png",
  },
  {
    id: 2,
    name: "Jeruk & Sitrus",
    image: "/images/categories/cheese.png",
  },
  {
    id: 3,
    name: "Apel & Pir",
    image: "/images/categories/alcohol.png",
  },
  {
    id: 4,
    name: "Beri & Anggur",
    image: "/images/categories/yogurt.png",
  },
  {
    id: 5,
    name: "Melon & Semangka",
    image: "/images/categories/fruits.png",
  },
  {
    id: 6,
    name: "Buah Berbiji",
    image: "/images/categories/watermelon.png",
  },
  {
    id: 7,
    name: "Impor Premium",
    image: "/images/categories/snacks.png",
  },
  {
    id: 8,
    name: "Organik & Bebas Pestisida",
    image: "/images/categories/cake.png",
  },
  {
    id: 9,
    name: "Siap Santap",
    image: "/images/categories/candy.png",
  },
  {
    id: 10,
    name: "Hampers & Parsel",
    image: "/images/categories/vegetables.png",
  },
  {
    id: 11,
    name: "Jus & Diet",
    image: "/images/categories/vegetables.png",
  },
  {
    id: 12,
    name: "Musiman",
    image: "/images/categories/vegetables.png",
  },
  {
    id: 13,
    name: "Buah Kering & Camilan",
    image: "/images/categories/vegetables.png",
  },
]

export default function Categories() {
  return (
    <section className="w-full py-4">
      <div className="flex w-full ">
        <div className="scrollbar-hide flex gap-3 overflow-x-auto scroll-smooth">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href="/products"
              className="flex shrink-0 items-center gap-2 rounded-full border bg-background px-4 py-2 transition-all hover:border-primary hover:bg-muted"
            >
              <div className="relative h-6 w-6 overflow-hidden rounded-full">
                {/* <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                /> */}
                <Grape color="#46bb07" />
              </div>

              <span className="whitespace-nowrap text-sm font-medium">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}