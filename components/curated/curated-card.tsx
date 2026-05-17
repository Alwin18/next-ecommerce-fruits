// components/curated/curated-card.tsx

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type CuratedCardProps = {
  title: string
  description: string
  image: string
  href: string
}

export function CuratedCard({
  title,
  description,
  image,
  href,
}: CuratedCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-muted">
      {/* IMAGE */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-[260px] flex-col justify-between p-6">
        <div>
          <h3 className="max-w-[260px] text-2xl font-bold leading-tight text-white">
            {title}
          </h3>

          <p className="mt-3 max-w-[320px] text-sm leading-relaxed text-white/90">
            {description}
          </p>
        </div>

        <div>
          <Button
            asChild
            className="rounded-full"
          >
            <Link href={href}>
              Lihat Paket

              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}