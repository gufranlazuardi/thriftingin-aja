"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function Discount() {
  const [code, setCode] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="max-w-screen-xl mx-auto py-16">
      <div className="grid md:grid-cols-5 gap-4 bg-[#FF5C35] rounded-none p-8">
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get a discount by entering a{" "}
            <span className="text-blue-900">unique code</span>
          </h2>
          <p className="text-white mb-6">
            Limited and exclusive promotions, get them now
          </p>
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Ex: 41hu213k"
            className="bg-white mb-4 rounded-none"
          />
          <div className="flex items-center gap-4 mb-4">
            <Checkbox
              checked={agreed}
              onCheckedChange={(checked) =>
                setAgreed(checked as boolean)
              }
              className="bg-white"
            />
            <label className="text-white text-sm">
              Agree to the terms and conditions
            </label>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 rounded-none">
            Use Code
          </Button>
        </div>
        <div className="md:col-span-2 bg-green-600 rounded-none p-8 flex items-center justify-center">
          <div className="text-center">
            <span className="text-6xl font-bold text-yellow-400">
              25%
            </span>
            <br />
            <span className="text-2xl text-white">OFF</span>
          </div>
        </div>
      </div>
    </section>
  );
}
