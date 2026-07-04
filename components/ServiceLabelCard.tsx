import Link from "next/link";

type ServiceLabelCardProps = {
  rx: string; // label number, e.g. "01" styled like an Rx number
  title: string;
  description: string;
  directions: string; // short monospace line, e.g. "PICK UP IN STORE OR SAME-DAY DELIVERY"
  href: string;
};

/**
 * The site's signature element: a service card drawn like a
 * prescription bottle label -- amber top edge, an "Rx" number,
 * and a monospaced "directions" line, echoing real pharmacy labels
 * without leaning on the generic medical-cross cliché.
 */
export function ServiceLabelCard({ rx, title, description, directions, href }: ServiceLabelCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-md border border-ink/10 bg-tan/50 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <span className="absolute inset-x-0 top-0 h-1.5 bg-amber" aria-hidden />

      <div className="flex items-baseline justify-between">
        <span className="font-mono text-xs text-amber-dark">RX № {rx}</span>
        <span className="font-mono text-xs text-ink/40 transition group-hover:text-amber">
          READ MORE →
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">{description}</p>

      <p className="mt-5 border-t border-dashed border-ink/20 pt-3 font-mono text-[11px] uppercase tracking-wider text-ink/50">
        {directions}
      </p>
    </Link>
  );
}
