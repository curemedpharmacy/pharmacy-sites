import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "A basic terms placeholder for the pharmacy website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <span className="font-mono text-xs uppercase tracking-wider text-amber-dark">
        Terms
      </span>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
        Terms of use
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-ink/70">
        This page is a placeholder for website terms and conditions that should
        be reviewed by the pharmacy team and legal counsel before launch.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ink/70">
        {/* TODO: replace with pharmacist/lawyer-reviewed legal text before launch. */}
        Do not rely on this text as legal guidance or a finalized terms page.
      </p>
    </section>
  );
}
