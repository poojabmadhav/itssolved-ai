"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-[#000000] sticky top-0 z-50">
      <div className="max-w-full px-4 py-6 md:py-8">
        <Link href="/" className="flex items-center gap-4 mb-6">
          {/* Logo: i, t, s as power button */}
          <svg width="48" height="48" viewBox="0 0 48 48" className="flex-shrink-0">
            {/* Outer circle */}
            <circle cx="24" cy="24" r="22" stroke="#FF7F11" strokeWidth="2" fill="none" />
            {/* Top line (power button arc) */}
            <line x1="24" y1="2" x2="24" y2="10" stroke="#FF7F11" strokeWidth="2" strokeLinecap="round" />
            {/* i, t, s text inside circle */}
            <text x="24" y="28" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#FF7F11" fontFamily="monospace">
              its
            </text>
          </svg>
          <div className="wave-text">
            {"itssolved.ai".split("").map((char, i) => (
              <span key={i}>{char === "." ? "·" : char}</span>
            ))}
          </div>
        </Link>
        <div className="flex gap-8 flex-wrap">
          <Link href="/" className={`transition-colors ${isActive("/") ? "text-[#FF7F11] font-semibold" : "text-[#FFFFFC] hover:text-[#FF7F11]"}`}>
            Home
          </Link>
          <Link href="/products/penny-pincher" className={`transition-colors ${isActive("/products/penny-pincher") ? "text-[#FF7F11] font-semibold" : "text-[#FFFFFC] hover:text-[#FF7F11]"}`}>
            Penny Pincher
          </Link>
          <Link href="/about" className={`transition-colors ${isActive("/about") ? "text-[#FF7F11] font-semibold" : "text-[#FFFFFC] hover:text-[#FF7F11]"}`}>
            About
          </Link>
          <a href="mailto:hello@itssolved.ai" className="transition-colors text-[#FFFFFC] hover:text-[#FF7F11]">
            Ask for more
          </a>
          <a href="mailto:hello@itssolved.ai?subject=I%20have%20something%20mundane%20to%20solve" className="transition-colors text-[#FFFFFC] hover:text-[#FF7F11]">
            Share your mundane
          </a>
        </div>
      </div>
    </nav>
  );
}
