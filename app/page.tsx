import Link from "next/link";
import { ExternalLink } from "lucide-react";
import RotatingTagline from "@/components/RotatingTagline";
import ProductImage from "@/components/ProductImage";

export default function Home() {
  return (
    <>
    <div className="bg-[#FFFFFC] flex-1">

      {/* Products */}
      <section className="max-w-5xl mx-auto px-4 md:px-10 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Penny Pincher — Live */}
          <Link href="/products/penny-pincher" className="group">
            <div className="bg-[#156064] h-full hover:shadow-2xl transition-shadow duration-300">
              {/* Green border frame — screenshot sits inside with green showing as border */}
              <div className="h-48 bg-[#00C49A] p-3">
                <div className="w-full h-full overflow-hidden">
                  <ProductImage src="/penny-pincher-preview.png" alt="Penny Pincher app preview" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] tracking-[0.2em] bg-[#F8E16C] text-black px-2.5 py-1 font-bold uppercase">
                    Live
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FFFFFC]/25 group-hover:text-[#FFFFFC]/60 transition-colors" />
                </div>
                <h2 className="text-xl font-bold text-[#FFFFFC] mb-1">Penny Pincher</h2>
                <p className="text-[10px] tracking-[0.15em] text-[#00C49A] uppercase mb-3">
                  Privacy-first finance
                </p>
                <p className="text-sm text-[#FFFFFC]/50 leading-relaxed">
                  Track where your pennies roll while your data stays on your device.
                  No cloud, no subscriptions.
                </p>
                <p className="text-[10px] text-[#FFFFFC]/25 mt-4 pt-4 border-t border-[#FFFFFC]/10">
                  Built by ItsSolved.ai
                </p>
              </div>
            </div>
          </Link>

          {/* Product 2 — Coming Soon */}
          <div>
            <div className="border border-black/8 h-full">
              <div className="h-36 bg-black/[0.03]" />
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-[10px] tracking-[0.2em] border border-black/10 text-black/25 px-2.5 py-1 uppercase">
                    Soon
                  </span>
                </div>
                <h2 className="text-xl font-bold text-black/20 mb-1">Coming Soon</h2>
                <p className="text-[10px] tracking-[0.15em] text-black/15 uppercase mb-3">
                  In development
                </p>
                <p className="text-sm text-black/15 leading-relaxed">
                  Another problem, solved. Details coming soon.
                </p>
              </div>
            </div>
          </div>

          {/* Product 3 — Coming Soon */}
          <div>
            <div className="border border-black/8 h-full">
              <div className="h-36 bg-black/[0.03]" />
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-[10px] tracking-[0.2em] border border-black/10 text-black/25 px-2.5 py-1 uppercase">
                    Soon
                  </span>
                </div>
                <h2 className="text-xl font-bold text-black/20 mb-1">Coming Soon</h2>
                <p className="text-[10px] tracking-[0.15em] text-black/15 uppercase mb-3">
                  In development
                </p>
                <p className="text-sm text-black/15 leading-relaxed">
                  More solutions on the way. Stay tuned.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>

    {/* Green strip — outside white div, pins to bottom of flex column */}
    <section className="bg-[#156064] px-6 py-8 md:py-12 text-center">
      <RotatingTagline />
    </section>
    </>
  );
}
