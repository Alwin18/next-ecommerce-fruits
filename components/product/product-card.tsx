// components/product/product-card.tsx

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"

type ProductCardProps = {
  id: number
  name: string
  image: string
  price: number
  oldPrice?: number
  left?: number
}

export function ProductCard({
  id,
  name,
  image,
  price,
  oldPrice,
  left,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="group block"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-3xl bg-primary/10 p-6">
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-3 top-3 z-10 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </Button>

        <div className="relative aspect-square w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-4">
        <h3 className="line-clamp-1 text-sm font-medium text-muted-foreground">
          {name}
        </h3>

        <div className="mt-3 flex items-center gap-2">
          {oldPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatCurrency(oldPrice)}
            </span>
          )}
        </div>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-2xl font-bold">
            {formatCurrency(price)}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-3 text-sm">
          {left && (
            <span className="font-medium text-primary">
              {left} Left
            </span>
          )}

          <span className="text-muted-foreground">
            In Stock
          </span>
        </div>
      </div>
    </Link>
  )
}