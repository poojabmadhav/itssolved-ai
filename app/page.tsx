import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFC]">
      {/* Hero Section */}
      <section className="bg-[#000000] px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFFFFC] mb-6">
            We solved mundane.<br />You launch legendary.
          </h1>
          <p className="text-lg md:text-xl text-[#BEB7A4] max-w-2xl mx-auto">
            Privacy-first tools designed for people who refuse to compromise.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 bg-[#FF3F00]" />

      {/* Tools Section - Asymmetric Layout */}
      <section className="px-4 py-16 md:py-32 max-w-7xl mx-auto">
        {/* Tool 1: PennyPincher - Large left block */}
        <a
          href="https://penny-pincher-eight.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-20 hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-[#FF7F11] p-8 md:p-12 w-full md:w-3/5 rounded-none hover:shadow-2xl transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#000000]">PennyPincher</h2>
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
        </a>

        {/* Tool 2: Coming Soon - Right block with margin */}
        <Link href="/tools/tool-2" className="block mb-20 ml-auto w-full md:w-2/5 hover:scale-105 transition-transform duration-300">
          <div className="bg-[#BEB7A4] p-8 md:p-12 rounded-none hover:shadow-2xl transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#000000]">Tool 2</h2>
              <span className="text-3xl">🔮</span>
            </div>
            <p className="text-lg text-[#000000] mb-6 font-semibold">
              Coming soon. Something that will change how you work.
            </p>
            <span className="inline-block text-[#000000] font-bold text-sm">Coming Soon</span>
          </div>
        </Link>

        {/* Tool 3: Coming Soon - Large left block on black */}
        <Link href="/tools/tool-3" className="block hover:scale-105 transition-transform duration-300">
          <div className="bg-[#000000] p-8 md:p-12 w-full md:w-3/5 rounded-none hover:shadow-2xl transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#FF7F11]">Tool 3</h2>
              <span className="text-3xl">🎯</span>
            </div>
            <p className="text-lg text-[#FFFFFC] mb-6 font-semibold">
              Coming soon. More solutions on the way.
            </p>
            <span className="inline-block text-[#FF7F11] font-bold text-sm">Coming Soon</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
