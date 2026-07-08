"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ServiceLabelCardProps = {
  rx: string;
  title: string;
  description: string;
  directions: string;
  href: string;
  icon?: ReactNode;
  image?: string;
};

export function ServiceLabelCard({
  rx,
  title,
  description,
  directions,
  href,
  icon,
  image,
}: ServiceLabelCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper/60 transition-all hover:border-amber/30 hover:shadow-lg hover:-translate-y-1"
    >
      {/* صورة الخدمة (إذا وجدت) */}
      {image && (
        <div className="relative w-full h-40 overflow-hidden bg-sage/5">
          <Image
            src={image}
            alt={title}
            width={400}
            height={160}
            className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized={true}
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink/20 via-transparent to-transparent" />
          {/* RX badge */}
          <div className="absolute top-3 left-3 rounded-full bg-paper/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono font-medium text-ink/80 border border-ink/5">
            RX-{rx}
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          {icon && (
            <div className="mt-1 rounded-lg bg-amber/10 p-2 text-amber-dark group-hover:bg-amber/20 transition-colors">
              {icon}
            </div>
          )}
          <div>
            <h3 className="font-display text-base font-semibold text-ink group-hover:text-amber-dark transition-colors">
              {title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/70 line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-ink/5 pt-3">
          <span className="text-xs font-medium uppercase tracking-wider text-ink/40">
            {directions}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-dark transition-all group-hover:gap-2 group-hover:text-amber">
            Learn More
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}