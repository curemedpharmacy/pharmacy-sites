// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HeroSlider } from "@/components/HeroSlider";
import { ClientServices } from "@/components/ClientServices";
import { getBrandConfig } from "@/lib/brands";
import { getServicesForBrand } from "@/lib/services";
import {
  Clock,
  Phone,
  Heart,
  MapPin,
  Star,
  Users,
  Shield,
  ThumbsUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
      {/* ===== HERO SLIDER - FULL SCREEN ===== */}
      <HeroSlider brand={brand} />

      {/* ===== SERVICES SECTION ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark">
              <Star className="h-3 w-3" />
              Directions For Use
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Practical pharmacy care <br className="hidden sm:inline" />
              <span className="text-amber-dark">for everyday life</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink/70">
            From medication reviews to vaccines, delivery, and testing, our team
            helps patients feel supported at every step.
          </p>
        </div>

        <ClientServices services={services} />
      </section>

      {/* ===== ABOUT / COMMUNITY SECTION ===== */}
      <section className="relative overflow-hidden bg-linear-to-br from-sage/5 via-paper to-amber/5 py-16 sm:py-20">
        <div className="absolute top-0 left-0 -z-10 h-300 w-300 rounded-full bg-amber/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 h-400 w-400 rounded-full bg-sage/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* ===== LEFT COLUMN - CONTENT ===== */}
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
                <Heart className="h-3 w-3" />
                Our Community Impact
              </span>

              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl leading-tight">
                More than a pharmacy.
                <br />
                <span className="text-amber-dark">
                  We&apos;re your neighbors.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-ink/70 leading-relaxed">
                At Curemed, we believe healthcare starts with trust. We&apos;re
                not just here to fill prescriptions — we&apos;re here to listen,
                educate, and support our community every step of the way.
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                    <Users className="h-3 w-3 text-amber-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">
                      Community-Focused Care
                    </p>
                    <p className="text-xs text-ink/60">
                      Free health screenings and wellness events
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                    <Shield className="h-3 w-3 text-amber-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">
                      Trusted Since 2015
                    </p>
                    <p className="text-xs text-ink/60">
                      Over 15 years of serving Paterson families
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                    <ThumbsUp className="h-3 w-3 text-amber-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">
                      Personalized Service
                    </p>
                    <p className="text-xs text-ink/60">
                      Your health goals, our priority
                    </p>
                  </div>
                </li>
              </ul>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  asChild
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-amber px-5 sm:px-6 py-3 sm:py-2.5 font-mono text-[11px] sm:text-xs font-medium uppercase tracking-wider text-ink transition-all hover:bg-amber-light hover:scale-105 hover:shadow-lg hover:shadow-amber/30"
                >
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* ===== RIGHT COLUMN - OVERLAPPING IMAGES ===== */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                {/* الصورة الأولى */}
                <div className="relative w-[82%]">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden group">
                    <Image
                      src="/images/curemed/storefront/pharmacy.jpg"
                      alt="Pharmacy counter"
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent" />

                    {/* يظهر فقط على الشاشات المتوسطة والكبيرة */}
                    <div className="hidden md:block absolute bottom-3 left-3 right-3">
                      <p className="text-white font-semibold text-sm">
                        Friendly service
                      </p>
                      <p className="text-white/80 text-xs">
                        Your neighborhood pharmacy
                      </p>
                    </div>
                  </div>
                </div>

                {/* الصورة الثانية */}
                <div className="relative w-[82%] ml-8 sm:ml-16 md:ml-32 lg:ml-45 -mt-5 sm:-mt-5 md:-mt-10">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden group">
                    <Image
                      src="/images/curemed/storefront/medicine.jpg"
                      alt="Pharmacist consulting with patient"
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent" />

                    {/* يظهر فقط على الشاشات المتوسطة والكبيرة */}
                    <div className="hidden md:block absolute bottom-3 left-3 right-3">
                      <p className="text-white font-semibold text-sm">
                        Caring consultations
                      </p>
                      <p className="text-white/80 text-xs">Personalized care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY US SECTION ===== */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sage bg-sage/10 px-3 py-1 rounded-full">
                <Heart className="h-3 w-3" />
                Why {brand.shortName}
              </span>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl leading-tight">
                Personalized care.
                <br />
                <span className="text-amber-dark">
                  A neighborhood pharmacy.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-ink/70 max-w-md">
                We believe in building lasting relationships with our patients
                through trust, accessibility, and genuine care.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-3 py-1.5 text-xs font-medium text-amber-dark">
                  <ThumbsUp className="h-3.5 w-3.5" />
                  Trusted Care
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-3 py-1.5 text-xs font-medium text-amber-dark">
                  <Users className="h-3.5 w-3.5" />
                  Community Focused
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-3 py-1.5 text-xs font-medium text-amber-dark">
                  <Shield className="h-3.5 w-3.5" />
                  Quality Assured
                </span>
              </div>
            </div>

            <ul className="space-y-4 self-center">
              <li className="group rounded-xl border border-ink/5 bg-paper/50 p-5 transition-all hover:border-amber/20 hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-amber-dark" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-medium text-ink">
                      A direct line.
                    </p>
                    <p className="mt-1 text-sm text-ink/70">
                      Reach our pharmacy team at {brand.phone} for questions,
                      refill support, or service details.
                    </p>
                  </div>
                </div>
              </li>
              <li className="group rounded-xl border border-ink/5 bg-paper/50 p-5 transition-all hover:border-amber/20 hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-sage" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-medium text-ink">
                      Local and convenient.
                    </p>
                    <p className="mt-1 text-sm text-ink/70">
                      We are based at {brand.address.street} in Paterson and
                      welcome visits during our posted hours.
                    </p>
                  </div>
                </div>
              </li>
              <li className="group rounded-xl border border-ink/5 bg-paper/50 p-5 transition-all hover:border-amber/20 hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                    <Heart className="h-4 w-4 text-amber-dark" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-medium text-ink">
                      Care that stays close.
                    </p>
                    <p className="mt-1 text-sm text-ink/70">
                      From delivery to vaccine visits and medication support, we
                      work to keep care simple.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-linear-to-br from-ink/2 via-sage/10 to-amber/5 border border-ink/10 p-6 sm:p-8 lg:p-12">
          <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-sage/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 h-48 w-48 rounded-full bg-amber/10 blur-3xl" />
          <div className="flex flex-col items-stretch justify-between gap-6 md:flex-row md:items-center">
            {" "}
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
                <MapPin className="h-3 w-3" />
                Visit us
              </span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                Stop by, call, or reach out online.
              </h2>
              <p className="mt-1 text-sm text-ink/70">
                {brand.address.street}, {brand.address.city},{" "}
                {brand.address.state} {brand.address.zip}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-ink/60">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> Mon–Sat
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4" /> {brand.phone}
                </span>
              </div>
            </div>
            <Button
              asChild
              className="
    w-full sm:w-auto
    inline-flex items-center justify-center
    gap-2
    rounded-full
    bg-amber  {/* ✅ تغيير من bg-ink إلى bg-amber */
    px-4 sm:px-8
    py-3 sm:py-3
    font-mono
    text-[10px] sm:text-sm
    font-medium
    uppercase
    tracking-wider
    text-ink  {/* ✅ تغيير من text-paper إلى text-ink */
    transition-all
    hover:bg-amber-light  {/* ✅ تغيير من hover:bg-ink/80 إلى hover:bg-amber-light */
    hover:scale-105
    hover:shadow-lg hover:shadow-amber/30
  "
            >
              <Link
                href="/locations"
                className="flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span className="truncate">View Hours & Directions</span>
                <span className="text-ink shrink-0">
                  <ArrowRight />
                </span>{" "}
                {/* ✅ تغيير من text-amber إلى text-ink */}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
