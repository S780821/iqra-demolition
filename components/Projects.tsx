"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "commercial-building-demolition",
    title: "Commercial Building Demolition",
    image: "/images/project1.jpg",
    location: "Mumbai",
  },
  {
    slug: "industrial-factory-demolition",
    title: "Industrial Factory Demolition",
    image: "/images/project2.jpg",
    location: "Navi Mumbai",
  },
  {
    slug: "rcc-structure-demolition",
    title: "RCC Structure Demolition",
    image: "/images/project3.jpg",
    location: "Thane",
  },
  {
    slug: "site-clearance",
    title: "Residential Building Demolition",
    image: "/images/project4.jpg",
    location: "Pune",
  },
  {
    slug: "warehouse-dismantling",
    title: "Warehouse Dismantling",
    image: "/images/project5.jpg",
    location: "Palghar",
  },
  {
    slug: "site-clearance",
    title: "Site Clearance & Excavation",
    image: "/images/project6.jpg",
    location: "Mumbai",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#111111] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Our Projects
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Recent Demolition Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Explore some of our recent demolition, dismantling,
            excavation and site clearance projects completed across
            Maharashtra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="overflow-hidden rounded-xl bg-[#1b1b1b] border border-gray-800 cursor-pointer"
              >
                <div className="overflow-hidden">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover hover:scale-110 transition duration-500"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-orange-500">
                    📍 {project.location}
                  </p>

                  <div className="mt-6">
                    <span className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300">
                      View Project →
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}