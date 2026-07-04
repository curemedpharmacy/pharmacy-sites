import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { getBrandConfig } from "@/lib/brands";
import { faqPageSchema } from "@/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandConfig();
  return {
    title: `FAQ | ${brand.name}`,
    description: `Find answers about insurance, prescription transfers, delivery, and pharmacy services at ${brand.name}.`,
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
    <section className="mx-auto max-w-4xl px-6 py-20">
      <JsonLd data={faqPageSchema(faqItems)} />

      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-wider text-amber-dark">
          FAQ
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          Common questions about pharmacy care
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          Here are a few practical questions patients often ask before visiting
          or calling {brand.name}.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="rounded-md border border-ink/10 bg-paper p-6 shadow-sm"
          >
            <summary className="cursor-pointer font-display text-lg font-semibold text-ink">
              {item.question}
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
