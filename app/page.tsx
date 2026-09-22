"use client";

import React from "react";
import Link from "next/link";
import ProductClient from "./product/ProductClient";
import HomeBelow from "./components/homeBelow";

const topSearches = [
  { name: "Koregaon Park", img: "/images/image1.avif" },
  { name: "Hinjewadi IT Park", img: "/images/image29.avif" },
  { name: "Pune Railway Station", img: "/images/image15.avif" },
  { name: "Swargate Bus Stand", img: "/images/image18.avif" },
  { name: "PCMC Escorts", img: "/images/image22.avif" },
  { name: "Kalyani Nagar", img: "/images/image31.avif" },
  { name: "Viman Nagar", img: "/images/image3.avif" },
  { name: "Baner High Street", img: "/images/image5.avif" },
  { name: "Wakad Escorts", img: "/images/image7.avif" },
  { name: "Russian Escorts", img: "/images/image6.avif" },
  { name: "Independent Escorts", img: "/images/image4.avif" },
];

const serviceAreas = [
  "Koregaon Park",
  "Hinjewadi",
  "Pune Railway Station",
  "Swargate",
  "Pimpri Chinchwad",
  "Pimple Saudagar",
  "Baner",
  "Wakad",
  "Kalyani Nagar",
  "Viman Nagar",
  "Kharadi",
  "Hadapsar",
  "Kothrud",
  "Shivajinagar",
  "Aundh",
  "Bhosari",
  "Chakan",
  "Pune Camp",
  "Balewadi",
  "Bavdhan",
  "Katraj",
  "Yerwada",
  "Wagholi",
  "Pashan",
  "Magarpatta City",
  "FC Road",
  "Nigdi",
  "Akurdi",
  "Kondhwa",
  "Deccan",
];

