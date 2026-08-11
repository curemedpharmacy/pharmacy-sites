"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBrandConfig } from "@/lib/brands";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

const saimzNavLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/about", label: "About Saimz" },
  { href: "/locations", label: "Visit Us" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "Help Center" },
];

export function Header() {
  const brand = getBrandConfig();
  const pathname = usePathname();
  const isSaimz = brand.slug === "saimz";
  
  const links = isSaimz ? saimzNavLinks : navLinks;
  const isContactActive = pathname === "/contact";
  
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

  // ============================================================
  // ===== SAIMZ HEADER - منسق مع الهيرو =====
  // ============================================================
  if (isSaimz) {
    return (
      <header className="sticky top-0 z-50 bg-linear-to-br from-[#0A1628]/95 via-[#0F2040]/90 to-[#1A4A7A]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/30 transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
          {/* ===== SAIMZ LOGO ===== */}
          <Link 
            href="/" 
            className="flex items-center shrink-0 group transition-all duration-300"
          >
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-white transition-all duration-300 group-hover:text-[#4A9FFF] group-hover:scale-105">
              SAIMZ
            </span>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 font-mono text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 ${
                    isActive
                      ? "bg-[#4A9FFF]/20 text-[#4A9FFF] shadow-lg shadow-[#4A9FFF]/10"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ===== DESKTOP BUTTON ===== */}
         <Button
  asChild
  className={`hidden lg:inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-300 active:scale-95 ${
    isContactActive
      ? "bg-white text-[#0A1628] shadow-xl shadow-[#4A9FFF]/20 hover:bg-white hover:text-[#0A1628] hover:shadow-xl hover:shadow-[#4A9FFF]/20"
      : "bg-[#4A9FFF] text-white hover:bg-white hover:text-[#0A1628] hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#4A9FFF]/30"
  }`}
>
  <Link href="/contact">
    <Phone className="h-4 w-4" />
    Call Pharmacy
  </Link>
</Button>

          {/* ===== MENU BUTTON ===== */}
          <Button
            ref={menuButtonRef}
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="relative h-11 w-11 rounded-full text-white/50 transition-all duration-300 hover:bg-white/5 hover:rotate-90 active:scale-95 lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* ===== MOBILE NAV PANEL ===== */}
        <div
          id="mobile-nav-panel"
          className={`overflow-hidden transition-all duration-500 ease-out lg:hidden ${
            isMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 bg-linear-to-br from-[#0A1628]/98 via-[#0F2040]/95 to-[#1A4A7A]/90 px-4 py-4 sm:px-6 border-t border-white/5">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex min-h-11 items-center rounded-lg px-4 font-mono text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-300 active:scale-[0.98] ${
                    isActive
                      ? "bg-[#4A9FFF]/20 text-[#4A9FFF] shadow-lg shadow-[#4A9FFF]/10"
                      : "text-white/60 hover:bg-white/5 hover:text-white active:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* ===== MOBILE BUTTON ===== */}
            <Button
              asChild
              className={`mt-2 flex min-h-11 items-center justify-center gap-2 rounded-full px-5 font-mono text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-300 active:scale-95 ${
                isContactActive
                  ? "bg-white text-[#0A1628] shadow-xl shadow-[#4A9FFF]/20"
                  : "bg-[#4A9FFF] text-white hover:bg-white hover:text-[#0A1628] hover:scale-105 hover:shadow-xl hover:shadow-[#4A9FFF]/30"
              }`}
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Phone className="h-4 w-4" />
                Call Pharmacy
              </Link>
            </Button>
          </nav>
        </div>
      </header>
    );
  }

  // ============================================================
  // ===== CUREMED HEADER =====
  // ============================================================
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0 transition-transform duration-300 hover:scale-[1.02]">
          {hasBrandLogo ? (
            <Image
              src={logoPath}
              alt={brand.name}
              width={220}
              height={55}
              priority
              className="h-14 w-auto object-contain transition-transform duration-200 hover:scale-[1.02] md:h-16"
            />
          ) : (
            <span className="font-display text-2xl font-semibold text-ink">
              {brand.shortName}
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 font-mono text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 ${
                  isActive
                    ? "bg-amber/10 text-amber-dark"
                    : "text-ink/70 hover:bg-amber/5 hover:text-amber-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Button
          asChild
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:bg-amber-light hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber/30 active:scale-95"
        >
          <Link href="/contact">
            <Phone className="h-4 w-4" />
            Refill / Contact
          </Link>
        </Button>

        <Button
          ref={menuButtonRef}
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="relative h-11 w-11 rounded-full text-ink transition-all duration-300 hover:bg-amber/10 hover:rotate-90 active:scale-95 lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      <div
        id="mobile-nav-panel"
        className={`overflow-hidden transition-all duration-500 ease-out lg:hidden ${
          isMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-4 py-4 sm:px-6">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-h-11 items-center rounded-lg px-4 font-mono text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-300 active:scale-[0.98] ${
                  isActive
                    ? "bg-amber/10 text-amber-dark"
                    : "text-ink/70 hover:bg-amber/5 hover:text-amber-dark active:bg-amber/10 active:text-amber-dark"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            asChild
            className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber px-5 font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:bg-amber-light hover:scale-105 hover:shadow-lg hover:shadow-amber/30 active:scale-95"
          >
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Phone className="h-4 w-4" />
              Refill / Contact
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
