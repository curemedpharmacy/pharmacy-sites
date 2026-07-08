"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBrandConfig } from "@/lib/brands";
import { getServicesForBrand } from "@/lib/services";
import type { ServiceItem } from "@/lib/services";
import { User, Tag, Heart, BookOpen, Shield, TrendingUp, ExternalLink, Calendar } from "lucide-react";

// تعريف نوع البوست التوعوي
type HealthPost = {
  title: string;
  summary: string;
  image: string;
  alt: string;
  category: string;
  author: string;
  link: string;
  isVideo: boolean;
  date: string;
  content: string;
};

// الكلمات المفتاحية للتصفية (نصائح واستشارات)
const advisoryKeywords = [
  "health", "wellness", "tips", "guide", "advice", "prevention",
  "awareness", "education", "support", "care", "screening",
  "vaccination", "medication", "nutrition", "exercise",
  "mental health", "self-care", "healthy", "reminder",
  "benefits", "protect", "stay healthy", "wellbeing",
  "chronic", "management", "prevent", "detection"
];

// استخراج البوستات التوعوية فقط
const getAdvisoryPosts = (services: ServiceItem[]): HealthPost[] => {
  const posts: HealthPost[] = [];

  services.forEach(service => {
    if (service.facebookPosts && service.facebookPosts.length > 0) {
      service.facebookPosts.forEach(post => {
        const content = (post.content || "").toLowerCase();
        const title = (post.title || "").toLowerCase();
        
        // التحقق إذا كان المحتوى يحتوي على كلمات مفتاحية توعوية
        const isAdvisory = advisoryKeywords.some(keyword => 
          content.includes(keyword) || title.includes(keyword)
        );

        // استثناء البوستات الترويجية أو الإعلانية
        const isPromotional = content.includes("call us") || 
                             content.includes("stop by") || 
                             content.includes("visit us") ||
                             content.includes("transfer") ||
                             content.includes("delivery") ||
                             content.includes("prescription") ||
                             content.includes("shop") ||
                             content.includes("buy");

        // إذا كان المحتوى توعوي وليس ترويجي
        if (isAdvisory && !isPromotional) {
          // تحديد الصورة
          let image = "";
          if (post.type === 'video' && post.videoThumbnail) {
            image = post.videoThumbnail;
          } else if (post.image) {
            image = post.image;
          } else {
            image = "/images/curemed/services/pharmacist-consultation.webp";
          }

          // تحديد التصنيف المناسب
          let category = "Wellness Tips";
          if (content.includes("vaccine") || content.includes("flu") || content.includes("immunization")) {
            category = "Vaccines & Prevention";
          } else if (content.includes("medication") || content.includes("prescription") || content.includes("drug")) {
            category = "Medication Support";
          } else if (content.includes("women") || content.includes("pregnancy") || content.includes("menopause")) {
            category = "Women's Health";
          } else if (content.includes("heart") || content.includes("blood pressure") || content.includes("cholesterol")) {
            category = "Heart Health";
          } else if (content.includes("diabetes") || content.includes("blood sugar") || content.includes("glucose")) {
            category = "Diabetes Care";
          } else if (content.includes("mental") || content.includes("stress") || content.includes("anxiety")) {
            category = "Mental Wellness";
          } else if (content.includes("bone") || content.includes("osteoporosis") || content.includes("calcium")) {
            category = "Bone Health";
          } else if (content.includes("travel") || content.includes("hajj") || content.includes("journey")) {
            category = "Travel Health";
          }

          posts.push({
            title: post.title || service.title,
            summary: post.content || service.description,
            image: image,
            alt: service.title,
            category: category,
            author: "CureMed Pharmacy Team",
            link: post.postId ? `https://www.facebook.com/curemed/posts/${post.postId}` : "#",
            isVideo: post.type === 'video',
            date: post.date || "Recent",
            content: post.content || "",
          });
        }
      });
    }
  });

  // ترتيب البوستات حسب التاريخ (الأحدث أولاً)
  return posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
};

