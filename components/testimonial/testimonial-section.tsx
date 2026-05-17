"use client"

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { TestimonialCard } from "./testimonial-card"

const TESTIMONIALS = [
  {
    id: 1,
    name: "Salsa Putri",
    city: "Jakarta",
    image: "/alex.jpg",
    productImage: "/buah/1.png",
    review:
      "Alpukatnya mentega banget, pas sampai masih mengkel, besoknya langsung matang sempurna! Repurchase sih ini.",
  },
  {
    id: 2,
    name: "Rizky Maulana",
    city: "Bandung",
    image: "/alex.jpg",
    productImage: "/buah/2.png",
    review:
      "Buahnya segar semua dan packingnya rapi banget. Baru pertama beli online tapi puas.",
  },
  {
    id: 3,
    name: "Amanda",
    city: "Surabaya",
    image: "/alex.jpg",
    productImage: "/buah/3.png",
    review:
      "Jeruknya manis dan fresh. Anak-anak langsung suka, bakal langganan tiap minggu.",
  },
  {
    id: 4,
    name: "Fajar",
    city: "Bekasi",
    image: "/alex.jpg",
    productImage: "/buah/4.png",
    review:
      "Pengiriman cepat dan buah sampai dalam kondisi dingin. Kualitas premium sih ini.",
  },
]

const autoplay = Autoplay({
  delay: 4000,
  stopOnInteraction: false,
})

export function TestimonialSection() {
  return (
    <section className="w-full py-6">
      <div className="w-full">
        {/* HEADER */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            Testimoni Pelanggan
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Ribuan pelanggan sudah mempercayakan buah segar
            mereka kepada kami.
          </p>
        </div>

        {/* SLIDER */}
        <Carousel
          plugins={[autoplay]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="basis-[90%] md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}