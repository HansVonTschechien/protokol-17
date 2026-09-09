import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/pribeh",
    "/hra",
    "/pripady",
    "/pripady/case-00",
    "/pripady/case-01",
    "/archiv",
    "/osoby",
    "/stahnout",
    "/o-hre",
    "/aktualizace",
  ];

  const origin = siteUrl.replace(/\/$/, "");

  return routes.map((route) => ({
    url: route ? `${origin}${route}/` : `${origin}/`,
    lastModified: new Date(),
  }));
}
