"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  Truck,
  HardHat,
  Wrench,
  Pickaxe,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    slug: "building-demolition",
    icon: Building2,
    title: "Building Demolition",
    description:
      "Safe demolition of residential, commercial, and industrial buildings.",
  },
  {
    slug: "rcc-demolition",
    icon: Hammer,
    title: "RCC Demolition",
    description:
      "Breaking and dismantling RCC slabs, beams, columns, and foundations.",
  },
  {
    slug: "site-clearance",
    icon: Truck,
    title: "Site Clearance",
    description:
      "Efficient debris removal, loading, and site cleaning after demolition.",
  },
  {
    slug: "factory-demolition",
    icon: HardHat,
    title: "Factory Demolition",
    description:
      "Professional dismantling of factories, warehouses, and industrial plants.",
  },
  {
    slug: "excavation-work",
    icon: Wrench,
    title: "Excavation Work",
    description:
      "Excavation, earthmoving, and groundwork using modern machinery.",
  },
  {
    slug: "scrap-recovery",
    icon: Pickaxe,
    title: "Scrap Recovery",
    description:
      "Segregation, recovery, and recycling of valuable demolition scrap.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Professional Demolition Services
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            We provide complete demolition and site preparation services with
            modern machinery, skilled operators, and strict safety standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="bg-[#161616] border border-gray-800 rounded-xl p-8 h-full cursor-pointer hover:border-orange-500 transition-all group">

                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center">
                      <Icon size={30} />
                    </div>

                    <h3 className="text-2xl font-bold mt-6 group-hover:text-orange-500 transition">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mt-4 leading-7">
                      {service.description}
                    </p>

                    <div className="mt-8 flex items-center text-orange-500 font-semibold">
                      Learn More
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-2 transition"
                        size={18}
                      />
                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}