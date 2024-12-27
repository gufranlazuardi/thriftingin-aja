import { Button } from '@/components/ui/button'

export function Connect() {
  return (
    <section className="container py-16 text-center">
      <div className="inline-block bg-green-600 px-4 py-2 rounded-full text-white mb-4">
        Connect
      </div>
      <h2 className="text-3xl font-bold mb-8">With ngagambar</h2>
      <div className="flex justify-center gap-4">
        <Button className="bg-purple-600 hover:bg-purple-700">Instagram</Button>
        <Button className="bg-purple-600 hover:bg-purple-700">Twitter</Button>
        <Button className="bg-purple-600 hover:bg-purple-700">Youtube</Button>
        <Button className="bg-purple-600 hover:bg-purple-700">Tiktok</Button>
      </div>
    </section>
  )
}

