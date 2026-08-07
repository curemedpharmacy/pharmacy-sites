import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrandConfig } from "@/lib/brands";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import {
  getArticleBySlug,
  getAllArticles,
  formatArticleDate,
  type Article,
  type ArticleBlock,
} from "@/lib/blog";
import {
  ChevronRight,
  Calendar,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  Phone,
} from "lucide-react";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandConfig();
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
      alternates: { canonical: "/blog" },
    };
  }

  return {
    title: `${article.title} | ${brand.name}`,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: [{ url: article.image }],
    },
  };
}

function ArticleBody({ blocks, isSaimz }: { blocks: ArticleBlock[]; isSaimz: boolean }) {
  const headingClass = isSaimz
    ? "font-display text-2xl font-bold text-[#0A1628] mt-10 first:mt-0"
    : "font-display text-2xl font-bold text-ink mt-10 first:mt-0";
  const paragraphClass = isSaimz
    ? "mt-4 text-base leading-relaxed text-[#33506E]"
    : "mt-4 text-base leading-relaxed text-ink/80";
  const listClass = isSaimz
    ? "mt-4 space-y-2.5 text-base leading-relaxed text-[#33506E]"
    : "mt-4 space-y-2.5 text-base leading-relaxed text-ink/80";
  const bulletClass = isSaimz ? "text-[#4A9FFF]" : "text-amber-dark";
  const calloutClass = isSaimz
    ? "mt-6 rounded-2xl border border-[#1A4A7A]/15 bg-[#E8F0FE] p-5 sm:p-6"
    : "mt-6 rounded-2xl border border-amber/15 bg-amber/5 p-5 sm:p-6";
  const calloutTitleClass = isSaimz
    ? "font-display text-base font-semibold text-[#0A1628]"
    : "font-display text-base font-semibold text-ink";
  const calloutTextClass = isSaimz
    ? "text-sm leading-relaxed text-[#33506E]"
    : "text-sm leading-relaxed text-ink/80";

  return (
    <div>
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={index} className={headingClass}>
              {block.text}
            </h2>
          );
        }
        if (block.type === "paragraph") {
          return (
            <p key={index} className={paragraphClass}>
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className={listClass}>
              {block.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${isSaimz ? "bg-[#4A9FFF]" : "bg-amber"}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        // callout
        return (
          <div key={index} className={calloutClass}>
            {block.title ? (
              <h3 className={`${calloutTitleClass} mb-1.5`}>{block.title}</h3>
            ) : null}
            <p className={calloutTextClass}>{block.text}</p>
          </div>
        );
      })}
    </div>
  );
}

