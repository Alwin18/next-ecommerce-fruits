import { Clock, ShoppingBag } from "lucide-react"

export default function CheckoutHeader() {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-3xl border bg-background p-6 md:flex-row md:items-center">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <ShoppingBag className="h-6 w-6 text-primary" />
        </div>

        <h1 className="text-xl font-bold">Checkout</h1>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span>Estimasi Pengiriman: 17 Sep, 8am–10am</span>
      </div>
    </div>
  )
}
