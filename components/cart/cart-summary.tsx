import { Button } from "@/components/ui/button"

export function CartSummary() {
  return (
    <div className="sticky top-24 rounded-3xl border bg-background p-6">
      <div className="mb-6 h-1 w-36 rounded-full bg-primary" />

      <p className="mb-8 text-sm text-muted-foreground">
        Free delivery + saving $3.00 on this order
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Items total</span>
          <span>$128.78</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Delivery fee</span>
          <span>$5.78</span>
        </div>
      </div>

      <div className="my-6 border-t" />

      <div className="mb-6 flex items-center justify-between">
        <span className="text-lg font-semibold">Subtotal</span>
        <span className="text-lg font-semibold">$134.56</span>
      </div>

      <Button className="h-14 w-full rounded-full text-base font-semibold">
        Checkout
      </Button>
    </div>
  )
}