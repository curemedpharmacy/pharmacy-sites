import Image from "next/image";
import type { Metadata } from "next";
import { getBrandConfig } from "@/lib/brands";

export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandConfig();
  return {
    title: `About ${brand.name}`,
    description: `${brand.name} serves Paterson from ${brand.address.street} with refill support, delivery, vaccinations, testing, and medication support.`,
    alternates: { canonical: "/about" },
  };
}

export default function AboutPage() {
  const brand = getBrandConfig();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-dark">
            Our Story
          </span>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            About {brand.name}
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink/75">
            {brand.name} is a neighborhood pharmacy in Paterson, New Jersey,
            serving patients from {brand.address.street} with refill support,
            free local delivery, diabetes testing and education, immunizations,
            medication reviews, and everyday care that stays close to home.
          </p>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Our regular hours are{" "}
            {brand.hours.map((hour) => `${hour.day} ${hour.time}`).join("; ")}.{" "}
            {brand.offersCompounding
              ? "We also offer custom compounding at this location."
              : "Compounding is not offered at this location."}
          </p>
        </div>

        <div className="overflow-hidden rounded-4xl border border-ink/10 bg-paper shadow-[0_20px_60px_rgba(28,58,94,0.08)]">
          {brand.galleryImages.team.path ? (
            <Image
              src={brand.galleryImages.team.path}
              alt={brand.galleryImages.team.alt}
              width={900}
              height={650}
              loading="eager"
              className="h-105 w-full object-cover"
            />
          ) : (
            <div className="flex h-105 items-center justify-center bg-tan/40 px-8 text-center text-sm leading-7 text-ink/70">
              Photography for this location will be added soon.
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.75rem] border border-ink/10 bg-tan/45 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            A pharmacy built around trust
          </h2>
          <p className="mt-4 text-base leading-8 text-ink/75">
            We focus on clear communication, practical support, and a
            patient-first approach that helps neighbors feel comfortable asking
            questions and getting the help they need.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-ink/75">
            <li>• Personalized guidance for everyday prescriptions</li>
            <li>• Support for vaccines, testing, and medication plans</li>
            <li>• Friendly service from a local pharmacy team</li>
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-sm">
            {brand.galleryImages.storefront.path ? (
              <>
                <Image
                  src={brand.galleryImages.storefront.path}
                  alt={brand.galleryImages.storefront.alt}
                  width={900}
                  height={650}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <figcaption className="p-4 text-sm leading-6 text-ink/70">
                  {brand.galleryImages.storefront.alt}
                </figcaption>
              </>
            ) : (
              <div className="flex h-64 items-center justify-center px-6 text-center text-sm leading-7 text-ink/70">
                Storefront photography will be added soon.
              </div>
            )}
          </figure>

          <figure className="overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-sm">
            <Image
              src={
                brand.slug === "curemed"
                  ? "/images/curemed/hero/grand-opening-ribbon-cutting.webp"
                  : "/images/curemed/hero/interior-store-shelves.webp"
              }
              alt={
                brand.slug === "curemed"
                  ? "Community grand opening and ribbon cutting event"
                  : "Clean pharmacy interior with community-focused layout"
              }
              width={900}
              height={650}
              loading="lazy"
              className="h-64 w-full object-cover"
            />
            <figcaption className="p-4 text-sm leading-6 text-ink/70">
              {brand.slug === "curemed"
                ? "A welcoming community event and neighborhood pharmacy presence"
                : "A calm and organized visit experience for local patients"}
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="mt-10 rounded-[1.75rem] border border-ink/10 bg-paper/70 p-6 shadow-sm">
        <p className="text-sm leading-7 text-ink/60">
          {/* TODO: add founding year or credential details once confirmed. */}
          More about the pharmacy’s history and team will be added as confirmed
          information becomes available.
        </p>
      </div>
    </section>
  );
}
