import Link from "next/link";
import { getBrandConfig } from "@/lib/brands";

export function Footer() {
  const brand = getBrandConfig();
  return (
    <footer className="border-t border-ink/10 bg-tan/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-ink">{brand.name}</p>
          <p className="mt-3 max-w-xs text-sm text-ink/70">{brand.description}</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink/50">Visit</p>
          <p className="mt-3 text-sm text-ink/80">
            {brand.address.street}
            <br />
            {brand.address.city}, {brand.address.state} {brand.address.zip}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink/50">Hours</p>
          <ul className="mt-3 space-y-1 font-mono text-sm text-ink/80">
            {brand.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink/50">Contact</p>
          <p className="mt-3 text-sm text-ink/80">
            <a href={`tel:${brand.phone}`} className="hover:text-amber">
              {brand.phone}
            </a>
            <br />
            <a href={`mailto:${brand.email}`} className="hover:text-amber">
              {brand.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-ink/10 px-6 py-4 text-center font-mono text-xs text-ink/50">
        © {new Date().getFullYear()} {brand.name}. All rights reserved. ·{" "}
        <Link href="/privacy" className="hover:text-amber">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
