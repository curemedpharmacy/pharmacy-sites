import type { MetadataRoute } from "next";
import { getBrandConfig } from "@/lib/brands";

export default function robots(): MetadataRoute.Robots {
  const brand = getBrandConfig();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${brand.url}/sitemap.xml`,
  };
}
