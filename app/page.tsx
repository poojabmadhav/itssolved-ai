import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFC]">
      {/* Hero Section */}
      <section className="bg-[#00C49A] px-4 py-4 md:py-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-xl md:text-2xl font-bold text-[#FFFFFC]">
            We solved mundane. You launch legendary.
          </h1>
        </div>
      </section>

      {/* Tools Section - Asymmetric Layout */}
      <section className="px-4 py-16 md:py-32 max-w-7xl mx-auto">
        {/* Product 1: Penny Pincher - Large left block */}
        <Link
          href="/products/penny-pincher"
          className="block mb-20 hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-[#F8E16C] rounded-lg overflow-hidden w-full md:w-3/5 hover:shadow-2xl transition-shadow">
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1579621970563-430f63602d4b?w=800&q=80"
              alt="Penny Pincher"
              className="w-full h-64 object-cover"
            />
            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#000000]">Penny Pincher</h2>
                <span className="text-3xl">💰</span>
              </div>
              <p className="text-lg text-[#000000] mb-6 font-semibold">
                Track where your pennies roll while your data stays on your device.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-[#000000] font-bold hover:underline">
                  Open in New Window <ExternalLink className="w-5 h-5" />
                </div>
                <span className="bg-[#FF3F00] text-[#FFFFFC] px-4 py-2 font-bold text-sm">LIVE</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product 2: Coming Soon - Right block with margin */}
        <Link href="/products/product-2" className="block mb-20 ml-auto w-full md:w-2/5 hover:scale-105 transition-transform duration-300">
          <div className="bg-[#F8E16C] rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Product 2"
              className="w-full h-64 object-cover"
            />
            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#000000]">Product 2</h2>
                <span className="text-3xl">🔮</span>
              </div>
              <p className="text-lg text-[#000000] mb-6 font-semibold">
                Coming soon. Something that will change how you work.
              </p>
              <span className="inline-block text-[#000000] font-bold text-sm">Coming Soon</span>
            </div>
          </div>
        </Link>

        {/* Product 3: Coming Soon - Large left block */}
        <Link href="/products/product-3" className="block hover:scale-105 transition-transform duration-300">
          <div className="bg-[#F8E16C] rounded-lg overflow-hidden w-full md:w-3/5 hover:shadow-2xl transition-shadow">
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Product 3"
              className="w-full h-64 object-cover"
            />
            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#000000]">Product 3</h2>
                <span className="text-3xl">🎯</span>
              </div>
              <p className="text-lg text-[#000000] mb-6 font-semibold">
                Coming soon. More solutions on the way.
              </p>
              <span className="inline-block text-[#000000] font-bold text-sm">Coming Soon</span>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
