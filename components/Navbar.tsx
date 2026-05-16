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
            <svg width="44" height="44" viewBox="0 0 120 120" className="flex-shrink-0">
              {/* Outer circle dashes */}
              <circle cx="60" cy="60" r="48" fill="none" stroke="#5A9F8C" strokeWidth="3" strokeDasharray="8,6" opacity="0.8" />

              {/* Gear background */}
              <g id="gear">
                {/* Gear teeth */}
                <path d="M 60 15 L 70 25 L 72 15 L 82 22 L 77 28 L 85 35 L 73 38 L 78 48 L 65 45 L 68 58 L 60 58 L 62 45 L 49 48 L 54 38 L 42 35 L 50 28 L 45 22 L 55 15 L 57 25 Z" fill="#5A9F8C" />

                {/* Center circle */}
                <circle cx="60" cy="60" r="28" fill="white" stroke="#5A9F8C" strokeWidth="2" />

                {/* Checkmark inside */}
                <g transform="translate(60, 60)">
                  <polyline points="-8,0 -2,6 10,-8" fill="none" stroke="#5A9F8C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
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
            <Link href="/" className={`transition-colors text-sm font-medium ${isActive("/") ? "text-[#156064] font-bold" : "text-[#156064] hover:text-[#00C49A]"}`}>
              Home
            </Link>
            <Link href="/about" className={`transition-colors text-sm font-medium ${isActive("/about") ? "text-[#156064] font-bold" : "text-[#156064] hover:text-[#00C49A]"}`}>
              About
            </Link>
            <a href="mailto:hello@itssolved.ai" className="transition-colors text-sm font-medium text-[#156064] hover:text-[#00C49A]">
              Ask for more
            </a>
            <a href="mailto:hello@itssolved.ai?subject=I%20have%20something%20mundane%20to%20solve" className="transition-colors text-sm font-medium text-[#156064] hover:text-[#00C49A]">
              Share your mundane
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
