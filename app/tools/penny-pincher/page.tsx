import Link from "next/link";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";

export default function PennyPincherPage() {
  return (
    <div className="min-h-screen bg-warm-greige">
      {/* Header with CTA Button at Top */}
      <section className="border-b border-taupe-charcoal border-opacity-20 bg-warm-greige sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl font-bold text-content-primary">PennyPincher</h1>
            <p className="text-content-secondary text-sm">No tracking. No subscriptions or charges. No accounts creation. Just your data, local on your device.</p>
          </div>
          <a
            href="https://penny-pincher-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-taupe-charcoal text-cream-white font-semibold rounded-lg hover:bg-near-black transition-all"
          >
            open in new window <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Live Demo */}
      <section className="max-w-5xl mx-auto px-4 py-4 border-b border-taupe-charcoal border-opacity-20">
        <div className="rounded-lg border border-taupe-charcoal border-opacity-30 overflow-hidden bg-soft-ivory mb-2">
          <iframe
            src="https://penny-pincher-app.vercel.app"
            className="w-full h-[600px] border-0"
            title="PennyPincher Live Demo"
          />
        </div>
        <div className="p-4 bg-taupe-charcoal bg-opacity-10 border border-taupe-charcoal border-opacity-20 rounded-lg">
          <p className="text-taupe-charcoal text-sm">
            💡 <strong>Tip:</strong> Try uploading a sample CSV to see the full experience. Download a real statement
            from your bank to get started.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-8 border-b border-taupe-charcoal border-opacity-20">
        <h3 className="text-3xl font-bold text-content-primary mb-8">Features</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Multi-Bank CSV Import",
              description: "Supports 11+ banks including Chase, Bank of America, Capital One, Discover, Schwab, Citi, Mint, YNAB, and more.",
              items: ["Chase", "Bank of America", "Capital One", "Discover", "Schwab", "Citi", "Mint", "YNAB", "AmEx", "Wells Fargo"],
            },
            {
              title: "Smart Categorization",
              description: "Automatic category detection with override rules. Teach the app how you categorize spending.",
              items: ["Auto-categorization", "Custom rules", "Merchant mapping", "Save preferences"],
            },
            {
              title: "Rich Visualizations",
              description: "See where your money goes with interactive charts and powerful filters.",
              items: ["Donut chart breakdown", "Cash flow bars", "Multi-year filtering", "Drill-down insights"],
            },
            {
              title: "Data Export & Privacy",
              description: "Download and export your data in standard formats. Complete control.",
              items: ["CSV export (re-uploadable)", "PDF dashboard", "No accounts needed", "No tracking"],
            },
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-soft-ivory rounded-lg border border-taupe-charcoal border-opacity-20 hover:border-taupe-charcoal transition-colors">
              <h4 className="text-xl font-bold text-content-primary mb-3">{feature.title}</h4>
              <p className="text-content-secondary text-sm mb-6">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-taupe-charcoal" />
                    <span className="text-sm text-content-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
