// app/services/page.tsx
import type { Metadata } from "next";
import { ServiceLabelCard } from "@/components/ServiceLabelCard";
import { JsonLd } from "@/components/JsonLd";
import { getBrandConfig } from "@/lib/brands";
import { breadcrumbSchema } from "@/lib/schema";
import { getServicesForBrand } from "@/lib/services";
import type { ServiceItem } from "@/lib/services";
import { Phone, Award, Clock, Syringe, Pill, Globe, Heart, Stethoscope, Truck, FileText, Briefcase, Sparkles } from "lucide-react";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandConfig();
  return {
    title: `Services | ${brand.name}`,
    description: `${brand.name} offers pharmacy services such as refill support, delivery, vaccinations, testing, medication support, and ${brand.offersCompounding ? "compounding" : "local care"} in Paterson.`,
    alternates: { canonical: "/services" },
  };
}

export default function ServicesPage() {
  const brand = getBrandConfig();
  const isSaimz = brand.slug === "saimz";
  const services = getServicesForBrand(brand);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: brand.url },
    { name: "Services", url: `${brand.url}/services` },
  ]);

  const getServiceIcon = (slug: string, size: "sm" | "md" = "md") => {
    const className = size === "sm" ? "h-4 w-4" : "h-5 w-5";
    const icons: Record<string, React.ReactNode> = {
      "immunizations-vaccines": <Syringe className={className} />,
      "medication-therapy-management": <Pill className={className} />,
      "travel-health-hajj": <Globe className={className} />,
      "womens-health": <Heart className={className} />,
      "health-screenings": <Stethoscope className={className} />,
      "delivery-service": <Truck className={className} />,
      "prescription-transfers": <FileText className={className} />,
      "health-clarity-sessions": <Briefcase className={className} />,
    };
    return icons[slug] || <Award className={className} />;
  };

  // ===== نفس دالة getServiceImage من ClientServices =====
  const getServiceImage = (service: ServiceItem) => {
    // إذا كان سيمز، استخدم الصور المحلية
    if (isSaimz) {
      const basePath = "/images/saimz/services";
      const images: Record<string, string> = {
        "immunizations-vaccines": `${basePath}/immunization-clinic.jpeg`,
        "medication-therapy-management": `${basePath}/medication-therapy-management.webp`,
        "health-screenings": `${basePath}/health-screening.jpeg`,
        "delivery-service": `${basePath}/delivery-image.jpeg`,
        "prescription-transfers": `${basePath}/prescription-transfer.jpeg`,
        "health-clarity-sessions": `${basePath}/health-clarity.jpeg`,
      };
      return images[service.slug] || `${basePath}/pharmacist-consultation.jpeg`;
    }

    // ===== كيورمد: نفس منطق ClientServices =====
    // أولاً: يجيب الصورة من الفيسبوك إذا موجودة
    if (service.facebookPosts && service.facebookPosts.length > 0) {
      const firstPost = service.facebookPosts[0];
      if (firstPost.type === 'video' && firstPost.videoThumbnail) {
        return firstPost.videoThumbnail;
      }
      if (firstPost.image) {
        return firstPost.image;
      }
    }
    // ثانياً: الصور الافتراضية (بنفس امتداد ClientServices)
    const images: Record<string, string> = {
      "immunizations-vaccines": "/images/curemed/services/immunization-clinic.webp",
      "medication-therapy-management": "/images/curemed/services/medication-therapy-management.webp",
      "travel-health-hajj": "/images/curemed/services/travel-health.webp",
      "womens-health": "/images/curemed/services/womens-health.webp",
      "health-screenings": "/images/curemed/services/health-screening.webp",
      "delivery-service": "/images/curemed/services/delivery-service.webp",
      "prescription-transfers": "/images/curemed/services/prescription-transfer.webp",
      "health-clarity-sessions": "/images/curemed/services/health-clarity.webp",
    };
    return images[service.slug] || "/images/curemed/services/pharmacist-consultation.webp";
  };

  // ===== SAIMZ =====
  if (isSaimz) {
    return (
      <section className="min-h-screen bg-[#E8F0FE] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <JsonLd data={breadcrumb} />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#1A4A7A] bg-[#1A4A7A]/10 px-4 py-1.5 rounded-full">
              <Sparkles className="h-3 w-3" />
              Our Services
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-[#0A1628] sm:text-5xl">
              Professional Pharmacy Services
            </h1>
            <p className="mt-3 text-[#6A8AAA] max-w-2xl mx-auto">
              We provide comprehensive pharmacy services with a personal touch,
              designed to meet all your healthcare needs.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceLabelCard
                key={service.slug}
                rx={service.rx}
                title={service.title}
                description={service.description}
                directions={service.directions || "PICK UP IN STORE OR SAME-DAY DELIVERY"}
                href={`/services/${service.slug}`}
                icon={getServiceIcon(service.slug, "md")}
                image={getServiceImage(service)}
                isSaimz={true}
                compact={true}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#6A8AAA] text-sm">
              Need help choosing the right service?
            </p>
            <Link href="/contact">
              <button className="mt-4 inline-flex items-center gap-2 bg-[#1A4A7A] hover:bg-[#0A1628] text-white px-8 py-3.5 rounded-full font-mono text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg shadow-[#1A4A7A]/20">
                Contact Us
                <Phone className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // ===== CUREMED (كما هو مع نفس منطق الصور) =====
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <JsonLd data={breadcrumb} />

      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
            <Award className="h-3 w-3" />
            Services
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl leading-tight">
            Practical pharmacy support
            <span className="block text-amber-dark">for everyday care</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70 max-w-lg">
            At {brand.name}, our caring goes beyond the cure. We help patients
            in Paterson with refill support, medication organization, delivery,
            testing, and other services that keep care close to home.
          </p>
        </div>

        <div className="flex shrink-0 gap-4">
          <div className="rounded-xl bg-paper/80 border border-ink/10 px-4 py-3 text-center min-w-20">
            <p className="font-display text-xl font-bold text-ink">
              {services.length}
            </p>
            <p className="text-[10px] text-ink/50">Services</p>
          </div>
          <div className="rounded-xl bg-paper/80 border border-ink/10 px-4 py-3 text-center min-w-20">
            <p className="font-display text-xl font-bold text-ink">4.7★</p>
            <p className="text-[10px] text-ink/50">Google Rating</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl font-semibold text-ink">
            All Services
          </h2>
          <span className="text-sm text-ink/50">
            {services.length} services available
          </span>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceLabelCard
              key={service.slug}
              rx={service.rx}
              title={service.title}
              description={service.description}
              directions={service.directions || "PICK UP IN STORE OR SAME-DAY DELIVERY"}
              href={`/services/${service.slug}`}
              icon={getServiceIcon(service.slug, "md")}
              image={getServiceImage(service)} // ✅ نفس دالة الصور
              isSaimz={false}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 max-w-3xl">
        <div className="flex items-center gap-2 rounded-full bg-paper/80 border border-ink/5 px-4 py-2">
          <Clock className="h-4 w-4 text-amber-dark" />
          <span className="text-xs font-medium text-ink">
            {brand.hours[0]?.time ?? "Call for hours"}
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-paper/80 border border-ink/5 px-4 py-2">
          <Phone className="h-4 w-4 text-amber-dark" />
          <a
            href={`tel:${brand.phone}`}
            className="text-xs font-medium text-ink hover:text-amber-dark"
          >
            {brand.phone}
          </a>
        </div>
      </div>
    </section>
  );
}