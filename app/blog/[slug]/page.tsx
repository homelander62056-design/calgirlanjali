import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "../blogData";
import { puneLocations } from "@/app/location/locationsData";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlanjali.in";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Anjali Escort Service",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: "Anjali Escort Service",
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: "/images/firstpage.avif",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: ["/images/firstpage.avif"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        "headline": post.title,
        "description": post.metaDescription,
        "datePublished": "2026-09-01T08:00:00+05:30",
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-IN",
        "mainEntityOfPage": canonicalUrl,
        "author": {
          "@type": "Organization",
          "name": "Anjali Escort Service Editorial Team",
          "url": siteUrl,
        },
        "publisher": {
          "@type": "Organization",
          "name": "Anjali Escort Service",
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/images/logo.png`,
          },
        },
        "image": `${siteUrl}/images/firstpage.avif`,
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog & Guides",
            "item": `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": canonicalUrl,
          },
        ],
      },
    ],
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-rose-50 via-white to-zinc-50 py-12 px-4 sm:px-6 lg:px-8 border-b border-rose-100">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs">
            <Link
              href="/blog"
              className="text-zinc-500 hover:text-[#ff2d55] font-medium"
            >
              Blog
            </Link>
            <span className="text-zinc-300">/</span>
            <span className="px-3 py-1 bg-rose-100 text-[#ff2d55] font-bold rounded-full uppercase tracking-wider text-[11px]">
              {post.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-xs text-zinc-500 font-medium">
            <span>📅 {post.date}</span>
            <span>•</span>
            <span>⏱️ {post.readTime}</span>
            <span>•</span>
            <span>✍️ Verified Editorial</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        <article className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-xs space-y-6">
          <p className="text-base sm:text-lg text-zinc-700 font-medium leading-relaxed bg-rose-50/60 p-4 sm:p-6 rounded-2xl border border-rose-100/80">
            {post.summary}
          </p>

          <div className="space-y-5 text-sm sm:text-base text-zinc-700 leading-relaxed pt-2">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Action CTA Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base font-bold text-zinc-900">
                Ready to Book a Verified Companion in Pune?
              </h3>
              <p className="text-xs text-zinc-600">
                Direct WhatsApp booking with zero advance payment. 100% Cash on Delivery.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/product"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
              >
                View Models
              </Link>
              <a
                href="https://wa.me/918294107610?text=Hi%20Anjali%2C%20I%20read%20your%20blog%20and%20want%20to%20book%20a%20companion%20in%20Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </article>

        {/* Pune Localities Grid for Internal SEO Linking */}
        <section className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-extrabold text-zinc-900">
            Browse Companions Across Top Pune Neighborhoods
          </h2>
          <div className="flex flex-wrap gap-2">
            {puneLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/location/${loc.slug}`}
                className="px-3.5 py-1.5 rounded-full bg-zinc-100 hover:bg-rose-50 hover:text-[#ff2d55] text-xs font-medium text-zinc-700 transition-colors"
              >
                {loc.name} Escorts
              </Link>
            ))}
          </div>
        </section>

        {/* Other Related Articles */}
        {otherPosts.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-zinc-900">
              More Recommended Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherPosts.map((op) => (
                <Link
                  key={op.slug}
                  href={`/blog/${op.slug}`}
                  className="bg-white rounded-2xl border border-zinc-200 p-5 hover:border-[#ff2d55] transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#ff2d55] uppercase">
                      {op.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-[#ff2d55] transition-colors leading-snug">
                      {op.title}
                    </h3>
                  </div>
                  <span className="text-xs text-[#ff2d55] font-semibold pt-3 inline-flex items-center gap-1">
                    Read Article →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
