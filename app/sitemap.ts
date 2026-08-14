import type { MetadataRoute } from "next";
import { getBrandConfig } from "@/lib/brands";

// Static routes for v1. Once /services and /blog are backed by the
// Laravel API, replace the hardcoded slugs below with a fetch to
// their respective endpoints so new entries appear automatically.
const staticRoutes = [
  "",
  "/about",
  "/services",
  "/book-consultation",
  "/locations",
  "/blog",
  "/contact",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const brand = getBrandConfig();
  return staticRoutes.map((route) => ({
    url: `${brand.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
