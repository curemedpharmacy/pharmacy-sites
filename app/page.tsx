// app/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { HeroSlider } from "@/components/HeroSlider";
import { ClientServices } from "@/components/ClientServices";
import { getBrandConfig } from "@/lib/brands";
import { getServicesForBrand } from "@/lib/services";
import { Clock, Phone, Play, Heart, MapPin, Star, Users, Shield, ThumbsUp } from "lucide-react";

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

      {/* ===== VIDEO SECTION ===== */}
      <section className="relative overflow-hidden bg-linear-to-br from-sage/5 via-paper to-amber/5 py-16 sm:py-20">
        <div className="absolute top-0 left-0 -z-10 h-300 w-300 rounded-full bg-amber/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 h-400 w-400 rounded-full bg-sage/10 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
              <Play className="h-3 w-3" />
              Watch Our Story
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              See the difference
              <span className="block text-amber-dark">community care makes</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink/70 max-w-2xl mx-auto">
              Discover how we serve our community with personalized attention and genuine care.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-sage/10 to-amber/10 border border-ink/10">
              <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-sage/5 to-amber/5">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-amber text-paper shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-current ml-0.5" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-ink/60">
                    Click to watch our story
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="rounded-xl bg-paper/80 p-3 sm:p-4 border border-ink/5 text-center">
                <p className="font-display text-xl sm:text-2xl font-bold text-ink">500+</p>
                <p className="text-[10px] sm:text-xs text-ink/50">Happy Patients</p>
              </div>
              <div className="rounded-xl bg-paper/80 p-3 sm:p-4 border border-ink/5 text-center">
                <p className="font-display text-xl sm:text-2xl font-bold text-ink">4.7</p>
                <p className="text-[10px] sm:text-xs text-ink/50">Average Rating</p>
              </div>
              <div className="rounded-xl bg-paper/80 p-3 sm:p-4 border border-ink/5 text-center">
                <p className="font-display text-xl sm:text-2xl font-bold text-ink">15+</p>
                <p className="text-[10px] sm:text-xs text-ink/50">Years Experience</p>
              </div>
              <div className="rounded-xl bg-paper/80 p-3 sm:p-4 border border-ink/5 text-center">
                <p className="font-display text-xl sm:text-2xl font-bold text-ink">24/7</p>
                <p className="text-[10px] sm:text-xs text-ink/50">Support Available</p>
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
                <span className="text-amber-dark">A neighborhood pharmacy.</span>
              </h2>
              <p className="text-sm sm:text-base text-ink/70 max-w-md">
                We believe in building lasting relationships with our patients through
                trust, accessibility, and genuine care.
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
                    <p className="font-display text-lg font-medium text-ink">A direct line.</p>
                    <p className="mt-1 text-sm text-ink/70">
                      Reach our pharmacy team at {brand.phone} for questions, refill
                      support, or service details.
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
                    <p className="font-display text-lg font-medium text-ink">Local and convenient.</p>
                    <p className="mt-1 text-sm text-ink/70">
                      We are based at {brand.address.street} in Paterson and welcome
                      visits during our posted hours.
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
                    <p className="font-display text-lg font-medium text-ink">Care that stays close.</p>
                    <p className="mt-1 text-sm text-ink/70">
                      From delivery to vaccine visits and medication support, we work
                      to keep care simple.
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
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-linear-to-br from-amber/5 via-paper to-sage/5 border border-amber/10 p-6 sm:p-8 lg:p-12">
          <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-amber/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 h-48 w-48 rounded-full bg-sage/5 blur-3xl" />
          
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
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
            <Link
              href="/locations"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-ink px-6 sm:px-8 py-3 font-mono text-xs sm:text-sm font-medium uppercase tracking-wider text-paper transition-all hover:bg-ink/80 hover:scale-105 hover:shadow-lg"
            >
              View Hours & Directions
              <span className="text-amber">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}