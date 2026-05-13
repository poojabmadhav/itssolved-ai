"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-secondary font-semibold" : "text-content-secondary hover:text-secondary";
  };

  return (
    <nav className="bg-[#B9A89B] border-b border-[#6C6661] border-opacity-20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-start justify-between gap-4 mb-2 md:mb-0">
          <Link href="/" className="flex flex-col flex-1">
            <span className="text-2xl md:text-5xl font-bold text-secondary leading-tight">itssolved.ai</span>
            <span className="text-xs md:text-base font-semibold text-content-secondary">We solved the boring stuff. Go solve what matters.</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center shrink-0">
            <Link href="/" className={`transition-colors ${isActive("/")}`}>
              Home
            </Link>
            <Link href="/tools/penny-pincher" className={`transition-colors ${isActive("/tools/penny-pincher")}`}>
              PennyPincher
            </Link>
          </div>
        </div>
        <div className="flex md:hidden gap-4 justify-end text-sm">
          <Link href="/" className={`transition-colors ${isActive("/")}`}>
            Home
          </Link>
          <Link href="/tools/penny-pincher" className={`transition-colors ${isActive("/tools/penny-pincher")}`}>
            PennyPincher
          </Link>
        </div>
      </div>
    </nav>
  );
}
