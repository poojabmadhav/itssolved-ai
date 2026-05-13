import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Tool2Page() {
  return (
    <div className="min-h-screen bg-[#B9A89B]">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center py-32">
          <h1 className="text-5xl font-bold text-content-primary mb-6">Tool 2</h1>
          <div className="w-24 h-24 bg-gradient-to-br from-orange to-yellow rounded-full mx-auto mb-8" />
          <p className="text-2xl text-content-secondary mb-8">Coming Soon</p>
          <p className="text-lg text-content-tertiary mb-12 max-w-2xl mx-auto">
            We're building something special. Check back soon for updates.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#6C6661] text-[#F6F5F2] font-semibold rounded-lg hover:bg-[#221F1E] transition-all"
          >
            Explore Other Tools
          </Link>
        </div>
      </div>
    </div>
  );
}
