import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IQRA Demolition",
    short_name: "IQRA",
    description:
      "Professional Building Demolition, Excavation & Site Clearance Services",

    start_url: "/",
    display: "standalone",

    background_color: "#111111",
    theme_color: "#f97316",

    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}