import type { Metadata } from "next";
import Link from "next/link";
import { ServiceLabelCard } from "@/components/ServiceLabelCard";
import { JsonLd } from "@/components/JsonLd";
import { getBrandConfig } from "@/lib/brands";
import { breadcrumbSchema } from "@/lib/schema";
import { getServicesForBrand } from "@/lib/services";

export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandConfig();
  return {
    title: `Services | ${brand.name}`,
    description: `${brand.name} offers pharmacy services such as refill support, delivery, vaccinations, testing, medication support, and ${brand.offersCompounding ? "compounding" : "local care"} in Paterson.`,
    alternates: { canonical: "/services" },
  };
}

export default function ServicesPage() {
  const brand = getBrandConfig();
  const services = getServicesForBrand(brand);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: brand.url },
    { name: "Services", url: `${brand.url}/services` },
  ]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <JsonLd data={breadcrumb} />
      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-wider text-amber-dark">
          Services
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          Practical pharmacy support for everyday care
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          At {brand.name}, our caring goes beyond the cure. We help patients in
          Paterson with refill support, medication organization, delivery,
          testing, and other services that keep care close to home.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceLabelCard
            key={service.slug}
            rx={service.rx}
            title={service.title}
            description={service.description}
            directions={service.directions}
            href={`/services/${service.slug}`}
          />
        ))}
      </div>

      <div className="mt-12 rounded-md border border-ink/10 bg-tan/40 p-8">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Need help choosing a service?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          Call {brand.phone} or visit us at {brand.address.street} to talk
          through what you need.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-amber px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper transition hover:bg-amber-dark"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
