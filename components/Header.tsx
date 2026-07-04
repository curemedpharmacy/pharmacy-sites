import Link from "next/link";
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
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-ink">
          {brand.shortName}
          <span className="text-amber">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink/70 transition hover:bg-tan hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-amber px-5 py-2 font-mono text-xs uppercase tracking-wider text-paper transition hover:bg-amber-dark"
        >
          Refill / Contact
        </Link>
      </div>
    </header>
  );
}
