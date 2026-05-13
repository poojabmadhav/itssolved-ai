import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-5xl font-bold text-content-primary mb-6">About itssolved.ai</h1>
            <p className="text-xl text-content-secondary mb-6">
              We build AI-powered tools designed to solve real problems. Every product we create prioritizes your
              privacy, simplicity, and control.
            </p>
          </div>
          <div className="h-80 bg-gradient-to-br from-primary to-blue rounded-lg" />
        </div>

        <section className="mb-16 border-t border-gray-100 pt-16">
          <h2 className="text-3xl font-bold text-content-primary mb-8">Our Philosophy</h2>
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
              <div key={i} className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-content-secondary text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 border-t border-gray-100 pt-16">
          <h2 className="text-3xl font-bold text-content-primary mb-8">What We're Building</h2>
          <div className="bg-gray-50 rounded-lg border border-gray-100 p-8">
            <p className="text-lg text-content-secondary mb-6">
              PennyPincher is our first product, solving the privacy-first budgeting problem. It's live today and used
              by people who care about their financial privacy.
            </p>
            <p className="text-lg text-content-secondary mb-6">
              More tools are coming. Each one will be built with the same principles: privacy, simplicity, and real
              value.
            </p>
            <Link
              href="/tools/penny-pincher"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-secondary font-semibold rounded-lg hover:bg-opacity-90 transition-all"
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
