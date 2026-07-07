import type { Metadata } from "next";
import Link from "next/link";
import { getBrandConfig } from "@/lib/brands";
import { MapPin, Phone, Award, Heart, Shield, Users, Star, Building, CheckCircle, Calendar, Quote } from "lucide-react";

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

  const pharmacyInfo = {
    founded: 2015,
    teamSize: 12,
    specialties: ["Medication Management", "Immunizations", "Health Screenings", "Delivery Service"],
    values: ["Trust", "Compassion", "Excellence", "Community"],
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5 min-h-[70vh]">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-sage/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* ===== HERO SECTION ===== */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
            <Heart className="h-3 w-3" />
            Our Story
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl leading-tight">
            About {brand.name}
          </h1>
          <div className="mt-4 space-y-4">
            <p className="text-base leading-relaxed text-ink/70">
              {brand.name} is a neighborhood pharmacy in Paterson, New Jersey,
              serving patients from {brand.address.street} with refill support,
              free local delivery, diabetes testing and education, immunizations,
              medication reviews, and everyday care that stays close to home.
            </p>
            <p className="text-base leading-relaxed text-ink/70">
              Founded in {pharmacyInfo.founded} with a vision to provide accessible
              healthcare, our pharmacy has grown into a trusted community partner
              serving over 500 patients in the Paterson area.
            </p>
            <p className="text-base leading-relaxed text-ink/70">
              Our regular hours are{" "}
              <span className="font-medium text-ink">
                {brand.hours.map((hour) => `${hour.day} ${hour.time}`).join("; ")}
              </span>.
              {brand.offersCompounding
                ? " We also offer custom compounding at this location."
                : " Compounding is not offered at this location."}
            </p>
          </div>
        </div>

        {/* ===== VALUES & INFO CARDS ===== */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Values Card */}
          <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink flex items-center gap-2">
              <Heart className="h-5 w-5 text-amber-dark" />
              What We Believe
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              We focus on clear communication, practical support, and a
              patient-first approach that helps neighbors feel comfortable asking
              questions and getting the help they need.
            </p>
            
            <div className="mt-4 grid grid-cols-2 gap-3">
              {pharmacyInfo.values.map((value) => (
                <div key={value} className="rounded-xl bg-amber/5 border border-amber/10 p-3 text-center">
                  <Shield className="h-5 w-5 text-amber-dark mx-auto" />
                  <p className="mt-1 text-xs font-medium text-ink">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-dark" />
              Quick Facts
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-sage/5 border border-sage/10 p-3 text-center">
                <Calendar className="h-5 w-5 text-sage mx-auto" />
                <p className="mt-1 text-sm font-medium text-ink">{pharmacyInfo.founded}</p>
                <p className="text-[10px] text-ink/50">Founded</p>
              </div>
              <div className="rounded-xl bg-sage/5 border border-sage/10 p-3 text-center">
                <Users className="h-5 w-5 text-sage mx-auto" />
                <p className="mt-1 text-sm font-medium text-ink">{pharmacyInfo.teamSize}+</p>
                <p className="text-[10px] text-ink/50">Team Members</p>
              </div>
              <div className="rounded-xl bg-sage/5 border border-sage/10 p-3 text-center">
                <Heart className="h-5 w-5 text-sage mx-auto" />
                <p className="mt-1 text-sm font-medium text-ink">500+</p>
                <p className="text-[10px] text-ink/50">Patients Served</p>
              </div>
              <div className="rounded-xl bg-sage/5 border border-sage/10 p-3 text-center">
                <Star className="h-5 w-5 text-sage mx-auto" />
                <p className="mt-1 text-sm font-medium text-ink">4.7★</p>
                <p className="text-[10px] text-ink/50">Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SERVICES & SPECIALTIES ===== */}
        <div className="mt-8 rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink flex items-center gap-2">
            <Building className="h-5 w-5 text-amber-dark" />
            Our Services
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            We offer a range of pharmacy services to support your health and wellness journey.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {pharmacyInfo.specialties.map((service) => (
              <div key={service} className="rounded-xl border border-ink/5 bg-paper/40 p-3 text-center hover:border-amber/20 transition-colors">
                <CheckCircle className="h-4 w-4 text-emerald-500 mx-auto" />
                <p className="mt-1 text-xs font-medium text-ink/80">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== TESTIMONIALS ===== */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-ink/10 bg-paper/60 p-5">
            <Quote className="h-5 w-5 text-amber-dark" />
            <p className="mt-2 text-sm italic text-ink/70">
              &quot;The team at {brand.name} always takes the time to explain my medications clearly. I feel genuinely cared for every visit.&quot;
            </p>
            <p className="mt-3 text-xs font-medium text-ink/50">&mdash; Sarah M., Paterson</p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-paper/60 p-5">
            <Quote className="h-5 w-5 text-amber-dark" />
            <p className="mt-2 text-sm italic text-ink/70">
              &quot;Their delivery service has been a lifesaver for my family. Reliable, friendly, and always on time.&quot;
            </p>
            <p className="mt-3 text-xs font-medium text-ink/50">&mdash; David R., Paterson</p>
          </div>
        </div>

        {/* ===== CTA SECTION ===== */}
        <div className="mt-10 rounded-2xl border border-amber/10 bg-linear-to-br from-amber/5 via-paper to-sage/5 p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark">
                <Phone className="h-3 w-3" />
                Visit Us
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                Come see the {brand.name} difference
              </h3>
              <p className="mt-1 text-sm text-ink/70">
                {brand.address.street}, {brand.address.city}, {brand.address.state} {brand.address.zip}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${brand.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-paper transition-all hover:bg-amber-dark hover:scale-[1.02]"
              >
                <Phone className="h-3.5 w-3.5" />
                Call Us
              </a>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-ink transition-all hover:border-ink/40 hover:bg-ink/5"
              >
                <MapPin className="h-3.5 w-3.5" />
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}