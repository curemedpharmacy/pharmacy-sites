import Link from "next/link";
import Image from "next/image";
import { getBrandConfig } from "@/lib/brands";
import { Clock, MapPin, Phone, Mail, Award, ArrowRight, Circle } from "lucide-react";

export function Footer() {
  const brand = getBrandConfig();
  const hasBrandLogo = brand.slug === "curemed" || brand.slug === "saimz";
  const logoPath =
    brand.slug === "curemed"
      ? "/images/curemed/logo.png"
      : "/images/saimz/logo.png";

  return (
    <footer className="border-t border-ink/10 bg-linear-to-br from-paper via-paper to-sage/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
        {/* ===== LOGO ROW - نفس حجم الهيدر ===== */}
        <div className="mb-6 flex justify-start">
          <Link href="/" className="flex items-center gap-3 shrink-0">
          {hasBrandLogo ? (
            <Image
              src={logoPath}
              alt={brand.name}
              width={200}
              height={50}
              className="h-12 w-auto object-contain transition-transform duration-200 hover:scale-[1.02] md:h-14"
            />
          ) : (
            <p className="font-display text-2xl font-semibold text-ink">
              {brand.name}
            </p>
          )}
          </Link>
        </div>



        {/* ===== CONTENT ROW - تنسيق محسّن ===== */}
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-4 md:grid-cols-2">
          {/* Column 1: About / Description */}
          <div className="space-y-3">
            <p className="text-sm leading-relaxed text-ink/70 max-w-xs">
              {brand.description || "Your trusted community pharmacy."}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1.5">
              <Award className="h-3 w-3 text-amber-dark" />
              <span className="text-[10px] font-medium text-amber-dark">
                Independent Community Pharmacy
              </span>
            </div>
          </div>

          {/* Column 2: Visit */}
          <div>
            <h3 className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-wider text-ink/50">
              <MapPin className="h-4 w-4" />
              Visit Us
            </h3>
            <address className="mt-2 not-italic text-sm text-ink/80 leading-relaxed">
              {brand.address.street}
              <br />
              {brand.address.city}, {brand.address.state} {brand.address.zip}
            </address>
            <Link
              href="/locations"
              className="inline-flex items-center gap-1 mt-2 text-[11px] font-medium text-amber-dark hover:underline transition-colors"
            >
              Get Directions
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Column 3: Hours */}
          <div>
            <h3 className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-wider text-ink/50">
              <Clock className="h-4 w-4" />
              Hours
            </h3>
            <div className="mt-2 space-y-1.5">
              {brand.hours.map((h, index) => {
                const isToday = h.day === "Mon" || h.day === "Today";
                return (
                  <div 
                    key={h.day} 
                    className={`flex items-center justify-between py-1.5 ${
                      index !== brand.hours.length - 1 ? 'border-b border-ink/5' : ''
                    } ${isToday ? 'bg-amber/5 rounded-md px-2.5 -mx-2.5' : ''}`}
                  >
                    <div className="flex items-center gap-2">
                      {isToday && (
                        <Circle className="h-1.5 w-1.5 fill-emerald-500 text-emerald-500 animate-pulse" />
                      )}
                      <span className={`text-sm font-medium ${
                        isToday ? 'text-amber-dark' : 'text-ink/80'
                      }`}>
                        {h.day}
                      </span>
                    </div>
                    <span className={`text-sm font-mono ${
                      isToday ? 'text-amber-dark font-semibold' : 'text-ink/50'
                    }`}>
                      {h.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-wider text-ink/50">
              <Phone className="h-4 w-4" />
              Contact
            </h3>
            <div className="mt-2 space-y-2.5">
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-2.5 text-sm text-ink/80 transition-colors hover:text-amber-dark group"
              >
                <Phone className="h-4 w-4 text-ink/40 group-hover:text-amber-dark transition-colors" />
                {brand.phone}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-2.5 text-sm text-ink/80 transition-colors hover:text-amber-dark group"
              >
                <Mail className="h-4 w-4 text-ink/40 group-hover:text-amber-dark transition-colors" />
                {brand.email}
              </a>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="mt-10 pt-5 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-ink/40">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-[10px] text-ink/40">
            <Link
              href="/privacy"
              className="transition-colors hover:text-amber-dark"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-amber-dark"
            >
              Terms of Service
            </Link>
            <Link
              href="/accessibility"
              className="transition-colors hover:text-amber-dark"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}