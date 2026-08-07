"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto mt-4 max-w-7xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl">
        <div className="flex items-center justify-between px-6 py-4">

       <Link href="/" className="flex items-center gap-3 flex-shrink-0">
  <Image
    src="/images/logo.png"
    alt="IQRA Demolition Logo"
    width={100}
    height={100}
    className="h-16 w-auto object-contain"
    priority
  />
</Link>

<div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-orange-500 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-black/70 px-6 py-4 md:hidden">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-200 hover:text-orange-500"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}