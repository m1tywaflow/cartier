"use client";

import Link from "next/link";

export const NAV_LINKS = [
  { label: "Jawellery", href: "/jawellery" },
  { label: "Watches", href: "/watches" },
];

export function HeaderNavLinks() {
  return (
    <>
      <nav className="flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white/80  hover:text-white text-xl transition-colors duration-200"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: "italic",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
