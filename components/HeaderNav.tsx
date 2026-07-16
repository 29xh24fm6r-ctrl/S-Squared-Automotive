"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Inventory", href: "/inventory" },
  { label: "Financing", href: "/financing" },
  { label: "Service", href: "/service" },
  { label: "Sell / Trade", href: "/#trade" },
  { label: "Why S²", href: "/#why" },
  { label: "Visit Us", href: "/#visit" },
];

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 30, fontSize: 14.5, fontWeight: 600, letterSpacing: "0.01em" }}>
      {NAV_LINKS.map((link) => {
        const isCurrent = pathname === link.href;
        return (
          <Link key={link.label} href={link.href} style={{ color: isCurrent ? "#9a6b1f" : "#3a3226" }}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
