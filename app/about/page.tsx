import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Curemed Pharmacy has served the local community as an independent, licensed pharmacy focused on personal care and fast, reliable service.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <span className="font-mono text-xs uppercase tracking-wider text-amber-dark">
        Our Story
      </span>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink">About Curemed</h1>
      <p className="mt-6 text-lg leading-relaxed text-ink/70">
        {/* TODO: replace with real founding story, pharmacist bios, and licensing info
            supplied by the client. */}
        Content pending client input — team bios, founding story, and licensing details.
      </p>
    </section>
  );
}