const seoKeywords = [
  // Transit, Bus Stand & Railway Station (Top Priority)
  "Pune Bus Stand Escort Service",
  "Pune Bus Stand Call Girl",
  "Pune Railway Station Escort",
  "Pune Railway Station Call Girl",
  "Call Girl near Pune Station",
  "Escort Service near Pune Railway Station",
  "Pune ST Stand Call Girl",
  "Swargate Bus Stand Escort Service",
  "Swargate Bus Stand Call Girl",
  "Swargate Escort Service",
  "Swargate Call Girl",
  "Swargate Escorts Pune",
  "Shivajinagar Bus Stand Call Girl",
  "Shivajinagar ST Stand Escorts",
  "Pune Airport Escort Service",
  "Pune Airport Call Girl",
  "Pune Airport Escorts",
  "Bund Garden Escorts Pune",
  "Station Road Call Girl Pune",

  // PCMC Industrial & Suburbs (High Ranking)
  "PCMC Escort",
  "PCMC Escorts",
  "PCMC Escort Service",
  "PCMC Call Girl",
  "PCMC Call Girl Service",
  "Call Girls in PCMC",
  "Pimpri Chinchwad Escorts",
  "Pimpri Chinchwad Escort Service",
  "Pimpri Chinchwad Call Girl",
  "Call Girls in Pimpri Chinchwad",
  "Pimpri Call Girl",
  "Pimpri Escort Service",
  "Pimpri Escorts",
  "Chinchwad Call Girl",
  "Chinchwad Escort Service",
  "Chinchwad Escorts",
  "Nigdi Call Girl",
  "Nigdi Escort Service",
  "Nigdi Escorts",
  "Bhosari Call Girl",
  "Bhosari Escorts",
  "Bhosari MIDC Escort Service",
  "Akurdi Call Girl",
  "Akurdi Escort Service",
  "Pimple Saudagar Call Girl",
  "Pimple Saudagar Escort Service",
  "Pimple Saudagar Escorts",
  "Pimple Nilakh Call Girl",
  "Pimple Nilakh Escorts",
  "Ravet Call Girl",
  "Ravet Escort Service",
  "Tathawade Call Girl",
  "Moshi Call Girl",
  "Chakan Call Girl",
  "Chakan MIDC Escort Service",
  "Talegaon Escort Service",

  // Hinjewadi IT Park Corridor
  "Hinjewadi Call Girl",
  "Call Girls in Hinjewadi",
  "Hinjewadi Escort Service",
  "Hinjewadi Escorts",
  "Hinjewadi IT Park Escorts",
  "Hinjewadi Phase 1 Call Girl",
  "Hinjewadi Phase 1 Escorts",
  "Hinjewadi Phase 2 Call Girl",
  "Hinjewadi Phase 2 Escorts",
  "Hinjewadi Phase 3 Call Girl",
  "Hinjewadi Phase 3 Escort Service",
  "Wakad Call Girl",
  "Wakad Escort Service",
  "Wakad Escorts",
  "Call Girls in Wakad",
  "Bhumkar Chowk Call Girl",
  "Dange Chowk Call Girl",
  "Punawale Escorts",
  "Marunji Call Girl",

  // Koregaon Park & East Pune
  "Koregaon Park Call Girl",
  "Call Girls in Koregaon Park",
  "Escort Service Koregaon Park",
  "Koregaon Park Escorts",
  "North Main Road Call Girl",
  "South Main Road Escorts",
  "Kalyani Nagar Call Girl",
  "Kalyani Nagar Escorts",
  "Kalyani Nagar Escort Service",
  "Call Girls in Kalyani Nagar",
  "Viman Nagar Call Girls",
  "Viman Nagar Escorts",
  "Viman Nagar Escort Service",
  "Phoenix Mall Call Girl Pune",
  "Kharadi Call Girl",
  "Kharadi Escorts",
  "Kharadi Escort Service",
  "EON IT Park Call Girl",
  "WTC Kharadi Escort Service",
  "Magarpatta Call Girl",
  "Magarpatta Escorts",
  "Magarpatta Escort Service",
  "Magarpatta City Escorts",
  "Cybercity Call Girl Pune",
  "Hadapsar Call Girls",
  "Hadapsar Call Girl",
  "Hadapsar Escort Service",
  "Hadapsar Escorts",
  "SP Infocity Call Girl",
  "Wagholi Call Girl",
  "Wagholi Escorts",
  "Wagholi Escort Service",
  "Nagar Road Call Girl",
  "Yerwada Call Girl",
  "Yerwada Escorts",
  "Yerwada Escort Service",
  "Mundhwa Call Girl",
  "Dhanori Call Girl",
  "Vishrantwadi Call Girl",
  "Lohegaon Call Girl",

  // West Pune & Baner Corridor
  "Baner Call Girl",
  "Call Girls in Baner",
  "Baner Escorts Service",
  "Baner Escorts",
  "Baner High Street Call Girl",
  "Baner High Street Escorts",
  "Balewadi Call Girl",
  "Balewadi Escorts",
  "Balewadi Escort Service",
  "Balewadi High Street Escorts",
  "Mahalunge Call Girl",
  "Aundh Call Girl",
  "Aundh Escorts",
  "Aundh Escort Service",
  "Bremen Chowk Call Girl",
  "Westend Mall Call Girl",
  "Pashan Call Girl",
  "Pashan Escorts",
  "Pashan Escort Service",
  "Sus Road Escorts",
  "Bavdhan Call Girl",
  "Bavdhan Escorts",
  "Bavdhan Escort Service",
  "Chandani Chowk Call Girl",
  "Chandani Chowk Escorts",

  // Central & South Pune
  "Shivaji Nagar Escorts",
  "Shivajinagar Call Girl",
  "Shivajinagar Escort Service",
  "FC Road Call Girl",
  "FC Road Escorts",
  "JM Road Call Girl",
  "JM Road Escorts",
  "Deccan Call Girl",
  "Deccan Gymkhana Escorts",
  "Senapati Bapat Road Call Girl",
  "SB Road Escorts",
  "Kothrud Call Girl",
  "Kothrud Escorts",
  "Kothrud Escort Service",
  "Paud Road Call Girl",
  "Karve Road Call Girl",
  "Warje Call Girl",
  "Warje Escort Service",
  "Pune Camp Call Girl",
  "Pune Camp Escorts",
  "MG Road Call Girl Pune",
  "East Street Call Girl Pune",
  "Satara Road Call Girl Pune",
  "Katraj Call Girl",
  "Katraj Escorts",
  "Katraj Escort Service",
  "Bharati Vidyapeeth Call Girl",
  "Kondhwa Call Girl",
  "Kondhwa Escorts",
  "Kondhwa Escort Service",
  "NIBM Road Call Girl",
  "Wanowrie Call Girl",
  "Fatima Nagar Call Girl",
  "Bibwewadi Call Girl",
  "Sinhagad Road Call Girl",

  // Core Category & Booking Terms
  "Escort Services Pune",
  "Escort Service Pune",
  "Pune Escort Services",
  "Pune Escort Service",
  "Call Girls Pune",
  "Call Girl Pune",
  "Pune Call Girls",
  "Pune Call Girl",
  "Independent Escorts Pune",
  "Independent Call Girl Pune",
  "VIP Escorts Pune",
  "Russian Escorts in Pune",
  "College Girl Escorts Pune",
  "Housewife Escorts Pune",
  "Celebrity Escorts Pune",
  "Air Hostess Escorts Pune",
  "Model Escorts Pune",
  "Hotel Outcall Escorts Pune",
  "Incall Escort Service Pune",
  "24/7 Call Girl Service Pune",
  "24 Hour Escort Service Pune",
  "Genuine Call Girl in Pune",
  "Verified Pune Escorts",
  "Verified Call Girls Pune",
  "Cheap Call Girls in Pune",
  "Affordable Escorts Pune",
  "Luxury Escorts Pune",
  "High Profile Escorts Pune",
  "VIP Call Girl Service Pune",
  "Cash on Delivery Call Girl Pune",
  "Zero Advance Call Girl Pune",
  "WhatsApp Call Girl Number Pune",
  "Pune Call Girl WhatsApp Contact",
  "Pune Companion Service",
  "Best Escort Service Pune",
  "Top Rated Escorts in Pune",
  "Night Stay Escort Service Pune",
  "Dinner Date Escorts Pune",
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