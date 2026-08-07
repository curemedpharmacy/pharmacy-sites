import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBrandConfig } from "@/lib/brands";
import { getAllArticles, formatArticleDate } from "@/lib/blog";
import { BookOpen, Calendar, Clock, ArrowRight, User } from "lucide-react";

export function generateMetadata(): Metadata {
  const brand = getBrandConfig();
  return {
    title: `Blog | ${brand.name}`,
    description: `Health articles, medication guidance, and wellness insights from the ${brand.name} pharmacy team.`,
    alternates: { canonical: "/blog" },
  };
}

export default function BlogPage() {
  const brand = getBrandConfig();
  const isSaimz = brand.slug === "saimz";
  const posts = getAllArticles();

  // ===== SAIMZ =====
  if (isSaimz) {
    return (
      <section className="min-h-screen bg-[#E8F0FE] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1A4A7A]/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#1A4A7A]">
              <BookOpen className="h-3 w-3" />
              Blog
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-[#0A1628] sm:text-4xl lg:text-5xl text-balance">
              Health insights from {brand.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#6A8AAA]">
              Practical medication guidance, vaccine information, and wellness
              articles written by our pharmacy team.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid gap-0 overflow-hidden rounded-2xl border border-[#1A4A7A]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[minmax(0,240px)_1fr]"
              >
                <div className="relative aspect-16/9 overflow-hidden sm:aspect-auto sm:h-full">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#6A8AAA]">
                    <span className="rounded-full bg-[#1A4A7A]/10 px-2.5 py-0.5 font-medium text-[#1A4A7A]">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatArticleDate(post.publishedAt)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-semibold text-[#0A1628] transition-colors group-hover:text-[#1A4A7A] text-pretty">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#6A8AAA] line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[#1A4A7A] transition-all group-hover:gap-2">
                    Read article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ===== CUREMED =====
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5 min-h-[70vh]">
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-sage/10 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-amber-dark">
            <BookOpen className="h-3 w-3" />
            Blog
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl text-balance">
            Health insights from {brand.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            Practical medication guidance, vaccine information, and wellness
            articles written by our pharmacy team.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid gap-0 overflow-hidden rounded-2xl border border-ink/10 bg-paper/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/20 hover:shadow-xl sm:grid-cols-[minmax(0,240px)_1fr]"
            >
              <div className="relative aspect-16/9 overflow-hidden sm:aspect-auto sm:h-full">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/20 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col p-6">
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-ink/50">
                  <span className="rounded-full bg-amber/10 px-2.5 py-0.5 font-medium text-amber-dark">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatArticleDate(post.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold text-ink transition-colors group-hover:text-amber-dark text-pretty">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-ink/5 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-ink/40">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-dark transition-all group-hover:gap-2">
                    Read article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
