"use client";

import Link from "next/link";
import { ServiceLabelCard } from "@/components/ServiceLabelCard";
import {
  ArrowRight,
  Syringe,
  Pill,
  Globe,
  Heart,
  Stethoscope,
  Truck,
  FileText,
  Briefcase,
  Award,
  Languages,
  Package,
  ShieldCheck,
  PillBottle,
  Brain,
} from "lucide-react";
import type { ServiceItem } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { getBrandConfig } from "@/lib/brands";
import { getServiceImage } from "@/lib/services/images";

type ClientServicesProps = {
  services: ServiceItem[];
};

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
    "all-languages": <Languages className="h-4 w-4" />,
    "compliance-packaging": <Package className="h-4 w-4" />,
    "accept-all-insurance": <ShieldCheck className="h-4 w-4" />,
    "clinical-supplements": <PillBottle className="h-4 w-4" />,
    "mental-health-awareness": <Brain className="h-4 w-4" />,
  };
  return icons[slug] || <Award className="h-4 w-4" />;
};

const brand = getBrandConfig();
const isSaimz = brand.slug === "saimz";

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
            directions={
              service.directions || "PICK UP IN STORE OR SAME-DAY DELIVERY"
            }
            href={`/services/${service.slug}`}
            icon={getServiceIcon(service.slug)}
            image={getServiceImage(service, isSaimz)}
          />
        ))}
      </div>

      {hasMoreServices && (
        <div className="mt-10 flex justify-center">
          <Button
            asChild
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3 h-auto font-mono text-sm font-medium uppercase tracking-wider text-ink transition-all hover:bg-amber-light hover:scale-105 hover:shadow-lg hover:shadow-amber/30"
          >
            <Link href="/services" className="inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      )}
    </>
  );
}
