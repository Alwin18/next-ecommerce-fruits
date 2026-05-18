// components/product/product-reviews.tsx

import { Progress } from "@/components/ui/progress"

export function ProductReviews() {
  return (
    <div className="rounded-[32px] border p-8">
      <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold">
            Customer Reviews
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Average rating: 4.5 (5391)
          </p>

          <div className="mt-8 space-y-5">
            {[5, 4, 3, 2, 1].map((star) => (
              <div
                key={star}
                className="flex items-center gap-4"
              >
                <span className="w-4 text-sm">
                  {star}
                </span>

                <Progress
                  value={star * 20}
                  className="h-2"
                />

                <span className="text-sm text-muted-foreground">
                  4.28K
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-3xl font-bold">
            Reviews
          </h2>

          <div className="mt-8 space-y-8">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index}>
                <h3 className="font-semibold">
                  Perfect Combination!!
                </h3>

                <div className="mt-2 flex text-orange-400">
                  ★★★★★
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Alpukatnya mentega banget, pas sampai
                  masih mengkel, besoknya langsung matang
                  sempurna! Repurchase sih ini.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}