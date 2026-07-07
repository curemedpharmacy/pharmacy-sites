"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { BrandConfig } from "@/lib/brands/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HeroSliderProps = {
  brand: BrandConfig;
};

export function HeroSlider({ brand }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (brand.heroImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % brand.heroImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [brand.heroImages.length]);

  if (brand.heroImages.length === 0) return null;

  const activeImage = brand.heroImages[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? brand.heroImages.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % brand.heroImages.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="group relative h-70 xs:h-[340px] sm:h-100 md:h-115 lg:h-125 xl:h-130 w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
      <div className="relative h-full w-full">
        <Image
          src={activeImage.path}
          alt={activeImage.alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: 'center' }}
        />

        {/* Gradient overlay for better visibility */}
        <div className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent" />

        {/* Navigation arrows - always visible on mobile, hover on desktop */}
        {brand.heroImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 z-20 flex h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/80 sm:bg-paper/90 text-ink shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-paper hover:scale-110 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 active:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 z-20 flex h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/80 sm:bg-paper/90 text-ink shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-paper hover:scale-110 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 active:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots indicator - responsive padding and sizing */}
      {brand.heroImages.length > 1 && (
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1 sm:gap-1.5 rounded-full bg-ink/20 sm:bg-ink/30 px-2 sm:px-3 py-1.5 sm:py-2 backdrop-blur-sm">
          {brand.heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-1.5 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "w-5 sm:w-8 bg-paper"
                  : "w-1.5 sm:w-1.5 bg-paper/40 hover:bg-paper/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}