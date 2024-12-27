import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="container py-12">
      <div className="relative bg-[#2A2A42] rounded-xl p-8 overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-4">
            <div className="bg-[#FFA26B] text-[#2A2A42] p-4 inline-block transform -rotate-2 mb-2">
              FROM BRUSHES
            </div>
            <br />
            <div className="bg-[#9747FF] text-white p-4 inline-block transform rotate-1">
              TO CANVASES
            </div>
          </h1>
          <p className="text-3xl text-white mb-8">We've Got You Covered</p>
          <Button className="bg-[#9747FF] hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg">
            Learn more →
          </Button>
        </div>
        <div className="absolute top-4 right-4">
          <Image
            src="/placeholder.svg"
            alt="Paint brushes"
            width={100}
            height={100}
            className="transform rotate-12"
          />
        </div>
        <div className="absolute bottom-4 left-4">
          <Image
            src="/placeholder.svg"
            alt="Color palette"
            width={80}
            height={80}
            className="transform -rotate-12"
          />
        </div>
      </div>
    </section>
  )
}

