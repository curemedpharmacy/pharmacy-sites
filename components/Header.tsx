"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBrandConfig } from "@/lib/brands";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Health Notes" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const brand = getBrandConfig();
  const pathname = usePathname();
  const hasBrandLogo = brand.slug === "curemed";
  const logoPath =
    brand.slug === "curemed"
      ? "/images/curemed/logo.png"
      : "/images/saimz/logo.png";

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          {hasBrandLogo ? (
            <Image
              src={logoPath}
              alt={brand.name}
              width={500}
              height={100}
              priority
              className="h-20 w-auto object-contain transition-transform duration-200 hover:scale-[1.03] md:h-22"
            />
          ) : (
            <>
              {/* TODO: add the real Saimz logo asset once it is available. */}
              <span
                className="text-xl font-semibold tracking-tight text-ink"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {brand.shortName}
              </span>
            </>
          )}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition-all duration-200 ease-out ${
                  isActive
                    ? "text-amber"
                    : "text-ink/70 hover:bg-tan/70 hover:text-amber"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-amber px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-paper transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-amber-dark"
        >
          Refill / Contact
        </Link>
      </div>
    </header>
  );
}
