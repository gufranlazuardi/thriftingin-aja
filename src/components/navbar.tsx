"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { AlignCenter } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-[1rem] md:px-[2rem] lg:px-[3rem]">
      <div className="flex items-center gap-8">
        <Link href="/product" className="text-sm hidden md:inline">
          Sell
        </Link>
        <Link href="/about" className="text-sm hidden md:inline">
          Contact
        </Link>
        <Link href="/about" className="text-sm hidden md:inline">
          About
        </Link>
      </div>
      <Link href="/" className="flex items-center gap-2">
        <div className="h-6 w-6 bg-yellow-400 rounded-full" />
        <span className="text-xl font-bold">thriftingin yuk</span>
      </Link>
      <div className="hidden md:flex">
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-none py-6 px-8">
          <div className="flex gap-[1rem] items-center">
            <p>SHOP NOW</p>
            <p>✨</p>
          </div>
        </Button>
      </div>
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700 rounded-none">
              <AlignCenter />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4">
              <Link
                href="/product"
                onClick={() => setOpen(false)}
                className="text-sm"
              >
                Sell
              </Link>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="text-sm"
              >
                Contact
              </Link>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="text-sm"
              >
                About
              </Link>
              <Button
                className="bg-purple-600 hover:bg-purple-700 rounded-none py-6 px-8 mt-4"
                onClick={() => setOpen(false)}
              >
                SHOP NOW ✨
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
