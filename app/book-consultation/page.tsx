import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBrandConfig } from "@/lib/brands";
import { HubSpotMeetings } from "@/components/HubSpotMeetings";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Star,
  MapPin,
  Languages,
  BadgeCheck,
  ClipboardList,
  MessageCircleQuestion,
  FileText,
  ArrowRight,
  Lock,
  Scale,
  Pill,
  Plane,
  HeartPulse,
  UserPlus,
  Users,
  CalendarCheck,
  MessageSquareText,
  Clock,
} from "lucide-react";

const brand = getBrandConfig();

const MEETINGS_SRC = "https://meetings-na2.hubspot.com/curemed";
const PHONE_DISPLAY = "(862) 225-9432";
const PHONE_TEL = "+18622259432";

export const metadata: Metadata = {
  title: "Book a Pharmacist Consultation | CureMed Pharmacy Paterson NJ",
  description:
    "Book a private 20-minute consultation with a licensed pharmacist in Paterson, NJ. Medication reviews, weight management, travel health. English & Arabic.",
  alternates: { canonical: "/book-consultation" },
  openGraph: {
    title: "Book a Consultation — CureMed Pharmacy",
    description:
      "Private, one-on-one time with Dr. Ghada AbuKuwaik. $39, 20 minutes, in person or by phone.",
    url: `${brand.url}/book-consultation`,
  },
};

const whatYouGet = [
  {
    icon: ClipboardList,
    title: "A full medication review",
    body: "Everything you're taking — including prescriptions from other doctors, supplements, and over-the-counter products.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Answers to the questions you never have time to ask",
    body: "No line behind you. No rushing.",
  },
  {
    icon: FileText,
    title: "A written summary to take home",
    body: "What to take, when to take it, and what to watch for.",
  },
  {
    icon: ArrowRight,
    title: "A clear next step",
    body: "Whether that's a program, a follow-up, or simply reassurance that you're on the right track.",
  },
  {
    icon: Lock,
    title: "Real privacy",
    body: "A private conversation in a private space.",
  },
  {
    icon: Languages,
    title: "Your language",
    body: "English or Arabic — whichever you're most comfortable in.",
  },
];

const whoBooks = [
  {
    icon: Scale,
    title: "Weight management",
    body: "Considering weight management medication, or already using it, and want a pharmacist's guidance on how it works, managing side effects, and nutrition.",
  },
  {
    icon: Pill,
    title: "Medication review",
    body: "You're taking several prescriptions and you're not sure how they work together — or whether you still need all of them.",
  },
  {
    icon: Plane,
    title: "Travel health & Hajj",
    body: "Planning a trip or preparing for Hajj or Umrah. Vaccines, documentation, and a medication plan for the journey.",
  },
  {
    icon: HeartPulse,
    title: "Women's health",
    body: "Questions about wellness, hormones, or aging that you'd rather ask privately.",
  },
  {
    icon: UserPlus,
    title: "New patient",
    body: "Thinking about transferring your prescriptions and want to talk to someone first.",
  },
  {
    icon: Users,
    title: "Caring for a parent",
    body: "Managing someone else's medications and you need a second set of eyes.",
  },
];

const howItWorks = [
  {
    icon: CalendarCheck,
    title: "Book online",
    body: "Pick a time and tell us what you'd like to discuss. No payment needed to reserve your slot.",
  },
  {
    icon: MessageSquareText,
    title: "We confirm",
    body: "You'll get a text confirming your appointment, plus a reminder before your visit.",
  },
  {
    icon: Users,
    title: "We meet",
    body: "20 private minutes with Dr. Ghada — in person in Paterson, or by phone if that's easier. The $39 fee is paid at your visit.",
  },
  {
    icon: FileText,
    title: "You leave with a plan",
    body: "A written summary and a clear next step.",
  },
];

const faqs = [
  {
    q: "Do I need to be an existing CureMed patient?",
    a: "No. This is open to anyone, whether you fill prescriptions with us or not.",
  },
  {
    q: "Can we speak in Arabic?",
    a: "Yes. Dr. Ghada is fluent in both English and Arabic — just select your preference when you book.",
  },
  {
    q: "Can I do this by phone instead of coming in?",
    a: 'Yes. Choose "by phone" when booking and we\'ll call you at your appointment time.',
  },
  {
    q: "What should I bring?",
    a: "Your medication list or the bottles themselves, your insurance card, and any recent lab results. If you don't have those, come anyway — we'll work with what you have.",
  },
  {
    q: "Can a pharmacist prescribe medication?",
    a: "No. A pharmacist doesn't diagnose conditions or prescribe medication. What we do is review what you're taking, explain how it works, flag interactions and side effects, and help you have a better conversation with your doctor. We work alongside your physician, not instead of them.",
  },
  {
    q: "How do I pay?",
    a: "At the pharmacy when you come in — cash or card. Nothing is charged when you book.",
  },
  {
    q: "What if I need to reschedule?",
    a: `Just call us at ${PHONE_DISPLAY} or reply to your confirmation text. We'll find you another time.`,
  },
  {
    q: "Is my information private?",
    a: "Yes. Everything you share is confidential and handled under HIPAA, the same as any other health record.",
  },
];

