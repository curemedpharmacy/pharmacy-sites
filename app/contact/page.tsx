import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { getBrandConfig } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the pharmacy by phone or send a message with your prescription or service question.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const brand = getBrandConfig();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <ContactForm brand={brand} />
    </section>
  );
}
