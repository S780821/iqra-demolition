"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import VideoPopup from "@/components/VideoPopup";

export default function Hero() {
return ( <section className="relative min-h-screen overflow-hidden">

```
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover scale-105"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />

  {/* Content */}
  <div className="relative z-10 flex min-h-screen items-center">
    <div className="mx-auto w-full max-w-7xl px-6">

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 font-semibold uppercase tracking-[5px] text-orange-500"
      >
        IQRA DEMOLITION
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl"
      >
        Safe. Fast.
        <br />
        Professional
        <span className="text-orange-500"> Demolition.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-8 max-w-2xl text-lg leading-8 text-gray-300"
      >
        IQRA Demolition provides residential, commercial, industrial
        demolition, excavation and site clearance services across
        Mumbai, Navi Mumbai and Maharashtra with modern machinery,
        skilled operators and a strong focus on safety.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >

        {/* Get Free Quote */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
        >
          Get Free Quote
          <ArrowRight size={20} />
        </a>

        {/* Call Now */}
        <a
          href="tel:+919768888198"
          className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-black"
        >
          <Phone size={20} />
          Call Now
        </a>

        {/* Watch Our Work */}
        <VideoPopup />

      </motion.div>

    </div>
  </div>

        {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <ChevronDown size={36} />
      </div>

    </section>
  );
}
