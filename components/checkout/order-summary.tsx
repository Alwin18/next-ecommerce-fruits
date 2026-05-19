"use client"

import { useState } from "react"
import { Plus, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"

const tipAmounts = [5000, 10000, 15000, 20000]

export default function OrderSummary() {
  const [selectedTip, setSelectedTip] = useState<number | null>(null)
  const [customTip, setCustomTip] = useState(false)

  return (
    <div className="sticky top-24 rounded-3xl border bg-background p-6">
      <h2 className="mb-6 text-lg font-bold">Ringkasan Pesanan</h2>

      {/* Fee Breakdown */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Ongkos Kirim</span>
          <span className="font-medium">{formatCurrency(5000)}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Biaya Layanan</span>
          <span className="font-medium">{formatCurrency(1500)}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Total</span>
          <span className="font-medium">{formatCurrency(100000)}</span>
        </div>
      </div>

      {/* Delivery Tip */}
      <div className="mt-6 border-t pt-6">
        <h3 className="text-sm font-semibold">Tips Pengiriman</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          100% tip akan diberikan kepada kurir.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tipAmounts.map((amount, index) => (
            <button
              key={`${amount}-${index}`}
              onClick={() => {
                setSelectedTip(amount === selectedTip && !customTip ? null : amount)
                setCustomTip(false)
              }}
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                selectedTip === amount && !customTip
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-foreground hover:border-primary/40"
              }`}
            >
              {formatCurrency(amount)}
            </button>
          ))}

          <button
            onClick={() => {
              setCustomTip(true)
              setSelectedTip(null)
            }}
            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
              customTip
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-foreground hover:border-primary/40"
            }`}
          >
            Lainnya
          </button>
        </div>
      </div>

      {/* Coupon */}
      <div className="mt-6 flex items-center justify-between border-t pt-6">
        <span className="text-sm font-medium">Voucher</span>
        <button className="flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
          <Plus className="h-4 w-4" />
          Tambah Voucher
        </button>
      </div>

      {/* Total */}
      <div className="mt-6 border-t pt-6">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">Total</span>
          <span className="text-lg font-bold">{formatCurrency(100000)}</span>
        </div>
      </div>

      {/* Terms */}
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Dengan melakukan pemesanan ini, Anda menyetujui{" "}
        <button className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary">
          Syarat dan Ketentuan
        </button>
        .
      </p>

      {/* Place Order Button */}
      <Button className="mt-6 h-14 w-full rounded-full text-base font-semibold">
        <ShoppingCart className="mr-2 h-4 w-4" />
        Buat Pesanan
      </Button>
    </div>
  )
}
