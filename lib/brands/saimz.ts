import type { BrandConfig } from "./types";

export const saimz: BrandConfig = {
  slug: "saimz",
  name: "Saimz Pharmacy",
  shortName: "Saimz",
  legalName: "Saimz Pharmacy (DBA: Curemed Clinical Pharmacy per NPI registry)",
  url: "https://saimz-pharm.squarespace.com/",
  description:
    "Saimz Pharmacy is a locally owned neighborhood pharmacy on Broadway in Paterson, NJ offering medication synchronization, compliance packaging, immunizations, and free delivery.",
  tagline: "Your Neighborhood Pharmacy on Broadway",
  phone: "+1-973-782-4444",
  email: "Saimzpharmacy23@gmail.com",
  address: {
    street: "715 Broadway",
    city: "Paterson",
    state: "NJ",
    zip: "07514",
    country: "US",
  },
  hours: [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {},
  npi: "1962995290",
  offersCompounding: false,
  heroImages: [],
  galleryImages: {
    team: {
      path: "",
      alt: "",
    },
    services: {
      path: "",
      alt: "",
    },
    storefront: {
      path: "",
      alt: "",
    },
  },
};
