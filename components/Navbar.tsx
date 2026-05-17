"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-[#00C49A] sticky top-0 z-50">
      <div className="max-w-full px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            {/* Logo: Gear with checkmark */}
            <svg width="48" height="48" viewBox="0 0 200 200" className="flex-shrink-0">
              {/* Outer dashed circle */}
              <circle cx="100" cy="100" r="85" fill="none" stroke="#5FA084" strokeWidth="5" strokeDasharray="12,8" strokeLinecap="round" />

              {/* Gear shape */}
              <g fill="#5FA084">
                {/* Top tooth */}
                <path d="M 100 25 L 115 35 L 115 55 L 130 50 L 140 65 L 125 75 L 130 92 L 115 90 L 115 110 L 140 105 L 130 120 L 125 135 L 110 125 L 100 140 L 90 125 L 75 135 L 65 120 L 60 105 L 85 110 L 85 90 L 70 92 L 75 75 L 60 65 L 75 50 L 85 55 L 85 35 Z" />
              </g>

              {/* Center white circle */}
              <circle cx="100" cy="100" r="50" fill="white" />

              {/* Checkmark */}
              <g stroke="#5FA084" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="75,105 90,120 125,80" />
              </g>

              {/* Gradient accent (bottom left of gear) */}
              <defs>
                <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5FA084" />
                  <stop offset="100%" stopColor="#7CB342" />
                </linearGradient>
              </defs>
            </svg>
            {/* Wavy text - smaller */}
            <style>{`
              .navbar-wave-text span {
                display: inline-block;
                animation: wave 1.5s ease-in-out infinite;
                font-weight: bold;
                font-size: 3.5rem;
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
          <div className="flex gap-8 items-center flex-wrap justify-end">
            <Link href="/" className={`transition-colors text-lg font-semibold ${isActive("/") ? "text-[#156064] font-bold" : "text-[#156064] hover:text-[#00C49A]"}`}>
              Home
            </Link>
            <Link href="/about" className={`transition-colors text-lg font-semibold ${isActive("/about") ? "text-[#156064] font-bold" : "text-[#156064] hover:text-[#00C49A]"}`}>
              About
            </Link>
            <a href="mailto:hello@itssolved.ai" className="transition-colors text-lg font-semibold text-[#156064] hover:text-[#00C49A]">
              Ask for more
            </a>
            <a href="mailto:hello@itssolved.ai?subject=I%20have%20something%20mundane%20to%20solve" className="transition-colors text-lg font-semibold text-[#156064] hover:text-[#00C49A]">
              Share your mundane
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
