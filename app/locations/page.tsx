import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getBrandConfig } from "@/lib/brands";
import { pharmacyLocalBusinessSchema } from "@/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandConfig();
  return {
    title: `Locations | ${brand.name}`,
    description: `Visit ${brand.name} at ${brand.address.street}, ${brand.address.city}, ${brand.address.state} ${brand.address.zip}.`,
    alternates: { canonical: "/locations" },
  };
}

export default function LocationsPage() {
  const brand = getBrandConfig();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <JsonLd data={pharmacyLocalBusinessSchema()} />

      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-wider text-amber-dark">
          Locations
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          Stop by our pharmacy
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          {brand.name} is located at {brand.address.street},{" "}
          {brand.address.city}, {brand.address.state} {brand.address.zip}. We
          welcome walk-ins for many services and are happy to help by phone as
          well.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-md border border-ink/10 bg-tan/40 p-8">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Visit us
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            {brand.address.street}
            <br />
            {brand.address.city}, {brand.address.state} {brand.address.zip}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink/70">
            <a href={`tel:${brand.phone}`} className="hover:text-amber">
              {brand.phone}
            </a>
          </p>
        </div>

        <div className="rounded-md border border-ink/10 bg-paper p-8">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Hours
          </h2>
          <ul className="mt-6 space-y-3">
            {brand.hours.map((hour) => (
              <li
                key={hour.day}
                className="flex items-center justify-between gap-4 border-b border-dashed border-ink/10 pb-3 text-sm text-ink/70"
              >
                <span>{hour.day}</span>
                <span>{hour.time}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-amber px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper transition hover:bg-amber-dark"
          >
            Contact the pharmacy
          </Link>
        </div>
      </div>
    </section>
  );
}
