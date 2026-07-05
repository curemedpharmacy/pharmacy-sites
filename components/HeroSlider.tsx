"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { BrandConfig } from "@/lib/brands/types";

type HeroSliderProps = {
  brand: BrandConfig;
};

export function HeroSlider({ brand }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (brand.heroImages.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % brand.heroImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [brand.heroImages.length]);

  if (brand.heroImages.length === 0) {
    return null;
  }

  const activeImage = brand.heroImages[activeIndex];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-ink/10 bg-tan/40 p-2 shadow-sm">
      <div className="relative aspect-5/4 overflow-hidden rounded-3xl md:aspect-16/10">
        <Image
          src={activeImage.path}
          alt={activeImage.alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-paper sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
            Community Pharmacy Care
          </p>
          <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold leading-tight sm:text-3xl">
            Trusted care, local support, and everyday convenience.
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper/90 sm:text-base">
            {activeImage.alt}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 px-2 pb-2">
        <div className="flex gap-2">
          {brand.heroImages.map((image, index) => (
            <button
              key={image.path}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex ? "bg-amber" : "bg-paper/70"
              }`}
            />
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
          {activeIndex + 1}/{brand.heroImages.length}
        </p>
      </div>
    </div>
  );
}
