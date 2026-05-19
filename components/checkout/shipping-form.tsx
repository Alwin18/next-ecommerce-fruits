"use client"

import { useState } from "react"
import { ChevronRight, Info, MapPin } from "lucide-react"
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

const addresses = [
  {
    id: 1,
    label: "Rumah",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    isDefault: true,
  },
  {
    id: 2,
    label: "Kantor",
    address: "4517 Washington Ave. Manchester, Kentucky 39495",
    isDefault: false,
  },
  {
    id: 3,
    label: "Kost",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    isDefault: false,
  },
]

export default function ShippingForm() {
  const [selectedId, setSelectedId] = useState(1)
  const [tempSelectedId, setTempSelectedId] = useState(1)
  const [open, setOpen] = useState(false)

  const selectedAddress = addresses.find((a) => a.id === selectedId)

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
              <h2 className="text-base font-semibold">Info Pengiriman</h2>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>

            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              Pilih Alamat Pengiriman
            </DialogTitle>
            <DialogDescription>
              Pilih alamat tujuan pengiriman pesananmu
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            {addresses.map((addr) => (
              <label
                key={addr.id}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-all duration-200 ${
                  tempSelectedId === addr.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <input
                  type="radio"
                  name="address"
                  checked={tempSelectedId === addr.id}
                  onChange={() => setTempSelectedId(addr.id)}
                  className="mt-0.5 h-4 w-4 accent-[oklch(var(--primary))]"
                />

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{addr.label}</span>
                    {addr.isDefault && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        Default
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {addr.address}
                  </p>
                </div>
              </label>
            ))}
          </div>

          <DialogFooter>
            <Button
              onClick={handleConfirm}
              className="h-12 w-full rounded-full text-sm font-semibold"
            >
              Konfirmasi Alamat
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Selected Address Preview */}
      <div className="mt-4 flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Dikirim ke</span>
        <div className="flex items-center gap-1.5 font-medium text-primary">
          <MapPin className="h-4 w-4 shrink-0" />
          <span>{selectedAddress?.address}</span>
        </div>
      </div>
    </div>
  )
}
