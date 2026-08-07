export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  location: string;
  duration: string;
  area: string;
  client: string;
  completed: string;
  hero: string;
  gallery: string[];
  video?: string;
  machinery: string[];
};

export const projects: Project[] = [
  {
    slug: "commercial-building-demolition",

    title: "Commercial Building Demolition",

    shortDescription:
      "Safe demolition of commercial RCC structures using advanced machinery.",

    description:
      "IQRA Demolition successfully completed the demolition of a commercial RCC building using modern excavators and hydraulic breakers. The project included structural demolition, debris removal, scrap recovery and complete site clearance while maintaining strict safety standards.",

    location: "Mumbai",

    duration: "45 Days",

    area: "55,000 Sq.ft",

    client: "Private Client",

    completed: "2026",

    hero: "/projects/commercial-building-demolition/hero.jpg",

    gallery: [
      "/projects/commercial-building-demolition/1.jpg",
      "/projects/commercial-building-demolition/2.jpg",
      "/projects/commercial-building-demolition/3.jpg",
      "/projects/commercial-building-demolition/4.jpg",
      "/projects/commercial-building-demolition/5.jpg",
      "/projects/commercial-building-demolition/6.jpg",
    ],

    video: "/projects/commercial-building-demolition/video.mp4",

    machinery: [
      "Tata Hitachi EX210",
      "Tata Hitachi EX70",
      "Hydraulic Breaker",
      "Crane",
      "Gas Cutting Equipment",
    ],
  },

  {
    slug: "industrial-factory-demolition",

    title: "Industrial Factory Demolition",

    shortDescription:
      "Complete dismantling of an industrial factory with heavy machinery.",

    description:
      "Our team safely dismantled an industrial manufacturing facility including RCC structures, steel sheds and heavy foundations. Scrap segregation and site clearance were completed efficiently.",

    location: "Navi Mumbai",

    duration: "60 Days",

    area: "82,000 Sq.ft",

    client: "Industrial Client",

    completed: "2026",

    hero: "/projects/industrial-factory-demolition/hero.jpg",

    gallery: [
      "/projects/industrial-factory-demolition/1.jpg",
      "/projects/industrial-factory-demolition/2.jpg",
      "/projects/industrial-factory-demolition/3.jpg",
      "/projects/industrial-factory-demolition/4.jpg",
    ],

    video: "",

    machinery: [
      "EX210",
      "Long Boom Excavator",
      "Hydraulic Breaker",
      "Crawler Crane",
    ],
  },

  {
    slug: "rcc-structure-demolition",

    title: "RCC Structure Demolition",

    shortDescription:
      "Controlled demolition of RCC slabs, beams and columns.",

    description:
      "Professional demolition of RCC structures using precision techniques and advanced demolition equipment.",

    location: "Thane",

    duration: "30 Days",

    area: "32,000 Sq.ft",

    client: "Builder",

    completed: "2025",

    hero: "/projects/rcc-structure-demolition/hero.jpg",

    gallery: [
      "/projects/rcc-structure-demolition/1.jpg",
      "/projects/rcc-structure-demolition/2.jpg",
      "/projects/rcc-structure-demolition/3.jpg",
    ],

    video: "",

    machinery: [
      "EX210",
      "Hydraulic Breaker",
    ],
  },

  {
    slug: "site-clearance",

    title: "Site Clearance & Excavation",

    shortDescription:
      "Complete debris removal and land preparation.",

    description:
      "After demolition, IQRA Demolition carried out debris removal, scrap segregation, excavation and complete site preparation for future construction.",

    location: "Pune",

    duration: "20 Days",

    area: "18,000 Sq.ft",

    client: "Developer",

    completed: "2025",

    hero: "/projects/site-clearance/hero.jpg",

    gallery: [
      "/projects/site-clearance/1.jpg",
      "/projects/site-clearance/2.jpg",
      "/projects/site-clearance/3.jpg",
    ],

    video: "",

    machinery: [
      "Excavator",
      "Tipper",
      "Loader",
    ],
  },
];