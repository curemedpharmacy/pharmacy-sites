"use client";

import Link from "next/link";
import { ServiceLabelCard } from "@/components/ServiceLabelCard";
import { ArrowRight, Syringe, Pill, Globe, Heart, Stethoscope, Truck, FileText, Briefcase, Award } from "lucide-react";
import type { ServiceItem } from "@/lib/services";

type ClientServicesProps = {
  services: ServiceItem[];
};

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
  if (service.facebookPosts && service.facebookPosts.length > 0) {
    const firstPost = service.facebookPosts[0];
    if (firstPost.type === 'video' && firstPost.videoThumbnail) {
      return firstPost.videoThumbnail;
    }
    if (firstPost.image) {
      return firstPost.image;
    }
  }
  // الصورة الافتراضية للخدمة
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

export function ClientServices({ services }: ClientServicesProps) {
  const displayedServices = services.slice(0, 6);
  const hasMoreServices = services.length > 6;

  return (
    <>
      <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedServices.map((service) => (
          <ServiceLabelCard
            key={service.rx || service.slug}
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

      {hasMoreServices && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-ink/10 bg-paper px-7 py-3 font-mono text-sm font-medium text-ink transition-all hover:border-ink/30 hover:bg-ink/5 hover:shadow-md"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </>
  );
}