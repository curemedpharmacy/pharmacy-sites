import type { Metadata } from "next";
import { ServiceLabelCard } from "@/components/ServiceLabelCard";
import { JsonLd } from "@/components/JsonLd";
import { getBrandConfig } from "@/lib/brands";
import { breadcrumbSchema } from "@/lib/schema";
import { getServicesForBrand } from "@/lib/services";
import type { ServiceItem } from "@/lib/services";
import { Phone, Award, Clock, Syringe, Pill, Globe, Heart, Stethoscope, Truck, FileText, Briefcase } from "lucide-react";

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
  const services = getServicesForBrand(brand);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: brand.url },
    { name: "Services", url: `${brand.url}/services` },
  ]);

  // أيقونات لكل خدمة
  const getServiceIcon = (slug: string) => {
    const icons: Record<string, React.ReactNode> = {
      "immunizations-vaccines": <Syringe className="h-4 w-4" />,
      "medication-therapy-management": <Pill className="h-4 w-4" />,
      "travel-health-hajj": <Globe className="h-4 w-4" />,
      "womens-health": <Heart className="h-4 w-4" />,
      "health-screenings": <Stethoscope className="h-4 w-4" />,
      "delivery-service": <Truck className="h-4 w-4" />,
      "prescription-transfers": <FileText className="h-4 w-4" />,
      "health-clarity-sessions": <Briefcase className="h-4 w-4" />,
    };
    return icons[slug] || <Award className="h-4 w-4" />;
  };

  // الحصول على صورة الخدمة من البوست الأول (نفس منطق الـ slug)
  const getServiceImage = (service: ServiceItem) => {
    // إذا كان هناك بوستات
    if (service.facebookPosts && service.facebookPosts.length > 0) {
      const firstPost = service.facebookPosts[0];
      // إذا كان فيديو، استخدم الـ thumbnail
      if (firstPost.type === 'video' && firstPost.videoThumbnail) {
        return firstPost.videoThumbnail;
      }
      // إذا كان بوست عادي، استخدم الصورة
      if (firstPost.image) {
        return firstPost.image;
      }
    }
    // الصورة الافتراضية للخدمة
    const images: Record<string, string> = {
      "immunizations-vaccines": "/images/curemed/services/immunization-clinic.webp",
      "medication-therapy-management": "/images/curemed/services/medication-therapy-management.webp",
      "travel-health-hajj": "/images/curemed/services/travel-health.webp",
      "womens-health": "/images/curemed/services/womens-health-event.webp",
      "health-screenings": "/images/curemed/services/health-screening-event.webp",
      "delivery-service": "/images/curemed/services/delivery-service.webp",
      "prescription-transfers": "/images/curemed/services/prescription-transfer.webp",
      "health-clarity-sessions": "/images/curemed/services/health-clarity-session.webp",
    };
    return images[service.slug] || "/images/curemed/services/pharmacist-consultation.webp";
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <JsonLd data={breadcrumb} />

      {/* ===== HEADER SECTION ===== */}
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

        {/* Quick Stats */}
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

      {/* ===== SERVICES GRID ===== */}
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
              icon={getServiceIcon(service.slug)}
              image={getServiceImage(service)}
            />
          ))}
        </div>
      </div>

      {/* ===== QUICK INFO ===== */}
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