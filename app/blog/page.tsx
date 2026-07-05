import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBrandConfig } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Health Notes | Curemed Pharmacy",
  description:
    "Helpful community pharmacy insights on wellness, medication support, and everyday care from Curemed Pharmacy.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    title: "When to ask about medication reviews",
    summary:
      "Medication reviews can help you understand your routine, avoid confusion, and talk through questions with a pharmacist.",
    image: "/images/curemed/services/medication-therapy-management.webp",
    alt: "Pharmacist reviewing medication information with a patient",
  },
  {
    title: "Keeping vaccines and screenings simple",
    summary:
      "Routine vaccines and community screening events make prevention easier to fit into the week.",
    image: "/images/curemed/hero/community-health-screening.webp",
    alt: "Community health screening event in the pharmacy setting",
  },
  {
    title: "How delivery supports everyday care",
    summary:
      "Free local delivery helps patients stay consistent with prescriptions when schedules get busy.",
    image: "/images/curemed/storefront/customer-lounge-seating.webp",
    alt: "Welcoming customer seating area inside the pharmacy",
  },
];

export default function BlogPage() {
  const brand = getBrandConfig();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-wider text-amber-dark">
          Health Notes
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          Helpful guidance from {brand.name}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          We share practical pharmacy wellness updates, medication support tips,
          and reminders that help patients feel informed between visits.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="overflow-hidden rounded-md border border-ink/10 bg-paper shadow-sm"
          >
            {brand.slug === "curemed" ? (
              <Image
                src={post.image}
                alt={post.alt}
                width={800}
                height={560}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
            ) : (
              <div className="flex h-48 items-center justify-center bg-tan/40 px-6 text-center text-sm leading-7 text-ink/70">
                Helpful pharmacy guidance will be shared here.
              </div>
            )}
            <div className="p-6">
              <h2 className="font-display text-xl font-semibold text-ink">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {post.summary}
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex text-sm font-medium text-amber-dark hover:text-amber"
              >
                Ask the pharmacy →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
