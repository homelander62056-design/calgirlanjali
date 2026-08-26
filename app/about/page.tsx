import React from "react";
import Link from "next/link";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://priyaescortservices.com";

export const metadata: Metadata = {
  title: "About Us - Elite Companion Network in Pune",
  description: "Learn about Priya Escort Service, Pune's most distinguished companion network offering 100% verified profiles and discreet executive service.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Us | Priya Escort Services",
    description: "Learn about Priya Escort Service, Pune's most distinguished companion network offering 100% verified profiles.",
    url: `${siteUrl}/about`,
    siteName: "cal girl pune",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Priya Escort Services",
    description: "Pune's premier platform for elite companionship and discreet executive entertainment.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-zinc-800 font-sans">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 w-full flex-1">
        
        {/* Header Above Card */}
        <div className="text-center space-y-2 mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff2d55]">
            OUR STORY &amp; VISION
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            About <span className="text-[#ff2d55]">Priya Escort</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto pt-1 font-medium">
            Pune&apos;s premier platform for elite companionship, discreet engagements, and executive entertainment.
          </p>
        </div>

        {/* Content Container Card */}
        <div className="bg-white border border-pink-200/80 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
          
          {/* Welcome Section */}
          <section className="space-y-3 border-b border-zinc-100 pb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#ff2d55]">
              Welcome to Priya Escort Service
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Priya Escort Service stands as Pune&apos;s most distinguished companion network, crafted exclusively for gentlemen seeking refined, charming, and intelligent companions. Established with a commitment to elevate industry standards, we provide seamless access to verified companions for corporate dinners, luxury travel, and private leisure across Pune and PCMC.
            </p>
          </section>

          {/* Our Mission */}
          <section className="space-y-3 border-b border-zinc-100 pb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#ff2d55]">
              Our Core Philosophy
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Our philosophy is centered on delivering an unmatched companion experience that harmonizes poise, intelligence, and grace. We believe every engagement should feel natural, effortless, and tailored to your personal preferences — whether you require an elegant escort for a high-profile gala or a discreet date for a peaceful evening.
            </p>
          </section>

          {/* What Sets Us Apart */}
          <section className="space-y-5 border-b border-zinc-100 pb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#ff2d55]">
              Why Choose Priya Escorts?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-rose-50/50 border border-rose-100/80 rounded-2xl p-4 space-y-1.5">
                <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                  <span>✨</span> Authentic &amp; Verified Profiles
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Every profile on our roster undergoes thorough verification to guarantee 100% genuine photographs and accurate personal details.
                </p>
              </div>

              <div className="bg-rose-50/50 border border-rose-100/80 rounded-2xl p-4 space-y-1.5">
                <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                  <span>🔒</span> Absolute Discretion
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Your privacy is our highest priority. We implement encrypted communication channels and confidential booking procedures so your information remains strictly private.
                </p>
              </div>

              <div className="bg-rose-50/50 border border-rose-100/80 rounded-2xl p-4 space-y-1.5">
                <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                  <span>📞</span> 24/7 Dedicated Concierge
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Our customer support team operates around the clock to handle inquiries, customize bookings, and ensure your experience is smooth from start to finish.
                </p>
              </div>

              <div className="bg-rose-50/50 border border-rose-100/80 rounded-2xl p-4 space-y-1.5">
                <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                  <span>👑</span> Curated Premium Selection
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  We curate a diverse portfolio of companions ranging from college models to VIP companions, accommodating every occasion and aesthetic preference.
                </p>
              </div>
            </div>
          </section>

          {/* Our Service Areas */}
          <section className="space-y-3 border-b border-zinc-100 pb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#ff2d55]">
              Pune Service Locations
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Our agency offers comprehensive coverage throughout all prime sectors in Pune, including{" "}
              <Link href="/product?city=Koregaon%20Park" className="text-[#ff2d55] font-semibold hover:underline">
                Koregaon Park
              </Link>,{" "}
              <Link href="/product?city=Kalyani%20Nagar" className="text-[#ff2d55] font-semibold hover:underline">
                Kalyani Nagar
              </Link>,{" "}
              <Link href="/product?city=Viman%20Nagar" className="text-[#ff2d55] font-semibold hover:underline">
                Viman Nagar
              </Link>,{" "}
              <Link href="/product?city=Hinjewadi" className="text-[#ff2d55] font-semibold hover:underline">
                Hinjewadi
              </Link>, and{" "}
              <Link href="/product?city=Baner" className="text-[#ff2d55] font-semibold hover:underline">
                Baner
              </Link>. Companions are available for both incall luxury hotel stays and outcalls to your preferred venue.
            </p>
          </section>

          {/* Contact Us CTA */}
          <section className="space-y-3 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#ff2d55]">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Elevate your companionship experience in Pune today.{" "}
              <Link href="/contact" className="text-[#ff2d55] font-bold hover:underline">
                Connect directly
              </Link>{" "}
              with our concierge team via WhatsApp or Phone call for immediate, confidential assistance and instant booking confirmations.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}