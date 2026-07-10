import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HeroSlider } from "@/components/HeroSlider";
import { ClientServices } from "@/components/ClientServices";
import { getBrandConfig } from "@/lib/brands";
import { getServicesForBrand } from "@/lib/services";
import {
  Clock,
  Phone,
  Heart,
  MapPin,
  Star,
  Users,
  Shield,
  ThumbsUp,
  ArrowRight,
  Award,
  Building2,
  Truck,
  Pill,
  Syringe,
  Stethoscope,
  Briefcase,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceLabelCard } from "@/components/ServiceLabelCard";

const brand = getBrandConfig();

export const metadata: Metadata = {
  title: `${brand.name} | Community Pharmacy`,
  description: `${brand.name} serves Paterson with pharmacy care rooted in everyday support, from refill help and delivery to diabetes testing, immunizations, and more.`,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const services = getServicesForBrand(brand);
  const isSaimz = brand.slug === "saimz";

  const saimzFeatures = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Expert Team",
      desc: "Licensed pharmacists",
    },
    {
      icon: <BadgeCheck className="h-5 w-5" />,
      title: "Quality Assured",
      desc: "NPI certified",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Convenient Hours",
      desc: "Mon-Sat 9-6",
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Free Delivery",
      desc: "Local delivery",
    },
  ];

  const saimzTestimonials = [
    {
      text: "The team at Saimz always takes the time to explain my medications clearly.",
      author: "Sarah M.",
    },
    {
      text: "Their delivery service has been a lifesaver for my family. Reliable and friendly.",
      author: "David R.",
    },
  ];

  const saimzWhyChoose = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professional Care",
      desc: "Licensed pharmacists providing expert care",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Focused",
      desc: "Proudly serving the Paterson community",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assured",
      desc: "NPI certified with highest standards",
    },
  ];

  const getServiceIcon = (slug: string) => {
    const icons: Record<string, React.ReactNode> = {
      "immunizations-vaccines": <Syringe className="h-4 w-4" />,
      "medication-therapy-management": <Pill className="h-4 w-4" />,
      "health-screenings": <Stethoscope className="h-4 w-4" />,
      "delivery-service": <Truck className="h-4 w-4" />,
      "prescription-transfers": <FileText className="h-4 w-4" />,
      "health-clarity-sessions": <Briefcase className="h-4 w-4" />,
    };
    return icons[slug] || <Award className="h-4 w-4" />;
  };

  const getServiceImage = (slug: string) => {
    const basePath = "/images/saimz/services";
    const images: Record<string, string> = {
      "immunizations-vaccines": `${basePath}/immunization-clinic.jpeg`,
      "medication-therapy-management": `${basePath}/medication-therapy-management.webp`,
      "health-screenings": `${basePath}/health-screening.jpeg`,
      "delivery-service": `${basePath}/delivery.jpeg`,
      "prescription-transfers": `${basePath}/prescription-transfer.jpeg`,
      "health-clarity-sessions": `${basePath}/health-clarity.jpeg`,
    };
    return images[slug] || `${basePath}/pharmacist-consultation.jpeg`;
  };

  // ===== SAIMZ =====
  if (isSaimz) {
    return (
      <>
        <HeroSlider brand={brand} />

        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#1A4A7A] bg-[#1A4A7A]/10 px-4 py-1.5 rounded-full">
                <Star className="h-3 w-3" />
                Our Services
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-[#0A1628] sm:text-4xl">
                Professional Pharmacy Care
              </h2>
              <p className="mt-2 text-[#6A8AAA] max-w-2xl mx-auto">
                We provide comprehensive pharmacy services with a personal touch
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service) => (
                <ServiceLabelCard
                  key={service.slug}
                  rx={service.rx}
                  title={service.title}
                  description={service.description}
                  directions={service.directions || "PICK UP IN STORE"}
                  href={`/services/${service.slug}`}
                  icon={getServiceIcon(service.slug)}
                  image={getServiceImage(service.slug)}
                  isSaimz={true}
                  compact={true}
                />
              ))}
            </div>

            {services.length > 3 && (
              <div className="mt-12 text-center">
                <Link href="/services">
                  <button className="group inline-flex items-center gap-2 bg-[#1A4A7A] hover:bg-[#0A1628] text-white px-8 py-3.5 rounded-full font-mono text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg shadow-[#1A4A7A]/20 hover:shadow-[#0A1628]/30">
                    View All Services
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-linear-to-br from-[#0A1628] via-[#0F2040] to-[#1A4A7A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#4A9FFF] bg-[#4A9FFF]/10 px-4 py-1.5 rounded-full">
                  <Building2 className="h-3 w-3" />
                  About Saimz
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                  Your Neighborhood Pharmacy
                  <span className="block text-[#4A9FFF]">on Broadway</span>
                </h2>
                <p className="mt-4 text-white/50 leading-relaxed max-w-lg">
                  Saimz Pharmacy is a locally owned pharmacy dedicated to
                  providing personalized care to the Paterson community. We
                  believe in building lasting relationships with our patients.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {saimzFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 group cursor-default"
                    >
                      <div className="bg-[#4A9FFF]/10 rounded-lg p-2 text-[#4A9FFF] group-hover:bg-[#4A9FFF]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-[#4A9FFF] transition-colors duration-300">
                          {feature.title}
                        </p>
                        <p className="text-xs text-white/30 group-hover:text-white/50 transition-colors duration-300">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/about">
                  <button className="mt-8 inline-flex items-center gap-2 bg-white hover:bg-[#4A9FFF] text-[#0A1628] hover:text-white px-8 py-3.5 rounded-full font-mono text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg shadow-white/10 hover:shadow-[#4A9FFF]/30">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>

              <div className="relative group">
                <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-[#4A9FFF]/10 transition-all duration-500 group-hover:border-[#4A9FFF]/30 group-hover:shadow-2xl group-hover:shadow-[#4A9FFF]/10">
                  <Image
                    src="/images/saimz/services/immunization-clinic.jpeg"
                    alt="Saimz Pharmacy"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-[#E8F0FE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#1A4A7A] bg-[#1A4A7A]/10 px-4 py-1.5 rounded-full">
                <Heart className="h-3 w-3" />
                Why Choose Us
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-[#0A1628] sm:text-4xl">
                Why Patients Trust Saimz
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {saimzWhyChoose.map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="bg-[#1A4A7A]/10 rounded-full p-4 w-fit mx-auto group-hover:bg-[#1A4A7A]/20 transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#1A4A7A]/10">
                    <div className="text-[#1A4A7A] group-hover:text-[#4A9FFF] transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[#0A1628]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#6A8AAA]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-[#1A4A7A]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#1A4A7A]">2015</p>
                <p className="text-sm text-[#6A8AAA] mt-1">Founded</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#1A4A7A]">300+</p>
                <p className="text-sm text-[#6A8AAA] mt-1">Patients Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#1A4A7A]">4.7★</p>
                <p className="text-sm text-[#6A8AAA] mt-1">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#1A4A7A]">8+</p>
                <p className="text-sm text-[#6A8AAA] mt-1">Team Members</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-[#E8F0FE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#1A4A7A] bg-[#1A4A7A]/10 px-4 py-1.5 rounded-full">
                <Star className="h-3 w-3" />
                Testimonials
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-[#0A1628] sm:text-4xl">
                What Our Patients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {saimzTestimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-[#1A4A7A]/10 hover:shadow-xl hover:shadow-[#1A4A7A]/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex text-[#4A9FFF] mb-3">
                    <Star className="h-4 w-4 fill-[#4A9FFF]" />
                    <Star className="h-4 w-4 fill-[#4A9FFF]" />
                    <Star className="h-4 w-4 fill-[#4A9FFF]" />
                    <Star className="h-4 w-4 fill-[#4A9FFF]" />
                    <Star className="h-4 w-4 fill-[#4A9FFF]" />
                  </div>
                  <p className="text-[#0A1628]/70 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <p className="mt-3 font-semibold text-[#0A1628]">
                    {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-linear-to-br from-[#0A1628] via-[#0F2040] to-[#1A4A7A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#4A9FFF] bg-[#4A9FFF]/10 px-4 py-1.5 rounded-full">
                  <Phone className="h-3 w-3" />
                  Visit Us Today
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                  We&apos;re Here for You
                  <span className="block text-[#4A9FFF]">
                    Every Step of the Way
                  </span>
                </h2>
                <p className="mt-4 text-white/50 max-w-lg leading-relaxed">
                  Stop by our pharmacy at 715 Broadway, Paterson, NJ or give us
                  a call. Our friendly team is ready to assist with all your
                  pharmacy needs.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3 text-white/40 group cursor-default">
                    <div className="bg-[#4A9FFF]/10 rounded-lg p-2 group-hover:bg-[#4A9FFF]/20 group-hover:scale-110 transition-all duration-300">
                      <Clock className="h-4 w-4 text-[#4A9FFF]" />
                    </div>
                    <span className="text-sm group-hover:text-white transition-colors duration-300">
                      Mon–Sat 9-6
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white/40 group cursor-default">
                    <div className="bg-[#4A9FFF]/10 rounded-lg p-2 group-hover:bg-[#4A9FFF]/20 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="h-4 w-4 text-[#4A9FFF]" />
                    </div>
                    <span className="text-sm group-hover:text-white transition-colors duration-300">
                      715 Broadway
                    </span>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="/contact">
                    <button className="group inline-flex items-center gap-2 bg-white hover:bg-[#4A9FFF] text-[#0A1628] hover:text-white px-8 py-3.5 rounded-full font-mono text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg shadow-white/10 hover:shadow-[#4A9FFF]/30">
                      Contact Us
                      <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    </button>
                  </Link>
                  <Link href="/locations">
                    <button className="group inline-flex items-center gap-2 border-2 border-white/20 hover:border-[#4A9FFF] text-white hover:text-[#4A9FFF] px-8 py-3.5 rounded-full font-mono text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                      Get Directions
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <div className="relative w-[82%] group">
                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-[#4A9FFF]/10 transition-all duration-500 group-hover:border-[#4A9FFF]/30 group-hover:shadow-2xl group-hover:shadow-[#4A9FFF]/10">
                      <Image
                        src="/images/saimz/services/womens-health.jpeg"
                        alt="Saimz Pharmacy Storefront"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/40 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-60" />
                    </div>
                  </div>

                  <div className="relative w-[82%] ml-8 sm:ml-16 md:ml-32 lg:ml-45 -mt-5 sm:-mt-5 md:-mt-10 group">
                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-[#4A9FFF]/10 transition-all duration-500 group-hover:border-[#4A9FFF]/30 group-hover:shadow-2xl group-hover:shadow-[#4A9FFF]/10 group-hover:-translate-y-2">
                      <Image
                        src="/images/saimz/services/travel-health.jpeg"
                        alt="Saimz Pharmacy Services"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/40 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

 // ===== CUREMED =====
return (
  <>
    <HeroSlider brand={brand} />

    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark">
            <Star className="h-3 w-3" />
            Directions For Use
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Practical pharmacy care <br className="hidden sm:inline" />
            <span className="text-amber-dark">for everyday life</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-ink/70">
          From medication reviews to vaccines, delivery, and testing, our team
          helps patients feel supported at every step.
        </p>
      </div>

      <ClientServices services={services} />
    </section>

    <section className="relative overflow-hidden bg-linear-to-br from-sage/5 via-paper to-amber/5 py-16 sm:py-20">
      <div className="absolute top-0 left-0 -z-10 h-300 w-300 rounded-full bg-amber/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-400 w-400 rounded-full bg-sage/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
              <Heart className="h-3 w-3" />
              Our Community Impact
            </span>

            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl leading-tight">
              More than a pharmacy.
              <br />
              <span className="text-amber-dark">
                We&apos;re your neighbors.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-ink/70 leading-relaxed">
              At Curemed, we believe healthcare starts with trust. We&apos;re
              not just here to fill prescriptions — we&apos;re here to listen,
              educate, and support our community every step of the way.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <Users className="h-3 w-3 text-amber-dark" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">
                    Community-Focused Care
                  </p>
                  <p className="text-xs text-ink/60">
                    Free health screenings and wellness events
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <Shield className="h-3 w-3 text-amber-dark" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">
                    Trusted Since 2015
                  </p>
                  <p className="text-xs text-ink/60">
                    Over 15 years of serving Paterson families
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <ThumbsUp className="h-3 w-3 text-amber-dark" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">
                    Personalized Service
                  </p>
                  <p className="text-xs text-ink/60">
                    Your health goals, our priority
                  </p>
                </div>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                asChild
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-amber px-5 sm:px-6 py-3 sm:py-2.5 font-mono text-[11px] sm:text-xs font-medium uppercase tracking-wider text-ink transition-all hover:bg-amber-light hover:scale-105 hover:shadow-lg hover:shadow-amber/30"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <div className="relative w-[82%]">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/curemed/services/cta.jpeg"
                    alt="Pharmacy counter"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent" />
                  <div className="hidden md:block absolute bottom-3 left-3 right-3">
                    <p className="text-white font-semibold text-sm">
                      Friendly service
                    </p>
                    <p className="text-white/80 text-xs">
                      Your neighborhood pharmacy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-[82%] ml-8 sm:ml-16 md:ml-32 lg:ml-45 -mt-5 sm:-mt-5 md:-mt-10">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/curemed/storefront/medicine.jpg"
                    alt="Pharmacist consulting"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent" />
                  <div className="hidden md:block absolute bottom-3 left-3 right-3">
                    <p className="text-white font-semibold text-sm">
                      Caring consultations
                    </p>
                    <p className="text-white/80 text-xs">Personalized care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sage bg-sage/10 px-3 py-1 rounded-full">
              <Heart className="h-3 w-3" />
              Why {brand.shortName}
            </span>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl leading-tight">
              Personalized care.
              <br />
              <span className="text-amber-dark">
                A neighborhood pharmacy.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-ink/70 max-w-md">
              We believe in building lasting relationships with our patients
              through trust, accessibility, and genuine care.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-3 py-1.5 text-xs font-medium text-amber-dark">
                <ThumbsUp className="h-3.5 w-3.5" />
                Trusted Care
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-3 py-1.5 text-xs font-medium text-amber-dark">
                <Users className="h-3.5 w-3.5" />
                Community Focused
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-3 py-1.5 text-xs font-medium text-amber-dark">
                <Shield className="h-3.5 w-3.5" />
                Quality Assured
              </span>
            </div>
          </div>

          <ul className="space-y-4 self-center">
            <li className="group rounded-xl border border-ink/5 bg-paper/50 p-5 transition-all hover:border-amber/20 hover:shadow-lg hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-8 w-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-amber-dark" />
                </div>
                <div>
                  <p className="font-display text-lg font-medium text-ink">
                    A direct line.
                  </p>
                  <p className="mt-1 text-sm text-ink/70">
                    Reach our pharmacy team at {brand.phone} for questions,
                    refill support, or service details.
                  </p>
                </div>
              </div>
            </li>
            <li className="group rounded-xl border border-ink/5 bg-paper/50 p-5 transition-all hover:border-amber/20 hover:shadow-lg hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-8 w-8 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-sage" />
                </div>
                <div>
                  <p className="font-display text-lg font-medium text-ink">
                    Local and convenient.
                  </p>
                  <p className="mt-1 text-sm text-ink/70">
                    We are based at {brand.address.street} in Paterson and
                    welcome visits during our posted hours.
                  </p>
                </div>
              </div>
            </li>
            <li className="group rounded-xl border border-ink/5 bg-paper/50 p-5 transition-all hover:border-amber/20 hover:shadow-lg hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-8 w-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <Heart className="h-4 w-4 text-amber-dark" />
                </div>
                <div>
                  <p className="font-display text-lg font-medium text-ink">
                    Care that stays close.
                  </p>
                  <p className="mt-1 text-sm text-ink/70">
                    From delivery to vaccine visits and medication support, we
                    work to keep care simple.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-20">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-linear-to-br from-ink/2 via-sage/10 to-amber/5 border border-ink/10 p-6 sm:p-8 lg:p-12">
        <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-sage/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-48 w-48 rounded-full bg-amber/10 blur-3xl" />
        <div className="flex flex-col items-stretch justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
              <MapPin className="h-3 w-3" />
              Visit us
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Stop by, call, or reach out online.
            </h2>
            <p className="mt-1 text-sm text-ink/70">
              {brand.address.street}, {brand.address.city},{" "}
              {brand.address.state} {brand.address.zip}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-ink/60">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> Mon–Sat
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4" /> {brand.phone}
              </span>
            </div>
          </div>
          <Button
            asChild
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-amber px-4 sm:px-8 py-3 sm:py-3 font-mono text-[10px] sm:text-sm font-medium uppercase tracking-wider text-ink transition-all hover:bg-amber-light hover:scale-105 hover:shadow-lg hover:shadow-amber/30"
          >
            <Link
              href="/locations"
              className="flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span className="truncate">View Hours & Directions</span>
              <span className="text-ink shrink-0">
                <ArrowRight />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);
}