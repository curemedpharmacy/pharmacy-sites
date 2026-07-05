import Link from "next/link";
import type { Metadata } from "next";
import { ServiceLabelCard } from "@/components/ServiceLabelCard";
import { HeroSlider } from "@/components/HeroSlider";
import { getBrandConfig } from "@/lib/brands";
import { getServicesForBrand } from "@/lib/services";

const brand = getBrandConfig();

export const metadata: Metadata = {
  title: `${brand.name} | Community Pharmacy`,
  description: `${brand.name} serves Paterson with pharmacy care rooted in everyday support, from refill help and delivery to diabetes testing, immunizations, and more.`,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const services = getServicesForBrand(brand);

  return (
    <>
      <section className="border-b border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div className="max-w-2xl">
            <span className="inline-block rounded-sm border border-amber/40 bg-amber/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-amber-dark">
              Rx — Independent Community Pharmacy
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              Care close to home.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              At {brand.name}, our caring goes beyond the cure. We help
              neighbors in Paterson with refill support, free delivery, vaccine
              visits, testing, and other everyday pharmacy services at{" "}
              {brand.address.street}.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-amber px-6 py-3 font-mono text-xs uppercase tracking-wider text-paper transition hover:bg-amber-dark"
              >
                Contact the Pharmacy
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-ink/20 px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink transition hover:border-ink/40"
              >
                Browse Services
              </Link>
            </div>

            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-dashed border-ink/20 pt-6 font-mono">
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink/50">
                  Hours
                </dt>
                <dd className="mt-1 text-sm text-ink">Mon–Sat</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink/50">
                  Delivery
                </dt>
                <dd className="mt-1 text-sm text-ink">Free, local</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink/50">
                  Phone
                </dt>
                <dd className="mt-1 text-sm text-ink">{brand.phone}</dd>
              </div>
            </dl>
          </div>

          <div className="self-center">
            <HeroSlider brand={brand} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-wider text-amber-dark">
              Directions For Use
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
              Practical pharmacy care for everyday life
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-ink/70">
            From medication reviews to vaccines, delivery, and testing, our team
            helps patients feel supported at every step.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceLabelCard
              key={service.rx}
              {...service}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-sage/15 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-sage">
              Why {brand.shortName}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
              Personalized care.
              <br />A neighborhood pharmacy.
            </h2>
          </div>
          <ul className="space-y-6 self-center">
            <li className="border-l-2 border-sage pl-5">
              <p className="font-display text-lg font-medium text-ink">
                A direct line.
              </p>
              <p className="mt-1 text-sm text-ink/70">
                Reach our pharmacy team at {brand.phone} for questions, refill
                support, or service details.
              </p>
            </li>
            <li className="border-l-2 border-sage pl-5">
              <p className="font-display text-lg font-medium text-ink">
                Local and convenient.
              </p>
              <p className="mt-1 text-sm text-ink/70">
                We are based at {brand.address.street} in Paterson and welcome
                visits during our posted hours.
              </p>
            </li>
            <li className="border-l-2 border-sage pl-5">
              <p className="font-display text-lg font-medium text-ink">
                Care that stays close.
              </p>
              <p className="mt-1 text-sm text-ink/70">
                From delivery to vaccine visits and medication support, we work
                to keep care simple.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-8 rounded-md border border-ink/10 bg-tan/40 p-10 md:flex-row md:items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-dark">
              Visit us
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
              Stop by, call, or reach out online.
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              {brand.address.street}, {brand.address.city},{" "}
              {brand.address.state} {brand.address.zip}
            </p>
          </div>
          <Link
            href="/locations"
            className="shrink-0 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-wider text-paper transition hover:bg-ink/80"
          >
            View Hours &amp; Directions
          </Link>
        </div>
      </section>
    </>
  );
}
