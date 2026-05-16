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
        <Link href="/" className="block mb-6">
          <div className="wave-text">
            {"itssolved.ai".split("").map((char, i) => (
              <span key={i}>{char === "." ? "·" : char}</span>
            ))}
          </div>
        </Link>
        <div className="flex gap-8">
          <Link href="/" className={`transition-colors ${isActive("/") ? "text-[#FF7F11] font-semibold" : "text-[#FFFFFC] hover:text-[#FF7F11]"}`}>
            Home
          </Link>
          <Link href="/tools/penny-pincher" className={`transition-colors ${isActive("/tools/penny-pincher") ? "text-[#FF7F11] font-semibold" : "text-[#FFFFFC] hover:text-[#FF7F11]"}`}>
            PennyPincher
          </Link>
        </div>
      </div>
    </nav>
  );
}
