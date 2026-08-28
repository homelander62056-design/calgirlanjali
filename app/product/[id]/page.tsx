import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { initialProductsData } from "../productsData";
import ProductDetailClient from "./ProductDetailClient";
import { getModelSpecsAndDetails, findProductById } from "./data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return initialProductsData.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = findProductById(id);

  if (!product) {
    return {
      title: "Profile Not Found | Cal Girl Anjali Escort Services",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlanjali.in";
  const canonicalUrl = `${siteUrl}/product/${product.id}`;
  const details = getModelSpecsAndDetails(product);
  const imageUrl = details.displayImage.startsWith("http")
    ? details.displayImage
    : `${siteUrl}${details.displayImage}`;

  // Use curated SEO fields from productsData if available, else fallback
  const metaTitle =
    product.metaTitle ||
    `${product.name} – Escort & Companion in ${product.city} | Cal Girl Anjali`;

  const metaDescription =
    product.metaDescription ||
    `${product.name} (${product.age} yrs), verified independent companion in ${details.locationDetail}. Direct contact: ${product.phone}. Available 24/7 for luxury hotel outcalls & dinner dates.`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      `${product.name}`,
      `escort in ${details.locationDetail}`,
      `call girl ${details.locationDetail}`,
      `escort service Pune`,
      `companion ${product.city}`,
      `independent escort Pune`,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "Cal Girl Anjali Escort Service",
      locale: "en_IN",
      type: "profile",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 1067,
          alt: `${product.name} – Escort in ${product.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = findProductById(id);

  if (!product) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlanjali.in";
  const details = getModelSpecsAndDetails(product);
  const canonicalUrl = `${siteUrl}/product/${product.id}`;
  const imageUrl = details.displayImage.startsWith("http") ? details.displayImage : `${siteUrl}${details.displayImage}`;

  // JSON-LD Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": `${product.name} - ${product.city} Profile`,
        "description": product.description,
        "mainEntity": {
          "@type": "Person",
          "name": product.name,
          "description": product.description,
          "image": imageUrl,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": details.locationDetail,
            "addressRegion": "Maharashtra",
            "addressCountry": "IN",
          },
          "telephone": product.phone,
          "gender": "Female",
        },
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
            "name": "Models",
            "item": `${siteUrl}/product`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.name,
            "item": canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}