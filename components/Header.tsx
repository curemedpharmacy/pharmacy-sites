"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBrandConfig } from "@/lib/brands";
import { Menu, X, Phone } from "lucide-react";

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
  const hasBrandLogo = brand.slug === "curemed" || brand.slug === "saimz";
  const logoPath =
    brand.slug === "curemed"
      ? "/images/curemed/logo.png"
      : "/images/saimz/logo.png";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-2.5">
        {/* ===== LOGO - مكبر ===== */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {hasBrandLogo ? (
            <Image
              src={logoPath}
              alt={brand.name}
              width={320}
              height={80}
              priority
              className="h-20 w-auto object-contain transition-transform duration-200 hover:scale-[1.02] md:h-24"
            />
          ) : (
            <span className="font-display text-2xl font-semibold text-ink">
              {brand.shortName}
            </span>
          )}
        </Link>

        {/* ===== DESKTOP NAVIGATION ===== */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 font-mono text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-200 ${
                  isActive
                    ? "bg-amber/10 text-amber-dark"
                    : "text-ink/80 hover:bg-tan/60 hover:text-amber-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ===== DESKTOP CTA ===== */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-paper transition-all duration-200 hover:bg-amber-dark hover:scale-105 hover:shadow-lg"
        >
          <Phone className="h-4 w-4" />
          Refill / Contact
        </Link>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="relative flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-tan/70 lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* ===== MOBILE NAVIGATION PANEL ===== */}
      <div
        id="mobile-nav-panel"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-4 py-4 sm:px-6">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-h-11 items-center rounded-lg px-4 font-mono text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                  isActive
                    ? "bg-amber/10 text-amber-dark"
                    : "text-ink/80 hover:bg-tan/60 hover:text-amber-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber px-5 font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-paper transition-colors duration-200 hover:bg-amber-dark"
          >
            <Phone className="h-4 w-4" />
            Refill / Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}