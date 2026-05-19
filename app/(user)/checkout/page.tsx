import CheckoutHeader from "@/components/checkout/checkout-header"
import ShippingForm from "@/components/checkout/shipping-form"
import PaymentMethod from "@/components/checkout/payment-method"
import ReviewOrder from "@/components/checkout/review-order"
import OrderSummary from "@/components/checkout/order-summary"

export default function CheckoutPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <CheckoutHeader />

          <ShippingForm />

          <PaymentMethod />

          <ReviewOrder />
        </div>

        <OrderSummary />
      </div>
    </div>
  )
}