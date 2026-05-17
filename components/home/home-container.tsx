import React from 'react'
import { Hero } from './hero'
import Categories from './categories'
import { ProductSection } from '../product/product-section'
import { FlashSaleSection } from '../promo/flash-sale-section'

export default function HomeContainer() {
  return (
    <>
      <Hero />
      <Categories />
      <FlashSaleSection />
      <ProductSection />
    </>
  )
}
