"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { trackWhatsAppClick, createWhatsAppLink } from "../utils/trackWhatsapp";

export default function FooterPage() {
  return (
    <footer className="w-full bg-[#fdfdfd] text-zinc-600 font-sans border-t border-zinc-100 relative py-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

        {/* Brand Column */}
        <div className="lg:col-span-1 space-y-4 pr-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/images/logo.png"
              alt="Anjali Escort Service Logo"
              className="w-10 h-10 object-contain flex-shrink-0"
            />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold italic text-blue-600 tracking-tight">Anjali Escort Service</span>
            </div>
          </Link>

          {/* Description */}
          <p className="text-sm text-zinc-500 leading-relaxed font-normal">
            Pune&apos;s premier escort service. We connect discerning gentlemen with elegant, sophisticated companions for memorable experiences.
          </p>

          {/* Icon Buttons */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href={createWhatsAppLink("General Inquiry", "Pune", "918294107610")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  name: "Footer Brand WhatsApp",
                  city: "Pune",
                  whatsappNumber: "918294107610",
                })
              }
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
            <a
              href="tel:+918294107610"
              aria-label="Call"
              className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: QUICK LINKS */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">
            QUICK LINKS
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link href="/product" className="hover:text-blue-600 transition-colors">Our Models</Link></li>
            <li><Link href="/location" className="hover:text-blue-600 transition-colors">Pune Locations</Link></li>
            <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog & Guides</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Column 3: POPULAR LOCATIONS */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">
            POPULAR LOCATIONS
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/location/koregaon-park" className="hover:text-blue-600 transition-colors">Koregaon Park Escorts</Link></li>
            <li><Link href="/location/kalyani-nagar" className="hover:text-blue-600 transition-colors">Kalyani Nagar Call Girls</Link></li>
            <li><Link href="/location/viman-nagar" className="hover:text-blue-600 transition-colors">Viman Nagar Escorts</Link></li>
            <li><Link href="/location/hinjewadi" className="hover:text-blue-600 transition-colors">Hinjewadi Escorts</Link></li>
            <li><Link href="/location/baner" className="hover:text-blue-600 transition-colors">Baner Escort Services</Link></li>
            <li><Link href="/location/wakad" className="hover:text-blue-600 transition-colors">Wakad Escorts</Link></li>
            <li><Link href="/location/kothrud" className="hover:text-blue-600 transition-colors">Kothrud Escorts</Link></li>
            <li><Link href="/location/shivajinagar" className="hover:text-blue-600 transition-colors">Shivajinagar Call Girls</Link></li>
            <li><Link href="/location/aundh" className="hover:text-blue-600 transition-colors">Aundh Escorts</Link></li>
            <li><Link href="/location/magarpatta-city" className="hover:text-blue-600 transition-colors">Magarpatta Escorts</Link></li>
            <li><Link href="/location/kharadi" className="hover:text-blue-600 transition-colors">Kharadi Call Girls</Link></li>
            <li><Link href="/location/wagholi" className="hover:text-blue-600 transition-colors">Wagholi Escorts</Link></li>
          </ul>
        </div>

        {/* Column 4: MORE AREAS */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">
            MORE AREAS
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/location/balewadi" className="hover:text-blue-600 transition-colors">Balewadi Call Girls</Link></li>
            <li><Link href="/location/pashan" className="hover:text-blue-600 transition-colors">Pashan Escorts</Link></li>
            <li><Link href="/location/pimpri-chinchwad" className="hover:text-blue-600 transition-colors">PCMC Escorts</Link></li>
            <li><Link href="/location" className="hover:text-blue-600 transition-colors font-semibold">View All 25+ Areas →</Link></li>
          </ul>
        </div>

        {/* Column 5: OUR SERVICES */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">
            OUR SERVICES
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/product" className="hover:text-blue-600 transition-colors">VIP Escorts</Link></li>
            <li><Link href="/product" className="hover:text-blue-600 transition-colors">High Class Escorts</Link></li>
            <li><Link href="/product" className="hover:text-blue-600 transition-colors">Independent Escorts</Link></li>
            <li><Link href="/product" className="hover:text-blue-600 transition-colors">College Girl Escorts</Link></li>
            <li><Link href="/product" className="hover:text-blue-600 transition-colors">Russian Escorts</Link></li>
            <li><Link href="/product" className="hover:text-blue-600 transition-colors">Model Escorts</Link></li>
            <li><Link href="/product" className="hover:text-blue-600 transition-colors">Girlfriend Experience</Link></li>
            <li><Link href="/product" className="hover:text-blue-600 transition-colors">Hotel Escorts</Link></li>
            <li><Link href="/product" className="hover:text-blue-600 transition-colors">Affordable Escorts</Link></li>
            <li><Link href="/product" className="hover:text-blue-600 transition-colors">Night Service</Link></li>
          </ul>
        </div>

        {/* Column 6: LEGAL */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">
            LEGAL
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/privacyPolicy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="hover:text-blue-600 transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/disclaimer" className="hover:text-blue-600 transition-colors">Disclaimer</Link></li>
            <li><Link href="/security" className="hover:text-blue-600 transition-colors">Security & Safety</Link></li>
            <li><Link href="/helpSupport" className="hover:text-blue-600 transition-colors">Help & Support</Link></li>
          </ul>
        </div>

      </div>

      {/* Our Premium Partners / Pune Locations Section */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-200 text-center space-y-4">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
          OUR PREMIUM LOCATIONS
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-zinc-600 font-medium max-w-5xl mx-auto">
          {[
            { name: "Pune Railway Station & Bus Stand", slug: "pune-railway-station" },
            { name: "Swargate Bus Stand", slug: "swargate" },
            { name: "PCMC Escorts", slug: "pimpri-chinchwad" },
            { name: "Pimple Saudagar", slug: "pimple-saudagar" },
            { name: "Hinjewadi IT Park", slug: "hinjewadi" },
            { name: "Baner Escorts", slug: "baner" },
            { name: "Wakad Escorts", slug: "wakad" },
            { name: "Koregaon Park Escorts", slug: "koregaon-park" },
            { name: "Kalyani Nagar Escorts", slug: "kalyani-nagar" },
            { name: "Viman Nagar Escorts", slug: "viman-nagar" },
            { name: "Kharadi Escorts", slug: "kharadi" },
            { name: "Hadapsar Escorts", slug: "hadapsar" },
            { name: "Kothrud Escorts", slug: "kothrud" },
            { name: "Shivajinagar Escorts", slug: "shivajinagar" },
            { name: "Aundh Escorts", slug: "aundh" },
            { name: "Bhosari MIDC", slug: "bhosari" },
            { name: "Chakan MIDC", slug: "chakan" },
            { name: "Pune Camp MG Road", slug: "camp-pune" },
            { name: "Katraj Escorts", slug: "katraj" },
            { name: "Bavdhan Escorts", slug: "bavdhan" },
            { name: "Yerwada Escorts", slug: "yerwada" },
            { name: "Magarpatta Escorts", slug: "magarpatta-city" },
            { name: "Wagholi Escorts", slug: "wagholi" },
            { name: "Balewadi Escorts", slug: "balewadi" },
            { name: "Pashan Escorts", slug: "pashan" },
          ].map((item) => (
            <Link
              key={item.slug}
              href={`/location/${item.slug}`}
              className="hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Copyright, DMCA & 18+ Disclaimer */}
      <div className="max-w-7xl mx-auto border-t border-zinc-200 mt-8 pt-8 space-y-3 text-xs font-semibold text-zinc-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="text-center text-sm font-medium">
            <p>© {new Date().getFullYear()} Anjali Escort Service. All rights reserved.</p>
          </div>
          <p className="text-center md:text-right">
            Strictly 18+ Adult Service. By accessing this site, you confirm you are of legal age.
          </p>
        </div>

        <p className="text-center text-zinc-500 pt-1">
          Fully DMCA Protected &amp; Compliant. For copyright or content removal requests, please{" "}
          <Link href="/contact" className="text-rose-500 hover:underline font-medium">
            Contact Us
          </Link>.
        </p>
      </div>


    </footer>
  );
}
