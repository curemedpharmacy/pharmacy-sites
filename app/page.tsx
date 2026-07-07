import Link from "next/link";
import type { Metadata } from "next";
import { HeroSlider } from "@/components/HeroSlider";
import { ClientServices } from "@/components/ClientServices";
import { getBrandConfig } from "@/lib/brands";
import { getServicesForBrand } from "@/lib/services";
import { Clock, Truck, Phone, Award, Play, Heart, MapPin, Star, Users, Shield, ThumbsUp } from "lucide-react";

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
      {/* ===== HERO SECTION - FULL WIDTH ===== */}
      <section className="relative min-h-[90vh] overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-sage/10 blur-3xl" />

        <div className="mx-auto grid min-h-[90vh] max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:py-16 xl:py-20">
          {/* ===== LEFT COLUMN - CONTENT ===== */}
          <div className="flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-amber/10 px-3 sm:px-4 py-1 sm:py-1.5 font-mono text-[10px] sm:text-xs font-medium uppercase tracking-wider text-amber-dark border border-amber/20">
                <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span className="hidden xs:inline">Independent</span> Community Pharmacy
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-emerald-700 border border-emerald-200">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500" />
                </span>
                Open Today
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Care close to
              <span className="block text-amber-dark">home.</span>
            </h1>

            {/* Description */}
            <p className="max-w-lg text-sm leading-relaxed text-ink/70 sm:text-base lg:text-lg xl:text-xl">
              At {brand.name}, our caring goes beyond the cure. We help
              neighbors in Paterson with refill support, free delivery, vaccine
              visits, testing, and other everyday pharmacy services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-amber px-5 sm:px-8 py-2.5 sm:py-3.5 font-mono text-[11px] sm:text-sm font-medium uppercase tracking-wider text-paper transition-all hover:bg-amber-dark hover:scale-105 hover:shadow-lg"
              >
                Contact the Pharmacy
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 bg-paper/80 px-5 sm:px-8 py-2.5 sm:py-3.5 font-mono text-[11px] sm:text-sm font-medium uppercase tracking-wider text-ink transition-all hover:border-ink/30 hover:bg-paper hover:shadow-md backdrop-blur-sm"
              >
                Browse Services
              </Link>
            </div>

            {/* Quick Stats - Improved for mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-ink/10">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-amber/10 p-2 shrink-0">
                  <Clock className="h-5 w-5 text-amber-dark" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Mon–Sat</p>
                  <p className="text-xs text-ink/50">Open Hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-amber/10 p-2 shrink-0">
                  <Truck className="h-5 w-5 text-amber-dark" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Free</p>
                  <p className="text-xs text-ink/50">Local Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-amber/10 p-2 shrink-0">
                  <Phone className="h-5 w-5 text-amber-dark" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{brand.phone}</p>
                  <p className="text-xs text-ink/50">Call Us</p>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 sm:gap-6 pt-1 sm:pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-paper bg-sage/20 flex items-center justify-center text-[10px] sm:text-xs font-medium text-ink/60"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-[10px] sm:text-xs text-ink/50">
                Trusted by <span className="font-medium text-ink">500+</span>{" "}
                patients in Paterson
              </p>
            </div>
          </div>

          {/* ===== RIGHT COLUMN - HERO SLIDER ===== */}
          <div className="flex items-center order-1 lg:order-2">
            <HeroSlider brand={brand} />
          </div>
        </div>
      </section>

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