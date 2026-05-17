// components/promo/flash-sale-section.tsx

"use client"

import Autoplay from "embla-carousel-autoplay"

import { ProductCard } from "@/components/product/product-card"

import { FlashSaleCountdown } from "./flash-sale-countdown"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const PRODUCTS = [
  {
    id: 1,
    name: "Fresh Anggur Merah",
    image: "/buah/1.png",
    price: 99000,
    oldPrice: 150000,
    sold: 12,
    stock: 100,
  },
  {
    id: 2,
    name: "Fresh Jeruk Nipis",
    image: "/buah/2.png",
    price: 150000,
    oldPrice: 271000,
    sold: 12,
    stock: 100,
  },
  {
    id: 3,
    name: "Fresh Jeruk",
    image: "/buah/3.png",
    price: 99000,
    oldPrice: 140000,
    sold: 12,
    stock: 100,
  },
  {
    id: 4,
    name: "Fresh Strawberry",
    image: "/buah/4.png",
    price: 99000,
    oldPrice: 120000,
    sold: 12,
    stock: 100,
  },
  {
    id: 5,
    name: "Fresh Jeruk",
    image: "/buah/3.png",
    price: 99000,
    oldPrice: 140000,
    sold: 12,
    stock: 100,
  },
  {
    id: 6,
    name: "Fresh Lemon",
    image: "/buah/2.png",
    price: 89000,
    oldPrice: 110000,
    sold: 20,
    stock: 100,
  },
   {
    id: 7,
    name: "Fresh Jeruk Nipis",
    image: "/buah/2.png",
    price: 150000,
    oldPrice: 271000,
    sold: 12,
    stock: 100,
  },
  {
    id: 8,
    name: "Fresh Jeruk",
    image: "/buah/3.png",
    price: 99000,
    oldPrice: 140000,
    sold: 12,
    stock: 100,
  },
]

const autoplay = Autoplay({
  delay: 3000,
  stopOnInteraction: false,
})

export function FlashSaleSection() {
  return (
    <section className="w-full py-6">
      <div className="w-full">
        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-4 rounded-3xl bg-primary p-6 text-primary-foreground lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Flash Sale 🔥
            </h2>

            <p className="mt-2 text-sm opacity-90">
              Promo minggu ini dengan diskon terbaik.
            </p>
          </div>

          <FlashSaleCountdown />
        </div>

        {/* CAROUSEL */}
        <Carousel
          plugins={[autoplay]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {PRODUCTS.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-[75%] sm:basis-[50%] md:basis-[40%] lg:basis-[25%] xl:basis-[20%]"
              >
                <ProductCard
                  {...product}
                  badge="Flash Sale"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}