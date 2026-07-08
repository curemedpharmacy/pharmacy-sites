"use client"

import React from "react"; 
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import type { BrandConfig } from "@/lib/brands/types";
import { ChevronLeft, ChevronRight, Clock, Truck, Phone, HeartPulse } from "lucide-react";
import Link from "next/link";

type HeroSliderProps = {
  brand: BrandConfig;
};

// تعريف نوع البيانات لكل شريحة
type SlideContent = {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
  icon: React.ReactNode;
};

// محتوى ثابت - نفس المحتوى لجميع الشرائح
const slideContent: SlideContent = {
  title: "Care close to",
  subtitle: "home.",
  description: "At Curemed, our caring goes beyond the cure. We help neighbors in Paterson with refill support, free delivery, vaccine visits, testing, and other everyday pharmacy services.",
  ctaText: "Contact the Pharmacy",
  ctaLink: "/contact",
  badge: "Independent Community Pharmacy",
  icon: <HeartPulse className="h-5 w-5" />,
};

// الإحصائيات الثابتة
const fixedStats = [
  { icon: <Clock className="h-5 w-5" />, label: "Open Hours", value: "Mon–Sat" },
  { icon: <Truck className="h-5 w-5" />, label: "Local Delivery", value: "Free" },
  { icon: <Phone className="h-5 w-5" />, label: "Call Us", value: "+1-862-225-9432" },
];

