import { Button } from "@/components/ui/button";

export function Connect() {
  return (
    <section className="max-w-screen-xl mx-auto py-16 text-center">
      <div className="inline-block bg-green-600 px-4 py-2 rounded-none text-white mb-4">
        Connect
      </div>
      <h2 className="text-3xl font-bold mb-8">
        With thriftingin aja
      </h2>
      <div className="flex justify-center gap-4">
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-none">
          Instagram
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-none">
          Twitter
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-none">
          Youtube
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-none">
          Tiktok
        </Button>
      </div>
    </section>
  );
}
