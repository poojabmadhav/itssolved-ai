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
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-5xl font-bold text-secondary">itssolved.ai</span>
          <span className="text-base font-semibold text-content-secondary">We solved the boring stuff. Go solve what matters.</span>
        </Link>
        <div className="flex gap-8 items-center">
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
