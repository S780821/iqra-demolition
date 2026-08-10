"use client";

import { useState } from "react";
import { X, Play } from "lucide-react";

export default function VideoPopup() {
const [isOpen, setIsOpen] = useState(false);

const openPopup = () => {
setIsOpen(true);
};

const closePopup = () => {
setIsOpen(false);
};

return (
<>
{/* Watch Video Button */} <button
     onClick={openPopup}
     className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:scale-105"
   > <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-red-600 transition-transform duration-300 group-hover:scale-110"> <Play size={20} fill="currentColor" /> </span>


    <span>Indroduction</span>
  </button>

  {/* Video Popup */}
  {isOpen && (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
      onClick={closePopup}
    >
      {/* Popup Container */}
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          aria-label="Close video"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-red-600"
        >
          <X size={24} />
        </button>

        {/* Video */}
        <video
          className="block h-auto max-h-[80vh] w-full object-contain"
          controls
          autoPlay
          playsInline
        >
          <source src="/videos/demolition.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )}
</>

);
}