export default function BlogPage() {
  const brand = getBrandConfig();
  const services = getServicesForBrand(brand);
  const allPosts = getAdvisoryPosts(services);

  // استخراج التصنيفات الفريدة تلقائياً
  const categories = ["All Posts", ...new Set(allPosts.map(post => post.category))];
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  // تصفية المنشورات حسب التصنيف المحدد
  const filteredPosts = selectedCategory === "All Posts"
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5 min-h-[70vh]">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-sage/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
            <BookOpen className="h-3 w-3" />
            Health Notes
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl leading-tight">
            Helpful guidance from {brand.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70 max-w-2xl">
            We share practical pharmacy wellness updates, medication support tips,
            and reminders that help patients feel informed between visits.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-amber text-paper hover:bg-amber-dark"
                  : "border border-ink/20 text-ink/70 hover:bg-ink/5 hover:border-ink/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* عدد النتائج */}
        <p className="mt-4 text-sm text-ink/50">
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
        </p>

        {/* Posts Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-paper/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber/20"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={800}
                  height={560}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/30 via-transparent to-transparent" />
                
                {/* Badges on Image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-paper/90 backdrop-blur-sm px-3 py-1 text-[10px] font-medium text-ink/80 border border-ink/5">
                    {post.category}
                  </span>
                  {post.isVideo && (
                    <span className="rounded-full bg-red-500/90 backdrop-blur-sm px-3 py-1 text-[10px] font-medium text-white border border-red-400/30 flex items-center gap-1">
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
                      Video
                    </span>
                  )}
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full bg-paper/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-medium text-ink/60 border border-ink/5 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">               
                <h2 className="mt-1 font-display text-lg font-semibold text-ink group-hover:text-amber-dark transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 line-clamp-2">
                  {post.summary}
                </p>

                {/* Author & Link */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-ink/5">
                  <span className="flex items-center gap-1.5 text-xs text-ink/40">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-amber-dark hover:text-amber transition-colors group-hover:gap-2"
                  >
                    {post.isVideo ? 'Watch Video' : 'Read More'}
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* رسالة عند عدم وجود نتائج */}
        {filteredPosts.length === 0 && (
          <div className="mt-10 text-center py-12">
            <BookOpen className="h-12 w-12 text-ink/20 mx-auto" />
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">No posts found</h3>
            <p className="mt-2 text-sm text-ink/50">
              Try selecting a different category to see more content.
            </p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-xl bg-paper/60 border border-ink/5 p-4 text-center hover:border-amber/20 transition-colors">
            <Heart className="h-5 w-5 text-amber-dark mx-auto" />
            <p className="mt-2 font-display text-xl font-bold text-ink">{allPosts.length}+</p>
            <p className="text-[10px] text-ink/50">Health Tips Shared</p>
          </div>
          <div className="rounded-xl bg-paper/60 border border-ink/5 p-4 text-center hover:border-amber/20 transition-colors">
            <Shield className="h-5 w-5 text-amber-dark mx-auto" />
            <p className="mt-2 font-display text-xl font-bold text-ink">{categories.length - 1}+</p>
            <p className="text-[10px] text-ink/50">Topics Covered</p>
          </div>
          <div className="rounded-xl bg-paper/60 border border-ink/5 p-4 text-center hover:border-amber/20 transition-colors">
            <TrendingUp className="h-5 w-5 text-amber-dark mx-auto" />
            <p className="mt-2 font-display text-xl font-bold text-ink">500+</p>
            <p className="text-[10px] text-ink/50">Monthly Readers</p>
          </div>
          <div className="rounded-xl bg-paper/60 border border-ink/5 p-4 text-center hover:border-amber/20 transition-colors">
            <Tag className="h-5 w-5 text-amber-dark mx-auto" />
            <p className="mt-2 font-display text-xl font-bold text-ink">4.7★</p>
            <p className="text-[10px] text-ink/50">Helpful Rating</p>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-10 rounded-2xl border border-amber/10 bg-linear-to-br from-amber/5 via-paper to-sage/5 p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-dark">
                <Heart className="h-3 w-3" />
                Stay Informed
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                Get health notes delivered to you
              </h3>
              <p className="mt-1 text-sm text-ink/70">
                Subscribe to receive helpful pharmacy tips and wellness updates.
              </p>
            </div>
            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-ink/20 px-4 py-2.5 text-sm bg-paper/50 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber transition-colors"
              />
              <button className="shrink-0 rounded-full bg-amber px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-paper transition-all hover:bg-amber-dark hover:scale-[1.02]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}