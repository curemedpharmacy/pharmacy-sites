// lib/service-images.ts
import type { ServiceItem } from "./services";

export function getServiceImage(service: ServiceItem, isSaimz: boolean): string {
  const basePath = isSaimz ? "/images/saimz/services" : "/images/curemed/services";
  
  const images: Record<string, string> = {
    "immunizations-vaccines": `${basePath}/immunization-clinic.jpeg`,
    "medication-therapy-management": `${basePath}/medication-therapy-management.webp`,
    "travel-health-hajj": `${basePath}/travel-health.jpeg`,
    "womens-health": `${basePath}/womens-health.jpeg`,
    "health-screenings": `${basePath}/health-screening.jpeg`,
    "delivery-service": `${basePath}/delivery-image.jpeg`,
    "prescription-transfers": `${basePath}/prescription-transfer.jpeg`,
    "health-clarity-sessions": `${basePath}/health-clarity.jpeg`,
  };
  
  return images[service.slug] || `${basePath}/pharmacist-consultation.jpeg`;
}