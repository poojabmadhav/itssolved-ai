"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-[#BEB7A4] sticky top-0 z-50">
      <div className="max-w-full px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            {/* Logo: i, t, s as power button */}
            <svg width="40" height="40" viewBox="0 0 48 48" className="flex-shrink-0">
              {/* Outer circle */}
              <circle cx="24" cy="24" r="22" stroke="#FF3F00" strokeWidth="2" fill="none" />
              {/* Top line (power button arc) */}
              <line x1="24" y1="2" x2="24" y2="10" stroke="#FF3F00" strokeWidth="2" strokeLinecap="round" />
              {/* i, t, s text inside circle */}
              <text x="24" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FF3F00" fontFamily="monospace">
                its
              </text>
            </svg>
            {/* Wavy text - smaller */}
            <style>{`
              .navbar-wave-text span {
                display: inline-block;
                animation: wave 1.5s ease-in-out infinite;
                font-weight: bold;
                font-size: 1.25rem;
              }
              .navbar-wave-text span:nth-child(odd) { color: #FF7F11; }
              .navbar-wave-text span:nth-child(even) { color: #FF3F00; }
              .navbar-wave-text span:nth-child(1)  { animation-delay: 0.0s; }
              .navbar-wave-text span:nth-child(2)  { animation-delay: 0.1s; }
              .navbar-wave-text span:nth-child(3)  { animation-delay: 0.2s; }
              .navbar-wave-text span:nth-child(4)  { animation-delay: 0.3s; }
              .navbar-wave-text span:nth-child(5)  { animation-delay: 0.4s; }
              .navbar-wave-text span:nth-child(6)  { animation-delay: 0.5s; }
              .navbar-wave-text span:nth-child(7)  { animation-delay: 0.6s; }
              .navbar-wave-text span:nth-child(8)  { animation-delay: 0.7s; }
              .navbar-wave-text span:nth-child(9)  { animation-delay: 0.8s; }
              .navbar-wave-text span:nth-child(10) { animation-delay: 0.9s; }
              .navbar-wave-text span:nth-child(11) { animation-delay: 1.0s; }
              .navbar-wave-text span:nth-child(12) { animation-delay: 1.1s; }
            `}</style>
            <div className="navbar-wave-text">
              {"itssolved.ai".split("").map((char, i) => (
                <span key={i}>{char === "." ? "·" : char}</span>
              ))}
            </div>
          </Link>

          {/* Menu - Right aligned */}
          <div className="flex gap-6 items-center flex-wrap justify-end">
            <Link href="/" className={`transition-colors text-sm font-medium ${isActive("/") ? "text-[#FF3F00] font-bold" : "text-[#000000] hover:text-[#FF7F11]"}`}>
              Home
            </Link>
            <Link href="/products/penny-pincher" className={`transition-colors text-sm font-medium ${isActive("/products/penny-pincher") ? "text-[#FF3F00] font-bold" : "text-[#000000] hover:text-[#FF7F11]"}`}>
              Penny Pincher
            </Link>
            <Link href="/about" className={`transition-colors text-sm font-medium ${isActive("/about") ? "text-[#FF3F00] font-bold" : "text-[#000000] hover:text-[#FF7F11]"}`}>
              About
            </Link>
            <a href="mailto:hello@itssolved.ai" className="transition-colors text-sm font-medium text-[#000000] hover:text-[#FF7F11]">
              Ask for more
            </a>
            <a href="mailto:hello@itssolved.ai?subject=I%20have%20something%20mundane%20to%20solve" className="transition-colors text-sm font-medium text-[#000000] hover:text-[#FF7F11]">
              Share your mundane
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
