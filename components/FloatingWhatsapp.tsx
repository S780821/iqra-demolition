"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/919768888198?text=Hello%20IQRA%20Demolition,%20I%20need%20a%20quotation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-2xl hover:scale-110 hover:bg-green-600 transition-all duration-300 animate-bounce">
        <MessageCircle size={34} className="text-white" />
      </div>
    </a>
  );
}