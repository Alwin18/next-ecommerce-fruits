import Image from "next/image"
import { Star } from "lucide-react"

type TestimonialCardProps = {
  name: string
  city: string
  image: string
  productImage: string
  review: string
}

export function TestimonialCard({
  name,
  city,
  image,
  productImage,
  review,
}: TestimonialCardProps) {
  return (
    <div className="h-full overflow-hidden rounded-3xl border bg-background">
      {/* PRODUCT IMAGE */}
      <div className="relative h-[220px] w-full bg-muted">
        <Image
          src={productImage}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* STARS */}
        <div className="mb-4 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* REVIEW */}
        <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">
          &quot;{review}&quot;
        </p>

        {/* USER */}
        <div className="mt-5 flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h4 className="font-semibold">
              {name}
            </h4>

            <p className="text-sm text-muted-foreground">
              {city}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}