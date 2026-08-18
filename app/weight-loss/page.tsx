import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBrandConfig } from "@/lib/brands";
import { HubSpotMeetings } from "@/components/HubSpotMeetings";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  pharmacyLocalBusinessSchema,
} from "@/lib/schema";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Star,
  Languages,
  BadgeCheck,
  Stethoscope,
  FlaskConical,
  Syringe,
  ShieldCheck,
  CalendarCheck,
  ClipboardCheck,
  LineChart,
  HeartPulse,
  CheckCircle2,
  Video,
  Truck,
  Award,
  Building2,
  X,
  Clock,
} from "lucide-react";

const brand = getBrandConfig();

const MEETINGS_SRC = "https://meetings-na2.hubspot.com/ghada-abukuwaik";
const PHONE_DISPLAY = "(862) 225-9432";
const PHONE_TEL = "+18622259432";

export const metadata: Metadata = {
  title: "Medical Weight Loss with GLP-1 Medications | CureMed Pharmacy Paterson NJ",
  description:
    "A pharmacist-led weight loss program in Paterson, NJ combining one-on-one counseling, weekly progress tests, and FDA-approved GLP-1 medications like semaglutide and tirzepatide. Book your consultation today.",
  keywords: [
    "weight loss Paterson NJ",
    "GLP-1 medication",
    "GLP-1 pharmacy Paterson NJ",
    "telehealth weight loss NJ",
    "telehealth weight loss Paterson",
    "semaglutide",
    "semaglutide Paterson NJ",
    "tirzepatide",
    "tirzepatide New Jersey",
    "compounded semaglutide",
    "compounded tirzepatide",
    "medical weight loss program",
    "weight loss clinic Paterson NJ",
    "weight loss counseling",
    "FDA approved weight loss medication",
    "weight loss Clifton NJ",
    "weight loss Passaic NJ",
    "weight loss Wayne NJ",
    "weight loss Passaic County",
    "CureMed Pharmacy",
  ],
  alternates: { canonical: "/weight-loss" },
  openGraph: {
    type: "website",
    title: "Medical Weight Loss with GLP-1 Medications — CureMed Pharmacy",
    description:
      "Counseling, weekly tests, and FDA-approved GLP-1 medications, guided by a licensed pharmacist in Paterson, NJ. English, Spanish & Arabic.",
    url: `${brand.url}/weight-loss`,
    images: [
      {
        url: "/images/curemed/services/weight-loss-consultation.png",
        width: 1200,
        height: 630,
        alt: "Pharmacist-led weight loss consultation at CureMed Pharmacy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Weight Loss with GLP-1 Medications — CureMed Pharmacy",
    description:
      "Counseling, weekly tests, and FDA-approved GLP-1 medications, guided by a licensed pharmacist in Paterson, NJ.",
    images: ["/images/curemed/services/weight-loss-consultation.png"],
  },
};

const pillars = [
  {
    icon: Stethoscope,
    label: "01",
    title: "One-on-one counseling",
    body: "Every plan starts with a private conversation. Your pharmacist reviews your health history, medications, and goals — then builds a plan around your body, not a template.",
    points: [
      "Personalized nutrition and lifestyle guidance",
      "Side-effect management and dose adjustments",
      "Available in English, Spanish, and Arabic",
    ],
  },
  {
    icon: FlaskConical,
    label: "02",
    title: "Weekly progress tests",
    body: "We don't guess — we measure. Regular check-ins track how your body is responding so we can adjust before small issues become setbacks.",
    points: [
      "Weight, body composition, and vitals tracking",
      "Metabolic and blood-work monitoring",
      "Clear, data-driven adjustments each week",
    ],
  },
  {
    icon: Syringe,
    label: "03",
    title: "FDA-approved GLP-1 medications",
    body: "Access clinically proven GLP-1 therapies that reduce appetite and support steady, lasting weight loss — dispensed and monitored by a licensed pharmacy.",
    points: [
      "Semaglutide & tirzepatide options",
      "Proper storage, handling, and injection training",
      "Coordinated with your prescribing physician",
    ],
  },
];

const howItWorks = [
  {
    icon: CalendarCheck,
    title: "Book your consultation",
    body: "Pick a time below. We'll talk through your goals, health history, and whether a GLP-1 program is right for you.",
  },
  {
    icon: ClipboardCheck,
    title: "Get your baseline",
    body: "We run your initial tests and build a personalized plan. Dr. Ghada then provides treatment based on your doctor's prescription, with a clear medication schedule.",
  },
  {
    icon: LineChart,
    title: "Weekly check-ins",
    body: "Come in each week for progress tests and pharmacist guidance. We adjust your plan as your body responds.",
  },
  {
    icon: HeartPulse,
    title: "Reach & maintain",
    body: "Hit your goals with ongoing support, then transition to a maintenance plan that keeps the results.",
  },
];

const glpBenefits = [
  "Clinically proven to support significant, sustained weight loss",
  "Reduces appetite and helps you feel full longer",
  "Improves blood sugar control for many patients",
  "Once-weekly dosing that fits real life",
  "Dispensed and monitored by a licensed pharmacy team",
  "Coordinated safely alongside your other medications",
];

const telehealthPoints = [
  {
    icon: Video,
    title: "Virtual visits across New Jersey",
    body: "Can't make it to Paterson? Meet your pharmacist by secure video from anywhere in NJ. Same personalized counseling, no waiting room.",
  },
  {
    icon: Truck,
    title: "Medication shipped to your door",
    body: "Your GLP-1 therapy is dispensed by our licensed pharmacy and shipped in proper temperature-controlled packaging — or ready for local pickup.",
  },
  {
    icon: Clock,
    title: "Check-ins that fit your week",
    body: "Weekly progress reviews happen in person or online, so staying on track never means rearranging your whole schedule.",
  },
];

const comparison = [
  {
    feature: "One-on-one pharmacist counseling",
    us: true,
    them: "Automated forms, little human contact",
  },
  {
    feature: "Weekly progress tests & monitoring",
    us: true,
    them: "Rarely included",
  },
  {
    feature: "FDA-approved GLP-1 medications",
    us: true,
    them: "Varies — often unclear sourcing",
  },
  {
    feature: "Dispensed by a licensed NJ pharmacy",
    us: true,
    them: "Ships from unknown facilities",
  },
  {
    feature: "Side-effect & dose management",
    us: true,
    them: "Limited or self-managed",
  },
  {
    feature: "English, Spanish & Arabic support",
    us: true,
    them: "English only",
  },
  {
    feature: "A pharmacist you can actually reach",
    us: true,
    them: "Chat tickets & call centers",
  },
];

const qualitySignals = [
  {
    icon: BadgeCheck,
    title: "Licensed New Jersey pharmacy",
    body: "Fully licensed and regulated by the New Jersey Board of Pharmacy, so every medication is handled to state and federal standards.",
  },
  {
    icon: Award,
    title: "Quality you can trust",
    body: "Medications are stored, handled, and dispensed under strict pharmacy quality standards — with clear guidance every step of the way.",
  },
  {
    icon: ShieldCheck,
    title: "Physician-coordinated care",
    body: "We work alongside your prescriber to keep your GLP-1 therapy safe and coordinated with the rest of your medications.",
  },
];

const healthBenefits = [
  "Type 2 diabetes",
  "High blood pressure",
  "High cholesterol",
  "Sleep apnea",
  "Joint pain & osteoarthritis",
  "Back pain",
  "Heartburn & acid reflux",
  "Heart disease risk",
];

const medicationOptions = [
  {
    name: "Semaglutide",
    brands: "Ozempic, Wegovy",
    note: "Once-weekly GLP-1 that curbs appetite and slows digestion.",
    featured: true,
  },
  {
    name: "Tirzepatide",
    brands: "Mounjaro, Zepbound",
    note: "Dual GLP-1/GIP action for strong appetite control.",
    featured: true,
  },
  {
    name: "Liraglutide",
    brands: "Saxenda",
    note: "Daily GLP-1 option for appetite management.",
    featured: false,
  },
  {
    name: "Phentermine",
    brands: "Adipex-P, Lomaira",
    note: "Short-term appetite suppressant for eligible patients.",
    featured: false,
  },
];

const serviceAreas = [
  "Paterson",
  "Clifton",
  "Passaic",
  "Wayne",
  "Totowa",
  "Little Falls",
  "Montclair",
  "Nutley",
  "Bloomfield",
  "Garfield",
  "Rutherford",
  "Hawthorne",
  "Fair Lawn",
  "Elmwood Park",
];

export default function WeightLossPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: brand.url },
    { name: "Weight Loss", url: `${brand.url}/weight-loss` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={pharmacyLocalBusinessSchema()} />

      {/* ===== SECTION 1 — HERO ===== */}
      <section className="relative overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5">
        <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-sage/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-amber-dark">
              <MapPin className="h-3 w-3" />
              CureMed Pharmacy · Paterson, NJ
            </span>
            <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
              Lose Weight With a Plan That&apos;s{" "}
              <span className="text-amber-dark">
                Guided, Measured, and Made for You.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink/70">
              A pharmacist-led weight loss program that combines one-on-one
              counseling, weekly progress tests, and FDA-approved GLP-1
              medications — all under one roof in Paterson. English, Spanish,
              and Arabic.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/20 bg-amber/5 px-3 py-1.5 text-sm font-medium text-ink">
                <Stethoscope className="h-4 w-4 text-amber-dark" />
                Counseling
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/20 bg-amber/5 px-3 py-1.5 text-sm font-medium text-ink">
                <FlaskConical className="h-4 w-4 text-amber-dark" />
                Weekly tests
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/20 bg-amber/5 px-3 py-1.5 text-sm font-medium text-ink">
                <Syringe className="h-4 w-4 text-amber-dark" />
                FDA-approved GLP-1
              </span>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:scale-105 hover:bg-amber-light hover:shadow-lg hover:shadow-amber/30"
              >
                <Link href="#book">Book My Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="inline-flex items-center justify-center gap-2 rounded-full border-ink/20 bg-transparent px-7 py-3.5 font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:border-amber hover:bg-amber/5 hover:text-amber-dark"
              >
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="h-4 w-4" />
                  Or call {PHONE_DISPLAY}
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink/70">
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber text-amber" />
                4.8 from 500+ patients
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-amber-dark" />
                Licensed NJ Pharmacist
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Languages className="h-4 w-4 text-amber-dark" />
                English, Spanish &amp; Arabic
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-ink/10 shadow-xl sm:aspect-square lg:aspect-4/5">
              <Image
                src="/images/curemed/services/weight-loss-consultation.png"
                alt="A licensed pharmacist reviewing a personalized weight loss plan with a patient at CureMed Pharmacy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — THREE PILLARS ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Three Things That Make This Work
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink/70">
            Medication alone isn&apos;t a plan. Real results come from combining
            the right medicine with guidance and consistent tracking.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col rounded-xl border border-ink/10 bg-paper/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber/30 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="w-fit rounded-lg bg-amber/10 p-2.5 text-amber-dark">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-3xl font-bold text-ink/10">
                    {pillar.label}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {pillar.body}
                </p>
                <ul className="mt-4 space-y-2 border-t border-ink/10 pt-4">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-ink/75"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== SECTION 3 — GLP-1 SPOTLIGHT ===== */}
      <section className="bg-linear-to-br from-sage/5 via-paper to-amber/5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-ink/10 shadow-lg">
              <Image
                src="/images/curemed/services/glp1-medication.png"
                alt="An FDA-approved GLP-1 weight loss medication pen on a neutral surface"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-amber-dark">
              <ShieldCheck className="h-3 w-3" />
              FDA-Approved
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              GLP-1 Medications, Done Safely
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              GLP-1 therapies like semaglutide and tirzepatide are among the
              most effective tools available for weight loss today. Dispensed and
              monitored by our licensed pharmacy team, they become part of a
              complete, supervised program — not a shortcut.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {glpBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-sm leading-relaxed text-ink/75"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Medication options */}
        <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6">
          <h3 className="font-display text-xl font-semibold text-ink">
            Medications We May Dispense
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
            The right medication depends on your health history and goals. Dr.
            Ghada provides treatment based on your doctor&apos;s prescription —
            after your consultation, we&apos;ll coordinate with your prescriber
            on the safest, most effective option for you.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {medicationOptions.map((med) => (
              <div
                key={med.name}
                className={`flex flex-col rounded-xl border p-5 ${
                  med.featured
                    ? "border-amber/40 bg-amber/5"
                    : "border-ink/10 bg-paper"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Syringe className="h-4 w-4 text-amber-dark" />
                  <h4 className="font-display text-base font-semibold text-ink">
                    {med.name}
                  </h4>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-ink/50">
                  {med.brands}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {med.note}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink/50">
            Brand names are trademarks of their respective manufacturers. CureMed
            Pharmacy is not affiliated with or endorsed by these companies.
            Treatment is provided based on a doctor&apos;s prescription and only
            when clinically appropriate.
          </p>
        </div>
      </section>

      {/* ===== SECTION 3.4 — WHY IT MATTERS (HEALTH BENEFITS) ===== */}
      <section className="border-t border-ink/10 bg-sage/5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-amber-dark">
              <HeartPulse className="h-3 w-3" />
              More than the scale
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
              Weight Loss Is About Your Whole Health
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              Excess body fat quietly raises the risk of chronic conditions that
              get harder to manage over time. Reaching a healthier weight
              isn&apos;t just about how you look — it can lower your risk for
              serious, sometimes life-threatening health problems.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              That&apos;s why our pharmacists look at your full health picture —
              existing conditions, lifestyle, and other medications — before
              recommending a plan built around you.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-paper p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink/50">
              Losing weight can reduce your risk of
            </p>
            <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {healthBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2.5 text-sm text-ink/80"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-sage" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3.5 — TELEHEALTH ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-ink">
            <Video className="h-3 w-3" />
            In-person or online
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Telehealth Weight Loss, Anywhere in New Jersey
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink/70">
            Visit us in Paterson or do the whole program from home. New Jersey
            allows weight loss care by telehealth, so you get the same
            pharmacist-led counseling and monitoring wherever you are.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {telehealthPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="flex flex-col rounded-xl border border-ink/10 bg-paper/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-md"
              >
                <div className="w-fit rounded-lg bg-sage/15 p-2.5 text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {point.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== SECTION 4 — HOW IT WORKS ===== */}
      <section className="bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            How the Program Works
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-paper/70">
            Four simple steps, with a licensed pharmacist beside you the whole
            way.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-xl border border-paper/15 bg-paper/5 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-lg bg-amber/20 p-2.5 text-amber">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-3xl font-bold text-paper/25">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4.5 — WHY CUREMED (COMPARISON) ===== */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            A Real Program vs. an Online Prescription
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink/70">
            Plenty of sites will mail you a GLP-1 pen. Very few pair it with a
            pharmacist, real monitoring, and someone who picks up the phone.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
          <div className="grid grid-cols-[1.6fr_1fr_1fr] bg-ink text-paper">
            <div className="px-4 py-4 font-mono text-xs uppercase tracking-[0.12em] sm:px-6">
              What matters
            </div>
            <div className="px-3 py-4 text-center font-display text-sm font-semibold sm:px-4">
              CureMed
            </div>
            <div className="px-3 py-4 text-center font-mono text-xs uppercase tracking-[0.1em] text-paper/70 sm:px-4">
              Online-only
            </div>
          </div>
          {comparison.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.6fr_1fr_1fr] items-center border-t border-ink/10 ${
                i % 2 === 0 ? "bg-paper" : "bg-paper/60"
              }`}
            >
              <div className="px-4 py-4 text-sm font-medium text-ink sm:px-6">
                {row.feature}
              </div>
              <div className="flex justify-center px-3 py-4 sm:px-4">
                <CheckCircle2 className="h-5 w-5 text-amber-dark" />
                <span className="sr-only">
                  Included with the CureMed program
                </span>
              </div>
              <div className="px-3 py-4 text-center text-xs leading-snug text-ink/55 sm:px-4">
                <X className="mx-auto mb-1 h-4 w-4 text-ink/30" />
                {row.them}
              </div>
            </div>
          ))}
        </div>

        {/* Quality trust band */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {qualitySignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.title}
                className="rounded-xl border border-ink/10 bg-sage/5 p-6"
              >
                <div className="w-fit rounded-lg bg-amber/10 p-2.5 text-amber-dark">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {signal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {signal.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== SECTION 5 — BOOKING ===== */}
      <section
        id="book"
        className="scroll-mt-24 bg-linear-to-br from-amber/5 via-paper to-sage/5 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Book Your Weight Loss Consultation
            </h2>
            <p className="mt-3 text-lg text-ink/70">
              Pick a time that works for you. We&apos;ll talk through your goals
              and whether a GLP-1 program is the right fit.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-ink/10 bg-paper p-4 shadow-lg sm:p-6">
            <HubSpotMeetings
              src={MEETINGS_SRC}
              title="Book a weight loss consultation with CureMed Pharmacy"
            />
          </div>

          <p className="mt-4 text-center text-sm text-ink/60">
            Prefer to talk first? Call us at{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-medium text-amber-dark hover:underline"
            >
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ===== SECTION 6.5 — SERVICE AREA (LOCAL SEO) ===== */}
      <section className="border-t border-ink/10 bg-paper/60 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-amber-dark">
              <Building2 className="h-3 w-3" />
              Service Area
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Medical Weight Loss in Paterson &amp; Passaic County, NJ
            </h2>
          </div>

          <div className="mt-6 grid gap-6 text-base leading-relaxed text-ink/75 lg:grid-cols-2">
            <p>
              CureMed Pharmacy provides pharmacist-led GLP-1 weight loss care to
              patients in Paterson, New Jersey and the surrounding Passaic County
              and North Jersey communities. Whether you&apos;re starting
              semaglutide or tirzepatide for the first time or continuing an
              existing plan, you get counseling, weekly progress tests, and
              FDA-approved medication under one roof — in person or by telehealth.
            </p>
            <p>
              As a licensed New Jersey pharmacy, we dispense and monitor your
              medication to strict quality standards and coordinate directly with
              your prescriber. New Jersey&apos;s telehealth rules let us support
              patients across the state, so distance is never a reason to put your
              health goals on hold.
            </p>
          </div>

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink/50">
              Serving patients in and around
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper px-3 py-1.5 text-sm text-ink/80"
                >
                  <MapPin className="h-3.5 w-3.5 text-amber-dark" />
                  {area}, NJ
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — CLOSING CTA ===== */}
      <section className="bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
            Your Weight Loss Journey Starts With One Conversation.
          </h2>
          <p className="mt-4 text-lg text-paper/70">
            Counseling, weekly tests, and FDA-approved GLP-1 medications — guided
            by a licensed pharmacist you can actually reach.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:scale-105 hover:bg-amber-light hover:shadow-lg hover:shadow-amber/30"
            >
              <Link href="#book">Book My Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="inline-flex items-center justify-center gap-2 rounded-full border-paper/30 bg-transparent px-7 py-3.5 font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-paper transition-all duration-300 hover:border-amber hover:bg-paper/5 hover:text-amber"
            >
              <a href={`tel:${PHONE_TEL}`}>
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
