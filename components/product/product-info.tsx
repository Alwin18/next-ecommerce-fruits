// components/product/product-info.tsx

import {
  BadgeCheck,
  ShoppingCart,
  Star,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export function ProductInfo() {
  return (
    <div>
      <h1 className="max-w-md text-4xl font-bold leading-tight">
        Fresh Orange Premium Sweet & Healthy
      </h1>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <span className="text-sm text-muted-foreground">
          (4.8 Reviews)
        </span>
      </div>

      <div className="mt-6">
        <span className="text-sm text-muted-foreground">
          $2.71/lb
        </span>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-5xl font-bold">
            $99.99
          </span>

          <span className="text-xl text-muted-foreground line-through">
            $120
          </span>
        </div>

        <div className="mt-2 text-sm font-medium text-primary">
          12 Left
        </div>
      </div>

      <Button
        size="lg"
        className="mt-8 h-14 w-full rounded-full text-base"
      >
        <ShoppingCart className="mr-2 h-5 w-5" />

        Add To Cart
      </Button>

      {/* FEATURES */}
      <div className="mt-10 space-y-5">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <BadgeCheck className="h-5 w-5 text-primary" />
          </div>

          <div>
            <h3 className="font-semibold">
              Best Seller Product
            </h3>

            <p className="text-sm text-muted-foreground">
              Fresh directly from farmers
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
            <BadgeCheck className="h-5 w-5 text-green-600" />
          </div>

          <div>
            <h3 className="font-semibold">
              100% satisfaction guarantee
            </h3>

            <p className="text-sm text-muted-foreground">
              Guaranteed fresh delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}