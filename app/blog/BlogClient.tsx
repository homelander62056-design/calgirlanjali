"use client";

import React from "react";
import Link from "next/link";
import { blogPosts } from "./blogData";

export default function BlogClient() {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-rose-300 transition-all flex flex-col justify-between hover:-translate-y-1"
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
            </Link>
          ))}
        </div>

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
