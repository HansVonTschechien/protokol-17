import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { platforms } from "@/config/platforms.mjs";
import { siteConfig, SITE } from "@/config/site";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: siteConfig.seoLine,
  applicationName: SITE.name,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  keywords: [
    siteConfig.title,
    siteConfig.author,
    "detektivní hra",
    ...platforms.map((item) => item.name),
    "puzzle",
    "krimi",
    "vyšetřování",
  ],
  openGraph: {
    title: SITE.title,
    description: siteConfig.seoLine,
    locale: "cs_CZ",
    type: "website",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: siteConfig.seoLine,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="cs"
      className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black font-sans text-off-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: SITE.name,
              description: SITE.description,
              author: { "@type": "Person", name: siteConfig.author },
              operatingSystem: platforms.map((item) => item.name),
              inLanguage: "cs",
            }),
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
