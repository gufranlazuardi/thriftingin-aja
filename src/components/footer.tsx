import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 bg-yellow-400 rounded-full" />
              <span className="font-bold">ngagambar</span>
            </div>
            <p className="text-sm text-gray-600">
              ngagambar art materials - P.O. BOX 1234 BANDUNG BARAT
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Contact Us</li>
              <li>Return Policy</li>
              <li>Shipping Information</li>
              <li>Track your Survey</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Product Information</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>General Help</li>
              <li>Videos</li>
              <li>Product Size Key</li>
              <li>Art Advisor</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Subscribe our newsletter</h3>
            <div className="flex gap-2">
              <Input placeholder="Enter your Email" />
              <Button className="bg-purple-600 hover:bg-purple-700">
                Send →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

