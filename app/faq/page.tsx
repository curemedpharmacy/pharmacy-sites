import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getBrandConfig } from "@/lib/brands";
import { faqPageSchema } from "@/lib/schema";
import { HelpCircle, Phone, MapPin, ChevronDown, Award } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandConfig();
  return {
    title: `FAQ | ${brand.name}`,
    description: `Find practical answers about delivery, prescription transfers, vaccines, testing, and pharmacy services at ${brand.name}.`,
    alternates: { canonical: "/faq" },
  };
}

export default function FaqPage() {
  const brand = getBrandConfig();

  const faqItems = [
    {
      question: "Do you accept insurance?",
      answer: `We work with most major prescription plans and can help confirm coverage details for your medications. Please call ${brand.phone} with your plan information so we can review it with you.`,
    },
    {
      question: "Can you transfer an existing prescription?",
      answer:
        "Yes. We can help transfer eligible prescriptions from another pharmacy and review any refill timing questions with you.",
    },
    {
      question: "Do you offer delivery?",
      answer:
        "We offer free local delivery for eligible prescriptions and routine pharmacy needs within our service area.",
    },
    {
      question: "Do you offer compounding services?",
      answer: brand.offersCompounding
        ? "Yes, our pharmacy offers custom compounding services for patients who may benefit from tailored formulations."
        : "Compounding is not offered at this location, but our team can help direct you to the appropriate care options.",
    },
    {
      question: "Can I get vaccinations at the pharmacy?",
      answer:
        "Yes, our pharmacists can administer routine vaccines such as flu, COVID-19, and RSV when available.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5 min-h-[70vh]">
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-sage/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <JsonLd data={faqPageSchema(faqItems)} />

        {/* ===== HEADER ===== */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
            <HelpCircle className="h-3 w-3" />
            FAQ
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl leading-tight">
            Common questions about pharmacy care
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70 max-w-2xl">
            Here are a few practical questions patients often ask before visiting
            or calling {brand.name}.
          </p>
        </div>

        {/* ===== FAQ LIST ===== */}
        <div className="mt-10 space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-ink/10 bg-paper/60 p-6 shadow-sm transition-all duration-200 hover:border-amber/20 hover:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between font-display text-lg font-semibold text-ink list-none">
                <span className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber/10 text-xs font-medium text-amber-dark">
                    {index + 1}
                  </span>
                  {item.question}
                </span>
                <span className="shrink-0 ml-4 text-ink/30 transition-transform duration-200 group-open:rotate-180">
                  <ChevronDown className="h-5 w-5" />
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-ink/5">
                <p className="text-sm leading-relaxed text-ink/70">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* ===== CONTACT CTA ===== */}
        <div className="mt-10 rounded-2xl border border-amber/10 bg-linear-to-br from-amber/5 via-paper to-sage/5 p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark">
                <Award className="h-3 w-3" />
                Still have questions?
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                We are here to help
              </h3>
              <p className="mt-1 text-sm text-ink/70">
                Call us or visit our pharmacy for personalized assistance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${brand.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-paper transition-all hover:bg-amber-dark hover:scale-[1.02]"
              >
                <Phone className="h-3.5 w-3.5" />
                Call {brand.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-ink transition-all hover:border-ink/40 hover:bg-ink/5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/locations"
            className="rounded-xl border border-ink/5 bg-paper/40 p-4 text-center hover:border-amber/20 hover:bg-paper/60 transition-all"
          >
            <MapPin className="h-5 w-5 text-amber-dark mx-auto" />
            <p className="mt-2 text-sm font-medium text-ink">Find Us</p>
            <p className="text-xs text-ink/50">Get directions</p>
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-ink/5 bg-paper/40 p-4 text-center hover:border-amber/20 hover:bg-paper/60 transition-all"
          >
            <HelpCircle className="h-5 w-5 text-amber-dark mx-auto" />
            <p className="mt-2 text-sm font-medium text-ink">Services</p>
            <p className="text-xs text-ink/50">See all services</p>
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-ink/5 bg-paper/40 p-4 text-center hover:border-amber/20 hover:bg-paper/60 transition-all"
          >
            <Award className="h-5 w-5 text-amber-dark mx-auto" />
            <p className="mt-2 text-sm font-medium text-ink">About Us</p>
            <p className="text-xs text-ink/50">Our story</p>
          </Link>
        </div>
      </div>
    </section>
  );
}