export function HeroSlider({ brand }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = brand.heroImages || [];
  const hasMultipleSlides = slides.length > 1;

  const currentSlide = slides[activeIndex];

  const goToPrevious = useCallback(() => {
    if (isTransitioning || !hasMultipleSlides) return;
    setIsTransitioning(true);
    setActiveIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning, hasMultipleSlides, slides.length]);

  const goToNext = useCallback(() => {
    if (isTransitioning || !hasMultipleSlides) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning, hasMultipleSlides, slides.length]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === activeIndex || !hasMultipleSlides) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning, activeIndex, hasMultipleSlides]);

  // التشغيل التلقائي
  useEffect(() => {
    if (!hasMultipleSlides) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      goToNext();
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [goToNext, hasMultipleSlides]);

  // إيقاف التلقائي عند التفاعل
  const handleManualNavigation = useCallback((callback: () => void) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    callback();
    
    setTimeout(() => {
      if (!intervalRef.current && hasMultipleSlides) {
        intervalRef.current = setInterval(() => {
          goToNext();
        }, 6000);
      }
    }, 5000);
  }, [goToNext, hasMultipleSlides]);

  if (slides.length === 0) return null;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-ink">
      {/* ===== BACKGROUND IMAGE ===== */}
      <div 
        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          isTransitioning ? "scale-105" : "scale-100"
        }`}
      >
        <Image
          src={currentSlide.path}
          alt={currentSlide.alt || "Curemed Pharmacy"}
          fill
          priority={activeIndex === 0}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center' }}
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/70 to-ink/40 z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-ink/30 via-transparent to-transparent z-10" />
        
        {/* لمسات لونية حسب الشريحة */}
        <div className={`absolute top-0 right-0 h-1/2 w-1/3 bg-linear-to-l from-${activeIndex === 0 ? 'amber' : activeIndex === 1 ? 'sage' : 'amber'}/20 to-transparent z-10`} />
        <div className="absolute bottom-0 left-0 h-1/3 w-1/4 bg-linear-to-r from-amber/10 to-transparent z-10" />
      </div>

      {/* ===== DECORATIVE ELEMENTS ===== */}
      <div className="absolute top-20 right-20 z-5 h-96 w-96 rounded-full bg-amber/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 z-5 h-80 w-80 rounded-full bg-sage/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      {/* ===== CONTENT ===== */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12 items-center">
            
            {/* ===== LEFT COLUMN - CONTENT (ثابت) ===== */}
            <div 
              className={`flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 transition-all duration-700 ease-out ${
                isTransitioning ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0"
              }`}
            >
              {/* Badge - ثابت */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 font-mono text-[10px] sm:text-xs font-medium uppercase tracking-wider text-amber-50 border border-amber/30">
                  {slideContent.icon}
                  {slideContent.badge}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 backdrop-blur-sm px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-emerald-300 border border-emerald-400/30">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open Today
                </span>
              </div>

              {/* العنوان - ثابت */}
              <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {slideContent.title}
                <span className="block text-amber-light">{slideContent.subtitle}</span>
              </h1>

              {/* الوصف - ثابت */}
              <p className="max-w-lg text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg xl:text-xl">
                {slideContent.description}
              </p>

              {/* أزرار CTA - ثابتة */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
                <Link
                  href={slideContent.ctaLink}
                  className="group inline-flex items-center gap-2 rounded-full bg-amber px-5 sm:px-8 py-2.5 sm:py-3.5 font-mono text-[11px] sm:text-sm font-medium uppercase tracking-wider text-ink transition-all hover:bg-amber-light hover:scale-105 hover:shadow-lg hover:shadow-amber/30"
                >
                  {slideContent.ctaText}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 sm:px-8 py-2.5 sm:py-3.5 font-mono text-[11px] sm:text-sm font-medium uppercase tracking-wider text-white transition-all hover:border-white/50 hover:bg-white/20 hover:shadow-lg"
                >
                  Browse Services
                </Link>
              </div>

              {/* الإحصائيات - ثابتة */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10">
                {fixedStats.map((stat, idx) => {
                  if (idx === 2) {
                    return (
                      <a
                        key={idx}
                        href="tel:+18622259432"
                        className="flex items-center gap-3 group transition-all hover:scale-105 cursor-pointer"
                      >
                        <div className="rounded-lg bg-amber/20 backdrop-blur-sm p-2 shrink-0 group-hover:bg-amber/30 group-hover:shadow-lg group-hover:shadow-amber/20 transition-all">
                          <div className="text-amber-light group-hover:text-amber-light/80">{stat.icon}</div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white group-hover:text-amber-light transition-colors">
                            {stat.value}
                          </p>
                          <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                            {stat.label}
                          </p>
                        </div>
                      </a>
                    );
                  }
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="rounded-lg bg-amber/20 backdrop-blur-sm p-2 shrink-0">
                        <div className="text-amber-light">{stat.icon}</div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{stat.value}</p>
                        <p className="text-xs text-white/50">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-4 sm:gap-6 pt-1 sm:pt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-ink bg-white/10 flex items-center justify-center text-[10px] sm:text-xs font-medium text-white/60 backdrop-blur-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] sm:text-xs text-white/50">
                  Trusted by <span className="font-medium text-white">500+</span> patients in Paterson
                </p>
              </div>
            </div>

            {/* ===== RIGHT COLUMN - صورة تعبر عن الخدمة ===== */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-linear-to-br from-amber/10 to-sage/10 border border-white/10">
                  <Image
                    src={currentSlide.path}
                    alt={currentSlide.alt || "Curemed Pharmacy"}
                    fill
                    className="object-cover opacity-60 hover:opacity-90 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />
                  
                  {/* نص فوق الصورة */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/80 text-sm font-medium">
                      {slideContent.badge}
                    </p>
                    <p className="text-white/40 text-xs mt-1">
                      Slide {String(activeIndex + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SLIDER CONTROLS ===== */}
      {hasMultipleSlides && (
        <>
          <button
            type="button"
            onClick={() => handleManualNavigation(goToPrevious)}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur-sm p-2 sm:p-3 text-white/70 transition-all hover:bg-black/50 hover:text-white hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            onClick={() => handleManualNavigation(goToNext)}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur-sm p-2 sm:p-3 text-white/70 transition-all hover:bg-black/50 hover:text-white hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleManualNavigation(() => goToSlide(index))}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-12 bg-amber"
                    : "w-6 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-8 right-8 z-30 rounded-full bg-black/30 backdrop-blur-sm px-3 py-1.5 text-xs text-white/60 font-mono">
            {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </>
      )}
    </div>
  );
}