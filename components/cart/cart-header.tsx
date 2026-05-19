import { MapPin, ShoppingBasket } from "lucide-react"


export default function CartHeader() {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-3xl border bg-background p-6 md:flex-row md:items-center">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <ShoppingBasket className="h-7 w-7 text-primary" />
        </div>

        <div>
          <h2 className="text-xl font-semibold">BuahKita</h2>

          <div className="mt-1 flex items-center gap-2 text-sm text-primary">
            <MapPin className="h-4 w-4" />
            Shopping in 85240
          </div>
        </div>
      </div>
    </div>
  )
}