import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="max-w-screen-xl mx-auto border-t border-gray-200 pt-16 pb-8 px-[1rem] md:px-[2rem] lg:px-[3rem]">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 bg-yellow-400 rounded-full" />
              <span className="font-bold">thriftingin aja</span>
            </div>
            <p className="text-sm text-gray-600">
              thriftingin aja - Menara Astra, Jakarta Pusat
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">Return Policy</li>
              <li className="cursor-pointer">Shipping Information</li>
              <li className="cursor-pointer">Track your Survey</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Product Information</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="cursor-pointer">General Help</li>
              <li className="cursor-pointer">Videos</li>
              <li className="cursor-pointer">Product Size Key</li>
              <li className="cursor-pointer">Art Advisor</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">
              Subscribe our newsletter
            </h3>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your Email"
                className="rounded-none"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 rounded-none">
                Send →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
