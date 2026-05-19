import CartHeader from "@/components/cart/cart-header"
import CartList from "@/components/cart/cart-list"
import { CartSummary } from "@/components/cart/cart-summary"
import { ProductGrid } from "@/components/product/product-grid"
import { SectionHeader } from "@/components/product/section-header"

export default function CartPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <CartHeader />

          <CartList />
        </div>

        <CartSummary />
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <SectionHeader
          title="Rekomendasi Untuk Mu"
        />
        <ProductGrid />
      </div>
    </div>
  )
}