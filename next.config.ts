import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.xx.fbcdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // When the old curemedpharmacy.com URLs go live-redirect to the new domain,
  // list every old path -> new path pair here so we keep any existing
  // Google ranking signal instead of losing it on the domain change.
  async redirects() {
    return [
      // { source: "/old-path", destination: "/new-path", permanent: true },
    ];
  },
};

export default nextConfig;
