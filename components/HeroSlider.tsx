"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import type { BrandConfig } from "@/lib/brands/types";
import {
  ArrowRight,
  Shield,
  Clock,
  Truck,
  Phone,
  ChevronRight,
  CheckCircle,
  HeartPulse,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@base-ui/react";

type HeroSliderProps = {
  brand: BrandConfig;
};

type HeroContent = {
  title: string;
  highlight: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  features: string[];
  stats: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
};

// ===== SAIMZ HERO =====
const saimzContent: HeroContent = {
  title: "Pharmacy Care",
  highlight: "Reimagined",
  description:
    "Where clinical excellence meets genuine compassion. Saimz Pharmacy delivers professional care with a personal touch.",
  ctaText: "Experience the Difference",
  ctaLink: "/contact",
  features: [
    "Licensed Pharmacists",
    "Free Delivery",
    "Same-Day Service",
    "Insurance Accepted",
  ],
  stats: [
    {
      icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Hours",
      value: "Mon–Sat 9-6",
    },
    {
      icon: <Truck className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Delivery",
      value: "Free Local",
    },
    {
      icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Call",
      value: "+1-973-782-4444",
    },
  ],
};

// ===== CUREMED HERO =====
const curemedContent = {
  title: "Care close to",
  highlight: "home.",
  description:
    "At Curemed, our caring goes beyond the cure. We help neighbors in Paterson with refill support, free delivery, vaccine visits, testing, and other everyday pharmacy services.",
  ctaText: "Contact the Pharmacy",
  ctaLink: "/contact",
  features: [],
  stats: [
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Open Hours",
      value: "Mon–Sat",
    },
    {
      icon: <Truck className="h-5 w-5" />,
      label: "Local Delivery",
      value: "Free",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Call Us",
      value: "+1-862-225-9432",
    },
  ],
};