function RelatedArticles({
  current,
  isSaimz,
}: {
  current: Article;
  isSaimz: boolean;
}) {
  const related = getAllArticles()
    .filter((a) => a.slug !== current.slug)
    .slice(0, 2);

  if (related.length === 0) return null;

  return (
    <div className="mt-14">
      <h2
        className={
          isSaimz
            ? "font-display text-xl font-bold text-[#0A1628]"
            : "font-display text-xl font-bold text-ink"
        }
      >
        Keep reading
      </h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={
              isSaimz
                ? "group overflow-hidden rounded-2xl border border-[#1A4A7A]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                : "group overflow-hidden rounded-2xl border border-ink/10 bg-paper/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/20 hover:shadow-lg"
            }
          >
            <div className="relative aspect-16/9 overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <span
                className={
                  isSaimz
                    ? "rounded-full bg-[#1A4A7A]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#1A4A7A]"
                    : "rounded-full bg-amber/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-dark"
                }
              >
                {post.category}
              </span>
              <h3
                className={
                  isSaimz
                    ? "mt-2.5 font-display text-base font-semibold text-[#0A1628] transition-colors group-hover:text-[#1A4A7A] text-pretty"
                    : "mt-2.5 font-display text-base font-semibold text-ink transition-colors group-hover:text-amber-dark text-pretty"
                }
              >
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const brand = getBrandConfig();
  const isSaimz = brand.slug === "saimz";
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: brand.url },
    { name: "Blog", url: `${brand.url}/blog` },
    { name: article.title, url: `${brand.url}/blog/${article.slug}` },
  ]);

  const articleLd = articleSchema({
    title: article.title,
    description: article.excerpt,
    slug: article.slug,
    publishedAt: article.publishedAt,
  });

  // ===== SAIMZ =====
  if (isSaimz) {
    return (
      <section className="min-h-screen bg-[#E8F0FE] py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <JsonLd data={breadcrumb} />
          <JsonLd data={articleLd} />

          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#6A8AAA]">
            <Link href="/" className="transition-colors hover:text-[#1A4A7A]">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog" className="transition-colors hover:text-[#1A4A7A]">
              Blog
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-[#0A1628] line-clamp-1">
              {article.title}
            </span>
          </nav>

          <span className="inline-flex items-center rounded-full bg-[#1A4A7A]/10 px-3 py-1 font-mono text-xs font-medium text-[#1A4A7A]">
            {article.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-[#0A1628] sm:text-4xl text-balance">
            {article.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-[#6A8AAA]">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {article.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatArticleDate(article.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </span>
          </div>

          <div className="relative mt-8 aspect-16/9 overflow-hidden rounded-2xl border border-[#1A4A7A]/10 shadow-lg">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>

          <article className="mt-10 rounded-2xl border border-[#1A4A7A]/10 bg-white p-6 sm:p-9">
            <ArticleBody blocks={article.content} isSaimz />
          </article>

          <div className="mt-10 rounded-2xl border border-[#1A4A7A]/10 bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-[#0A1628]">
              Have questions about this topic?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#6A8AAA]">
              Our pharmacy team is here to help. Reach out to {brand.name} at{" "}
              <span className="font-medium text-[#0A1628]">{brand.phone}</span>.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1A4A7A] px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-[#0A1628]"
            >
              <Phone className="h-4 w-4" /> Contact Us
            </Link>
          </div>

          <RelatedArticles current={article} isSaimz />

          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[#1A4A7A] transition-all hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
        </div>
      </section>
    );
  }

  // ===== CUREMED =====
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-paper via-paper to-sage/5 min-h-[70vh]">
      <div className="absolute top-0 right-0 -z-10 h-150 w-150 rounded-full bg-amber/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-sage/10 blur-3xl" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <JsonLd data={breadcrumb} />
        <JsonLd data={articleLd} />

        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-ink/50">
          <Link href="/" className="transition-colors hover:text-amber-dark">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/blog" className="transition-colors hover:text-amber-dark">
            Blog
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-ink/80 line-clamp-1">
            {article.title}
          </span>
        </nav>

        <span className="inline-flex items-center rounded-full bg-amber/10 px-3 py-1 font-mono text-xs font-medium text-amber-dark">
          {article.category}
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl text-balance">
          {article.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-ink/50">
          <span className="inline-flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {article.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatArticleDate(article.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {article.readTime}
          </span>
        </div>

        <div className="relative mt-8 aspect-16/9 overflow-hidden rounded-2xl border border-ink/10 shadow-2xl">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink/20 via-transparent to-transparent" />
        </div>

        <article className="mt-10 rounded-2xl border border-ink/10 bg-paper/60 p-6 sm:p-9">
          <ArticleBody blocks={article.content} isSaimz={false} />
        </article>

        <div className="mt-10 rounded-2xl border border-amber/10 bg-linear-to-br from-amber/5 via-paper to-paper p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">
            Have questions about this topic?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">
            Our pharmacy team is here to help. Reach out to {brand.name} at{" "}
            <span className="font-medium text-ink">{brand.phone}</span>.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-paper transition-all hover:scale-105 hover:bg-amber-dark"
          >
            <Phone className="h-4 w-4" /> Contact Us <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <RelatedArticles current={article} isSaimz={false} />

        <Link
          href="/blog"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-amber-dark transition-all hover:gap-3"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all articles
        </Link>
      </div>
    </section>
  );
}
