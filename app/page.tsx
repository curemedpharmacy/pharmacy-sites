import Link from "next/link";
import type { Metadata } from "next";
import { ServiceLabelCard } from "@/components/ServiceLabelCard";
import { getBrandConfig } from "@/lib/brands";

const brand = getBrandConfig();

export const metadata: Metadata = {
  title: brand.tagline,
  description: brand.description,
  alternates: { canonical: "/" },
};

const sharedServices = [
  {
    rx: "01",
    title: "Prescription Refills",
    description:
      "Transfer a prescription or refill an existing one in minutes, online or by phone. Most orders are ready the same day.",
    directions: "Pick up in store or same-day delivery",
    href: "/services/prescription-refills",
  },
  {
    rx: "02",
    title: "Medication Synchronization",
    description:
      "We sync all your refills to one monthly pickup or delivery, so you never run out and never make an extra trip.",
    directions: "One pickup date, every medication",
    href: "/services/medication-synchronization",
  },
  {
    rx: "03",
    title: "Immunizations",
    description:
      "Flu, COVID-19, RSV, and routine vaccinations administered by our licensed pharmacists — no appointment needed.",
    directions: "Walk-ins welcome, most insurance accepted",
    href: "/services/immunizations",
  },
  {
    rx: "04",
    title: "Free Local Delivery",
    description:
      "We bring your medications to your door at no charge, anywhere in our service area, usually within the day.",
    directions: "Same-day within local delivery zone",
    href: "/services/delivery",
  },
  {
    rx: "05",
    title: "Diabetes Testing & Education",
    description:
      "Affordable A1C, cholesterol, and diabetes testing, plus one-on-one education from an accredited pharmacist.",
    directions: "Walk-in testing, education by appointment",
    href: "/services/diabetes-testing-education",
  },
  {
    rx: "06",
    title: "Compliance Packaging",
    description:
      "We sort your medications into easy daily packets, so complex regimens are simple to follow correctly.",
    directions: "Ask us to set up your packets",
    href: "/services/compliance-packaging",
  },
];

const compoundingService = {
  rx: "07",
  title: "Custom Compounding",
  description:
    "Personalized dosages, flavors, and forms for patients whose needs aren't met by commercial medications.",
  directions: "By consultation — call ahead",
  href: "/services/compounding",
};

const services = brand.offersCompounding
  ? [...sharedServices, compoundingService]
  : sharedServices;

export default function HomePage() {
  return (
    <>
      {/* Hero — styled as an oversized prescription label */}
      <section className="border-b border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-block rounded-sm border border-amber/40 bg-amber/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-amber-dark">
              Rx — Independent Community Pharmacy
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              Your prescription,
              <br />
              handled with care.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              {brand.name} is the neighborhood pharmacy that still knows your name.
              Fast refills, medication management, and free delivery — from pharmacists who
              actually pick up the phone.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-amber px-6 py-3 font-mono text-xs uppercase tracking-wider text-paper transition hover:bg-amber-dark"
              >
                Transfer a Prescription
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
                <dt className="text-xs uppercase tracking-wider text-ink/50">Refills</dt>
                <dd className="mt-1 text-sm text-ink">Same day</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink/50">Delivery</dt>
                <dd className="mt-1 text-sm text-ink">Free, local</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink/50">Pharmacists</dt>
                <dd className="mt-1 text-sm text-ink">On call</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-wider text-amber-dark">
            Directions For Use
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            What we fill, beyond prescriptions
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceLabelCard key={service.rx} {...service} />
          ))}
        </div>
      </section>

      {/* Why [Brand] — sage accent section */}
      <section className="bg-sage/15 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-sage">
              Why {brand.shortName}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
              Big-chain convenience.
              <br />
              Small-pharmacy attention.
            </h2>
          </div>
          <ul className="space-y-6 self-center">
            <li className="border-l-2 border-sage pl-5">
              <p className="font-display text-lg font-medium text-ink">No hold music.</p>
              <p className="mt-1 text-sm text-ink/70">
                Call and speak with your actual pharmacist, not a call center.
              </p>
            </li>
            <li className="border-l-2 border-sage pl-5">
              <p className="font-display text-lg font-medium text-ink">Insurance, handled.</p>
              <p className="mt-1 text-sm text-ink/70">
                We work directly with most major plans and flag issues before you arrive.
              </p>
            </li>
            <li className="border-l-2 border-sage pl-5">
              <p className="font-display text-lg font-medium text-ink">Delivered, free.</p>
              <p className="mt-1 text-sm text-ink/70">
                Local same-day delivery at no extra cost — no minimum order.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Hours / location CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-8 rounded-md border border-ink/10 bg-tan/40 p-10 md:flex-row md:items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-dark">
              Open Today
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
              Stop by, call, or order online.
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              {brand.address.street}, {brand.address.city}, {brand.address.state}
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

