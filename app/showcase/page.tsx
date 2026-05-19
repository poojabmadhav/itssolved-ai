import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-[#FFFFFC]">
      <section className="bg-[#156064] px-6 md:px-10 py-16">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#FFFFFC]/50 hover:text-[#FFFFFC] transition-colors text-sm mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#F8E16C] tracking-tight mb-3">
            Showcase Your Product
          </h1>
          <p className="text-[#FFFFFC]/65 font-light">
            Have a tool that solves a real problem? We&apos;d love to feature it.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 md:px-10 py-20">
        <div className="border border-black/8 p-10 text-center">
          <p className="text-black/40 text-sm">
            Showcase submission form coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
