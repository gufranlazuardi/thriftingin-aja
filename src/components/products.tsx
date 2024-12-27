import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Shirt",
    price: 12.99,
    image: "/black-shirt.jpg",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 25.99,
    image: "/jacket.jpg",
  },
  {
    id: 3,
    name: "Pants",
    price: 21.99,
    image: "/pants.jpg",
  },
];

export function Products() {
  return (
    <section className="max-w-screen-xl mx-auto py-16 px-[1rem] md:px-[2rem] lg:px-[3rem]">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-yellow-400">★</span>
        <h2 className="text-2xl font-bold">OUR PRODUCT</h2>
      </div>
      <div className="flex gap-4 mb-8">
        <Button
          variant="ghost"
          className="text-gray-600 rounded-none"
        >
          All
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-none">
          Popular
        </Button>
        <Button
          variant="ghost"
          className="text-gray-600 rounded-none"
        >
          New Product
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-4 border-black p-4 rounded-none"
          >
            <div className="aspect-square mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-none"
              />
            </div>
            <h3 className="font-bold mb-2">{product.name}</h3>
            <p className="text-xl font-bold">${product.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button className="bg-purple-600 hover:bg-purple-700 px-8 rounded-none text-sm font-light">
          See More →
        </Button>
      </div>
    </section>
  );
}
