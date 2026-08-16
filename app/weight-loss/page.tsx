import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBrandConfig } from "@/lib/brands";
import { HubSpotMeetings } from "@/components/HubSpotMeetings";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
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
  ArrowRight,
  CheckCircle2,
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
    "semaglutide",
    "tirzepatide",
    "medical weight loss program",
    "weight loss counseling",
    "FDA approved weight loss medication",
    "CureMed Pharmacy",
  ],
  alternates: { canonical: "/weight-loss" },
  openGraph: {
    type: "website",
    title: "Medical Weight Loss with GLP-1 Medications — CureMed Pharmacy",
    description:
      "Counseling, weekly tests, and FDA-approved GLP-1 medications, guided by a licensed pharmacist in Paterson, NJ. English & Arabic.",
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
      "Available in English and Arabic",
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
    body: "We run your initial tests and build a personalized plan with clear targets and a medication schedule.",
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

const faqs = [
  {
    question: "What are GLP-1 medications?",
    answer:
      "GLP-1 medications (like semaglutide and tirzepatide) are FDA-approved therapies that mimic a natural hormone which regulates appetite and blood sugar. They help you feel full sooner, eat less, and lose weight steadily when paired with counseling and monitoring.",
  },
  {
    question: "Are the medications FDA-approved?",
    answer:
      "Yes. We dispense FDA-approved GLP-1 medications through our licensed pharmacy, with proper storage, handling, and monitoring throughout your program.",
  },
  {
    question: "Do I need a prescription?",
    answer:
      "GLP-1 medications require a prescription. We work alongside your physician, and if you don't have a prescriber, we can help point you in the right direction. Your consultation is the best place to start.",
  },
  {
    question: "What do the weekly tests involve?",
    answer:
      "Weekly check-ins typically include weight and body-composition tracking, vitals, and metabolic monitoring. They let us see how your body is responding and adjust your plan early — before small issues become setbacks.",
  },
  {
    question: "Can we speak in Arabic?",
    answer:
      "Yes. Dr. Ghada AbuKuwaik is fluent in both English and Arabic — just select your preference when you book.",
  },
  {
    question: "How much does the program cost?",
    answer: `Pricing depends on your plan and medication. The best next step is a consultation, where we'll walk you through your options clearly. Call us at ${PHONE_DISPLAY} with any questions.`,
  },
];

export default function WeightLossPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: brand.url },
    { name: "Weight Loss", url: `${brand.url}/weight-loss` },
  ]);
  const faqSchema = faqPageSchema(faqs);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqSchema} />

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
              medications — all under one roof in Paterson. English and Arabic.
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
                English &amp; Arabic
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

      {/* ===== SECTION 6 — FAQ ===== */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center font-display text-3xl font-semibold text-ink sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 divide-y divide-ink/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-ink">
                {faq.question}
                <ArrowRight className="h-4 w-4 shrink-0 text-amber-dark transition-transform duration-300 group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                {faq.answer}
              </p>
            </details>
          ))}
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
