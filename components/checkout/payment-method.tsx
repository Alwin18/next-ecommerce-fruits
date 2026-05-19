"use client"

import { useState } from "react"
import { ChevronRight, CreditCard, Info, Landmark, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"

const paymentMethods = [
  {
    id: "mastercard",
    label: "Mastercard •••• 3434",
    icon: CreditCard,
    type: "card",
  },
  {
    id: "visa",
    label: "Visa •••• 5678",
    icon: CreditCard,
    type: "card",
  },
  {
    id: "bca",
    label: "BCA Virtual Account",
    icon: Landmark,
    type: "bank",
  },
  {
    id: "gopay",
    label: "GoPay",
    icon: Wallet,
    type: "ewallet",
  },
]

export default function PaymentMethod() {
  const [selectedId, setSelectedId] = useState("mastercard")
  const [tempSelectedId, setTempSelectedId] = useState("mastercard")
  const [open, setOpen] = useState(false)

  const selectedMethod = paymentMethods.find((m) => m.id === selectedId)
  const SelectedIcon = selectedMethod?.icon || CreditCard

  const handleOpen = () => {
    setTempSelectedId(selectedId)
    setOpen(true)
  }

  const handleConfirm = () => {
    setSelectedId(tempSelectedId)
    setOpen(false)
  }

  return (
    <div className="rounded-3xl border bg-background p-6">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            onClick={handleOpen}
            className="flex w-full items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold">Metode Pembayaran</h2>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>

            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              Pilih Metode Pembayaran
            </DialogTitle>
            <DialogDescription>
              Pilih metode pembayaran yang ingin digunakan
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon
              return (
                <label
                  key={method.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition-all duration-200 ${
                    tempSelectedId === method.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={tempSelectedId === method.id}
                    onChange={() => setTempSelectedId(method.id)}
                    className="h-4 w-4 accent-[oklch(var(--primary))]"
                  />

                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        tempSelectedId === method.id
                          ? "bg-primary/10"
                          : "bg-muted"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          tempSelectedId === method.id
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <span className="text-sm font-medium">{method.label}</span>
                  </div>
                </label>
              )
            })}
          </div>

          <DialogFooter>
            <Button
              onClick={handleConfirm}
              className="h-12 w-full rounded-full text-sm font-semibold"
            >
              Konfirmasi Pembayaran
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Selected Method Preview */}
      <div className="mt-4 flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Bayar dengan</span>
        <div className="flex items-center gap-1.5 font-medium text-primary">
          <SelectedIcon className="h-4 w-4" />
          <span>{selectedMethod?.label}</span>
        </div>
      </div>
    </div>
  )
}
