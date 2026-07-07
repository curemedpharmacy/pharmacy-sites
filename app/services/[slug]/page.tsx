import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrandConfig } from "@/lib/brands";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getServicesForBrand } from "@/lib/services";
import { Phone, MapPin, ArrowRight, Award, Clock, Check, Calendar, Users, Shield, ChevronRight } from "lucide-react";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandConfig();
  const service = getServicesForBrand(brand).find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested pharmacy service could not be found.",
      alternates: { canonical: "/services" },
    };
  }

  return {
    title: `${service.title} | ${brand.name}`,
    description: `${service.title} is one of the pharmacy services offered by ${brand.name} in Paterson, from refill support to medication guidance and routine care.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const brand = getBrandConfig();
  const service = getServicesForBrand(brand).find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: brand.url },
    { name: "Services", url: `${brand.url}/services` },
    { name: service.title, url: `${brand.url}/services/${service.slug}` },
  ]);

  // أيقونة حسب نوع الخدمة
  const getServiceIcon = () => {
    const icons: Record<string, React.ReactNode> = {
      "diabetes-testing-education": <Shield className="h-6 w-6" />,
      "immunizations": <Shield className="h-6 w-6" />,
      "medication-therapy-management": <Shield className="h-6 w-6" />,
      "delivery": <Shield className="h-6 w-6" />,
      "testing": <Shield className="h-6 w-6" />,
    };
    return icons[service.slug] || <Award className="h-6 w-6" />;
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5 min-h-[70vh]">
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-sage/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <JsonLd data={breadcrumb} />

        {/* ===== BREADCRUMB ===== */}
        <nav className="flex items-center gap-2 text-sm text-ink/50 mb-8">
          <Link href="/" className="hover:text-amber-dark transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/services" className="hover:text-amber-dark transition-colors">
            Services
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink/80 font-medium">{service.title}</span>
        </nav>

        {/* ===== HEADER ===== */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-amber/10 p-2 text-amber-dark">
              {getServiceIcon()}
            </div>
            <span className="font-mono text-xs font-medium text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
              RX № {service.rx}
            </span>
          </div>
          
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl leading-tight">
            {service.heroTitle}
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink/70 max-w-2xl">
            {service.heroDescription}
          </p>
        </div>

        {/* ===== QUICK INFO CARDS ===== */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
          <div className="rounded-xl bg-paper/80 border border-ink/5 p-3 text-center hover:border-amber/20 transition-colors">
            <Clock className="h-4 w-4 text-amber-dark mx-auto" />
            <p className="text-[10px] text-ink/50 mt-1">Hours</p>
            <p className="text-xs font-medium text-ink">Mon–Sat</p>
          </div>
          <div className="rounded-xl bg-paper/80 border border-ink/5 p-3 text-center hover:border-amber/20 transition-colors">
            <Users className="h-4 w-4 text-amber-dark mx-auto" />
            <p className="text-[10px] text-ink/50 mt-1">Patients</p>
            <p className="text-xs font-medium text-ink">500+</p>
          </div>
          <div className="rounded-xl bg-paper/80 border border-ink/5 p-3 text-center hover:border-amber/20 transition-colors">
            <Calendar className="h-4 w-4 text-amber-dark mx-auto" />
            <p className="text-[10px] text-ink/50 mt-1">Booking</p>
            <p className="text-xs font-medium text-ink">Available</p>
          </div>
          <div className="rounded-xl bg-paper/80 border border-ink/5 p-3 text-center hover:border-amber/20 transition-colors">
            <Award className="h-4 w-4 text-amber-dark mx-auto" />
            <p className="text-[10px] text-ink/50 mt-1">Rating</p>
            <p className="text-xs font-medium text-ink">4.9★</p>
          </div>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Left Column - Details */}
          <div className="space-y-6">
            {/* Overview */}
            <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-ink flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber" />
                About this service
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                {service.overview}
              </p>
            </div>

            {/* Highlights */}
            <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-ink flex items-center gap-2 mb-4">
                <Check className="h-5 w-5 text-emerald-500" />
                Key Benefits
              </h3>
              <ul className="space-y-3">
                {service.highlights.map((highlight, index) => (
                  <li 
                    key={highlight} 
                    className="flex items-start gap-3 p-3 rounded-xl bg-paper/50 border border-ink/5 hover:border-amber/10 transition-colors"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="text-sm text-ink/70">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="space-y-4">
            {/* Contact Card */}
            <div className="rounded-2xl border border-amber/10 bg-linear-to-br from-amber/5 to-paper p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-amber/10 p-1.5">
                  <Phone className="h-4 w-4 text-amber-dark" />
                </div>
                <h2 className="font-display text-lg font-semibold text-ink">
                  Need help?
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-ink/70">
                Reach out to {brand.name} at <span className="font-medium text-ink">{brand.phone}</span> for questions about this service or to schedule a visit.
              </p>
              <Link
                href="/contact"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-paper transition-all hover:bg-amber-dark hover:scale-[1.02]"
              >
                Contact Us
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 text-ink/40" />
                <h3 className="font-display text-sm font-semibold text-ink">
                  Visit Us
                </h3>
              </div>
              <p className="text-sm text-ink/60 leading-relaxed">
                {brand.address.street}
                <br />
                {brand.address.city}, {brand.address.state} {brand.address.zip}
              </p>
              <Link
                href="/locations"
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-amber-dark hover:underline"
              >
                Get Directions
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Quick Link */}
            <Link
              href="/services"
              className="block rounded-2xl border border-ink/5 bg-paper/40 p-4 text-center hover:bg-paper/80 transition-colors"
            >
              <span className="text-sm text-ink/50">
                ← Back to all services
              </span>
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}