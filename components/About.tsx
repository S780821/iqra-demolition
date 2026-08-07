"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Truck } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111111] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
            About IQRA Demolition
          </p>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            Trusted Demolition
            <br />
            Experts Across
            <span className="text-orange-500"> Maharashtra</span>
          </h2>

          <p className="mt-8 text-gray-300 leading-8">
            IQRA Demolition provides professional residential,
            commercial and industrial demolition services.
            We use modern machinery, experienced operators and
            follow strict safety standards to deliver every
            project efficiently and responsibly.
          </p>

          <p className="mt-6 text-gray-300 leading-8">
            From complete building demolition to RCC dismantling,
            site clearance, excavation and scrap recovery,
            we manage projects of every size with quality,
            transparency and on-time execution.
          </p>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-6"
        >

          <div className="rounded-xl bg-[#1A1A1A] p-6 border border-gray-800 flex gap-5">
            <Building2 className="text-orange-500 w-10 h-10" />

            <div>
              <h3 className="text-xl font-bold">
                Modern Machinery
              </h3>

              <p className="text-gray-400 mt-2">
                Advanced excavators, breakers and demolition
                equipment for safe and efficient execution.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-[#1A1A1A] p-6 border border-gray-800 flex gap-5">
            <ShieldCheck className="text-orange-500 w-10 h-10" />

            <div>
              <h3 className="text-xl font-bold">
                Safety First
              </h3>

              <p className="text-gray-400 mt-2">
                Every project follows strict safety standards
                and professional operating procedures.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-[#1A1A1A] p-6 border border-gray-800 flex gap-5">
            <Truck className="text-orange-500 w-10 h-10" />

            <div>
              <h3 className="text-xl font-bold">
                Complete Site Clearance
              </h3>

              <p className="text-gray-400 mt-2">
                Demolition, debris management,
                excavation and scrap handling
                under one trusted company.
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}