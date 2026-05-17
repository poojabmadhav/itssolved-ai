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
            <svg width="50" height="50" viewBox="0 0 100 100" className="flex-shrink-0">
              <defs>
                <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5FA084" />
                  <stop offset="100%" stopColor="#7CB342" />
                </linearGradient>
              </defs>

              {/* Outer dashed circle */}
              <circle cx="50" cy="50" r="42" fill="none" stroke="#5FA084" strokeWidth="2.5" strokeDasharray="5,4" strokeLinecap="round" />

              {/* Gear teeth - 8 teeth */}
              <g fill="#5FA084">
                {/* Top tooth */}
                <rect x="45" y="10" width="10" height="12" rx="2" />
                {/* Top-right */}
                <rect x="70" y="18" width="10" height="10" rx="2" transform="rotate(45 75 23)" />
                {/* Right */}
                <rect x="78" y="45" width="12" height="10" rx="2" />
                {/* Bottom-right */}
                <rect x="70" y="72" width="10" height="10" rx="2" transform="rotate(45 75 77)" />
                {/* Bottom */}
                <rect x="45" y="78" width="10" height="12" rx="2" />
                {/* Bottom-left */}
                <rect x="20" y="72" width="10" height="10" rx="2" transform="rotate(45 25 77)" />
                {/* Left */}
                <rect x="10" y="45" width="12" height="10" rx="2" />
                {/* Top-left */}
                <rect x="20" y="18" width="10" height="10" rx="2" transform="rotate(45 25 23)" />
              </g>

              {/* Center white circle */}
              <circle cx="50" cy="50" r="28" fill="white" />

              {/* Checkmark */}
              <g stroke="#5FA084" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="40,50 47,57 63,41" />
              </g>

              {/* Gradient overlay on bottom-left */}
              <circle cx="60" cy="65" r="8" fill="url(#gearGrad)" opacity="0.6" />
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
