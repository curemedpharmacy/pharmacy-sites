import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getBrandConfig } from "@/lib/brands";
import { pharmacyLocalBusinessSchema } from "@/lib/schema";
import { MapPin, Phone, Clock, ArrowRight, Award, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandConfig();
  return {
    title: `Locations | ${brand.name}`,
    description: `Visit ${brand.name} at ${brand.address.street} in Paterson, NJ, during our posted hours and call ${brand.phone} with questions.`,
    alternates: { canonical: "/locations" },
  };
}

export default function LocationsPage() {
  const brand = getBrandConfig();

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5 min-h-[70vh]">
      {/* decorative elements */}
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-sage/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/3 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <JsonLd data={pharmacyLocalBusinessSchema()} />

        {/* ===== HEADER ===== */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
            <MapPin className="h-3 w-3" />
            Locations
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl leading-tight">
            Stop by our pharmacy
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70 max-w-2xl">
            {brand.name} is located at {brand.address.street},{" "}
            {brand.address.city}, {brand.address.state} {brand.address.zip}. Our
            caring goes beyond the cure, and we welcome visits for refill
            questions, vaccine appointments, testing, and everyday pharmacy
            support.
          </p>
        </div>

        {/* ===== MAP & INFO GRID ===== */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-lg transition-all duration-300 hover:shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.1091393021475!2d-74.14835072414769!3d40.89142077136717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fea23d1fd665%3A0xd7c2e8b97fa5fc37!2sCuremed%20Pharmacy!5e0!3m2!1sen!2seg!4v1783443666722!5m2!1sen!2seg"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full"
              title={`${brand.name} Location Map`}
            />
          </div>

          {/* Info Card */}
          <div className="rounded-2xl border border-ink/10 bg-linear-to-br from-amber/5 to-paper p-6 sm:p-8 transition-all duration-300 hover:border-amber/20 hover:shadow-lg">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-lg bg-amber/10 p-2">
                <Award className="h-5 w-5 text-amber-dark" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Easy to reach, easy to visit
                </h2>
              </div>
            </div>
            
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Whether you are stopping by for a refill, a vaccine, or a medication
              question, our location is set up to make visits straightforward and
              welcoming.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              We welcome local patients who want convenient access to pharmacy
              support without long waits or complicated steps.
            </p>
            
            <div className="mt-5 flex items-center gap-3 rounded-lg bg-emerald-50/50 px-4 py-2.5 border border-emerald-100/50">
              <div className="flex h-2.5 w-2.5 items-center justify-center">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
              </div>
              <span className="text-sm font-medium text-emerald-700">Open Today</span>
            </div>
          </div>
        </div>

        {/* ===== DETAILS GRID ===== */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Address Card */}
          <div className="group rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-8 transition-all duration-300 hover:border-amber/20 hover:shadow-lg hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-amber/10 p-2 group-hover:bg-amber/20 transition-colors">
                <MapPin className="h-5 w-5 text-amber-dark" />
              </div>
              <h2 className="font-display text-xl font-semibold text-ink">
                Visit us
              </h2>
            </div>
            
            <address className="mt-4 not-italic text-sm leading-relaxed text-ink/80 pl-1">
              {brand.address.street}
              <br />
              {brand.address.city}, {brand.address.state} {brand.address.zip}
            </address>
            
            <div className="mt-4 flex items-center gap-3 pl-1">
              <Phone className="h-4 w-4 text-ink/40" />
              <a 
                href={`tel:${brand.phone}`} 
                className="text-sm font-medium text-ink/80 hover:text-amber-dark transition-colors"
              >
                {brand.phone}
              </a>
            </div>

            <div className="mt-4 flex items-center gap-3 pl-1 pt-3 border-t border-ink/5">
              <Building2 className="h-4 w-4 text-ink/40" />
              <span className="text-sm text-ink/60">Independent Pharmacy</span>
            </div>
          </div>

          {/* Hours Card */}
          <div className="group rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-8 transition-all duration-300 hover:border-amber/20 hover:shadow-lg hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-amber/10 p-2 group-hover:bg-amber/20 transition-colors">
                <Clock className="h-5 w-5 text-amber-dark" />
              </div>
              <h2 className="font-display text-xl font-semibold text-ink">
                Hours
              </h2>
            </div>
            
            <ul className="mt-4 space-y-1">
              {brand.hours.map((hour, index) => {
                const isToday = hour.day === "Mon" || hour.day === "Today";
                return (
                  <li
                    key={hour.day}
                    className={`flex items-center justify-between gap-4 py-2 px-2 rounded-md transition-colors ${
                      index !== brand.hours.length - 1 ? 'border-b border-dashed border-ink/5' : ''
                    } ${isToday ? 'bg-amber/5' : 'hover:bg-ink/5'}`}
                  >
                    <span className={`text-sm font-medium flex items-center gap-2 ${
                      isToday ? 'text-amber-dark' : 'text-ink/80'
                    }`}>
                      {isToday && (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
                        </span>
                      )}
                      {hour.day}
                    </span>
                    <span className={`text-sm font-mono ${
                      isToday ? 'text-amber-dark font-semibold' : 'text-ink/50'
                    }`}>
                      {hour.time}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ===== CTA SECTION ===== */}
        <div className="mt-10 rounded-2xl border border-amber/10 bg-linear-to-br from-amber/5 via-paper to-sage/5 p-6 sm:p-8 transition-all duration-300 hover:border-amber/20 hover:shadow-lg">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
                <Phone className="h-3 w-3" />
                Get in touch
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                Questions? We&apos;re here to help
              </h3>
              <p className="mt-1 text-sm text-ink/70">
                Call us at{" "}
                <a 
                  href={`tel:${brand.phone}`} 
                  className="font-medium text-ink hover:text-amber-dark transition-colors"
                >
                  {brand.phone}
                </a>{" "}
                or reach out online.
              </p>
            </div>
            <Button
              asChild
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-amber px-6 sm:px-8 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-ink transition-all hover:bg-amber-light hover:scale-105 hover:shadow-lg hover:shadow-amber/30"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}