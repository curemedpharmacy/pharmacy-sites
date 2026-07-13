import type { ServiceItem } from "@/lib/services";

export function getServiceImage(
  service: ServiceItem,
  isSaimz: boolean
): string {
  if (isSaimz) {
    const basePath = "/images/saimz/services";

    const images: Record<string, string> = {
      "immunizations-vaccines": `${basePath}/immunization.jpeg`,
      "medication-therapy-management": `${basePath}/medication-therapy-management.webp`,
      "health-screenings": `${basePath}/health-screening.jpeg`,
      "delivery-service": `${basePath}/delivery-image.jpeg`,
      "prescription-transfers": `${basePath}/prescription-transfer.jpeg`,
    };

    return images[service.slug] || `${basePath}/pharmacist-consultation.jpeg`;
  }

  // ===== CUREMED =====
  if (service.facebookPosts?.length) {
    const firstPost = service.facebookPosts[0];

    if (firstPost.type === "video" && firstPost.videoThumbnail) {
      return firstPost.videoThumbnail;
    }

    if (firstPost.image) {
      return firstPost.image;
    }
  }

  const images: Record<string, string> = {
    "immunizations-vaccines":
      "/images/curemed/services/immunization-clinic.webp",
    "medication-therapy-management":
      "/images/curemed/services/medication-therapy-management.webp",
    "travel-health-hajj":
      "/images/curemed/services/travel-health.webp",
    "womens-health":
      "/images/curemed/services/womens-health.webp",
    "health-screenings":
      "/images/curemed/services/health-screening.webp",
    "delivery-service":
      "/images/curemed/services/delivery-service.webp",
    "prescription-transfers":
      "/images/curemed/services/prescription-transfer.webp",
    "health-clarity-sessions":
      "/images/curemed/services/health-clarity.webp",
  };

  return images[service.slug] ||
    "/images/curemed/services/pharmacist-consultation.webp";
}