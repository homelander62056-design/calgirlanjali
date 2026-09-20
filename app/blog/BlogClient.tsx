"use client";

import React, { useState } from "react";
import Link from "next/link";
import { trackWhatsAppClick, createWhatsAppLink } from "../utils/trackWhatsapp";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "guide-to-safe-call-girls-pune",
    title: "Complete Guide to Booking Safe & Verified Call Girls in Pune (2026)",
    date: "September 18, 2026",
    category: "Safety & Booking",
    readTime: "5 min read",
    summary: "Discover essential safety tips, verification methods, and step-by-step instructions to book genuine call girls in Pune without falling for advance payment scams.",
    content: [
      "Finding verified and discreet companionship in Pune requires caution and knowledge. With thousands of online listings across classified sites, distinguishing genuine agencies from fraudsters is crucial for your safety and peace of mind.",
      "The #1 Rule: Never Pay Advance Deposits. Reputable agencies in Pune, including Anjali Escort Service, operate strictly on a cash-on-delivery (pay at meet) model. Anyone asking for upfront room charges, taxi fares, or registration fees is likely attempting a scam.",
      "Always verify photos and phone lines. Direct WhatsApp video calls or real photo galleries on established portals ensure the companion you choose matches the profile shown online.",
      "Choose safe meeting locations. Luxury hotels in areas like Koregaon Park, Kalyani Nagar, Viman Nagar, and Hinjewadi offer safe, private, and comfortable environments with high security standards for outcall services.",
    ],
  },
  {
    id: "top-10-escort-locations-pune",
    title: "Top 10 Escort Locations in Pune: From Koregaon Park to Hinjewadi",
    date: "September 12, 2026",
    category: "City Guide",
    readTime: "6 min read",
    summary: "An in-depth overview of Pune's best neighborhoods for executive companionship, romantic dates, and luxury hotel outcall services.",
    content: [
      "Pune is a vibrant metropolis divided into bustling IT corridors, heritage sectors, and ultra-luxurious lifestyle districts. Here is a breakdown of top companion hotspots:",
      "1. Koregaon Park: The undisputed lifestyle capital of Pune with top 5-star hotels (The Westin, Conrad), lush lanes, and world-class cafes.",
      "2. Hinjewadi IT Park: The hub for tech travelers and corporate executives seeking relaxed companionship in Phase 1, Phase 2, and Phase 3.",
      "3. Viman Nagar: Situated near Pune Airport and Phoenix Marketcity, perfect for transit travelers and fast hotel outcalls.",
      "4. Baner & Balewadi High Street: Trendy nightlife hubs packed with high-profile models and dinner date companions.",
      "5. Kalyani Nagar & Kharadi: High-end residential and IT corridors with premier corporate escorts.",
    ],
  },
  {
    id: "incall-vs-outcall-pune-escorts",
    title: "Incall vs Outcall Escort Service in Pune: Everything You Need to Know",
    date: "September 05, 2026",
    category: "Companion Guide",
    readTime: "4 min read",
    summary: "Learn the differences between incall and outcall services, privacy precautions, and how to choose what fits your schedule best.",
    content: [
      "When booking a companion in Pune, you can choose between outcall (companion comes to your hotel or residence) and incall (visiting the companion's private suite).",
      "Outcall Benefits: Outcall is the preferred choice for business travelers staying in 4-star and 5-star hotels. It provides maximum control over your environment, room privacy, and schedule flexibility.",
      "Incall Benefits: Incall is suitable for clients who prefer a pre-arranged, private space without having to book a hotel room themselves.",
      "Regardless of the format, Anjali Escort Service guarantees 100% discretion, hygienic standards, and genuine companionship across all Pune zones.",
    ],
  },
  {
    id: "russian-models-vip-escorts-pune",
    title: "VIP Models & Russian Escort Services in Pune – Etiquette & Booking",
    date: "August 28, 2026",
    category: "VIP Services",
    readTime: "5 min read",
    summary: "A comprehensive guide on booking international and celebrity model companions in Pune, pricing expectations, and etiquette rules.",
    content: [
      "For discerning gentlemen looking for luxury companionship, Pune offers a selection of elite international models, including Russian, European, and high-fashion Indian escorts.",
      "These companions are well-traveled, multilingual, and ideal for VIP parties, luxury vacations, and high-profile social galas.",
      "Etiquette & Respect: Mutual respect and polite communication are expected at all times. Professional companions value courteous gentlemen who appreciate fine hospitality.",
      "Direct Booking: You can book VIP models through Anjali Escort Service by requesting our premium catalogue directly on WhatsApp.",
    ],
  },
];

export default function BlogClient() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-rose-50 via-white to-zinc-50 py-12 px-4 sm:px-6 lg:px-8 border-b border-rose-100">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-[#ff2d55] text-xs font-bold uppercase tracking-wider">
            <span>📚</span> Expert Guides &amp; Industry Insights
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Pune Escort &amp; Call Girl <span className="text-[#ff2d55]">Blog &amp; Guides</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Read expert articles on companion etiquette, safety best practices, area reviews across Pune, and booking tips from Anjali Escort Service.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        
        {/* If a post is selected, show modal or full article view */}
        {selectedPost ? (
          <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-sm space-y-6">
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#ff2d55] hover:underline cursor-pointer"
            >
              ← Back to All Articles
            </button>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <span className="px-2.5 py-1 bg-rose-50 text-[#ff2d55] font-bold rounded-full border border-rose-100">
                  {selectedPost.category}
                </span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                {selectedPost.title}
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100 pt-6">
              {selectedPost.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="border-t border-zinc-100 pt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-zinc-500">
                Published by <strong>Anjali Escort Service Editorial Team</strong>
              </div>
              <a
                href={createWhatsAppLink("Blog Inquiry", "Pune", "918294107610")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    name: "Blog Inquiry",
                    city: "Pune",
                    whatsappNumber: "918294107610",
                  })
                }
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-rose-300 transition-all flex flex-col justify-between cursor-pointer hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 bg-rose-50 text-[#ff2d55] font-bold rounded-full border border-rose-100">
                      {post.category}
                    </span>
                    <span className="text-zinc-400 font-medium">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-zinc-900 group-hover:text-[#ff2d55] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 mt-6 flex items-center justify-between text-xs font-bold text-[#ff2d55]">
                  <span>Read Full Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Explore Locations CTA */}
        <div className="bg-rose-50/70 border border-rose-200/80 rounded-3xl p-6 sm:p-8 text-center space-y-3">
          <h3 className="text-xl font-bold text-zinc-900">
            Looking for Companions in Your Area?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto">
            Explore verified profiles across Koregaon Park, Viman Nagar, Hinjewadi, Baner, Wakad, and PCMC.
          </p>
          <div className="pt-2">
            <Link
              href="/location"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff2d55] hover:bg-[#e02447] text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
            >
              Browse All Pune Locations →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
