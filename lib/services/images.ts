import type { ServiceItem } from "@/lib/services";

export function getServiceImage(
  service: ServiceItem,
  isSaimz: boolean,
): string {
  if (isSaimz) {
    const basePath = "/images/saimz/services";

    const images: Record<string, string> = {
      "immunizations-vaccines": `${basePath}/immunization.jpeg`,
      "medication-therapy-management": `${basePath}/medication-therapy-management.webp`,
      "health-screenings": `${basePath}/health-screening.jpeg`,
      "delivery-service": `${basePath}/delivery-image.jpeg`,
      "prescription-transfers": `${basePath}/prescription-transfer.jpeg`,
      "all-languages": `${basePath}/all-languages.webp`,
      "compliance-packaging": `${basePath}/compliance-packaging.webp`,
      "accept-all-insurance": `${basePath}/accept-all-insurance.webp`,
      "clinical-supplements": `${basePath}/clinical-supplements.webp`,
      "mental-health-awareness": `${basePath}/mental-health-awareness.webp`,
    };

    return images[service.slug] || `${basePath}/pharmacist-consultation.jpeg`;
  }

  // ===== CUREMED =====
  // if (service.facebookPosts?.length) {
  //   const firstPost = service.facebookPosts[0];

  //   if (firstPost.type === "video" && firstPost.videoThumbnail) {
  //     return firstPost.videoThumbnail;
  //   }

  //   if (firstPost.image) {
  //     return firstPost.image;
  //   }
  // }

  const images: Record<string, string> = {
    "immunizations-vaccines":
      "/images/curemed/services/vaccination-clinic.png",
    "medication-therapy-management":
      "/images/curemed/services/medication-therapy-management.png",
    "travel-health-hajj": "/images/curemed/services/travel-health.jpg",
    "womens-health": "/images/curemed/services/womens-health.jpg",
    "health-screenings": "/images/curemed/services/health-screening.png",
    "delivery-service": "/images/curemed/services/delivery-service.png",
    "prescription-transfers":
      "/images/curemed/services/prescription-transfer.jpg",
    "health-clarity-sessions": "/images/curemed/services/health-clarity.jpg",
  };

  return (
    images[service.slug] ||
    "/images/curemed/services/pharmacist-consultation.webp"
  );
}
