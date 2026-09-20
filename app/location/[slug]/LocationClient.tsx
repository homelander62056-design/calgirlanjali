"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LocationSEOData } from "../locationsData";
import { ProductItem } from "@/app/product/productsData";
import { trackWhatsAppClick, createWhatsAppLink } from "@/app/utils/trackWhatsapp";

interface Props {
  location: LocationSEOData;
  companions: ProductItem[];
  otherLocations: LocationSEOData[];
}

export default function LocationClient({
  location,
  companions,
  otherLocations,
}: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 pb-20">
      
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-xs text-zinc-500">
            <Link href="/" className="hover:text-[#ff2d55] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/product" className="hover:text-[#ff2d55] transition-colors">
              Pune Escorts
            </Link>
            <span>/</span>
            <span className="text-zinc-900 font-semibold">{location.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="bg-gradient-to-b from-rose-50/70 via-white to-zinc-50 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-rose-100/60">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 text-[#ff2d55] text-xs font-bold uppercase tracking-wider">
            <span>📍</span> {location.name}, Pune • 100% Verified Escorts
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            {location.headline}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            {location.subheadline}
          </p>

          <p className="text-sm text-zinc-500 max-w-2xl mx-auto pt-1">
            {location.intro}
          </p>

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={createWhatsAppLink(
                `${location.name} Inquiry`,
                location.name,
                "918294107610"
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  name: `${location.name} Inquiry`,
                  city: location.name,
                  whatsappNumber: "918294107610",
                })
              }
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 hover:scale-105 transition-all cursor-pointer text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp Chat (Instant)</span>
            </a>

            <a
              href="tel:+918294107610"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#ff2d55] hover:bg-[#e02447] text-white font-bold rounded-2xl shadow-lg shadow-rose-500/20 hover:scale-105 transition-all cursor-pointer text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>Call Now: +91 82941 07610</span>
            </a>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
            <div className="p-3 bg-white rounded-xl border border-rose-100 shadow-2xs text-xs font-semibold text-zinc-700 flex items-center justify-center gap-1.5">
              <span>💎</span> 100% Real Photos
            </div>
            <div className="p-3 bg-white rounded-xl border border-rose-100 shadow-2xs text-xs font-semibold text-zinc-700 flex items-center justify-center gap-1.5">
              <span>⚡</span> 30-45 Min Outcall
            </div>
            <div className="p-3 bg-white rounded-xl border border-rose-100 shadow-2xs text-xs font-semibold text-zinc-700 flex items-center justify-center gap-1.5">
              <span>💵</span> Zero Pre-payment
            </div>
            <div className="p-3 bg-white rounded-xl border border-rose-100 shadow-2xs text-xs font-semibold text-zinc-700 flex items-center justify-center gap-1.5">
              <span>🔒</span> 100% Discreet
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Available Models Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900">
                Verified Call Girls in {location.name}
              </h2>
              <p className="text-sm text-zinc-500">
                Available right now for hotel outcalls and private meetings
              </p>
            </div>
            <Link
              href={`/product?city=${encodeURIComponent(location.name)}`}
              className="text-xs font-bold text-[#ff2d55] hover:underline self-start sm:self-auto"
            >
              View All {location.name} Profiles →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companions.slice(0, 8).map((product, index) => {
              const cleanPhone = product.phone.replace(/[^+\d]/g, "");
              const numericId = typeof product.id === "number" ? product.id : index + 1;
              const fallbackImg = `/images/image${((numericId - 1) % 16) + 1}.avif`;
              const modelImg = product.image || fallbackImg;

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl border border-zinc-200 shadow-xs hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 relative"
                >
                  <Link href={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-zinc-100">
                    <Image
                      src={modelImg}
                      alt={`${product.name} - Call Girl in ${location.name} Pune`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Status Pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white border border-white/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{product.status || "Available"}</span>
                    </div>

                    {/* Rating Pill */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-amber-400 border border-white/20 flex items-center gap-1">
                      <span>★</span> {product.rating || "4.9"}
                    </div>

                    {/* Name and Age at bottom */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="font-extrabold text-base leading-snug drop-shadow-sm">
                        {product.name}, {product.age}
                      </h3>
                      <p className="text-xs text-rose-200 font-medium">
                        📍 {location.name}
                      </p>
                    </div>
                  </Link>

                  {/* Actions */}
                  <div className="p-3 bg-white flex items-center gap-2">
                    <a
                      href={createWhatsAppLink(
                        `${product.name} (${location.name})`,
                        location.name,
                        product.whatsappNumber || "918294107610"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackWhatsAppClick({
                          name: product.name,
                          city: location.name,
                          whatsappNumber: product.whatsappNumber || "918294107610",
                        })
                      }
                      className="flex-1 py-2 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white rounded-xl text-xs font-bold transition-colors text-center cursor-pointer border border-emerald-200"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={`tel:${cleanPhone || "+918294107610"}`}
                      className="flex-1 py-2 bg-rose-50 hover:bg-[#ff2d55] text-rose-700 hover:text-white rounded-xl text-xs font-bold transition-colors text-center cursor-pointer border border-rose-200"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* In-Depth Local Area Guide & SEO Content */}
        <section className="bg-white border border-rose-100/80 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
              About Escort Services in {location.name}, Pune
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              {location.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Top Landmarks */}
            <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-zinc-900 text-base flex items-center gap-2">
                <span>📍</span> Popular Landmarks in {location.name}
              </h3>
              <ul className="text-xs sm:text-sm text-zinc-600 space-y-1.5 list-disc pl-5">
                {location.landmarks.map((landmark) => (
                  <li key={landmark}>{landmark}</li>
                ))}
              </ul>
            </div>

            {/* Popular Hotel Stays */}
            <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-zinc-900 text-base flex items-center gap-2">
                <span>🏨</span> Recommended Luxury Hotels
              </h3>
              <ul className="text-xs sm:text-sm text-zinc-600 space-y-1.5 list-disc pl-5">
                {location.hotels.map((hotel) => (
                  <li key={hotel}>{hotel}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Steps */}
          <div className="border-t border-zinc-100 pt-6 space-y-4">
            <h3 className="text-xl font-bold text-[#ff2d55]">
              How to Book in 3 Easy Steps
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/80 space-y-1">
                <span className="text-xl font-black text-[#ff2d55]">01</span>
                <h4 className="font-bold text-sm text-zinc-900">Select Profile</h4>
                <p className="text-xs text-zinc-500">
                  Pick your favorite verified companion from our {location.name} gallery.
                </p>
              </div>

              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/80 space-y-1">
                <span className="text-xl font-black text-[#ff2d55]">02</span>
                <h4 className="font-bold text-sm text-zinc-900">Contact Us</h4>
                <p className="text-xs text-zinc-500">
                  Message on WhatsApp or call +91 82941 07610 with your hotel or address.
                </p>
              </div>

              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/80 space-y-1">
                <span className="text-xl font-black text-[#ff2d55]">03</span>
                <h4 className="font-bold text-sm text-zinc-900">Meet &amp; Enjoy</h4>
                <p className="text-xs text-zinc-500">
                  Companion arrives in 30-45 mins. Pay directly in cash upon meeting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-[#ff2d55]">
              COMMON QUESTIONS
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
              Frequently Asked Questions in {location.name}
            </h2>
          </div>

          <div className="space-y-3">
            {location.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-zinc-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 font-bold text-sm sm:text-base text-zinc-800 bg-zinc-50 hover:bg-rose-50/50 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-lg font-mono text-[#ff2d55]">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 py-4 text-xs sm:text-sm text-zinc-600 bg-white leading-relaxed border-t border-zinc-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Other Areas Cross-Linking for SEO Equity */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-zinc-900">
              Explore Escorts in Other Pune Locations
            </h3>
            <p className="text-xs text-zinc-500">
              Direct 24/7 coverage across all neighborhoods in Pune &amp; PCMC
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                href={`/location/${other.slug}`}
                className="px-3.5 py-1.5 bg-white border border-zinc-200 rounded-full text-xs font-medium text-zinc-700 hover:border-[#ff2d55] hover:text-[#ff2d55] hover:bg-rose-50/30 transition-all shadow-2xs"
              >
                {other.name} Call Girls
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
