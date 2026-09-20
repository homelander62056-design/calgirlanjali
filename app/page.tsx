"use client";

import React from "react";
import Link from "next/link";
import ProductClient from "./product/ProductClient";
import HomeBelow from "./components/homeBelow";

const topSearches = [
  { name: "Koregaon Park", img: "/images/image1.avif" },
  { name: "Kalyani Nagar", img: "/images/image31.avif" },
  { name: "Viman Nagar", img: "/images/image3.avif" },
  { name: "Hinjewadi", img: "/images/image29.avif" },
  { name: "Baner", img: "/images/image5.avif" },
  { name: "Russian Escorts", img: "/images/image6.avif" },
  { name: "Independent Escorts", img: "/images/image4.avif" },
];

const serviceAreas = [
  "Koregaon Park",
  "Kalyani Nagar",
  "Viman Nagar",
  "Hinjewadi",
  "Baner",
  "Wakad",
  "Kothrud",
  "Shivajinagar",
  "Aundh",
  "Magarpatta City",
  "Kharadi",
  "FC Road",
  "Pune Camp",
  "Senapati Bapat Road",
  "Balewadi",
  "Bavdhan",
  "Pimple Saudagar",
  "Pimpri Chinchwad",
  "Swargate",
  "Kondhwa",
  "Fatima Nagar",
  "Yerwada",
  "Pashan",
  "Mundhwa",
  "Katraj",
];

