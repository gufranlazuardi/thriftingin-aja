import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="max-w-screen-xl mx-auto py-12">
      <div className="relative bg-[#2A2A42] rounded-none p-8 overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-4">
            <div className="bg-[#FFA26B] text-[#2A2A42] p-4 inline-block transform -rotate-6 mb-2">
              FROM BRUSHES
            </div>
            <br />
            <div className="bg-[#9747FF] text-white p-4 inline-block transform rotate-1">
              TO CANVASES
            </div>
          </h1>
          <p className="text-3xl text-white mb-8">
            We&apos;ve Got You Covered
          </p>
          <Button className="bg-[#9747FF] hover:bg-purple-700 text-white px-8 py-6 rounded-none text-sm lg:text-lg">
            Learn more →
          </Button>
        </div>
        <div className="absolute top-4 right-4">
          <div className="flex gap-[5rem]">
            <Image
              src="/shirt.png"
              alt="Paint brushes"
              width={200}
              height={100}
              className="transform rotate-45"
            />
            <Image
              src="/jeans.png"
              alt="Paint brushes"
              width={1000}
              height={10}
              className="transform rotate-12 h-[15rem] w-[12rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
