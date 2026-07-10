import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrandConfig } from "@/lib/brands";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getServicesForBrand } from "@/lib/services";
import {
  Phone,
  MapPin,
  ArrowRight,
  Award,
  ChevronRight,
  Calendar,
  Clock,
  Users,
  Heart,
  Pill,
  Syringe,
  Truck,
  Stethoscope,
  Briefcase,
  Globe,
  Scissors,
  FileText,
  Play,
  Sparkles,
  Video,
  CheckCircle
} from "lucide-react";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandConfig();
  const service = getServicesForBrand(brand).find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested pharmacy service could not be found.",
      alternates: { canonical: "/services" },
    };
  }

  return {
    title: `${service.title} | ${brand.name}`,
    description: `${service.title} is one of the pharmacy services offered by ${brand.name} in Paterson, from refill support to medication guidance and routine care.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const brand = getBrandConfig();
  const isSaimz = brand.slug === "saimz";
  const service = getServicesForBrand(brand).find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: brand.url },
    { name: "Services", url: `${brand.url}/services` },
    { name: service.title, url: `${brand.url}/services/${service.slug}` },
  ]);

  const getServiceIcon = () => {
    const icons: Record<string, React.ReactNode> = {
      "immunizations-vaccines": <Syringe className="h-7 w-7" />,
      "medication-therapy-management": <Pill className="h-7 w-7" />,
      "travel-health-hajj": <Globe className="h-7 w-7" />,
      "womens-health": <Heart className="h-7 w-7" />,
      "health-screenings": <Stethoscope className="h-7 w-7" />,
      "delivery-service": <Truck className="h-7 w-7" />,
      "prescription-transfers": <FileText className="h-7 w-7" />,
      "health-clarity-sessions": <Briefcase className="h-7 w-7" />,
      compounding: <Scissors className="h-7 w-7" />,
    };
    return icons[service.slug] || <Award className="h-7 w-7" />;
  };

  const getServiceColor = () => {
    const colors: Record<string, string> = {
      "immunizations-vaccines": "bg-blue-50 text-blue-600 border-blue-200",
      "medication-therapy-management": "bg-emerald-50 text-emerald-600 border-emerald-200",
      "travel-health-hajj": "bg-amber-50 text-amber-600 border-amber-200",
      "womens-health": "bg-pink-50 text-pink-600 border-pink-200",
      "health-screenings": "bg-sage/20 text-sage border-sage/30",
      "delivery-service": "bg-purple-50 text-purple-600 border-purple-200",
      "prescription-transfers": "bg-indigo-50 text-indigo-600 border-indigo-200",
      "health-clarity-sessions": "bg-cyan-50 text-cyan-600 border-cyan-200",
      compounding: "bg-rose-50 text-rose-600 border-rose-200",
    };
    return colors[service.slug] || "bg-amber/10 text-amber-dark border-amber/20";
  };

  const firstPost = service.facebookPosts && service.facebookPosts.length > 0 ? service.facebookPosts[0] : null;

  const getHeroImage = () => {
    // كيورمد: يجيب الصورة من الفيسبوك
    if (!isSaimz && firstPost) {
      if (firstPost.type === "video" && firstPost.videoThumbnail) {
        return firstPost.videoThumbnail;
      }
      if (firstPost.image) {
        return firstPost.image;
      }
    }
    // سيمز: يستخدم الصور المحلية
    const basePath = isSaimz ? "/images/saimz/services" : "/images/curemed/services";
    const images: Record<string, string> = {
      "immunizations-vaccines": `${basePath}/immunization-clinic.jpeg`,
      "medication-therapy-management": `${basePath}/medication-therapy-management.webp`,
      "travel-health-hajj": `${basePath}/travel-health.jpeg`,
      "womens-health": `${basePath}/womens-health.jpeg`,
      "health-screenings": `${basePath}/health-screening.jpeg`,
      "delivery-service": `${basePath}/delivery.jpeg`,
      "prescription-transfers": `${basePath}/prescription-transfer.jpeg`,
      "health-clarity-sessions": `${basePath}/health-clarity.jpeg`,
    };
    return images[service.slug] || `${basePath}/pharmacist-consultation.jpeg`;
  };

  const heroImage = getHeroImage();

  // ===== SAIMZ (بدون فيسبوك) =====
  if (isSaimz) {
    return (
      <section className="min-h-screen bg-[#E8F0FE] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <JsonLd data={breadcrumb} />

          <nav className="flex items-center gap-2 text-sm text-[#6A8AAA] mb-8 flex-wrap">
            <Link href="/" className="hover:text-[#1A4A7A] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/services" className="hover:text-[#1A4A7A] transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0A1628] font-medium">{service.title}</span>
          </nav>

          <div className="bg-white rounded-2xl border border-[#1A4A7A]/10 overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-100 overflow-hidden">
                <Image src={heroImage} alt={service.title} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-mono font-semibold text-[#0A1628] shadow-lg">
                    <Award className="h-3.5 w-3.5" />
                    RX-{service.rx}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#1A4A7A]/10 rounded-xl p-3 text-[#1A4A7A]">{getServiceIcon()}</div>
                  <span className="text-xs font-mono font-medium text-[#1A4A7A] bg-[#1A4A7A]/10 px-3 py-1 rounded-full">Available Now</span>
                </div>

                <h1 className="font-display text-3xl font-bold text-[#0A1628] sm:text-4xl">{service.heroTitle}</h1>
                <p className="mt-3 text-[#6A8AAA] leading-relaxed">{service.heroDescription}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 border border-emerald-200">
                    <CheckCircle className="h-3.5 w-3.5" /> Available
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1A4A7A]/10 px-3 py-1.5 text-xs font-medium text-[#1A4A7A] border border-[#1A4A7A]/20">
                    <Users className="h-3.5 w-3.5" /> Walk-ins Welcome
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1A4A7A] hover:bg-[#0A1628] text-white px-6 py-2.5 rounded-full font-mono text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg shadow-[#1A4A7A]/20">
                    <Phone className="h-4 w-4" /> Schedule Now
                  </Link>
                  <Link href="/locations" className="inline-flex items-center gap-2 border-2 border-[#1A4A7A]/20 hover:border-[#1A4A7A] text-[#0A1628] px-6 py-2.5 rounded-full font-mono text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105">
                    <MapPin className="h-4 w-4" /> Visit Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#1A4A7A]/10 p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-[#0A1628] flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#4A9FFF]" /> About This Service
                </h2>
                <p className="mt-4 text-[#6A8AAA] leading-relaxed">{service.overview}</p>
              </div>

              <div className="bg-white rounded-2xl border border-[#1A4A7A]/10 p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold text-[#0A1628] flex items-center gap-2 mb-5">
                  <CheckCircle className="h-5 w-5 text-[#4A9FFF]" /> Key Benefits
                </h3>
                <div className="grid gap-3">
                  {service.highlights.map((highlight, index) => (
                    <div key={highlight} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#E8F0FE] hover:bg-[#D4E4F7] transition-all group">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A4A7A] text-white text-xs font-medium group-hover:scale-110 transition-transform">
                        {index + 1}
                      </span>
                      <span className="text-sm text-[#0A1628] group-hover:text-[#1A4A7A] transition-colors">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="bg-white rounded-2xl border border-[#1A4A7A]/10 p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="rounded-full bg-[#1A4A7A]/10 p-2"><Phone className="h-4 w-4 text-[#1A4A7A]" /></div>
                  <h2 className="font-display text-lg font-bold text-[#0A1628]">Need Help?</h2>
                </div>
                <p className="text-sm text-[#6A8AAA] leading-relaxed">Reach out to {brand.name} at <span className="font-medium text-[#0A1628]">{brand.phone}</span></p>
                <Link href="/contact" className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1A4A7A] hover:bg-[#0A1628] text-white px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider transition-all duration-300">
                  Contact Us <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="bg-white rounded-2xl border border-[#1A4A7A]/10 p-6">
                <div className="flex items-center gap-2.5 mb-3"><MapPin className="h-4 w-4 text-[#6A8AAA]" /><h3 className="font-display text-sm font-bold text-[#0A1628]">Visit Us</h3></div>
                <p className="text-sm text-[#6A8AAA] leading-relaxed">{brand.address.street}<br />{brand.address.city}, {brand.address.state} {brand.address.zip}</p>
                <Link href="/locations" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#1A4A7A] hover:text-[#4A9FFF] transition-colors">Get Directions <ArrowRight className="h-3 w-3" /></Link>
              </div>

              <div className="bg-white rounded-2xl border border-[#1A4A7A]/10 p-6">
                <div className="flex items-center gap-2.5 mb-3"><Clock className="h-4 w-4 text-[#6A8AAA]" /><h3 className="font-display text-sm font-bold text-[#0A1628]">Service Info</h3></div>
                <div className="space-y-2 text-sm text-[#6A8AAA]">
                  <div className="flex justify-between items-center py-1 border-b border-[#1A4A7A]/5"><span>Availability</span><span className="font-medium text-emerald-600 flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available</span></div>
                  <div className="flex justify-between items-center py-1 border-b border-[#1A4A7A]/5"><span>Walk-ins</span><span className="font-medium text-[#0A1628]">Welcome</span></div>
                  <div className="flex justify-between items-center py-1"><span>Service ID</span><span className="font-mono text-xs text-[#6A8AAA] bg-[#E8F0FE] px-2 py-0.5 rounded">RX-{service.rx}</span></div>
                </div>
              </div>

              <Link href="/services" className="block rounded-2xl border border-[#1A4A7A]/10 bg-white p-4 text-center hover:bg-[#E8F0FE] transition-all group">
                <span className="text-sm text-[#6A8AAA] flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                  <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" /> Back to all services
                </span>
              </Link>
            </aside>
          </div>
        </div>
      </section>
    );
  }

  // ===== CUREMED (كامل مع فيسبوك كما هو) =====
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5 min-h-[70vh]">
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-sage/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <JsonLd data={breadcrumb} />

        <nav className="flex items-center gap-2 text-sm text-ink/50 mb-6 flex-wrap">
          <Link href="/" className="hover:text-amber-dark transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/services" className="hover:text-amber-dark transition-colors">Services</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink/80 font-medium">{service.title}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="order-2 lg:order-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className={`rounded-2xl ${getServiceColor()} p-2.5 border shadow-sm`}>{getServiceIcon()}</div>
              <span className="font-mono text-xs font-medium text-amber-dark bg-amber/10 px-3 py-1 rounded-full border border-amber/20">RX № {service.rx}</span>
            </div>

            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl leading-tight">{service.heroTitle}</h1>
            <p className="text-base sm:text-lg leading-relaxed text-ink/70 max-w-2xl">{service.heroDescription}</p>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 border border-emerald-200"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />Available Now</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-3 py-1.5 text-xs font-medium text-amber-dark border border-amber/20"><Award className="h-3.5 w-3.5" />Community Pharmacy</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 border border-blue-200"><Users className="h-3.5 w-3.5" />Walk-ins Welcome</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-paper transition-all hover:bg-amber-dark hover:scale-105 hover:shadow-lg"><Phone className="h-4 w-4" />Schedule Now</Link>
              <Link href="/locations" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-ink transition-all hover:border-ink/40 hover:bg-ink/5"><MapPin className="h-4 w-4" />Visit Us</Link>
              {brand.social.facebook && (
                <a href={brand.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-ink transition-all hover:border-[#1877F2]/30 hover:bg-[#1877F2]/5">
                  <svg className="h-4 w-4 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>Follow Us
                </a>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-ink/10 aspect-4/3 bg-ink/5 group">
              <Image src={heroImage} alt={service.title} width={600} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" unoptimized={true} />
              <div className="absolute inset-0 bg-linear-to-t from-ink/40 via-ink/5 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-linear-to-tr from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-8 hover:border-amber/20 transition-colors">
              <h2 className="font-display text-xl font-semibold text-ink flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber" />About this service</h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70">{service.overview}</p>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-ink flex items-center gap-2 mb-5"><Sparkles className="h-5 w-5 text-amber-dark" />Key Benefits</h3>
              <div className="grid gap-3">
                {service.highlights.map((highlight, index) => (
                  <div key={highlight} className="flex items-start gap-3 p-3.5 rounded-xl bg-paper/50 border border-ink/5 hover:border-amber/10 hover:bg-paper/70 transition-all group">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium group-hover:scale-110 transition-transform">{index + 1}</span>
                    <span className="text-sm text-ink/70 group-hover:text-ink/90 transition-colors">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-amber/10 bg-linear-to-br from-amber/5 via-paper to-paper p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2.5 mb-4"><div className="rounded-full bg-amber/10 p-2"><Phone className="h-4 w-4 text-amber-dark" /></div><h2 className="font-display text-lg font-semibold text-ink">Need help?</h2></div>
              <p className="text-sm leading-relaxed text-ink/70">Reach out to {brand.name} at <span className="font-medium text-ink">{brand.phone}</span> for questions about this service or to schedule a visit.</p>
              <Link href="/contact" className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-paper transition-all hover:bg-amber-dark hover:scale-[1.02] active:scale-95">Contact Us <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6 hover:border-ink/20 transition-colors">
              <div className="flex items-center gap-2.5 mb-3"><MapPin className="h-4 w-4 text-ink/40" /><h3 className="font-display text-sm font-semibold text-ink">Visit Us</h3></div>
              <p className="text-sm text-ink/60 leading-relaxed">{brand.address.street}<br />{brand.address.city}, {brand.address.state} {brand.address.zip}</p>
              <Link href="/locations" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-amber-dark hover:underline">Get Directions <ArrowRight className="h-3 w-3" /></Link>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-paper/60 p-6">
              <div className="flex items-center gap-2.5 mb-3"><Clock className="h-4 w-4 text-ink/40" /><h3 className="font-display text-sm font-semibold text-ink">Service Info</h3></div>
              <div className="space-y-2 text-sm text-ink/60">
                <div className="flex justify-between items-center py-1 border-b border-ink/5"><span>Availability</span><span className="font-medium text-emerald-600 flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />Available</span></div>
                <div className="flex justify-between items-center py-1 border-b border-ink/5"><span>Walk-ins</span><span className="font-medium text-ink/80">Welcome</span></div>
                <div className="flex justify-between items-center py-1"><span>Service ID</span><span className="font-mono text-xs text-ink/50 bg-ink/5 px-2 py-0.5 rounded">RX-{service.rx}</span></div>
              </div>
            </div>

            <Link href="/services" className="block rounded-2xl border border-ink/5 bg-paper/40 p-4 text-center hover:bg-paper/80 transition-all hover:shadow-sm group">
              <span className="text-sm text-ink/50 flex items-center justify-center gap-2 group-hover:gap-3 transition-all"><ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />Back to all services</span>
            </Link>
          </aside>
        </div>

        {/* ===== FACEBOOK POSTS SECTION (لـ Curemed فقط) ===== */}
        {!isSaimz && service.facebookPosts && service.facebookPosts.length > 0 && (
          <div className="mt-12 rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-[#1877F2]/10 p-2">
                <svg className="h-5 w-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">Related Facebook Posts</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.facebookPosts.map((post, index) => (
                <div key={index} className="group rounded-xl border border-ink/5 bg-paper/40 hover:border-amber/10 hover:shadow-md transition-all overflow-hidden">
                  <a href={post.postId ? `https://www.facebook.com/curemed/posts/${post.postId}` : "#"} target="_blank" rel="noopener noreferrer" className="block relative w-full aspect-video overflow-hidden">
                    {post.type === "video" && post.videoThumbnail ? (
                      <Image src={post.videoThumbnail} alt={post.title} width={400} height={225} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" unoptimized={true} />
                    ) : post.image ? (
                      <Image src={post.image} alt={post.title} width={400} height={225} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" unoptimized={true} />
                    ) : (
                      <div className="w-full h-full bg-sage/10 flex items-center justify-center"><span className="text-sm text-ink/30">No image</span></div>
                    )}

                    {post.type === "video" && (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                          <div className="h-11 w-11 rounded-full bg-amber/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <Play className="h-5 w-5 text-white fill-current ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 rounded bg-black/60 backdrop-blur-sm px-2 py-1 text-xs text-white flex items-center gap-1">
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>Video
                        </div>
                      </>
                    )}
                  </a>

                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-ink/40 mb-1.5">
                      <Calendar className="h-3 w-3" /><span>{post.date}</span>
                      {post.type === "video" && <><span className="w-1 h-1 rounded-full bg-ink/20" /><span className="flex items-center gap-1 text-red-500"><Video className="h-3 w-3" />Video</span></>}
                    </div>
                    <p className="text-sm font-medium text-ink group-hover:text-amber-dark transition-colors line-clamp-2">{post.title}</p>
                    <p className="mt-1 text-xs text-ink/60 line-clamp-2">{post.content}</p>
                    {post.postId && (
                      <a href={`https://www.facebook.com/curemed/posts/${post.postId}`} target="_blank" rel="noopener noreferrer" className="mt-2.5 inline-flex items-center gap-1 text-xs font-medium text-[#1877F2] hover:underline">
                        {post.type === "video" ? "Watch Video" : "View Post"} <ArrowRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <a href="https://www.facebook.com/curemed" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#1877F2] hover:underline">
                View all posts on Facebook <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}