const seoKeywords = [
  // Core Pune Keywords
  "Escort Services Pune",
  "Escort Service Pune",
  "Pune Escort Services",
  "Pune Escort Service",
  "Premium Escort Services Pune",
  "Premium Escort Service Pune",
  "Independent Escorts Pune",
  "Independent Escort Pune",
  "Private Escorts Pune",
  "Private Escort Pune",

  // Companion Keywords
  "Companions Pune",
  "Premium Companions Pune",
  "Private Companions Pune",
  "Independent Companions Pune",
  "Pune Companions",
  "Pune Premium Companions",
  "Luxury Companions Pune",
  "Elite Companions Pune",
  "Professional Companions Pune",
  "Companion Services Pune",

  // Call Girl Search Terms
  "Call Girls Pune",
  "Call Girl Pune",
  "Pune Call Girls",
  "Pune Call Girl",
  "Premium Call Girls Pune",
  "Premium Call Girl Pune",
  "Independent Call Girls Pune",
  "Independent Call Girl Pune",
  "Private Call Girls Pune",
  "Private Call Girl Pune",

  // Location-Based Searches
  "Koregaon Park Escorts",
  "Koregaon Park Escort Service",
  "Kalyani Nagar Escorts",
  "Kalyani Nagar Escort Service",
  "Viman Nagar Escorts",
  "Viman Nagar Escort Service",
  "Baner Escorts",
  "Baner Escort Service",
  "Hinjewadi Escorts",
  "Hinjewadi Escort Service",

  "Wakad Escorts",
  "Wakad Escort Service",
  "Kharadi Escorts",
  "Kharadi Escort Service",
  "Aundh Escorts",
  "Aundh Escort Service",
  "Kothrud Escorts",
  "Kothrud Escort Service",
  "Balewadi Escorts",
  "Balewadi Escort Service",

  // More Pune Areas
  "Pune Camp Escorts",
  "Pune Camp Escort Service",
  "Magarpatta Escorts",
  "Magarpatta Escort Service",
  "Pimpri Chinchwad Escorts",
  "Pimpri Chinchwad Escort Service",
  "Pimple Saudagar Escorts",
  "Pimple Saudagar Escort Service",
  "Shivajinagar Escorts",
  "Shivajinagar Escort Service",

  // Service Discovery Terms
  "Escort Listings Pune",
  "Escort Profiles Pune",
  "Pune Escort Profiles",
  "Pune Escort Listings",
  "Browse Escorts Pune",
  "Find Escorts Pune",
  "Find Escort Services Pune",
  "Explore Escorts Pune",
  "Pune Companion Listings",
  "Pune Companion Profiles",

  // Premium / Luxury Intent
  "Luxury Escorts Pune",
  "Elite Escorts Pune",
  "Premium Escorts Pune",
  "Exclusive Escorts Pune",
  "Discreet Escorts Pune",
  "Luxury Companion Services Pune",
  "Elite Companion Services Pune",
  "Exclusive Companion Services Pune",
  "Discreet Companion Services Pune",

  // General Search Variations
  "Escorts in Pune",
  "Escort Service in Pune",
  "Escort Services in Pune",
  "Independent Escorts in Pune",
  "Premium Escorts in Pune",
  "Private Escorts in Pune",
  "Call Girls in Pune",
  "Call Girl Service Pune",
  "Companions in Pune",
  "Companion Service in Pune",
];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-zinc-800 overflow-x-hidden">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="relative bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-zinc-200 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-700 bg-blue-50 border border-blue-200 uppercase">
                  <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
                  <span>Pune&apos;s Finest</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-zinc-900">
                  <span className="block">Make Every</span>

                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent block mt-1">
                    Night Special
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
                  Explore premium escort services and companion profiles across
                  Pune. Discover sophisticated, discreet and independent
                  companions available across popular Pune locations.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/product"
                    className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Collection</span>

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="/contact"
                    className="border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-700 hover:text-zinc-900 font-semibold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-2xl transition-all flex items-center justify-center cursor-pointer shadow-sm"
                  >
                    <span>Private Inquiry</span>
                  </Link>
                </div>

                {/* Stats */}
                <div className="pt-6 border-t border-zinc-200 flex items-center gap-8 sm:gap-14 text-left">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                      50+
                    </div>
                    <div className="text-xs text-zinc-500 font-medium mt-0.5">
                      Verified Models
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                      150+
                    </div>
                    <div className="text-xs text-zinc-500 font-medium mt-0.5">
                      Happy Clients
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                      24/7
                    </div>
                    <div className="text-xs text-zinc-500 font-medium mt-0.5">
                      Availability
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Image */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md h-[400px] sm:h-[480px] rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl shadow-blue-900/10 bg-gray-100 group">
                  <img
                    src="/images/firstpage.avif"
                    alt="Featured Pune companion"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "/images/image1.avif";
                    }}
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Featured Badge */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-md rounded-2xl border border-blue-500/30 flex items-center gap-2.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                    <span className="text-xs font-bold text-amber-300 tracking-wider uppercase">
                      Featured:
                    </span>

                    <span className="text-sm font-extrabold text-cyan-300">
                      Anjali Pawar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Searches */}
          <div className="pt-10 space-y-4 max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              TOP SEARCHES
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {topSearches.map((item) => {
                const isLocation = !item.name.includes("Escorts");
                const targetHref = isLocation
                  ? `/location/${item.name.toLowerCase().replace(/\s+/g, "-")}`
                  : `/product?city=${encodeURIComponent(item.name)}`;

                return (
                  <Link
                    key={item.name}
                    href={targetHref}
                    className="inline-flex items-center gap-2.5 bg-white border border-zinc-200 hover:border-rose-300 rounded-full pl-1.5 pr-4 py-1 text-sm font-semibold text-zinc-800 shadow-2xs hover:shadow-xs transition-all hover:scale-105 cursor-pointer"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                      onError={(e) => {
                        e.currentTarget.src = "/images/image1.avif";
                      }}
                    />

                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Our Collection */}
          <div className="pt-10 text-center space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              OUR COLLECTION
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-600">
              Featured Models
            </h2>

            <p className="text-sm text-zinc-500 pt-1">
              Browse premium companion profiles across Pune
            </p>
          </div>
        </section>

        {/* Models Listing */}
        <div className="py-4">
          <ProductClient />
        </div>

        {/* Service Areas */}
        <section className="py-10 px-4 sm:px-8 max-w-6xl mx-auto space-y-5">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-zinc-200 text-center space-y-6">
            {/* Header */}
            <div className="space-y-1.5 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[#ff2d55]">
                SERVICE AREAS
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Locations We{" "}
                <span className="text-[#ff2d55]">Serve</span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto pt-0.5 font-medium">
                Explore escort services and companion listings across popular
                locations in Pune and PCMC.
              </p>
            </div>

            {/* Location Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {serviceAreas.map((cityName) => {
                const slug = cityName.toLowerCase().replace(/\s+/g, "-");
                return (
                  <Link
                    key={cityName}
                    href={`/location/${slug}`}
                    className="bg-white border border-zinc-200/80 hover:border-rose-400 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-2xs hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group text-center"
                  >
                    <svg
                      className="w-5 h-5 text-rose-500 fill-current group-hover:scale-110 transition-transform"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>

                    <span className="text-xs sm:text-sm font-semibold text-zinc-800 group-hover:text-rose-500 transition-colors">
                      {cityName}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/product" className="block">
              <div className="bg-white rounded-2xl p-5 shadow-xs border border-zinc-200 text-center hover:border-rose-500 transition-all cursor-pointer">
                <h3 className="text-xl font-black text-rose-500 flex items-center justify-center gap-2">
                  <span className="text-xl">👄</span>
                  Call Girls Pune
                </h3>
              </div>
            </Link>

            <Link href="/product" className="block">
              <div className="bg-white rounded-2xl p-5 shadow-xs border border-zinc-200 text-center hover:border-rose-500 transition-all cursor-pointer">
                <h3 className="text-xl font-black text-rose-500 flex items-center justify-center gap-2">
                  <span className="text-xl">🧘</span>
                  Massages Pune
                </h3>
              </div>
            </Link>

            <Link href="/product" className="block">
              <div className="bg-white rounded-2xl p-5 shadow-xs border border-zinc-200 text-center hover:border-rose-500 transition-all cursor-pointer">
                <h3 className="text-rose-500 font-black text-xl flex items-center justify-center gap-2">
                  <span className="text-xl">🥸</span>
                  Male Escorts Pune
                </h3>
              </div>
            </Link>

            <Link href="/product" className="block">
              <div className="bg-white rounded-2xl p-5 shadow-xs border border-zinc-200 text-center hover:border-rose-500 transition-all cursor-pointer">
                <h3 className="text-rose-500 font-black text-xl flex items-center justify-center gap-2">
                  <span>Transgender Companions Pune</span>
                </h3>
              </div>
            </Link>
          </div>

          {/* SEO Content Section */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-rose-500 text-center">
                PUNE ESCORT SERVICES
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zinc-900 text-center">
                Escort Services and Companions in Pune
              </h2>

              <p className="mt-5 text-sm sm:text-base text-zinc-600 leading-relaxed text-center">
                Find premium escort services and companion profiles in Pune
                and nearby areas. Our listings cover popular locations
                including Koregaon Park, Kalyani Nagar, Viman Nagar, Baner,
                Hinjewadi, Wakad, Kharadi and other areas across Pune and PCMC.
              </p>

              <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed text-center">
                Browse available profiles, explore different companion
                categories and use the location links above to find listings
                relevant to your preferred area. Each profile can be viewed
                through the collection section.
              </p>

              {/* SEO Keyword Tags */}
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {seoKeywords.map((keyword) => (
                  <Link
                    key={keyword}
                    href="/product"
                    className="px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-medium border border-rose-100 hover:bg-rose-100 transition-colors"
                  >
                    {keyword}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* Detailed Information */}
        <div className="bg-white text-zinc-800 border-t border-zinc-200">
          <HomeBelow />
        </div>
      </main>
    </div>
  );
}