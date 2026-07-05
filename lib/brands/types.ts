export type BrandHours = { day: string; time: string };

export type BrandImage = {
  path: string;
  alt: string;
};

export type BrandConfig = {
  slug: "curemed" | "saimz";
  name: string;
  shortName: string;
  legalName: string;
  url: string;
  description: string;
  tagline: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  hours: BrandHours[];
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    x?: string;
  };
  npi?: string;
  offersCompounding: boolean;
  heroImages: BrandImage[];
  galleryImages: {
    team: BrandImage;
    services: BrandImage;
    storefront: BrandImage;
  };
};
