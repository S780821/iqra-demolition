import type { MetadataRoute } from "next";

const baseUrl = "https://iqra-demolition.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    "building-demolition",
    "rcc-demolition",
    "site-clearance",
    "factory-demolition",
    "excavation-work",
    "scrap-recovery",
  ];

  const projects = [
    "commercial-building-demolition",
    "industrial-factory-demolition",
    "rcc-structure-demolition",
    "residential-building-demolition",
    "warehouse-dismantling",
    "site-clearance",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...projects.map((slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
