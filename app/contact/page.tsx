import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { getBrandConfig } from "@/lib/brands";
import { Phone, MapPin, Clock, Mail, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandConfig();
  return {
    title: `Contact ${brand.name} | Pharmacy in Paterson, NJ`,
    description: `Reach ${brand.name} at ${brand.phone} or visit us at ${brand.address.street} in Paterson. We're here for prescription refills, delivery, immunizations, and all pharmacy services.`,
    alternates: { canonical: "/contact" },
  };
}

export default function ContactPage() {
  const brand = getBrandConfig();

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5 min-h-[70vh]">
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-sage/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* ===== HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
            <Mail className="h-3 w-3" />
            Contact Us
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl leading-tight">
            Get in touch
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70 max-w-2xl mx-auto">
            Have a question? Need a refill? Want to schedule a visit? 
            We&apos;re here to help. Fill out the form below and we&apos;ll get back to you.
          </p>
        </div>

        {/* ===== FORM - FULL WIDTH ===== */}
        <div className="mt-10 w-full">
          <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-8 lg:p-12 shadow-lg">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-semibold text-ink text-center">Send us a message</h2>
              <p className="mt-1 text-sm text-ink/70 text-center">
                We&apos;ll respond within 24 hours
              </p>
            </div>
            
            <ContactForm brand={brand} />
            
            <div className="mt-6 pt-6 border-t border-ink/5 flex items-center justify-center gap-2 text-xs text-ink/50">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span>Your information is secure and private</span>
            </div>
          </div>
        </div>

        {/* ===== QUICK CONTACT INFO ===== */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="rounded-xl border border-ink/10 bg-paper/60 p-5 text-center hover:border-amber/20 hover:shadow-md transition-all">
            <div className="rounded-full bg-amber/10 p-3 w-fit mx-auto text-amber-dark">
              <Phone className="h-5 w-5" />
            </div>
            <p className="mt-2 text-xs font-mono uppercase tracking-wider text-ink/50">Call Us</p>
            <a href={`tel:${brand.phone}`} className="text-base font-semibold text-ink hover:text-amber-dark transition-colors">
              {brand.phone}
            </a>
          </div>
          
          <div className="rounded-xl border border-ink/10 bg-paper/60 p-5 text-center hover:border-amber/20 hover:shadow-md transition-all">
            <div className="rounded-full bg-amber/10 p-3 w-fit mx-auto text-amber-dark">
              <Clock className="h-5 w-5" />
            </div>
            <p className="mt-2 text-xs font-mono uppercase tracking-wider text-ink/50">Hours</p>
            <div className="text-sm font-medium text-ink space-y-0.5">
              {brand.hours.map((h) => (
                <div key={h.day} className="flex justify-center gap-2">
                  <span>{h.day}</span>
                  <span className="text-ink/50">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-xl border border-ink/10 bg-paper/60 p-5 text-center hover:border-amber/20 hover:shadow-md transition-all">
            <div className="rounded-full bg-amber/10 p-3 w-fit mx-auto text-amber-dark">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="mt-2 text-xs font-mono uppercase tracking-wider text-ink/50">Visit</p>
            <p className="text-sm font-medium text-ink">{brand.address.street}</p>
            <p className="text-sm text-ink/50">{brand.address.city}, {brand.address.state}</p>
            <Link href="/locations" className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-amber-dark hover:underline">
              Get Directions
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-10 w-full rounded-2xl border border-amber/10 bg-linear-to-br from-amber/5 via-paper to-sage/5 p-6 sm:p-8">
          <div className="flex flex-col items-center text-center gap-4 sm:flex-row sm:text-left sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                Prefer to talk in person?
              </h3>
              <p className="text-sm text-ink/70">
                {brand.address.street}, {brand.address.city}, {brand.address.state} {brand.address.zip}
              </p>
            </div>
            <Button
              asChild
              className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-ink transition-all hover:bg-amber-light hover:scale-105 hover:shadow-lg hover:shadow-amber/30 shrink-0"
            >
              <Link href="/locations">
                Find us
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}