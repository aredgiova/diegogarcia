import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Agrega aquí nuevas páginas cuando las crees
    // { url: `${siteConfig.url}/servicios`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
