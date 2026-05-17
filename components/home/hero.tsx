"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const BANNERS = [
  {
    id: 1,
    image: "/banner/1.png",
  },
  {
    id: 2,
    image: "/banner/2.png",
  },
  {
    id: 3,
    image: "/banner/3.png",
  },
  {
    id: 4,
    image: "/banner/4.png",
  },
  {
    id: 5,
    image: "/banner/5.png",
  },
]

export function Hero() {
  const autoplay = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
  })

  return (
    <section className="w-full py-4 lg:py-6">
      <div className="">
        <Carousel
          plugins={[autoplay]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {BANNERS.map((banner) => (
              <CarouselItem
                key={banner.id}
                className="basis-[85%] md:basis-1/2 lg:basis-1/3"
              >
                <div className="overflow-hidden rounded-3xl">
                  <div className="relative aspect-16/7 w-full">
                    <Image
                      src={banner.image}
                      alt={`Banner ${banner.id}`}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}