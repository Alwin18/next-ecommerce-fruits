// app/(public)/products/[slug]/page.tsx

import { ProductCard } from "@/components/product/product-card"
import { ProductDescription } from "@/components/product/product-description"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { ProductReviews } from "@/components/product/product-reviews"

const RELATED_PRODUCTS = [
  {
    id: 1,
    name: "Apple",
    image: "/buah/1.png",
    price: 99.99,
    oldPrice: 120,
    left: 12,
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    image: "/buah/2.png",
    price: 99.99,
    oldPrice: 120,
    left: 12,
  },
  {
    id: 3,
    name: "Fresh Pear",
    image: "/buah/3.png",
    price: 99.99,
    oldPrice: 120,
    left: 12,
  },
  {
    id: 4,
    name: "Red Grapes",
    image: "/buah/4.png",
    price: 99.99,
    oldPrice: 120,
    left: 12,
  },
  {
    id: 5,
    name: "Banana",
    image: "/buah/5.png",
    price: 99.99,
    oldPrice: 120,
    left: 12,
  },
]

export default function ProductDetailPage() {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        {/* TOP */}
        <div className="grid gap-10 lg:grid-cols-[60%_40%]">
          <ProductGallery />

          <ProductInfo />
        </div>

        {/* REVIEWS */}
        <div className="mt-12">
          <ProductReviews />
        </div>

        {/* DESCRIPTION */}
        <div className="mt-12">
          <ProductDescription />
        </div>

        {/* RELATED */}
        <div className="mt-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">
              Recommendations
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {RELATED_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}