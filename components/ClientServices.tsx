"use client";

import Link from "next/link";
import { ServiceLabelCard } from "@/components/ServiceLabelCard";
import { ArrowRight } from "lucide-react";

type Service = {
  slug: string;
  rx: string;
  title: string;
  description: string;
  directions?: string;
};

type ClientServicesProps = {
  services: Service[];
};

export function ClientServices({ services }: ClientServicesProps) {
  // عرض أول 6 خدمات فقط
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