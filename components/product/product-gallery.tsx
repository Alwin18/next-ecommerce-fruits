// components/product/product-gallery.tsx

"use client"

import Image from "next/image"
import { useState } from "react"

const IMAGES = [
  "/buah/1.png",
  "/buah/2.png",
  "/buah/3.png",
]

export function ProductGallery() {
  const [selectedImage, setSelectedImage] =
    useState(IMAGES[0])

  return (
    <div>
      {/* MAIN IMAGE */}
      <div className="w-full overflow-hidden rounded-[32px] border bg-muted">
        <div className="relative aspect-square w-full">
          <Image
            src={selectedImage}
            alt="Product"
            fill
            className="object-contain p-10"
          />
        </div>
      </div>

      {/* THUMBNAILS */}
      <div className="mt-4 flex gap-4">
        {IMAGES.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-2xl border p-2 transition-all ${
              selectedImage === image
                ? "border-primary"
                : "border-transparent"
            }`}
          >
            <div className="relative h-20 w-20">
              <Image
                src={image}
                alt="Thumbnail"
                fill
                className="object-contain"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}