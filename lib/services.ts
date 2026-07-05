import type { BrandConfig } from "./brands/types";

export type ServiceItem = {
  slug: string;
  rx: string;
  title: string;
  description: string;
  directions: string;
  heroTitle: string;
  heroDescription: string;
  overview: string;
  highlights: string[];
};

const sharedServices: ServiceItem[] = [
  {
    slug: "diabetes-testing-education",
    rx: "01",
    title: "Diabetes Testing & Education",
    description:
      "We offer diabetes testing and education in a community setting, with one-on-one support from our pharmacy team.",
    directions: "Walk-in testing, education by appointment",
    heroTitle: "Diabetes support that fits your routine",
    heroDescription:
      "Our team offers practical education and testing that helps patients understand their options and plan their next steps.",
    overview:
      "We provide accessible testing and education for patients managing diabetes and related wellness questions.",
    highlights: [
      "A1C and cholesterol testing",
      "One-on-one medication education",
      "Helpful follow-up conversations",
    ],
  },
  {
    slug: "medication-synchronization",
    rx: "02",
    title: "Medication Synchronization",
    description:
      "We help coordinate refills so medications can be picked up or delivered on a single schedule.",
    directions: "One pickup date, every medication",
    heroTitle: "One refill date for every prescription",
    heroDescription:
      "Medication synchronization helps make monthly refill routines easier to manage and less stressful.",
    overview:
      "We coordinate medications so patients can keep up with their routine without extra trips or confusion.",
    highlights: [
      "Monthly refill alignment",
      "Less time spent coordinating pickups",
      "Support for complex routines",
    ],
  },
  {
    slug: "compliance-packaging",
    rx: "03",
    title: "Compliance Packaging",
    description:
      "We can organize medications into easy-to-follow daily packets to help simplify routines.",
    directions: "Ask us to set up your packets",
    heroTitle: "A clearer way to stay on track",
    heroDescription:
      "Compliance packaging helps patients organize daily medications in a way that is easier to follow at home.",
    overview:
      "We prepare medication packets that make it easier to follow a prescribed routine each day.",
    highlights: [
      "Daily dose packs",
      "Helpful for caregivers and seniors",
      "Support for medication adherence",
    ],
  },
  {
    slug: "immunizations",
    rx: "04",
    title: "Immunizations",
    description:
      "We provide routine vaccinations such as flu, COVID-19, and RSV when available.",
    directions: "Walk-ins welcome, most insurance accepted",
    heroTitle: "Vaccines administered close to home",
    heroDescription:
      "Our pharmacists offer vaccine services in a convenient community setting.",
    overview:
      "We provide routine vaccine services that are easy to access and tailored to patient needs.",
    highlights: [
      "Flu, COVID-19, and RSV vaccines",
      "Convenient local access",
      "Pharmacist-administered care",
    ],
  },
  {
    slug: "free-delivery",
    rx: "05",
    title: "Free Local Delivery",
    description:
      "We offer free local delivery for eligible prescriptions and routine needs within our service area.",
    directions: "Same-day within local delivery zone",
    heroTitle: "Helpful delivery without the extra cost",
    heroDescription:
      "Our free delivery service helps patients receive medications in a convenient way.",
    overview:
      "We offer local delivery to patients who prefer having prescriptions brought to them.",
    highlights: [
      "No-cost delivery",
      "Convenient local service",
      "Help for busy households",
    ],
  },
  {
    slug: "medication-therapy-management",
    rx: "06",
    title: "Medication Therapy Management",
    description:
      "We can review medications with patients and help clarify questions about a routine or treatment plan.",
    directions: "Personalized review with a pharmacist",
    heroTitle: "Medication reviews designed around you",
    heroDescription:
      "Medication therapy management gives patients a chance to talk through their medications with a pharmacist.",
    overview:
      "Our pharmacists help patients understand how each medication fits into their treatment plan and daily routine.",
    highlights: [
      "Medication review with a pharmacist",
      "Support for routine questions",
      "A clearer understanding of your plan",
    ],
  },
  {
    slug: "weight-loss-program",
    rx: "07",
    title: "Weight Loss Program",
    description:
      "We offer a pharmacist-guided weight loss program that supports follow-up and routine care discussions.",
    directions: "Ask us about availability and next steps",
    heroTitle: "Support for a weight loss journey",
    heroDescription:
      "Our weight loss program is designed to support patients with follow-up and practical pharmacy guidance.",
    overview:
      "We offer a weight loss program that helps patients talk through options and stay connected to care.",
    highlights: [
      "Pharmacist-guided support",
      "Routine follow-up conversations",
      "Care that stays close to home",
    ],
  },
  {
    slug: "specialty-medication",
    rx: "08",
    title: "Specialty Medication",
    description:
      "We support patients with specialty medication questions and help connect them with the right pharmacy guidance.",
    directions: "Call us to discuss availability",
    heroTitle: "Specialty medication support with a personal touch",
    heroDescription:
      "We help patients navigate specialty medication questions and stay connected to the pharmacy team.",
    overview:
      "We offer support for specialty medication needs and can help patients understand how to move forward.",
    highlights: [
      "Support for specialty medication questions",
      "Helpful follow-up conversations",
      "Care from a local pharmacy team",
    ],
  },
];

const compoundingService: ServiceItem = {
  slug: "compounding",
  rx: "09",
  title: "Custom Compounding",
  description:
    "We offer custom compounding for patients who may benefit from tailored dosage forms or flavors.",
  directions: "By consultation — call ahead",
  heroTitle: "Compounding care tailored to your needs",
  heroDescription:
    "Our compounding service offers customized medication options when a standard product may not fit a patient well.",
  overview:
    "We prepare customized formulations that can support unique patient needs and treatment goals.",
  highlights: [
    "Custom strengths and forms",
    "Flavoring options when appropriate",
    "Personalized pharmacist consultation",
  ],
};

const pointOfCareService: ServiceItem = {
  slug: "point-of-care-testing",
  rx: "10",
  title: "Point of Care Testing",
  description:
    "We provide point-of-care testing services that make it easier to check in and receive guidance in one visit.",
  directions: "Ask us about availability",
  heroTitle: "Convenient testing close to home",
  heroDescription:
    "Point-of-care testing gives patients a practical way to receive testing and support in the pharmacy setting.",
  overview:
    "We offer point-of-care testing for patients who want a convenient visit and follow-up guidance from the pharmacy team.",
  highlights: [
    "Quick in-pharmacy testing",
    "Helpful guidance from our team",
    "Convenient follow-up conversations",
  ],
};

export function getServicesForBrand(brand: BrandConfig): ServiceItem[] {
  const services = [...sharedServices];

  if (brand.offersCompounding) {
    services.push(compoundingService);
  }

  if (brand.slug === "curemed") {
    services.push(pointOfCareService);
  }

  return services;
}
