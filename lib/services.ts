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
  facebookPosts?: {
    title: string;
    content: string;
    date: string;
    // link: string;
    type: 'post' | 'video';
  }[];
};

// الخدمات المستخرجة من صفحة الفيسبوك الخاصة بـ CureMed Pharmacy
const sharedServices: ServiceItem[] = [
  {
    slug: "immunizations-vaccines",
    rx: "01",
    title: "Immunizations & Vaccines",
    description:
      "Protect yourself and your family with routine vaccinations including flu, COVID-19, RSV, and travel vaccines.",
    directions: "WALK-IN OR CALL TO SCHEDULE",
    heroTitle: "Stay protected with routine immunizations",
    heroDescription:
      "We offer a full range of vaccines to keep you and your community healthy, including annual flu shots and travel-specific immunizations.",
    overview:
      "At CureMed Pharmacy, we make it easy to stay up to date on your vaccinations. Our pharmacists are trained to administer vaccines safely and answer any questions you may have. We offer flu, COVID-19, RSV, pneumococcal, and travel vaccines. The CDC recommends everyone six months and older get an annual flu shot—it's not too late! Stop by to get yourself and your family vaccinated today.",
    highlights: [
      "Annual flu and COVID-19 vaccines",
      "RSV and pneumococcal vaccines",
      "Travel vaccines for Hajj and international travel",
      "Walk-in or scheduled appointments",
      "Friendly and knowledgeable pharmacists",
      "CDC recommended for all ages 6 months+",
    ],
    facebookPosts: [
      {
        title: "Flu Season Protection",
        content: "The CDC recommends everyone six months and older get an annual flu shot. It's not too late! Stop by CureMed Pharmacy to get yourself and your family vaccinated today.",
        date: "February 27, 2024",
        // link: "https://www.facebook.com/curemed/posts/flu-shot-2024",
        type: "post"
      }
    ]
  },
  {
    slug: "medication-therapy-management",
    rx: "02",
    title: "Medication Therapy Management",
    description:
      "Our pharmacists take the time to explain your medications, answer questions, and help you manage your health with confidence.",
    directions: "ASK YOUR PHARMACIST FOR A REVIEW",
    heroTitle: "Clear guidance for your medications",
    heroDescription:
      "We don't just fill prescriptions—we help you understand them. Our team is here to make your medication routine simple and stress-free.",
    overview:
      "Understanding your medications is key to staying healthy. At CureMed Pharmacy, our pharmacists provide personalized consultations to review your medications, discuss potential interactions, and ensure you're getting the most out of your treatment plan. We work closely with your doctors and healthcare providers to ensure comprehensive and coordinated care.",
    highlights: [
      "Personalized medication reviews",
      "Clear explanations of drug interactions",
      "Support for chronic conditions like diabetes and heart disease",
      "Help with managing multiple medications",
      "Questions answered with care and patience",
      "Coordinated care with your healthcare team",
    ],
    facebookPosts: [
      {
        title: "Medication Reviews",
        content: "Our pharmacists won't just fill your prescriptions, they help explain your medications and take the time to answer your questions. Personalized service that makes a difference.",
        date: "March 26, 2024",
        // link: "https://www.facebook.com/curemed/posts/medication-reviews",
        type: "post"
      },
      {
        title: "Your Healthcare Team",
        content: "Our pharmacists are part of your healthcare team. We can work closely with your doctors and healthcare providers to ensure comprehensive and coordinated care.",
        date: "March 13, 2024",
        // link: "https://www.facebook.com/curemed/posts/healthcare-team",
        type: "post"
      }
    ]
  },
  {
    slug: "travel-health-hajj",
    rx: "03",
    title: "Travel Health & Hajj Kits",
    description:
      "Prepare for your journey with essential travel vaccinations and custom health kits designed for Hajj and international travel.",
    directions: "BOOK A TRAVEL HEALTH CONSULTATION",
    heroTitle: "Travel with confidence and care",
    heroDescription:
      "We provide all the recommended travel vaccinations and emergency health kits for Hajj and international trips.",
    overview:
      "Traveling abroad? Let CureMed Pharmacy help you prepare. We offer travel health consultations, required vaccinations, and custom over-the-counter kits for Hajj and other journeys. Our team will make sure you're ready for a safe and healthy trip.",
    highlights: [
      "Meningococcal, flu, and pneumococcal vaccines",
      "Custom travel health kits (pain relief, antibiotics, pulse oximeter)",
      "Hajj-specific health recommendations",
      "Travel health consultations",
      "Emergency medication kits",
      "Blister pads and other essentials",
    ],
    facebookPosts: [
      {
        title: "Prepare for Hajj with Confidence",
        content: "Prepare for Hajj with confidence! Required & recommended essential over-the-counter kit: Meningococcal Conjugate (ACWY), Influenza (Flu), Pneumococcal, Acetaminophen (Pain Relief), Triple Antibiotic Ointment, Antidiarrheal, Pulse Oximeter, Blister Pads. All your travel vaccinations and emergency kits are available at CureMed Pharmacy.",
        date: "May 13, 2024",
        // link: "https://www.facebook.com/curemed/posts/hajj-kit",
        type: "post"
      }
    ]
  },
  {
    slug: "womens-health",
    rx: "04",
    title: "Women's Health Services",
    description:
      "Join our private women's health events and get expert guidance on wellness, aging, and reproductive health.",
    directions: "RSVP TO ATTEND",
    heroTitle: "Expert care for women's wellness",
    heroDescription:
      "We host intimate, private women's health sessions designed to provide meaningful conversations and expert guidance.",
    overview:
      "CureMed Pharmacy is proud to support women's health through private events led by experienced healthcare professionals. These sessions offer a safe, welcoming space for women to discuss health concerns, aging, and wellness. Join us for our upcoming events with Dr. Naglaa Rizk, bringing over 30 years of experience.",
    highlights: [
      "Private women's health events",
      "Led by Dr. Naglaa Rizk (30+ years experience)",
      "Topics: aging, reproductive health, wellness",
      "Limited seating for intimate discussions",
      "RSVP required",
      "Safe and welcoming space",
    ],
    facebookPosts: [
      {
        title: "Women's Health Event",
        content: "Join us for a private women's health session at CureMed Pharmacy by Dr. Naglaa Rizk. Behind Closed Doors: The Mature Woman Edition. May 3, 2024 at 4:30 PM. 311 Crooks Ave, Paterson, NJ. RSVP Required - Limited Seating.",
        date: "May 1, 2024",
        // link: "https://www.facebook.com/curemed/posts/womens-health",
        type: "post"
      }
    ]
  },
  {
    slug: "health-screenings",
    rx: "05",
    title: "Health Screenings & Wellness",
    description:
      "Stay on top of your health with free blood pressure monitoring, cholesterol checks, and community wellness events.",
    directions: "VISIT US FOR A SCREENING",
    heroTitle: "Know your numbers, stay healthy",
    heroDescription:
      "We offer free health screenings and wellness checks to help you monitor your blood pressure, cholesterol, and more.",
    overview:
      "Prevention starts with awareness. At CureMed Pharmacy, we regularly host community health events featuring free blood pressure and cholesterol screenings. These events are open to everyone and are a great way to stay informed about your health. February is Heart Health Month—stop by for a free blood pressure screening.",
    highlights: [
      "Free blood pressure monitoring",
      "Cholesterol screenings",
      "Community wellness events",
      "Diabetes risk assessments",
      "Heart health education",
      "Open to everyone in the community",
    ],
    facebookPosts: [
      {
        title: "Heart Health Month",
        content: "February is #HeartHealthMonth. From blood pressure monitoring to cholesterol management we're here to support your journey to a healthier heart. Stop by for a free blood pressure screening.",
        date: "February 22, 2024",
        // link: "https://www.facebook.com/curemed/posts/heart-health",
        type: "post"
      }
    ]
  },
  {
    slug: "delivery-service",
    rx: "06",
    title: "Local Prescription Delivery",
    description:
      "We offer free local delivery to our community, making it easy to get your medications without leaving home.",
    directions: "CALL TO SET UP DELIVERY",
    heroTitle: "Your medications, delivered with care",
    heroDescription:
      "We offer free local delivery for prescriptions and over-the-counter medications to our community in Paterson.",
    overview:
      "Need your medications but can't make it to the pharmacy? CureMed Pharmacy offers free local delivery for eligible prescriptions. Our delivery service is reliable, friendly, and designed to make your life easier. Stay where you are—CureMed has you covered! Your health and time matter most.",
    highlights: [
      "Free local delivery",
      "Prescription and OTC delivery",
      "Reliable and friendly service",
      "Convenient for busy schedules",
      "Contact us to set up delivery",
      "Stay where you are—we've got you covered",
    ],
    facebookPosts: [
      {
        title: "Stay Where You Are",
        content: "Stay where you are—CureMed has you covered! Your health and time matter most. Managing your prescriptions shouldn't feel like a hassle. We offer free local delivery.",
        date: "May 23, 2024",
        // link: "https://www.facebook.com/curemed/posts/delivery-service",
        type: "post"
      }
    ]
  },
  {
    slug: "compounding",
    rx: "07",
    title: "Compounding Services",
    description:
      "Our compounding pharmacy offers custom medication formulations tailored to the unique needs of our patients.",
    directions: "CONSULT WITH OUR PHARMACIST",
    heroTitle: "Custom medication, personalized for you",
    heroDescription:
      "Our compounding services provide custom medication formulations for patients who need tailored treatment options.",
    overview:
      "We offer compounding services to create custom medication formulations for patients with unique needs. Whether it's a different dosage form, a combination of medications, or an allergen-free formula, our pharmacists can work with you and your doctor to create the right solution.",
    highlights: [
      "Custom medication formulations",
      "Personalized dosages",
      "Allergen-free options",
      "Work with your doctor",
      "Unique formulations for special needs",
      "Tailored to your specific requirements",
    ],
    facebookPosts: []
  }
];

export function getServicesForBrand(brand: BrandConfig): ServiceItem[] {
  if (brand.slug === "saimz") {
    return sharedServices.filter(service => service.slug !== "compounding");
  }
  
  return sharedServices;
}