import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="container flex items-center justify-between py-4">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-sm">Shop</Link>
        <Link href="/about" className="text-sm">About</Link>
        <Link href="/product" className="text-sm">Product</Link>
      </div>
      <Link href="/" className="flex items-center gap-2">
        <div className="h-6 w-6 bg-yellow-400 rounded-full" />
        <span className="text-xl font-bold">ngagambar</span>
      </Link>
      <Button className="bg-purple-600 hover:bg-purple-700 rounded-full">
        SHOP NOW ✨
      </Button>
    </nav>
  )
}

