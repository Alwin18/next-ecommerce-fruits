"use client"

import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

import { ProductCard } from "@/components/product/product-card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { Switch } from "@/components/ui/switch"
import Categories from "@/components/home/categories"

const CATEGORY_LIST = [
  "Bread",
  "Cheese",
  "Alcohol",
  "Yogurt",
  "Dairy & Eggs",
  "Watermelon",
  "Snacks",
  "Cake",
  "Candy",
  "Vegetables",
]

const CHEESE_PRODUCTS = [
  {
    id: 1,
    name: "Fresh Anggur Merah",
    image: "/buah/1.png",
    price: 99000,
    oldPrice: 150000,
    left: 12,
  },
  {
    id: 2,
    name: "Fresh Jeruk Nipis",
    image: "/buah/2.png",
    price: 150000,
    oldPrice: 271000,
    left: 12,
  },
  {
    id: 3,
    name: "Fresh Jeruk",
    image: "/buah/3.png",
    price: 99000,
    oldPrice: 140000,
    left: 12,
  },
  {
    id: 4,
    name: "Fresh Strawberry",
    image: "/buah/4.png",
    price: 99000,
    oldPrice: 120000,
    left: 12,
  },
 {
    id: 5,
    name: "Fresh Jeruk",
    image: "/buah/3.png",
    price: 99000,
    oldPrice: 140000,
    left: 12,
  },
]

const MILK_PRODUCTS = [
  {
    id: 1,
    name: "Fresh Anggur Merah",
    image: "/buah/1.png",
    price: 99000,
    oldPrice: 150000,
    left: 12,
  },
  {
    id: 2,
    name: "Fresh Jeruk Nipis",
    image: "/buah/2.png",
    price: 150000,
    oldPrice: 271000,
    left: 12,
  },
  {
    id: 3,
    name: "Fresh Jeruk",
    image: "/buah/3.png",
    price: 99000,
    oldPrice: 140000,
    left: 12,
  },
  {
    id: 4,
    name: "Fresh Strawberry",
    image: "/buah/4.png",
    price: 99000,
    oldPrice: 120000,
    left: 12,
  },
 {
    id: 5,
    name: "Fresh Jeruk",
    image: "/buah/3.png",
    price: 99000,
    oldPrice: 140000,
    left: 12,
  },
]

const BANNERS = [
  "/banner/1.png",
  "/banner/2.png",
  "/banner/3.png",
]

const autoplay = Autoplay({
  delay: 3000,
  stopOnInteraction: false,
})

export default function ProductsPage() {
  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* SIDEBAR */}
          <aside className="hidden h-fit rounded-3xl border bg-background p-5 lg:block">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">
                Filters
              </h2>

              <button className="text-sm font-medium text-primary">
                Reset
              </button>
            </div>

            <div className="mt-6 space-y-8">
              <FilterGroup
                title="Type"
                items={[
                  "Deals",
                  "New Arrivals",
                  "Near Me",
                ]}
              />

              <FilterGroup
                title="Price"
                items={[
                  "All",
                  "$4 - $8",
                  "$8 - $12",
                  "$12 & Above",
                ]}
              />

              <FilterGroup
                title="Made in"
                items={[
                  "All",
                  "United States",
                  "United States",
                  "Remember me",
                ]}
              />
            </div>
          </aside>

          {/* CONTENT */}
         <div className="min-w-0">
            {/* TOOLBAR */}
            <Categories />

            {/* BANNER */}
            <div className="mt-6">
              <Carousel
                plugins={[autoplay]}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {BANNERS.map((banner, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-[90%] lg:basis-1/2"
                    >
                      <div className="overflow-hidden rounded-3xl">
                        <div className="relative aspect-16/6 w-full">
                          <Image
                            src={banner}
                            alt="Banner"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* CHEESE */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold">
                Jeruk
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
                {CHEESE_PRODUCTS.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                  />
                ))}
              </div>
            </div>

            {/* MILK */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold">
                Anggur
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
                {MILK_PRODUCTS.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type FilterGroupProps = {
  title: string
  items: string[]
}

function FilterGroup({
  title,
  items,
}: FilterGroupProps) {
  return (
    <div>
      <h3 className="mb-4 font-semibold">
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between"
          >
            <span className="text-sm">
              {item}
            </span>

            <Switch />
          </div>
        ))}
      </div>
    </div>
  )
}