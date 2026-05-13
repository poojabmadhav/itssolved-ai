import Link from "next/link";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";

export default function PennyPincherPage() {
  return (
    <div className="min-h-screen bg-[#B9A89B]">

      {/* Live Demo */}
      <section className="max-w-5xl mx-auto px-4 py-4 border-b border-[#6C6661] border-opacity-20">
        <div className="rounded-lg border border-[#6C6661] border-opacity-30 overflow-hidden bg-[#EFEBE4] mb-2">
          <iframe
            src="https://penny-pincher-eight.vercel.app"
            className="w-full h-[800px] border-0"
            title="PennyPincher Live Demo"
          />
        </div>
        <div className="p-4 bg-[#EFEBE4] border border-[#6C6661] border-opacity-30 rounded-lg">
          <p className="text-[#221F1E] text-sm">
            💡 <strong>Tip:</strong> Try uploading a sample CSV to see the full experience. Download a real statement from your bank to get started.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-8 border-b border-[#6C6661] border-opacity-20">
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
            <div key={i} className="p-8 bg-[#EFEBE4] rounded-lg border border-[#6C6661] border-opacity-20 hover:border-[#6C6661] transition-colors">
              <h4 className="text-xl font-bold text-content-primary mb-3">{feature.title}</h4>
              <p className="text-content-secondary text-sm mb-6">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6C6661]" />
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
