"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              IQRA DEMOLITION
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Professional demolition and dismantling services for
              residential, commercial and industrial projects.
              Serving Mumbai, Navi Mumbai & Maharashtra.
            </p>

            <div className="mt-6 flex gap-4">

              <a
  href="https://www.instagram.com/iqra_demolition/"
  target="_blank"
  className="rounded-full bg-neutral-800 p-3 hover:bg-white hover:text-black transition"
>
  <span className="font-bold text-lg">
    ◎
  </span>
</a>

              <a
                href="https://wa.me/919768888198"
                target="_blank"
                className="rounded-full bg-neutral-800 p-3 hover:bg-green-500 hover:text-white transition"
              >
                <MessageCircle size={20} />
              </a>

            </div>

          </div>


          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-sm">

              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#about" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="#services" className="hover:text-white">
                  Services
                </Link>
              </li>

              <li>
                <Link href="#projects" className="hover:text-white">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

            </ul>

          </div>



          {/* Services */}
          <div>

            <h3 className="text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="mt-4 space-y-3 text-sm">

              <li>Building Demolition</li>
              <li>RCC Structure Demolition</li>
              <li>Industrial Demolition</li>
              <li>Concrete Breaking</li>
              <li>Debris Removal</li>

            </ul>

          </div>



          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold text-white">
              Contact Us
            </h3>


            <ul className="mt-4 space-y-4 text-sm">


              <li className="flex gap-3">

                <MapPin size={20} className="mt-1" />

                <span>
                  Mumbai, Maharashtra, India
                </span>

              </li>



              <li className="flex gap-3">

                <Phone size={20}/>

                <a
                  href="tel:+919768888198"
                  className="hover:text-white"
                >
                  +91 97688 88198
                </a>

              </li>



              <li className="flex gap-3">

                <Mail size={20}/>

                <a
                  href="mailto:iqrademo0507@gmail.com"
                  className="hover:text-white"
                >
                  iqrademo0507@gmail.com
                </a>

              </li>


            </ul>

          </div>


        </div>


        {/* Bottom Footer */}

        <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} IQRA DEMOLITION.
          All Rights Reserved.

        </div>


      </div>
    </footer>
  );
}