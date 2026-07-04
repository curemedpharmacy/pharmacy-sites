import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrandConfig } from "@/lib/brands";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getServicesForBrand } from "@/lib/services";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandConfig();
  const service = getServicesForBrand(brand).find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested pharmacy service could not be found.",
      alternates: { canonical: "/services" },
    };
  }

  return {
    title: `${service.title} | ${brand.name}`,
    description: `Learn more about ${service.title} from ${brand.name}, including how this pharmacy service helps patients stay organized, supported, and confident every day.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const brand = getBrandConfig();
  const service = getServicesForBrand(brand).find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: brand.url },
    { name: "Services", url: `${brand.url}/services` },
    { name: service.title, url: `${brand.url}/services/${service.slug}` },
  ]);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <JsonLd data={breadcrumb} />

      <nav className="text-sm text-ink/60">
        <Link href="/" className="hover:text-amber">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-amber">
          Services
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{service.title}</span>
      </nav>

      <div className="mt-8 rounded-md border border-ink/10 bg-paper p-8 shadow-sm">
        <span className="font-mono text-xs uppercase tracking-wider text-amber-dark">
          RX № {service.rx}
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          {service.heroTitle}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/70">
          {service.heroDescription}
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-md border border-ink/10 bg-tan/30 p-8">
          <h2 className="font-display text-2xl font-semibold text-ink">
            About this service
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            {service.overview}
          </p>

          <ul className="mt-6 space-y-3">
            {service.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span
                  className="mt-1 h-2.5 w-2.5 rounded-full bg-amber"
                  aria-hidden
                />
                <span className="text-sm text-ink/70">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-md border border-ink/10 bg-paper p-8">
          <h2 className="font-display text-xl font-semibold text-ink">
            Need help?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            Reach out to {brand.name} at {brand.phone} for questions about this
            service or to schedule a visit.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-amber px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper transition hover:bg-amber-dark"
          >
            Contact us
          </Link>
        </aside>
      </div>
    </section>
  );
}
