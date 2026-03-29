"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { NAV_PATHS } from "@/constants/nav-paths";

export default function Nav() {
  const currentPath = usePathname();

  return (
    <nav className="flex gap-x-6 lg:gap-x-10">
      {NAV_PATHS.map(({ href, label }) => (
        <Link
          href={href}
          key={`nav_${label}`}
          className={`hover:text-foreground-strong transition-colors ${href === currentPath ? "text-foreground-strong" : "text-foreground-dimmed"}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
