"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-secondary font-semibold" : "text-content-secondary hover:text-secondary";
  };

  return (
    <nav className="bg-white border-b border-[#E5E7EB] shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-start justify-between gap-4 mb-2 md:mb-0">
          <Link href="/" className="flex flex-col flex-1">
            <span className="text-2xl md:text-5xl font-bold text-[#F97316] leading-tight">itssolved.ai</span>
            <span className="text-xs md:text-base font-semibold text-[#6B7280]">We solved the boring stuff. Go solve what matters.</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center shrink-0">
            <Link href="/" className={`transition-colors ${isActive("/") ? "text-[#F97316] font-semibold" : "text-[#6B7280] hover:text-[#111827]"}`}>
              Home
            </Link>
            <Link href="/tools/penny-pincher" className={`transition-colors ${isActive("/tools/penny-pincher") ? "text-[#F97316] font-semibold" : "text-[#6B7280] hover:text-[#111827]"}`}>
              PennyPincher
            </Link>
          </div>
        </div>
        <div className="flex md:hidden gap-4 justify-end text-sm">
          <Link href="/" className={`transition-colors ${isActive("/") ? "text-[#F97316] font-semibold" : "text-[#6B7280]"}`}>
            Home
          </Link>
          <Link href="/tools/penny-pincher" className={`transition-colors ${isActive("/tools/penny-pincher") ? "text-[#F97316] font-semibold" : "text-[#6B7280]"}`}>
            PennyPincher
          </Link>
        </div>
      </div>
    </nav>
  );
}
