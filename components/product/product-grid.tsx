import { ProductCard } from "./product-card"

const PRODUCTS = [
  {
    id: 1,
    name: "Fresh Anggur Merah",
    image: "/buah/1.png",
    price: 99000,
    oldPrice: 150000,
    left: 12,
  },
  {
    id: 2,
    name: "Fresh Jeruk Nipis",
    image: "/buah/2.png",
    price: 150000,
    oldPrice: 271000,
    left: 12,
  },
  {
    id: 3,
    name: "Fresh Jeruk",
    image: "/buah/3.png",
    price: 99000,
    oldPrice: 140000,
    left: 12,
  },
  {
    id: 4,
    name: "Fresh Strawberry",
    image: "/buah/4.png",
    price: 99000,
    oldPrice: 120000,
    left: 12,
  },
 {
    id: 5,
    name: "Fresh Jeruk",
    image: "/buah/3.png",
    price: 99000,
    oldPrice: 140000,
    left: 12,
  },
]

export function ProductGrid() {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {PRODUCTS.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </div>
  )
}