"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import GearLogo from "./GearLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/showcase", label: "Showcase Your Product" },
    { href: "/submit", label: "Need a solution?" },
  ];

  const linkClass = (href: string) =>
    `font-medium transition-colors ${
      pathname === href ? "text-[#F8E16C]" : "text-[#FFFFFC]/70 hover:text-[#FFFFFC]"
    }`;

  return (
    <nav className="bg-[#156064] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* Main row */}
        <div className="flex items-center justify-between py-4 md:py-6">

          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 md:gap-5 flex-shrink-0"
            onClick={() => setOpen(false)}
          >
            <div className="md:hidden"><GearLogo size={36} /></div>
            <div className="hidden md:block"><GearLogo size={64} /></div>

            <div className="flex flex-col gap-0.5 md:gap-1.5">
              <span className="text-xl md:text-4xl lg:text-5xl tracking-tight leading-none">
                <span className="font-light text-[#FFFFFC]">Its</span>
                <span className="font-bold text-[#F8E16C]">Solved</span>
                <span className="font-light text-[#FFFFFC]/55">.ai</span>
              </span>
              <span className="hidden md:block text-base md:text-lg text-[#FFFFFC]/50 font-light tracking-wide">
                We solved mundane. You launch legendary.
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className={`text-base md:text-lg ${linkClass(href)}`}>
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#FFFFFC] p-1 flex-shrink-0"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t border-[#FFFFFC]/15 py-5 flex flex-col gap-5 pb-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-lg ${linkClass(href)}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}