export function HeroSlider({ brand }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isSaimz = brand.slug === "saimz";
  const slides = brand.heroImages || [];
  const hasMultipleSlides = slides.length > 1;
  const currentSlide = slides[activeIndex];

  const content = isSaimz ? saimzContent : curemedContent;
  const isOpen = getPharmacyStatus(brand);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      let progress = 0;
      if (rect.top < 0) {
        progress = Math.min(Math.abs(rect.top) / viewportHeight, 0.6);
      }
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToNext = useCallback(() => {
    if (isTransitioning || !hasMultipleSlides) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning, hasMultipleSlides, slides.length]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === activeIndex || !hasMultipleSlides)
        return;
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning, activeIndex, hasMultipleSlides],
  );

  useEffect(() => {
    if (!hasMultipleSlides) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goToNext, isSaimz ? 6000 : 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goToNext, hasMultipleSlides, isSaimz]);

  const handleManualNavigation = useCallback(
    (callback: () => void) => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      callback();
      setTimeout(() => {
        if (!intervalRef.current && hasMultipleSlides) {
          intervalRef.current = setInterval(goToNext, isSaimz ? 6000 : 4000);
        }
      }, 5000);
    },
    [goToNext, hasMultipleSlides, isSaimz],
  );

  if (slides.length === 0) return null;

  const imageScale = 1 + scrollProgress * 0.08;
  const imageBlur = scrollProgress * 2;
  const imageOpacity = 1 - scrollProgress * 0.15;
  const contentOpacity = 1 - scrollProgress * 0.15;
  const contentTranslateY = scrollProgress * 20;

  function getPharmacyStatus(brand: BrandConfig) {
    const now = new Date();

    // Pharmacy is in New Jersey
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const parts = formatter.formatToParts(now);

    const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";

    const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
    const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
    const dayPeriod =
      parts.find((p) => p.type === "dayPeriod")?.value?.toLowerCase() ?? "am";

    let currentHour = hour;
    if (dayPeriod === "pm" && hour !== 12) currentHour += 12;
    if (dayPeriod === "am" && hour === 12) currentHour = 0;

    const currentMinutes = currentHour * 60 + minute;

    const schedule = brand.hours.find((h) => {
      if (h.day.includes("Monday - Friday")) {
        return [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ].includes(weekday);
      }

      return h.day === weekday;
    });

    if (!schedule || schedule.time === "Closed") {
      return false;
    }

    const match = schedule.time.match(
      /(\d{1,2}):(\d{2})\s(AM|PM)\s-\s(\d{1,2}):(\d{2})\s(AM|PM)/i,
    );

    if (!match) return false;

    const [, sh, sm, sap, eh, em, eap] = match;

    const toMinutes = (h: string, m: string, p: string) => {
      let hour = parseInt(h, 10);

      if (p.toUpperCase() === "PM" && hour !== 12) hour += 12;
      if (p.toUpperCase() === "AM" && hour === 12) hour = 0;

      return hour * 60 + parseInt(m, 10);
    };

    const open = toMinutes(sh, sm, sap);
    const close = toMinutes(eh, em, eap);

    return currentMinutes >= open && currentMinutes < close;
  }

  // ===== SAIMZ HERO  =====
  if (isSaimz) {
    return (
      <div
        ref={containerRef}
        className="relative min-h-[90vh] w-full overflow-hidden"
        suppressHydrationWarning
      >
        {/* ===== BACKGROUND IMAGE ===== */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-in-out"
            style={{
              transform: `scale(${imageScale})`,
              filter: `blur(${imageBlur}px)`,
              opacity: imageOpacity,
            }}
          >
            <Image
              src={currentSlide.path}
              alt={currentSlide.alt || brand.name}
              fill
              priority={activeIndex === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-b from-[#0A1628]/60 via-[#0A1628]/40 to-[#0A1628]/80 sm:bg-linear-to-r sm:from-[#0A1628]/80 sm:via-[#0A1628]/50 sm:to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/70 via-transparent to-transparent" />

          <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#4A9FFF]/5 to-transparent hidden sm:block" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-linear-to-r from-[#4A9FFF]/3 to-transparent hidden sm:block" />

          {isMounted && (
            <div className="absolute inset-0 overflow-hidden hidden sm:block">
              {[...Array(15)].map((_, i) => {
                // استخدام قيم ثابتة بدل Math.random() لتجنب Hydration mismatch
                const seed = (i * 137 + 42) % 100;
                const width = 2 + (seed % 5);
                const height = 2 + ((seed * 3) % 5);
                const left = (seed * 7) % 100;
                const top = (seed * 13) % 100;
                const duration = 10 + (seed % 15);
                const delay = (seed * 5) % 8;

                return (
                  <div
                    key={i}
                    className="absolute rounded-full bg-[#4A9FFF] opacity-[0.03] animate-float"
                    style={{
                      width: width + "px",
                      height: height + "px",
                      left: left + "%",
                      top: top + "%",
                      animationDuration: duration + "s",
                      animationDelay: delay + "s",
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* ===== CONTENT ===== */}
        <div className="relative z-20 flex min-h-[90vh] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-0">
            <div className="max-w-3xl">
              <div
                className="flex flex-wrap items-center gap-2 sm:gap-3 transition-all duration-700 ease-out"
                style={{
                  opacity: contentOpacity,
                  transform: `translateY(-${contentTranslateY}px)`,
                }}
              >
                {/* Pharmacy Badge */}
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 border border-white/20 font-mono text-[10px] sm:text-xs font-medium uppercase tracking-wider text-white">
                  <HeartPulse className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#4A9FFF]" />
                  Independent Community Pharmacy
                </span>

                {/* Open / Closed */}
                <span
                  className={`inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 border border-white/20 font-mono text-[10px] sm:text-xs font-medium uppercase tracking-wider ${
                    isOpen ? "text-emerald-300" : "text-red-300"
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                        isOpen ? "bg-emerald-400" : "bg-red-400"
                      }`}
                    />
                    <span
                      className={`relative inline-flex h-2 w-2 rounded-full ${
                        isOpen ? "bg-emerald-400" : "bg-red-400"
                      }`}
                    />
                  </span>

                  {isOpen ? "Open" : "Closed"}
                </span>
              </div>

              <div
                className="mt-4 sm:mt-6 space-y-1 sm:space-y-2 transition-all duration-700 ease-out"
                style={{
                  opacity: contentOpacity,
                  transform: `translateY(-${contentTranslateY}px)`,
                }}
              >
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white">
                  {content.title}
                </h1>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-transparent bg-linear-to-r from-[#4A9FFF] via-[#7ABFFF] to-white bg-clip-text">
                  {content.highlight}
                </h1>
              </div>

              <p
                className="mt-3 sm:mt-4 max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed text-white/70 font-light transition-all duration-700 ease-out"
                style={{
                  opacity: contentOpacity,
                  transform: `translateY(-${contentTranslateY}px)`,
                }}
              >
                {content.description}
              </p>

              <div
                className="mt-4 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-6 transition-all duration-700 ease-out"
                style={{
                  opacity: contentOpacity,
                  transform: `translateY(-${contentTranslateY * 0.5}px)`,
                }}
              >
                {content.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 sm:gap-2.5 group cursor-default"
                  >
                    <div className="rounded-lg bg-white/10 p-1.5 sm:p-2 text-[#4A9FFF] group-hover:bg-[#4A9FFF]/20 transition-all duration-300 group-hover:scale-110">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-white/40 font-medium group-hover:text-white/60 transition-colors duration-300">
                        {stat.label}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#4A9FFF] transition-colors duration-300">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 transition-all duration-700 ease-out"
                style={{
                  opacity: contentOpacity,
                  transform: `translateY(-${contentTranslateY * 0.3}px)`,
                }}
              >
                <Link href={content.ctaLink}>
                  <Button className="group inline-flex items-center cursor-pointer gap-2 bg-linear-to-r from-[#4A9FFF] to-[#7ABFFF] hover:from-white hover:to-white text-white hover:text-[#0A1628] px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg shadow-[#4A9FFF]/30 hover:shadow-[#4A9FFF]/50">
                    {content.ctaText}
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button className="inline-flex items-center cursor-pointer gap-2 border border-white/30 hover:border-[#4A9FFF] text-white hover:text-[#4A9FFF] px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-white/5 backdrop-blur-sm">
                    Explore Services
                    <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              </div>

              <div
                className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4 transition-all duration-700 ease-out"
                style={{
                  opacity: contentOpacity * 0.8,
                  transform: `translateY(-${contentTranslateY * 0.2}px)`,
                }}
              >
                {content.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1 sm:gap-1.5">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400" />
                    <span className="text-[10px] sm:text-xs text-white/50 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#4A9FFF]" />
                  <span className="text-[10px] sm:text-xs text-white/50 font-medium">
                    NPI #1962995290
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {hasMultipleSlides && (
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 sm:gap-3">
            {slides.map((_, index) => (
              <Button
                key={index}
                type="button"
                onClick={() => handleManualNavigation(() => goToSlide(index))}
                className={`transition-all duration-500 ${
                  index === activeIndex
                    ? "w-6 sm:w-10 h-1.5 sm:h-2.5 bg-[#4A9FFF] rounded-full shadow-lg shadow-[#4A9FFF]/30"
                    : "w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-white/20 rounded-full hover:bg-white/40 hover:scale-125"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-20 hidden lg:flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-white/20">
            Scroll
          </span>
          <div className="w-px h-12 bg-linear-to-b from-[#4A9FFF]/40 to-transparent animate-pulse" />
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) translateX(0px);
            }
            25% {
              transform: translateY(-15px) translateX(8px);
            }
            50% {
              transform: translateY(-30px) translateX(-8px);
            }
            75% {
              transform: translateY(-15px) translateX(15px);
            }
          }
          .animate-float {
            animation: float ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  // ============================================================
  // ===== CUREMED HERO (الأصلي مع HeartPulse والأيقونات - بدون تغيير) =====
  // ============================================================
  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-ink"
    >
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          isTransitioning ? "scale-105" : "scale-100"
        }`}
        style={{
          transform: `scale(${imageScale})`,
          filter: `blur(${imageBlur}px)`,
          opacity: imageOpacity,
        }}
      >
        <Image
          src={currentSlide.path}
          alt={currentSlide.alt || "Curemed Pharmacy"}
          fill
          priority={activeIndex === 0}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center" }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-ink/90 via-ink/70 to-ink/80 sm:bg-linear-to-r sm:from-ink/90 sm:via-ink/70 sm:to-ink/40 z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-ink/30 via-transparent to-transparent z-10 hidden sm:block" />

        <div className="absolute top-0 right-0 h-1/2 w-1/3 bg-linear-to-l from-amber/20 to-transparent z-10 hidden sm:block" />
        <div className="absolute bottom-0 left-0 h-1/3 w-1/4 bg-linear-to-r from-amber/10 to-transparent z-10 hidden sm:block" />
      </div>

      <div className="absolute top-20 right-20 z-5 h-96 w-96 rounded-full bg-amber/10 blur-3xl animate-pulse hidden sm:block" />
      <div
        className="absolute bottom-20 left-20 z-5 h-80 w-80 rounded-full bg-sage/10 blur-3xl animate-pulse hidden sm:block"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-0">
          <div className="flex flex-col items-center text-center sm:text-left sm:grid sm:grid-cols-[1fr_1.1fr] sm:gap-12 lg:gap-12">
            <div
              className={`flex flex-col items-center sm:items-start justify-center space-y-3 sm:space-y-4 lg:space-y-8 transition-all duration-700 ease-out ${
                isTransitioning
                  ? "opacity-0 translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {/* ===== BADGE  ===== */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-3">
                <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full backdrop-blur-sm px-2.5 sm:px-4 py-1 sm:py-1.5 font-mono text-[8px] sm:text-xs font-medium uppercase tracking-wider text-amber-50 border border-amber/30">
                  <HeartPulse className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden xs:inline">
                    Independent Community Pharmacy
                  </span>
                  <span className="xs:hidden">Pharmacy</span>
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-xs font-medium border ${
                    isOpen
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
                      : "bg-red-500/20 text-red-300 border-red-400/30"
                  }`}
                >
                  <span className="relative flex h-1 w-1 sm:h-1.5 sm:w-1.5">
                    <span
                      className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
                        isOpen ? "bg-emerald-400" : "bg-red-400"
                      } opacity-75`}
                    />
                    <span
                      className={`relative inline-flex h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full ${
                        isOpen ? "bg-emerald-400" : "bg-red-400"
                      }`}
                    />
                  </span>

                  {isOpen ? "Open" : "Closed"}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                {content.title}
                <span className="block text-amber-light">
                  {content.highlight}
                </span>
              </h1>

              <p className="max-w-lg text-sm sm:text-base lg:text-xl leading-relaxed text-white/80">
                {content.description}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 pt-1">
                <Link href={content.ctaLink}>
                  <Button className="inline-flex items-center gap-2 rounded-full cursor-pointer bg-amber px-5 sm:px-8 py-2 sm:py-3 font-mono text-[10px] sm:text-sm font-medium uppercase tracking-wider text-ink transition-all hover:bg-amber-light hover:scale-105 hover:shadow-lg hover:shadow-amber/30">
                    {content.ctaText}
                  </Button>
                </Link>
                <Link href="/services">
                  <Button className="inline-flex items-center gap-2 rounded-full cursor-pointer border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 sm:px-8 py-2 sm:py-3 font-mono text-[10px] sm:text-sm font-medium uppercase tracking-wider text-white transition-all hover:border-white/50 hover:bg-white/20 hover:scale-105">
                    Browse Services
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-6 border-t border-white/10 w-full justify-items-center sm:justify-items-start">
                {content.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-3 min-w-0 w-full max-w-55 justify-center sm:justify-start cursor-default"
                  >
                    <div className="rounded-lg bg-white/10 p-1.5 sm:p-2 text-amber transition-all duration-300 group-hover:bg-amber/20 group-hover:scale-110">
                      {stat.icon}
                    </div>

                    <div>
                      <p className="text-[10px] sm:text-xs text-white/40 font-medium transition-colors duration-300 group-hover:text-white/60">
                        {stat.label}
                      </p>

                      <p className="text-xs sm:text-sm font-semibold text-white transition-colors duration-300 group-hover:text-amber">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 sm:gap-6 pt-1">
                <div className="flex -space-x-1.5 sm:-space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-5 w-5 sm:h-8 sm:w-8 rounded-full border-2 border-ink bg-white/10 flex items-center justify-center text-[8px] sm:text-xs font-medium text-white/60 backdrop-blur-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-[8px] sm:text-xs text-white/50 truncate">
                  Trusted by{" "}
                  <span className="font-medium text-white">500+</span> patients
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center justify-center mt-8 sm:mt-0">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-linear-to-br from-amber/10 to-sage/10 border border-white/10">
                  <Image
                    src={currentSlide.path}
                    alt={currentSlide.alt || "Curemed Pharmacy"}
                    fill
                    className="object-cover opacity-60 hover:opacity-90 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/80 text-sm font-medium">
                      Independent Pharmacy
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

      {hasMultipleSlides && (
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-1.5 sm:gap-2">
          {slides.map((_, index) => (
            <Button
              key={index}
              type="button"
              onClick={() => handleManualNavigation(() => goToSlide(index))}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-4 sm:w-10 bg-amber"
                  : "w-1.5 sm:w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
