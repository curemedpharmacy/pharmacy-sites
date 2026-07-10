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
  isSaimz?: boolean;
  compact?: boolean;
};

export function ServiceLabelCard({
  rx,
  title,
  description,
  directions,
  href,
  icon,
  image,
  isSaimz = false,
  compact = false,
}: ServiceLabelCardProps) {
  
  // ===== SAIMZ COMPACT =====
  if (isSaimz && compact) {
    return (
      <Link
        href={href}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#1A4A7A]/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1A4A7A]/10 hover:border-[#4A9FFF]/30"
      >
        {image && (
          <div className="relative w-full aspect-4/3 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            
            <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/70 via-[#0A1628]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono font-semibold text-[#0A1628] border border-[#4A9FFF]/20 shadow-lg z-10">
              RX-{rx}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
              <div className="flex items-start gap-3 text-white">
                {icon && (
                  <div className="mt-0.5 rounded-xl bg-white/10 p-2 text-white/80 group-hover:bg-[#4A9FFF]/20 group-hover:text-[#4A9FFF] transition-all duration-300">
                    {icon}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-display text-sm font-bold text-white line-clamp-1">
                    {title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/70 line-clamp-2">
                    {description}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-[9px] font-mono font-medium uppercase tracking-wider text-white/50">
                  {directions}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/80 group-hover:text-[#4A9FFF] transition-all duration-300">
                  Learn More
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        )}
      </Link>
    );
  }

  // ===== SAIMZ FULL =====
  if (isSaimz) {
    return (
      <Link
        href={href}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#1A4A7A]/10 bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#1A4A7A]/10 hover:border-[#4A9FFF]/30"
      >
        {image && (
          <div className="relative w-full aspect-4/3 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              unoptimized
            />
            
            <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/80 via-[#0A1628]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-mono font-semibold text-[#0A1628] border border-[#4A9FFF]/20 shadow-lg z-10">
              RX-{rx}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
              <div className="flex items-start gap-3 text-white">
                {icon && (
                  <div className="mt-1 rounded-xl bg-white/10 p-2.5 text-white/80 group-hover:bg-[#4A9FFF]/20 group-hover:text-[#4A9FFF] transition-all duration-300 group-hover:scale-110">
                    {icon}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70 line-clamp-2">
                    {description}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-white/50">
                  {directions}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 group-hover:text-[#4A9FFF] group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        )}
      </Link>
    );
  }

  // ===== CUREMED (كما هو بالضبط بدون أي تغيير) =====
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper/60 transition-all hover:border-amber/30 hover:shadow-lg hover:-translate-y-1"
    >
      {image && (
        <div className="relative w-full aspect-4/3 overflow-hidden rounded-t-xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink/20 via-transparent to-transparent" />
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