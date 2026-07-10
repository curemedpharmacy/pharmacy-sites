import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getBrandConfig } from "@/lib/brands";
import { faqPageSchema } from "@/lib/schema";
import { 
  HelpCircle, Phone, MapPin, ChevronDown, Truck, Pill, 
  MessageCircle, Users, Building, Heart
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandConfig();
  return {
    title: `FAQ | ${brand.name} - Answers to Common Pharmacy Questions`,
    description: `Find practical answers about delivery, prescription transfers, vaccines, testing, insurance, and pharmacy services at ${brand.name}.`,
    alternates: { canonical: "/faq" },
  };
}

export default function FaqPage() {
  const brand = getBrandConfig();
  const isSaimz = brand.slug === "saimz";

  const faqCategories = [
    {
      name: "Prescriptions & Medications",
      icon: Pill,
      items: [
        {
          question: "How do I request a prescription refill?",
          answer: `You can request a refill by calling ${brand.phone}, visiting our pharmacy in person, or using our online refill form. Please have your prescription number ready for faster service.`,
        },
        {
          question: "Can you transfer an existing prescription?",
          answer: `Yes. We can help transfer eligible prescriptions from another pharmacy. Simply provide us with your current pharmacy's contact information and we'll handle the rest. Most transfers are completed within 24 hours.`,
        },
        {
          question: "Do you accept insurance?",
          answer: `We work with most major prescription plans including Medicare, Medicaid, and private insurance. Please call ${brand.phone} with your plan information so we can verify coverage and discuss any copay questions.`,
        },
      ],
    },
    {
      name: "Delivery & Services",
      icon: Truck,
      items: [
        {
          question: "Do you offer free delivery?",
          answer: `Yes, we offer free local delivery for eligible prescriptions and routine pharmacy needs within our service area. Delivery is typically available same-day or next-day depending on when the prescription is processed.`,
        },
        {
          question: "What are your pharmacy hours?",
          answer: brand.hours.map((h) => `${h.day}: ${h.time}`).join(". "),
        },
        {
          question: "Do you offer compounding services?",
          answer: brand.offersCompounding
            ? `Yes, our pharmacy offers custom compounding services for patients who may benefit from tailored formulations. This includes alternative dosage forms, flavor options, and specialized preparations. Please call ${brand.phone} to discuss your specific needs.`
            : `Compounding is not offered at this location, but our team can help direct you to the appropriate care options or discuss alternative treatments.`,
        },
      ],
    },
    {
      name: "Health & Wellness",
      icon: Heart,
      items: [
        {
          question: "Can I get vaccinations at the pharmacy?",
          answer: `Yes, our pharmacists can administer routine vaccines including flu, COVID-19, RSV, and others when available. Walk-ins are welcome, but appointments are recommended. Please call ${brand.phone} to check availability.`,
        },
        {
          question: "Do you offer health screenings?",
          answer: `Yes, we offer health screenings including blood pressure monitoring, diabetes testing, and cholesterol checks. These services are available during regular pharmacy hours. No appointment necessary for basic screenings.`,
        },
        {
          question: "What immunizations do you offer?",
          answer: `We offer a range of immunizations including annual flu shots, COVID-19 vaccines and boosters, RSV vaccines, shingles, pneumonia, and other routine adult vaccines. Check with our pharmacist for current availability.`,
        },
      ],
    },
  ];

  // ===== SAIMZ FAQ =====
  if (isSaimz) {
    return (
      <section className="min-h-screen bg-[#E8F0FE] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <JsonLd data={faqPageSchema(faqCategories.flatMap(cat => cat.items))} />

          {/* ===== HEADER ===== */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#1A4A7A] bg-[#1A4A7A]/10 px-4 py-1.5 rounded-full">
              <HelpCircle className="h-3 w-3" />
              FAQ
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-[#0A1628] sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 text-[#6A8AAA] max-w-2xl mx-auto">
              Find quick answers to the most common questions. If you don&apos;t see your question, don&apos;t hesitate to reach out!
            </p>
          </div>

          {/* ===== FAQ ===== */}
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.name} className="bg-white rounded-2xl border border-[#1A4A7A]/10 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-[#1A4A7A]/10 rounded-full p-2">
                      <CategoryIcon className="h-5 w-5 text-[#1A4A7A]" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-[#0A1628]">
                      {category.name}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item, index) => (
                      <details
                        key={item.question}
                        className="group rounded-xl border border-[#1A4A7A]/5 hover:border-[#4A9FFF]/30 transition-all duration-200"
                      >
                        <summary className="flex cursor-pointer items-center justify-between font-medium text-[#0A1628] p-4 list-none hover:text-[#1A4A7A] transition-colors">
                          <span className="flex items-center gap-3 text-sm sm:text-base">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1A4A7A]/10 text-xs font-bold text-[#1A4A7A]">
                              {index + 1}
                            </span>
                            {item.question}
                          </span>
                          <ChevronDown className="h-5 w-5 text-[#6A8AAA] transition-transform duration-200 group-open:rotate-180" />
                        </summary>
                        <div className="px-4 pb-4 pt-1 border-t border-[#1A4A7A]/5">
                          <p className="text-sm text-[#6A8AAA] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ===== CTA ===== */}
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl border border-[#1A4A7A]/10 p-6 sm:p-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-[#0A1628]">Still have questions?</h3>
              <p className="text-sm text-[#6A8AAA]">
                Call us at <a href={`tel:${brand.phone}`} className="text-[#1A4A7A] hover:text-[#4A9FFF] transition-colors font-medium">{brand.phone}</a> or visit our pharmacy.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#1A4A7A] hover:bg-[#0A1628] text-white px-6 py-2.5 font-mono text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // ============================================================
  // ===== CUREMED FAQ =====
  // ============================================================
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5 min-h-[70vh]">
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-sage/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <JsonLd data={faqPageSchema(faqCategories.flatMap(cat => cat.items))} />

        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
            <HelpCircle className="h-3 w-3" />
            Frequently Asked Questions
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl leading-tight">
            Common questions about pharmacy care
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70 max-w-2xl">
            Find quick answers to the most common questions patients ask before visiting or calling {brand.name}. 
            If you don&apos;t see your question, don&apos;t hesitate to reach out!
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {faqCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.name}>
                <div className="flex items-center gap-2 mb-4">
                  <CategoryIcon className="h-5 w-5 text-amber-dark" />
                  <h2 className="font-display text-lg font-semibold text-ink">{category.name}</h2>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl border border-ink/10 bg-paper/60 p-6 shadow-sm transition-all duration-200 hover:border-amber/20 hover:shadow-md"
                    >
                      <summary className="flex cursor-pointer items-center justify-between font-display text-base font-semibold text-ink list-none">
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
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-amber/10 bg-linear-to-br from-amber/5 via-paper to-sage/5 p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark">
                <Phone className="h-3 w-3" />
                Get in touch
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                Still need help?
              </h3>
              <p className="mt-1 text-sm text-ink/70">
                Call us at{" "}
                <a 
                  href={`tel:${brand.phone}`} 
                  className="font-medium text-ink hover:text-amber-dark transition-colors"
                >
                  {brand.phone}
                </a>{" "}
                or visit our pharmacy.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-amber px-6 sm:px-8 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-ink transition-all hover:bg-amber-light hover:scale-105 hover:shadow-lg hover:shadow-amber/30"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
          <Link
            href="/locations"
            className="rounded-xl border border-ink/5 bg-paper/40 p-4 text-center hover:border-amber/20 hover:bg-paper/60 transition-all group"
          >
            <MapPin className="h-5 w-5 text-amber-dark mx-auto group-hover:scale-110 transition-transform" />
            <p className="mt-2 text-sm font-medium text-ink">Find Us</p>
            <p className="text-xs text-ink/50">Get directions to our pharmacy</p>
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-ink/5 bg-paper/40 p-4 text-center hover:border-amber/20 hover:bg-paper/60 transition-all group"
          >
            <Building className="h-5 w-5 text-amber-dark mx-auto group-hover:scale-110 transition-transform" />
            <p className="mt-2 text-sm font-medium text-ink">Services</p>
            <p className="text-xs text-ink/50">See all pharmacy services</p>
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-ink/5 bg-paper/40 p-4 text-center hover:border-amber/20 hover:bg-paper/60 transition-all group"
          >
            <Users className="h-5 w-5 text-amber-dark mx-auto group-hover:scale-110 transition-transform" />
            <p className="mt-2 text-sm font-medium text-ink">About Us</p>
            <p className="text-xs text-ink/50">Learn our story</p>
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-ink/5 bg-paper/40 p-4 text-center hover:border-amber/20 hover:bg-paper/60 transition-all group"
          >
            <MessageCircle className="h-5 w-5 text-amber-dark mx-auto group-hover:scale-110 transition-transform" />
            <p className="mt-2 text-sm font-medium text-ink">Contact</p>
            <p className="text-xs text-ink/50">Reach out to our team</p>
          </Link>
        </div>
      </div>
    </section>
  );
}