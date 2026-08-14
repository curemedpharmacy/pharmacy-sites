import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { pharmacyLocalBusinessSchema } from "@/lib/schema";
import { getBrandConfig } from "@/lib/brands";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const brand = getBrandConfig();
const isSaimz = brand.slug === "saimz";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} | Community Pharmacy`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: brand.name,
    description: brand.description,
    url: brand.url,
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        {/* Google tag (gtag.js) */}
        {brand.gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${brand.gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${brand.gaId}');
          `,
              }}
            />
          </>
        )}
        {/* Start of HubSpot Embed Code */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na2.hs-scripts.com/246974247.js"
        />
        {/* End of HubSpot Embed Code */}
      </head>
      <body className={`antialiased ${isSaimz ? "saimz-brand" : ""}`}>
        <Providers>
          <JsonLd data={pharmacyLocalBusinessSchema()} />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
