import { ProductCard } from "@/components/product/product-card"
import { FlashSaleCountdown } from "./flash-sale-countdown"

const PRODUCTS = [
  {
    id: 1,
    name: "Fresh Anggur Merah",
    image: "/buah/1.png",
    price: 99000,
    oldPrice: 150000,
    sold: 12,
    stock: 100,
  },
  {
    id: 2,
    name: "Fresh Jeruk Nipis",
    image: "/buah/2.png",
    price: 150000,
    oldPrice: 271000,
    sold: 12,
    stock: 100,
  },
  {
    id: 3,
    name: "Fresh Jeruk",
    image: "/buah/3.png",
    price: 99000,
    oldPrice: 140000,
    sold: 12,
    stock: 100,
  },
  {
    id: 4,
    name: "Fresh Strawberry",
    image: "/buah/4.png",
    price: 99000,
    oldPrice: 120000,
    sold: 12,
    stock: 100,
  },
  {
    id: 5,
    name: "Fresh Jeruk",
    image: "/buah/3.png",
    price: 99000,
    oldPrice: 140000,
    sold: 12,
    stock: 100,
  },
]

export function FlashSaleSection() {
  return (
    <section className="w-full py-6">
      <div className="w-full">
        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-4 rounded-3xl bg-primary p-6 text-primary-foreground lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Flash Sale 🔥
            </h2>

            <p className="mt-2 text-sm opacity-90">
              Promo minggu ini dengan diskon terbaik.
            </p>
          </div>

          <FlashSaleCountdown />
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              badge="Flash Sale"
            />
          ))}
        </div>
      </div>
    </section>
  )
}