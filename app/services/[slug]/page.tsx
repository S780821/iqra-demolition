import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const services = {
  "building-demolition": {
    title: "Building Demolition",
    description:
      "We safely demolish residential, commercial, industrial and high-rise buildings using advanced demolition machinery while maintaining strict safety standards and environmental compliance.",

    hero: "/services/building-demolition/hero.jpg",

    gallery: [
      "/services/building-demolition/image1.jpg",
      "/services/building-demolition/image2.jpg",
      "/services/building-demolition/image3.jpg",
      "/services/building-demolition/image4.jpg",
    ],

    videos: [
      "/videos/building-demolition1.mp4",
      "/videos/building-demolition2.mp4",
      "/videos/building-demolition3.mp4",
    ],
  },

  "rcc-demolition": {
    title: "RCC Demolition",
    description:
      "Professional demolition of RCC slabs, beams, columns, foundations and reinforced concrete structures.",

    hero: "/services/rcc-demolition/hero.jpg",

    gallery: [
      "/services/rcc-demolition/image1.jpg",
      "/services/rcc-demolition/image2.jpg",
      "/services/rcc-demolition/image3.jpg",
      "/services/rcc-demolition/image4.jpg",
    ],

    videos: [
      "/videos/rcc1.mp4",
      "/videos/rcc2.mp4",
      "/videos/rcc3.mp4",
    ],
  },

  "site-clearance": {
    title: "Site Clearance",
    description:
      "Complete debris removal, loading, transportation and site preparation after demolition.",

    hero: "/services/site-clearance/hero.jpg",

    gallery: [
      "/services/site-clearance/image1.jpg",
      "/services/site-clearance/image2.jpg",
      "/services/site-clearance/image3.jpg",
      "/services/site-clearance/image4.jpg",
    ],

    videos: [
      "/videos/site1.mp4",
      "/videos/site2.mp4",
      "/videos/site3.mp4",
    ],
  },

  "factory-demolition": {
    title: "Factory Demolition",
    description:
      "Safe dismantling of factories, warehouses and industrial plants with experienced demolition operators.",

    hero: "/services/factory-demolition/hero.jpg",

    gallery: [
      "/services/factory-demolition/image1.jpg",
      "/services/factory-demolition/image2.jpg",
      "/services/factory-demolition/image3.jpg",
      "/services/factory-demolition/image4.jpg",
    ],

    videos: [
      "/videos/factory1.mp4",
      "/videos/factory2.mp4",
      "/videos/factory3.mp4",
    ],
  },

  "excavation-work": {
    title: "Excavation Work",
    description:
      "Earthwork, excavation, foundation digging and land development using modern excavators.",

    hero: "/services/excavation-work/hero.jpg",

    gallery: [
      "/services/excavation-work/image1.jpg",
      "/services/excavation-work/image2.jpg",
      "/services/excavation-work/image3.jpg",
      "/services/excavation-work/image4.jpg",
    ],

    videos: [
      "/videos/excavation1.mp4",
      "/videos/excavation2.mp4",
      "/videos/excavation3.mp4",
    ],
  },

  "scrap-recovery": {
    title: "Scrap Recovery",
    description:
      "Segregation, recovery and recycling of valuable demolition scrap including steel and metal.",

    hero: "/services/scrap-recovery/hero.jpg",

    gallery: [
      "/services/scrap-recovery/image1.jpg",
      "/services/scrap-recovery/image2.jpg",
      "/services/scrap-recovery/image3.jpg",
      "/services/scrap-recovery/image4.jpg",
    ],

    videos: [
      "/videos/scrap1.mp4",
      "/videos/scrap2.mp4",
      "/videos/scrap3.mp4",
    ],
  },
};
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-black text-white">

      {/* HERO */}

      <section className="relative h-[700px]">

        <Image
          src={service.hero}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto px-6">

            <Link
              href="/"
              className="text-orange-400 hover:text-orange-300"
            >
              ← Back Home
            </Link>

            <h1 className="text-5xl md:text-7xl font-bold mt-6">
              {service.title}
            </h1>

            <p className="text-xl text-gray-300 mt-6 max-w-3xl">
              {service.description}
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-5 py-15">

        <h2 className="text-4xl font-bold mb-8">
          Service Overview
        </h2>

        <p className="text-gray-300 leading-9 text-lg">
          IQRA Demolition provides professional demolition services using
          modern machinery, experienced operators and a safety-first approach.
          Every project is carefully planned to ensure efficient execution,
          minimal environmental impact and timely completion.
        </p>

      </section>

      {/* PROCESS */}

      <section className="bg-[#111] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Our Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Site Inspection",
              "Planning",
              "Safety Setup",
              "Demolition",
              "Site Clearance",
            ].map((step, index) => (

              <div
                key={step}
                className="bg-[#1b1b1b] p-6 rounded-xl border border-neutral-800"
              >
                <div className="text-orange-500 text-4xl font-bold mb-4">
                  {index + 1}
                </div>

                <h3 className="font-semibold text-lg">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* GALLERY */}

      {service.gallery.length > 0 && (

        <section className="max-w-7xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-bold mb-10">
            Project Gallery
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {service.gallery.map((image) => (

              <Image
                key={image}
                src={image}
                alt={service.title}
                width={1000}
                height={700}
                className="rounded-xl object-cover h-96 w-full hover:scale-105 transition duration-300"
              />

            ))}

          </div>

        </section>

      )}

     {/* VIDEOS */}

{service.videos && service.videos.length > 0 && (

  <section className="max-w-7xl mx-auto px-6 py-20">

    <h2 className="text-4xl font-bold mb-10">
      Project Videos
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {service.videos.map((video, index) => (

        <video
          key={index}
          controls
          preload="metadata"
          className="rounded-xl w-full shadow-lg border border-neutral-800 hover:scale-105 transition duration-300"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      ))}

    </div>

  </section>

)}

      {/* WHY CHOOSE US */}

      <section className="bg-[#111] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Why Choose IQRA Demolition
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Experienced Team",
              "Modern Machinery",
              "Certified Operators",
              "Affordable Pricing",
              "On-Time Delivery",
              "100% Safety Compliance",
            ].map((item) => (

              <div
                key={item}
                className="bg-[#1b1b1b] rounded-xl p-6 border border-neutral-800"
              >
                ✔ {item}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Need Professional Demolition Services?
          </h2>

          <p className="text-gray-400 mt-6">
            Contact IQRA Demolition today for a free consultation and quotation.
          </p>

          <Link
            href="/#contact"
            className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Request a Free Quote
          </Link>

        </div>

      </section>

    </main>
  );
}