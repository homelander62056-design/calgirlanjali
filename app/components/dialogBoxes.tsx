"use client";

import React from "react";
import { trackWhatsAppClick, createWhatsAppLink } from "../utils/trackWhatsapp";

interface InformProps {
  whatsappUrl?: string;
  phoneUrl?: string;
}

export default function Inform({
  whatsappUrl = createWhatsAppLink("Inquiry", "Pune", "918294107610"),
  phoneUrl = "tel:+918294107610",
}: InformProps) {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <div className="bg-[#fff5f7] border border-pink-200/70 rounded-[2rem] p-8 sm:p-12 md:p-14 text-center shadow-xs">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-zinc-900 tracking-tight leading-tight">
          Ready for an <span className="text-rose-500">Unforgettable</span> Experience?
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-zinc-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mt-4 font-normal">
          Get in touch with us today and let us connect you with the perfect companion for any occasion.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                name: "Dialog Banner WhatsApp",
                city: "Pune",
                whatsappNumber: "918294107610",
              })
            }
            className="bg-[#25D366] hover:bg-emerald-600 text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center"
          >
            WhatsApp Us
          </a>

          <a
            href={phoneUrl}
            className="bg-[#ff2d55] hover:bg-rose-600 text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}