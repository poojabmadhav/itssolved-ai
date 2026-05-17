import Link from "next/link";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";

export default function PennyPincherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#8B2F6B] to-[#FF6B35] relative" style={{backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22><defs><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.02%22 numOctaves=%224%22 result=%22noise%22/></filter></defs><rect fill=%22%23000%22 width=%221200%22 height=%22800%22/><circle cx=%22600%22 cy=%22400%22 r=%22300%22 fill=%22%23FF6B35%22 opacity=%220.3%22 filter=%22url(%23noise)%22/><circle cx=%22900%22 cy=%22200%22 r=%22200%22 fill=%22%238B2F6B%22 opacity=%220.3%22 filter=%22url(%23noise)%22/><circle cx=%22300%22 cy=%22600%22 r=%22250%22 fill=%221a9aa2%22 opacity=%220.2%22 filter=%22url(%23noise)%22/></svg>')", backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>

      {/* Live Demo */}
      <section className="max-w-5xl mx-auto px-4 py-4 border-b border-orange-400/30">
        <div className="rounded-lg border border-orange-400/30 overflow-hidden bg-white/95 mb-2 shadow-2xl backdrop-blur">
          <iframe
            src="https://penny-pincher-eight.vercel.app"
            className="w-full h-[800px] border-0"
            title="PennyPincher Live Demo"
          />
        </div>
        <div className="p-4 bg-white/90 border border-orange-400/30 rounded-lg backdrop-blur">
          <p className="text-[#111827] text-sm">
            💡 <strong>Tip:</strong> Try uploading a sample CSV to see the full experience. Download a real statement from your bank to get started.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-8 border-b border-orange-400/30">
        <h3 className="text-3xl font-bold text-white mb-8">Features</h3>
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
            <div key={i} className="p-8 bg-white/90 rounded-lg border border-orange-400/30 hover:border-orange-400 transition-colors backdrop-blur shadow-lg">
              <h4 className="text-xl font-bold text-[#111827] mb-3">{feature.title}</h4>
              <p className="text-[#6B7280] text-sm mb-6">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF6B35]" />
                    <span className="text-sm text-[#6B7280]">{item}</span>
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
