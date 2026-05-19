import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFC]">

      {/* Header */}
      <section className="bg-[#156064] px-6 md:px-10 py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#FFFFFC]/50 hover:text-[#FFFFFC] transition-colors text-sm mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-[#F8E16C] tracking-tight">
            About
          </h1>
          <p className="text-lg text-[#FFFFFC]/70 mt-4 max-w-xl font-light">
            AI-powered tools built to solve real problems — with privacy and simplicity at the core.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-20">

        {/* Philosophy */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs tracking-[0.2em] text-[#156064] uppercase font-medium">Philosophy</span>
            <div className="flex-1 h-px bg-[#156064]/15" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Privacy First",
                description:
                  "Your data is yours. We don't track, sell, or monetize user information. Everything stays on your device.",
              },
              {
                title: "Solve Real Problems",
                description:
                  "Not another todo list. We build tools for genuine pain points — problems that actually slow people down.",
              },
              {
                title: "Simple by Design",
                description:
                  "Complexity is the enemy. Our tools work intuitively without a manual. If it needs explaining, we redesign it.",
              },
              {
                title: "Open & Portable",
                description:
                  "Your data should be portable. Export in standard formats. Never locked in, always in control.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-black/8 p-8 hover:border-[#00C49A] transition-colors"
              >
                <h3 className="text-lg font-bold text-[#000000] mb-3">{item.title}</h3>
                <p className="text-sm text-[#000000]/55 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What we're building */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs tracking-[0.2em] text-[#156064] uppercase font-medium">What we&apos;re building</span>
            <div className="flex-1 h-px bg-[#156064]/15" />
          </div>

          <p className="text-base text-[#000000]/60 leading-relaxed mb-6 max-w-2xl">
            PennyPincher is our first product — privacy-first budgeting, live today. More tools are in
            development, each built with the same principles: privacy, simplicity, and real value.
          </p>

          <Link
            href="/products/penny-pincher"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#156064] hover:text-[#00C49A] transition-colors"
          >
            Explore PennyPincher →
          </Link>
        </section>

        {/* Contact */}
        <section className="border-t border-black/10 pt-20">
          <h2 className="text-2xl font-bold text-[#000000] mb-4">Get in touch</h2>
          <p className="text-sm text-[#000000]/55 max-w-md">
            Use the <Link href="/submit" className="text-[#156064] hover:text-[#00C49A] transition-colors">Need a solution?</Link> form or <Link href="/showcase" className="text-[#156064] hover:text-[#00C49A] transition-colors">Showcase Your Product</Link> to reach us.
          </p>
        </section>

      </div>
    </div>
  );
}
