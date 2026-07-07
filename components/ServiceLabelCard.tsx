import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceLabelCardProps = {
  rx: string; // label number, e.g. "01" styled like an Rx number
  title: string;
  description: string;
  directions: string; // short monospace line, e.g. "PICK UP IN STORE OR SAME-DAY DELIVERY"
  href: string;
  icon?: React.ReactNode; // أيقونة اختيارية
};

/**
 * The site's signature element: a service card drawn like a
 * prescription bottle label -- amber top edge, an "Rx" number,
 * and a monospaced "directions" line, echoing real pharmacy labels
 * without leaning on the generic medical-cross cliché.
 */
export function ServiceLabelCard({ 
  rx, 
  title, 
  description, 
  directions, 
  href,
  icon 
}: ServiceLabelCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-xl border border-ink/10 bg-paper/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-amber/20"
    >
      {/* Amber top strip */}
      <span className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-amber to-amber-dark" aria-hidden />
      
      {/* Decorative background pattern - subtle */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber/5 blur-2xl transition-all duration-500 group-hover:bg-amber/10" aria-hidden />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon && (
              <span className="text-amber-dark opacity-70 group-hover:opacity-100 transition-opacity">
                {icon}
              </span>
            )}
            <span className="font-mono text-xs font-medium text-amber-dark bg-amber/10 px-2.5 py-0.5 rounded-full">
              RX № {rx}
            </span>
          </div>
          <span className="font-mono text-xs text-ink/30 transition-all duration-300 group-hover:text-amber group-hover:translate-x-0.5 flex items-center gap-1">
            READ <ArrowRight className="h-3 w-3" />
          </span>
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold text-ink group-hover:text-amber-dark transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70 line-clamp-2">
          {description}
        </p>

        <p className="mt-5 border-t border-dashed border-ink/15 pt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40 group-hover:text-ink/60 transition-colors">
          {directions}
        </p>
      </div>
    </Link>
  );
}