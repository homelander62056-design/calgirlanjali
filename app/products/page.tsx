import React from "react";
import { Metadata } from "next";
import ProductClient from "./ProductClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://priyaescortservices.com";

export const metadata: Metadata = {
  title: "Our Models & Escort Profiles in Pune",
  description: "Browse verified high-profile independent models and escort companions in Pune. Available 24/7 in Koregaon Park, Kalyani Nagar, Viman Nagar, Hinjewadi, and more.",
  alternates: {
    canonical: `${siteUrl}/product`,
  },
  openGraph: {
    title: "Our Models & Escort Profiles in Pune",
    description: "Browse verified high-profile independent models and escort companions in Pune. Available 24/7 in Koregaon Park, Kalyani Nagar, Viman Nagar, Hinjewadi, and more.",
    url: `${siteUrl}/product`,
    siteName: "cal girl pune",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Models & Escort Profiles in Pune",
    description: "Browse verified high-profile independent models and escort companions in Pune.",
  },
};

export default function ProductPage() {
  return <ProductClient />;
}