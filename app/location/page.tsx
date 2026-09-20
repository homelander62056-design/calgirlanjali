import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { puneLocations } from "./locationsData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlanjali.in";

export const metadata: Metadata = {
  title: "Call Girls & Escort Service Locations in Pune & PCMC",
  description: "Explore 24/7 verified call girls and escort services across all top Pune locations: Koregaon Park, Hinjewadi, Viman Nagar, Baner, Wakad, Kharadi, and PCMC.",
  alternates: {
    canonical: `${siteUrl}/location`,
  },
  openGraph: {
    title: "Pune Escort Service Locations | Anjali Escorts",
    description: "Browse verified call girls across 25+ prime areas in Pune & PCMC.",
    url: `${siteUrl}/location`,
    siteName: "Anjali Escort Service",
    locale: "en_IN",
    type: "website",
  },
};

export default function LocationsIndexPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-rose-50 via-white to-zinc-50 py-12 px-4 sm:px-6 lg:px-8 border-b border-rose-100">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-[#ff2d55] text-xs font-bold uppercase tracking-wider">
            <span>🗺️</span> Pune &amp; PCMC Locality Directory
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Escort Service &amp; Call Girls Across <span className="text-[#ff2d55]">Pune</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Select your preferred neighborhood or hotel location in Pune to explore 100% verified call girls, independent models, and 24/7 outcall companions.
          </p>
        </div>
      </section>

      {/* Grid of Locations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {puneLocations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/location/${loc.slug}`}
              className="group bg-white rounded-3xl border border-zinc-200 p-6 shadow-xs hover:shadow-xl hover:border-rose-300 transition-all flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#ff2d55] uppercase tracking-wider">
                    {loc.city}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    📍 {loc.postalCode}
                  </span>
                </div>
                <h2 className="text-xl font-extrabold text-zinc-900 group-hover:text-[#ff2d55] transition-colors">
                  {loc.name}
                </h2>
                <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                  {loc.intro}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 mt-4 flex items-center justify-between text-xs font-bold text-[#ff2d55]">
                <span>View {loc.name} Companions</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
