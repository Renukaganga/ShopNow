/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import ProductItem from './ProductItem'
import data from '@/lib/data'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'SHOP NOW!',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, Server components, Next auth, daisyui, zustand',
}

export default function Home() {
  const featuredProducts = data.products.filter((product) => product.isFeatured);
  const latestProducts = data.products.slice(0, 4); // Get the first 4 latest products

  return (
    <>
      <h2 className="text-2xl py-2">Featured Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
      <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
