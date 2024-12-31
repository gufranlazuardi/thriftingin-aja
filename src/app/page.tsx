"use client"

import { Hero } from '@/components/hero';
import { Products } from '@/components/products';
import { Discount } from '@/components/dicount';
import { Connect } from '@/components/connect';
import { Footer } from '@/components/footer';
import { PrototypeNotice } from '@/components/prototype-notice';

export default function Home() {
  return (
      <main>
        <Hero />
        <Products />
        <Discount />
        <Connect />
        <Footer />
        <PrototypeNotice />
      </main>

  );
}

