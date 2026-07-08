import type { BrandConfig } from "./types";

export const curemed: BrandConfig = {
  slug: "curemed",
  name: "Curemed Pharmacy",
  shortName: "Curemed",
  legalName: "Curemed Pharmacy",
  url: "https://www.curemedpharmacy.com",
  description:
    "Curemed Pharmacy is an independent, accredited pharmacy in Paterson, NJ offering prescription refills, diabetes testing and education, immunizations, and free local delivery.",
  tagline: "Paterson's Trusted Independent Pharmacy",
  phone: "+1-862-225-9432",
  email: "pharmacy@curemedpharmacy.com",
  address: {
    street: "311 Crooks Ave Suite C",
    city: "Paterson",
    state: "NJ",
    zip: "07503",
    country: "US",
  },
  hours: [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/CuremedPharmacy",
    instagram: "https://www.instagram.com/ghadakuwaik",
    linkedin: "https://www.linkedin.com/company/curemed-pharmacy",
  },
  offersCompounding: true,
  heroImages: [
    
     {
      path: "/images/curemed/hero/storefront-personalized-care.png",
      alt: "Storefront with personalized pharmacy care",
    },
    
    {
      path: "/images/curemed/hero/hero-slider-image.png",
      alt: "Grand opening ribbon cutting event",
    },
    {
      path: "/images/curemed/hero/hero-slide-image3.webp",
      alt: "Grand opening crowd photo",
    },
  ],
  galleryImages: {
    team: {
      path: "/images/curemed/team/pharmacist-consultation.webp",
      alt: "Pharmacist consultation photo",
    },
    services: {
      path: "/images/curemed/services/medication-therapy-management.webp",
      alt: "Medication therapy management photo",
    },
    storefront: {
      path: "/images/curemed/storefront/checkout-counter.webp",
      alt: "Storefront checkout counter photo",
    },
  },
};
