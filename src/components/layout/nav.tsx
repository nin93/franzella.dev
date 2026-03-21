"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

const PATHS = [
  {
    href: "/",
    label: ".me",
  },
  {
    href: "/projects",
    label: ".projects",
  },
  {
    href: "/photography",
    label: ".photography",
  },
];

export default function Nav() {
  const currentPath = usePathname();

  return (
    <nav className="flex gap-x-6 lg:gap-x-10">
      {PATHS.map(({ href, label }) => (
        <Link
          href={href}
          key={`nav_${label}`}
          className={`hover:text-foreground-dark transition-colors ${href === currentPath ? "text-foreground-dark" : "text-muted-foreground-dark"}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
