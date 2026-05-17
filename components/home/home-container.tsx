import React from 'react'
import { Hero } from './hero'
import Categories from './categories'
import { ProductSection } from '../product/product-section'
import { FlashSaleSection } from '../promo/flash-sale-section'
import { CuratedSection } from '../curated/curated-section'
import { SectionDivider } from '../section-divider'
import { TestimonialSection } from '../testimonial/testimonial-section'

export default function HomeContainer() {
  return (
    <>
      <Hero />
      <Categories />
      <FlashSaleSection />
      <SectionDivider label='Penawaran Terbatas' />
      <ProductSection />
      <SectionDivider label='Rekomendasi Produk' />
      <CuratedSection />
      <TestimonialSection />
    </>
  )
}
