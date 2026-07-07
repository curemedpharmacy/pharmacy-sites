import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { getBrandConfig } from "@/lib/brands";
import { Phone, MapPin, Clock, Mail, Award, Building, ArrowRight } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandConfig();
  return {
    title: `Contact ${brand.name}`,
    description: `Reach ${brand.name} at ${brand.phone} or visit us at ${brand.address.street} in Paterson for pharmacy questions and service help.`,
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
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
            <Mail className="h-3 w-3" />
            Contact
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl leading-tight">
            Get in touch with {brand.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70 max-w-2xl">
            Reach out to our pharmacy team for questions about your prescriptions, 
            services, or to schedule a visit.
          </p>
        </div>

        {/* ===== CONTACT INFO & FORM GRID ===== */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6 hover:border-amber/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-amber/10 p-3 text-amber-dark">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">Call Us</h3>
                  <a 
                    href={`tel:${brand.phone}`}
                    className="text-lg font-medium text-ink hover:text-amber-dark transition-colors"
                  >
                    {brand.phone}
                  </a>
                  <p className="text-xs text-ink/50 mt-1">Mon–Sat, during pharmacy hours</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6 hover:border-amber/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-sage/10 p-3 text-sage">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">Visit Us</h3>
                  <address className="not-italic text-sm text-ink/70 leading-relaxed">
                    {brand.address.street}
                    <br />
                    {brand.address.city}, {brand.address.state} {brand.address.zip}
                  </address>
                  <Link
                    href="/locations"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-amber-dark hover:underline"
                  >
                    Get Directions
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6 hover:border-amber/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-amber/10 p-3 text-amber-dark">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-ink">Pharmacy Hours</h3>
                  <div className="mt-2 space-y-1.5">
                    {brand.hours.map((hour) => (
                      <div key={hour.day} className="flex justify-between text-sm">
                        <span className="text-ink/70">{hour.day}</span>
                        <span className="font-mono text-ink/50">{hour.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-paper/40 border border-ink/5 p-3 text-center">
                <Award className="h-4 w-4 text-amber-dark mx-auto" />
                <p className="mt-1 text-xs font-medium text-ink">500+</p>
                <p className="text-[10px] text-ink/50">Patients</p>
              </div>
              <div className="rounded-xl bg-paper/40 border border-ink/5 p-3 text-center">
                <Building className="h-4 w-4 text-amber-dark mx-auto" />
                <p className="mt-1 text-xs font-medium text-ink">15+</p>
                <p className="text-[10px] text-ink/50">Years</p>
              </div>
              <div className="rounded-xl bg-paper/40 border border-ink/5 p-3 text-center">
                <Phone className="h-4 w-4 text-amber-dark mx-auto" />
                <p className="mt-1 text-xs font-medium text-ink">4.9★</p>
                <p className="text-[10px] text-ink/50">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-8">
            <ContactForm brand={brand} />
          </div>
        </div>
      </div>
    </section>
  );
}