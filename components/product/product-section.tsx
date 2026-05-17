import { ProductGrid } from "./product-grid";
import { SectionHeader } from "./section-header";

export function ProductSection() {
  return (
    <section className="w-full py-6">
      <div className="w-full">
        <SectionHeader
          title="Best Seller"
          total={40}
        />

        <div className="mt-6">
          <ProductGrid />
        </div>
      </div>
    </section>
  )
}