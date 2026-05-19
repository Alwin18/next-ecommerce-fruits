"use client"

import { useMemo, useState } from "react"

import CartItem from "./cart-item"

const items = [
  {
    id: 1,
    image: "/buah/1.png",
    name: "Sweet Green Seedless Grapes 1.5-2 lb",
    price: 10000,
    oldPrice: 15000,
    quantity: 1,
    subtotal: 10000,
  },
  {
    id: 2,
    image: "/buah/2.png",
    name: "Sweet Green Seedless Grapes 1.5-2 lb",
    price: 10000,
    oldPrice: 15000,
    quantity: 2,
    subtotal: 20000,
  },
  {
    id: 3,
    image: "/buah/3.png",
    name: "Sweet Green Seedless Grapes 1.5-2 lb",
    price: 10000,
    oldPrice: 15000,
    quantity: 3,
    subtotal: 30000,
  },
]

export default function CartList() {
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    )
  }

  const totalSelectedPrice = useMemo(() => {
    return items
      .filter((item) => selectedItems.includes(item.id))
      .reduce((acc, item) => acc + item.subtotal, 0)
  }, [selectedItems])

  return (
    <div className="rounded-3xl border bg-background p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-sm font-medium text-muted-foreground">
          Daftar Belanjaanmu
        </h2>

        <div className="text-sm font-medium">
          Total Dipilih:{" "}
          <span className="text-primary">
            Rp {totalSelectedPrice.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      <div>
        {items.map((item) => (
          <CartItem
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            quantity={item.quantity}
            subtotal={item.subtotal}
            checked={selectedItems.includes(item.id)}
            onCheckedChange={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  )
}