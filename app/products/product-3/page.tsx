import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Product3Page() {
  return (
    <div className="min-h-screen bg-[#FFFFFC]">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#FF7F11] hover:text-[#000000] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center py-32">
          <h1 className="text-5xl font-bold text-[#000000] mb-6">Product 3</h1>
          <div className="w-24 h-24 bg-gradient-to-br from-[#F97316] to-[#FBBF24] rounded-full mx-auto mb-8" />
          <p className="text-2xl text-[#6B7280] mb-8">Coming Soon</p>
          <p className="text-lg text-[#9CA3AF] mb-12 max-w-2xl mx-auto">
            We're working on the next big thing. Stay tuned.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-all"
          >
            Explore Other Tools
          </Link>
        </div>
      </div>
    </div>
  );
}
