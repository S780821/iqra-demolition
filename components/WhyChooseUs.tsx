"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Truck,
  HardHat,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Every project is carried out following strict safety standards and industry best practices.",
  },
  {
    icon: HardHat,
    title: "Experienced Team",
    description:
      "Our skilled operators and demolition experts ensure precision, efficiency, and quality.",
  },
  {
    icon: Truck,
    title: "Modern Machinery",
    description:
      "We use advanced excavators, breakers, and demolition equipment for every project.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Projects are completed within the agreed timeline without compromising quality.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Company",
    description:
      "Known for reliable service, transparent pricing, and customer satisfaction across Maharashtra.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our team is always available to answer your questions and provide quick assistance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-[#0d0d0d] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Why Clients Trust IQRA Demolition
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We combine skilled manpower, modern equipment, and a commitment to
            safety to deliver demolition projects efficiently and professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.04,
                  y: -8,
                }}
                className="bg-[#171717] rounded-xl border border-gray-800 p-8 hover:border-orange-500 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {reason.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}