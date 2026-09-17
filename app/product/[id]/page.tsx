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
      title: "Profile Not Found | Anjali Escort Service",
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

  const lat = product.latitude ?? 18.5204;
  const lng = product.longitude ?? 73.8567;
  const geoPlacename = product.geoPlacename ?? `${details.locationDetail}, Pune, Maharashtra, India`;
  const geoRegion = product.geoRegion ?? "IN-MH";
  const geoPosition = product.geoPosition ?? `${lat};${lng}`;
  const icbm = `${lat}, ${lng}`;

  // Use curated SEO fields from productsData
  const metaTitle =
    product.metaTitle ||
    `${product.name} – Call Girl & Escort in ${product.city} | Cal Girl Anjali`;

  const metaDescription =
    product.metaDescription ||
    `${product.name} (${product.age} yrs), verified independent VIP companion in ${details.locationDetail}. Direct contact: ${product.phone}. Available 24/7 for luxury hotel outcalls & dinner dates.`;

  const subLoc = product.city.includes("/") ? product.city.split("/")[1].trim() : product.city;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      `${product.name}`,
      `call girl in ${subLoc}`,
      `call girls in ${subLoc} Pune`,
      `escort in ${subLoc}`,
      `escorts in ${subLoc} Pune`,
      `${subLoc} call girl service`,
      `${subLoc} escort service`,
      `independent escort ${subLoc}`,
      `VIP escort Pune`,
      `call girl Pune`,
      `escorts in Pune`,
      `${product.name} Pune`,
      `hotel outcall escort ${subLoc}`,
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
      siteName: "Anjali Escort Service",
      locale: "en_IN",
      type: "profile",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 1067,
          alt: `${product.name} – Escort & Call Girl in ${product.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
    },
    other: {
      "geo.region": geoRegion,
      "geo.placename": geoPlacename,
      "geo.position": geoPosition,
      "ICBM": icbm,
      "language": "English, Hindi",
      "coverage": "Pune, Maharashtra, India",
      "distribution": "Global",
      "rating": "General",
      "target": "all",
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
  const imageUrl = details.displayImage.startsWith("http")
    ? details.displayImage
    : `${siteUrl}${details.displayImage}`;

  const lat = product.latitude ?? 18.5204;
  const lng = product.longitude ?? 73.8567;
  const postalCode = product.postalCode ?? "411001";
  const subLoc = product.city.includes("/") ? product.city.split("/")[1].trim() : product.city;

  // JSON-LD Structured Data with rich GeoCoordinates and LocalBusiness schema for Top Google Indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#localbusiness`,
        "name": `${product.name} - Escort & Companion in ${subLoc}, Pune`,
        "alternateName": [
          `${product.name} Call Girl ${subLoc}`,
          `${product.name} Escort Service ${subLoc}`,
        ],
        "url": canonicalUrl,
        "image": imageUrl,
        "description": product.metaDescription || product.description,
        "telephone": product.phone,
        "priceRange": "₹₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Online",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": subLoc,
          "addressLocality": subLoc,
          "addressRegion": "Maharashtra",
          "postalCode": postalCode,
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": lat,
          "longitude": lng,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            "opens": "00:00",
            "closes": "23:59",
          },
        ],
        "areaServed": [
          subLoc,
          "Pune",
          "PCMC",
          "Maharashtra",
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating ? product.rating.toString() : "4.9",
          "reviewCount": "120",
          "bestRating": "5",
          "worstRating": "1",
        },
      },
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
            "postalCode": postalCode,
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
            "name": `${product.name} (${subLoc})`,
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