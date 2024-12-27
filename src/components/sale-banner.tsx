"use client"

export function SaleBanner() {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-4 text-xl font-bold">SUMMER SALE ★</span>
          ))}
        </div>
        <div className="animate-marquee2 whitespace-nowrap flex absolute top-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-4 text-xl font-bold">SUMMER SALE ★</span>
          ))}
        </div>
      </div>
    </div>
  )
}

