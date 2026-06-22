"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TopBarProps = {
  className?: string;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favourites", label: "Favourites" },
];

export default function TopBar({ className = "" }: TopBarProps) {
  const pathname = usePathname();

  return (
    <header className={`border-b-2 border-[#121212] bg-[#efc51d] px-4 py-3 ${className}`.trim()}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
        <p className="text-sm font-bold uppercase tracking-[0.18em]">Wanderlust</p>

        <nav className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full border-2 border-[#121212] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] transition ${
                  isActive
                    ? "bg-[#121212] text-[#fff7e8]"
                    : "bg-[#efe6da] text-[#1a1816] hover:bg-[#e2d3bf]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
