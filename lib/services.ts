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
  includesCompounding?: boolean;
};

const sharedServices: ServiceItem[] = [
  {
    slug: "diabetes-testing-education",
    rx: "01",
    title: "Diabetes Testing & Education",
    description:
      "Affordable A1C, cholesterol, and diabetes testing, plus one-on-one education from an accredited pharmacist.",
    directions: "Walk-in testing, education by appointment",
    heroTitle: "Diabetes support that fits your routine",
    heroDescription:
      "Our pharmacists offer practical education and testing that helps patients understand their numbers and take the next step with confidence.",
    overview:
      "We provide accessible testing and education for patients managing diabetes, prediabetes, and cholesterol concerns.",
    highlights: [
      "A1C and cholesterol testing",
      "One-on-one medication education",
      "Personalized follow-up guidance",
    ],
  },
  {
    slug: "medication-synchronization",
    rx: "02",
    title: "Medication Synchronization",
    description:
      "We sync refills to a single pickup or delivery date so your routine stays simple and reliable.",
    directions: "One pickup date, every medication",
    heroTitle: "One refill date for every prescription",
    heroDescription:
      "Medication synchronization helps reduce missed doses and makes monthly refills easier to manage.",
    overview:
      "We coordinate your medications so you can pick up or receive everything on the same schedule each month.",
    highlights: [
      "Monthly refill alignment",
      "Fewer rushed trips to the pharmacy",
      "Support for complex medication routines",
    ],
  },
  {
    slug: "compliance-packaging",
    rx: "03",
    title: "Compliance Packaging",
    description:
      "We sort medications into easy daily packets so complex regimens are simpler to follow correctly.",
    directions: "Ask us to set up your packets",
    heroTitle: "A clearer way to stay on track",
    heroDescription:
      "Compliance packaging helps patients organize daily medications and avoid missed doses.",
    overview:
      "We prepare medication packets that make it easier to follow a prescribed routine at home.",
    highlights: [
      "Daily dose packs",
      "Helpful for caregivers and seniors",
      "Supports medication adherence",
    ],
  },
  {
    slug: "immunizations",
    rx: "04",
    title: "Immunizations",
    description:
      "Flu, COVID-19, RSV, and routine vaccinations administered by our licensed pharmacists.",
    directions: "Walk-ins welcome, most insurance accepted",
    heroTitle: "Vaccines administered close to home",
    heroDescription:
      "We offer routine and seasonal immunizations in a convenient community setting.",
    overview:
      "Our pharmacists provide vaccine services that are easy to access and tailored to your care needs.",
    highlights: [
      "Flu, COVID-19, and RSV vaccines",
      "No appointment needed for many visits",
      "Pharmacist-administered care",
    ],
  },
  {
    slug: "free-delivery",
    rx: "05",
    title: "Free Local Delivery",
    description:
      "We bring your medications to your door at no charge, usually within the day.",
    directions: "Same-day within local delivery zone",
    heroTitle: "Fast delivery without the extra cost",
    heroDescription:
      "Free delivery keeps your medications convenient and accessible for routine pickups.",
    overview:
      "We offer free local delivery to patients who prefer to receive prescriptions at home.",
    highlights: [
      "No-cost delivery",
      "Same-day service in our delivery area",
      "Helpful for busy households and mobility concerns",
    ],
  },
  {
    slug: "medication-therapy-management",
    rx: "06",
    title: "Medication Therapy Management",
    description:
      "We review your medications with you to improve safety, simplify your routine, and answer questions.",
    directions: "Personalized review with a pharmacist",
    heroTitle: "Medication reviews designed around you",
    heroDescription:
      "Medication therapy management gives patients a structured, one-on-one review of their medications and goals.",
    overview:
      "Our pharmacists help patients understand how each medication fits into their treatment plan and daily routine.",
    highlights: [
      "Medication review with a pharmacist",
      "Support for side effects and medication questions",
      "Better understanding of your treatment plan",
    ],
  },
];

const compoundingService: ServiceItem = {
  slug: "compounding",
  rx: "07",
  title: "Custom Compounding",
  description:
    "Personalized dosages, flavors, and forms for patients whose needs are not met by commercial medications.",
  directions: "By consultation — call ahead",
  heroTitle: "Compounding care tailored to your needs",
  heroDescription:
    "Our compounding service creates customized medication options when standard products do not fit the patient well.",
  overview:
    "We prepare customized formulations that can support unique patient needs and treatment goals.",
  highlights: [
    "Custom strengths and forms",
    "Flavoring options when appropriate",
    "Personalized pharmacist consultation",
  ],
  includesCompounding: true,
};

export function getServicesForBrand(brand: BrandConfig): ServiceItem[] {
  return brand.offersCompounding
    ? [...sharedServices, compoundingService]
    : sharedServices;
}
