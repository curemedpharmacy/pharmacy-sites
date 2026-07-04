import { curemed } from "./curemed";
import { saimz } from "./saimz";
import type { BrandConfig } from "./types";

const brands: Record<string, BrandConfig> = { curemed, saimz };

export function getBrandConfig(): BrandConfig {
  const slug = process.env.NEXT_PUBLIC_BRAND ?? "curemed";
  const brand = brands[slug];
  if (!brand) {
    throw new Error(
      `Unknown NEXT_PUBLIC_BRAND "${slug}". Expected one of: ${Object.keys(brands).join(", ")}`
    );
  }
  return brand;
}
