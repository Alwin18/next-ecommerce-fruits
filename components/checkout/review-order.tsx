import Image from "next/image"
import { ChevronRight, Info } from "lucide-react"

const orderItems = [
  { id: 1, image: "/buah/1.png", name: "Green Grapes" },
  { id: 2, image: "/buah/2.png", name: "Oranges" },
  { id: 3, image: "/buah/3.png", name: "Red Apples" },
  { id: 4, image: "/buah/4.png", name: "Bananas" },
  { id: 5, image: "/buah/1.png", name: "Green Grapes" },
  { id: 6, image: "/buah/2.png", name: "Oranges" },
]

const totalItems = 18
const visibleCount = 6
const remaining = totalItems - visibleCount

export default function ReviewOrder() {
  return (
    <div className="rounded-3xl border bg-background p-6">
      {/* Header */}
      <div className="mb-5 flex items-center gap-2">
        <h2 className="text-base font-semibold">Daftar Belanjaan</h2>
        <Info className="h-4 w-4 text-muted-foreground" />
      </div>

      {/* Product Thumbnails Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-muted"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain p-1.5"
              />
            </div>
          ))}

          {remaining > 0 && (
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border bg-muted/50">
              <span className="text-sm font-medium text-muted-foreground">
                +{remaining}
              </span>
            </div>
          )}
        </div>

        <button className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors hover:bg-muted">
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  )
}
