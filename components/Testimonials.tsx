"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "Commercial Developer",
    review:
      "IQRA Demolition completed our commercial building demolition safely and ahead of schedule. Their team was professional from start to finish.",
  },
  {
    name: "Amit Patel",
    company: "Industrial Client",
    review:
      "Excellent machinery, skilled operators, and great communication throughout the project. Highly recommended.",
  },
  {
    name: "Mohammed Khan",
    company: "Residential Project",
    review:
      "The demolition and site clearance were completed efficiently. The team maintained safety standards and left the site clean.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We take pride in delivering safe, reliable, and professional demolition services across Maharashtra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-[#161616] border border-gray-800 rounded-xl p-8 hover:border-orange-500 transition-all"
            >
              <div className="flex gap-1 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-6 text-gray-300 leading-8">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-orange-500 mt-1">
                  {item.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}