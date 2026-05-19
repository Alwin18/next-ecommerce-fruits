"use client"

import Image from "next/image"
import { Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

type CartItemProps = {
  image: string
  name: string
  price: number
  oldPrice?: number
  quantity: number
  subtotal: number
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export default function CartItem({
  image,
  name,
  price,
  oldPrice,
  quantity,
  subtotal,
  checked,
  onCheckedChange,
}: CartItemProps) {
  return (
    <div className="flex flex-col gap-4 border-b py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <Checkbox
          checked={checked}
          onCheckedChange={(value) =>
            onCheckedChange?.(Boolean(value))
          }
        />

        <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-muted">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-2"
          />
        </div>

        <div className="space-y-2">
          <h3 className="w-full text-sm font-medium leading-relaxed">
            {name}
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-primary">
              Rp {price.toLocaleString("id-ID")}
            </span>

            {oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                Rp {oldPrice.toLocaleString("id-ID")}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 sm:justify-end">
        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full"
          >
            -
          </Button>

          <span className="min-w-[20px] text-center text-sm font-medium">
            {quantity}
          </span>

          <Button
            size="icon"
            className="h-8 w-8 rounded-full"
          >
            +
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="text-primary hover:text-primary"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Remove
        </Button>

        <div className="min-w-[100px] text-right text-lg font-semibold">
          Rp {subtotal.toLocaleString("id-ID")}
        </div>
      </div>
    </div>
  )
}