import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { puneLocations } from "../locationsData";
import { initialProductsData } from "@/app/product/productsData";
import LocationClient from "./LocationClient";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlanjali.in";

export async function generateStaticParams() {
  return puneLocations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = puneLocations.find((l) => l.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  const canonicalUrl = `${siteUrl}/location/${location.slug}`;

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: canonicalUrl,
      siteName: "Anjali Escort Service",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: `${location.name} Call Girls & Escorts`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: ["/logo.png"],
    },
    other: {
      "geo.region": "IN-MH",
      "geo.placename": `${location.name}, Pune, Maharashtra, India`,
      "geo.position": `${location.latitude};${location.longitude}`,
      ICBM: `${location.latitude}, ${location.longitude}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = puneLocations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  // Filter companions matching this location or nearby Pune profiles
  const matchingCompanions = initialProductsData.filter((p) =>
    p.city.toLowerCase().includes(location.name.toLowerCase())
  );
  const displayCompanions =
    matchingCompanions.length > 0
      ? matchingCompanions
      : initialProductsData.slice(0, 8);

  const otherLocations = puneLocations.filter((l) => l.slug !== location.slug);

  // Structured Schema: Breadcrumb + FAQPage + LocalBusiness
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pune Escorts",
        item: `${siteUrl}/product`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${location.name} Call Girls`,
        item: `${siteUrl}/location/${location.slug}`,
      },
    ],
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/location/${location.slug}#localbusiness`,
    name: `Anjali Escort Service - ${location.name}`,
    image: `${siteUrl}/logo.png`,
    telephone: "+918294107610",
    url: `${siteUrl}/location/${location.slug}`,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.name,
      addressLocality: "Pune",
      addressRegion: "MH",
      postalCode: location.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.latitude,
      longitude: location.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
      />
      <LocationClient
        location={location}
        companions={displayCompanions}
        otherLocations={otherLocations}
      />
    </>
  );
}
