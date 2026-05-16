import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#F97316] hover:text-[#111827] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-5xl font-bold text-[#111827] mb-6">About itssolved.ai</h1>
            <p className="text-xl text-[#6B7280] mb-6">
              We build AI-powered tools designed to solve real problems. Every product we create prioritizes your
              privacy, simplicity, and control.
            </p>
          </div>
          <div className="h-80 bg-gradient-to-br from-[#F97316] to-[#FBBF24] rounded-lg" />
        </div>

        <section className="mb-16 border-t border-[#E5E7EB] pt-16">
          <h2 className="text-3xl font-bold text-[#111827] mb-8">Our Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Privacy First",
                description:
                  "Your data is yours. We don't track, sell, or monetize user information. Period. Everything stays on your device.",
              },
              {
                title: "Solve Real Problems",
                description:
                  "We build tools for genuine pain points. Not another todo list. Not another email tool. Real solutions to real problems.",
              },
              {
                title: "Simple Design",
                description:
                  "Complexity is the enemy. Our tools should work intuitively without a 50-page manual. If it's not simple, we redesign.",
              },
              {
                title: "Open & Portable",
                description:
                  "Your data should be portable. Export as CSV, PDF, or standard formats. Never locked in. Always in control.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-lg border border-[#E5E7EB] hover:border-[#F97316] transition-colors">
                <h3 className="text-xl font-bold text-[#111827] mb-3">{item.title}</h3>
                <p className="text-[#6B7280] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 border-t border-[#E5E7EB] pt-16">
          <h2 className="text-3xl font-bold text-[#111827] mb-8">What We're Building</h2>
          <div className="bg-white rounded-lg border border-[#E5E7EB] p-8">
            <p className="text-lg text-[#6B7280] mb-6">
              PennyPincher is our first product, solving the privacy-first budgeting problem. It's live today and used
              by people who care about their financial privacy.
            </p>
            <p className="text-lg text-[#6B7280] mb-6">
              More tools are coming. Each one will be built with the same principles: privacy, simplicity, and real
              value.
            </p>
            <Link
              href="/tools/penny-pincher"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-all"
            >
              Explore PennyPincher
            </Link>
          </div>
        </section>

        <section className="text-center border-t border-gray-100 pt-16">
          <h2 className="text-3xl font-bold text-content-primary mb-6">Get In Touch</h2>
          <p className="text-lg text-content-secondary mb-8 max-w-2xl mx-auto">
            Have feedback? Want to collaborate? Just say hello.
          </p>
          <a
            href="mailto:hello@itssolved.ai"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-secondary font-semibold rounded-lg hover:bg-opacity-90 transition-all"
          >
            Send us an email
          </a>
        </section>
      </div>
    </div>
  );
}
