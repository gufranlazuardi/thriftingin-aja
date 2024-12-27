import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { SaleBanner } from '@/components/sale-banner'
import { Products } from '@/components/products'
import { Discount } from '@/components/dicount'
import { Connect } from '@/components/connect'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SaleBanner />
      <Products />
      <Discount />
      <Connect />
      <Footer />
    </main>
  )
}

