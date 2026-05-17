// components/product/section-header.tsx

import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type SectionHeaderProps = {
  title: string
  total?: number
}

export function SectionHeader({
  title,
  total,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="rounded-full"
          asChild
        >
          <Link href="/products">
            View All {total && `(+${total})`}

            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            size="icon"
            variant="outline"
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}