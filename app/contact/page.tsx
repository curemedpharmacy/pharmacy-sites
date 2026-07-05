import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { getBrandConfig } from "@/lib/brands";

export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandConfig();
  return {
    title: `Contact ${brand.name}`,
    description: `Reach ${brand.name} at ${brand.phone} or visit us at ${brand.address.street} in Paterson for pharmacy questions and service help.`,
    alternates: { canonical: "/contact" },
  };
}

export default function ContactPage() {
  const brand = getBrandConfig();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <ContactForm brand={brand} />
    </section>
  );
}