export default function BookConsultationPage() {
  return (
    <>
      {/* ===== SECTION 1 — HERO ===== */}
      <section className="relative overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5">
        <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-amber-dark">
              <MapPin className="h-3 w-3" />
              CureMed Pharmacy · Paterson, NJ
            </span>
            <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
              20 Minutes With a Licensed Pharmacist.{" "}
              <span className="text-amber-dark">
                Private, Focused, and Actually About You.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink/70">
              Book one-on-one time with Dr. Ghada AbuKuwaik — medication reviews,
              weight management guidance, travel health, and more. In person or
              by phone. English and Arabic.
            </p>
            <p className="mt-5 rounded-lg border border-amber/20 bg-amber/5 px-4 py-3 text-sm font-medium text-ink">
              $39 · 20 minutes · Paid at your appointment · Credited toward any
              program you enroll in
            </p>

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
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-amber-dark" />
                311 Crooks Ave, Paterson
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-ink/10 shadow-xl sm:aspect-square lg:aspect-4/5">
              <Image
                src="/images/curemed/services/pharmacist-consultation.webp"
                alt="Dr. Ghada consulting with a patient inside CureMed Pharmacy"
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

      {/* ===== SECTION 2 — WHAT YOU GET ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            What Happens in Your 20 Minutes
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink/70">
            This isn&apos;t a quick question over the counter. It&apos;s prepared,
            private time built around your health.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatYouGet.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-ink/10 bg-paper/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber/30 hover:shadow-md"
              >
                <div className="w-fit rounded-lg bg-amber/10 p-2.5 text-amber-dark">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== SECTION 3 — WHO BOOKS THIS ===== */}
      <section className="bg-linear-to-br from-sage/5 via-paper to-amber/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl">
            People Book This For All Kinds of Reasons
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whoBooks.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-xl border border-ink/10 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber/30 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-amber/10 p-2.5 text-amber-dark">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — WHY $39 ===== */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Why This One Costs $39
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
          <p>
            Asking a quick question at our counter is free — and always will be.
            Stop by any time.
          </p>
          <p>This is something different.</p>
          <p>
            Before your appointment, Dr. Ghada reviews your medication history
            and what you&apos;ve told us you want to discuss. During it, you get
            20 uninterrupted minutes in a private space. Afterwards, you leave
            with a written plan.
          </p>
          <p>
            The $39 covers that preparation and time — and it&apos;s credited in
            full toward any program you decide to join.
          </p>
        </div>
        <div className="mt-8 rounded-xl border border-amber/20 bg-amber/5 p-5">
          <p className="text-base font-medium text-ink">
            No payment needed to book. You pay at the pharmacy when you come in —
            cash or card.
          </p>
        </div>
      </section>

      {/* ===== SECTION 5 — HOW IT WORKS ===== */}
      <section className="bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Booking Takes About a Minute
          </h2>

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

      {/* ===== SECTION 6 — MEET DR. GHADA ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-ink/10 shadow-lg">
              <Image
                src="/images/curemed/services/mtm-pricing-window.webp"
                alt="Dr. Ghada AbuKuwaik leading a community health session at CureMed Pharmacy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Meet Dr. Ghada AbuKuwaik
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/75">
              <p>
                Dr. Ghada is a licensed pharmacist and the founder of CureMed
                Pharmacy and Saimz Pharmacy, serving Paterson, Clifton, and the
                surrounding communities.
              </p>
              <p>
                Beyond the counter, she runs free community health seminars,
                speaks regularly on medication safety and weight health, and
                creates educational content for patients in both English and
                Arabic.
              </p>
              <p>
                Her approach is simple: most people leave the pharmacy with their
                medication but without really understanding it. These 20 minutes
                exist to close that gap.
              </p>
            </div>
            <p className="mt-6 border-l-2 border-amber pl-4 font-mono text-xs uppercase tracking-[0.12em] text-ink/60">
              Licensed Pharmacist, State of New Jersey · Founder, CureMed &amp;
              Saimz Pharmacy · Community health educator
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — BOOKING FORM ===== */}
      <section
        id="book"
        className="scroll-mt-24 bg-linear-to-br from-amber/5 via-paper to-sage/5 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Reserve Your 20 Minutes
            </h2>
            <p className="mt-3 text-lg text-ink/70">
              No payment required to book. $39 is paid at your appointment.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-ink/10 bg-paper p-4 shadow-lg sm:p-6">
            <HubSpotMeetings src={MEETINGS_SRC} />
          </div>

          <p className="mt-4 text-center text-sm text-ink/60">
            We&apos;ll text you within one business day to confirm your time.
          </p>
        </div>
      </section>

      {/* ===== SECTION 8 — FAQ ===== */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center font-display text-3xl font-semibold text-ink sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 divide-y divide-ink/10">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-ink">
                {faq.q}
                <ArrowRight className="h-4 w-4 shrink-0 text-amber-dark transition-transform duration-300 group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== SECTION 9 — CLOSING CTA ===== */}
      <section className="bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
            Twenty Minutes Could Change How You Take Care of Yourself.
          </h2>
          <p className="mt-4 text-lg text-paper/70">
            $39, paid at your visit. Credited toward any program you enroll in.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:scale-105 hover:bg-amber-light"
            >
              <Link href="#book">Book My Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="inline-flex items-center justify-center gap-2 rounded-full border-paper/30 bg-transparent px-7 py-3.5 font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-paper transition-all duration-300 hover:bg-paper/10"
            >
              <a href={`tel:${PHONE_TEL}`}>
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>

          <div className="mx-auto mt-12 max-w-md rounded-2xl border border-paper/15 bg-paper/5 p-6 text-left">
            <h3 className="font-display text-lg font-semibold">
              CureMed Pharmacy
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/75">
              311 Crooks Ave, Suite C, Paterson, NJ 07503
              <br />
              Mon–Fri 9:00 AM – 6:00 PM · Sat 10:00 AM – 2:00 PM
              <br />
              {PHONE_DISPLAY}
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-paper/15">
              <iframe
                title="CureMed Pharmacy location map"
                src="https://www.google.com/maps?q=311+Crooks+Ave+Suite+C,+Paterson,+NJ+07503&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
