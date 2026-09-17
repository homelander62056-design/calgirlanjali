import React from "react";
import { Metadata } from "next";
import ProductClient from "./ProductClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlanjali.in";

export const metadata: Metadata = {
  title: "Call Girls & Escort Service in Pune | Verified VIP Models 24/7",
  description: "Browse verified high-profile independent call girls & escort companions in Pune. Available 24/7 in Koregaon Park, Kalyani Nagar, Viman Nagar, Hinjewadi, Baner, Wakad & PCMC.",
  keywords: [
    "call girl Pune",
    "call girls in Pune",
    "escort service in Pune",
    "Pune escorts",
    "Koregaon Park call girl",
    "Viman Nagar escorts",
    "Kalyani Nagar call girl",
    "Hinjewadi escorts",
    "Baner call girl",
    "Wakad escorts",
    "independent escorts Pune",
    "VIP escorts Pune",
    "hotel outcall Pune",
  ],
  alternates: {
    canonical: `${siteUrl}/product`,
  },
  openGraph: {
    title: "Call Girls & Escort Service in Pune | Verified VIP Models 24/7",
    description: "Browse verified high-profile independent call girls & escort companions in Pune. Available 24/7 in Koregaon Park, Kalyani Nagar, Viman Nagar, Hinjewadi, and more.",
    url: `${siteUrl}/product`,
    siteName: "Anjali Escort Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Call Girls & Escort Service in Pune | Verified VIP Models 24/7",
    description: "Browse verified high-profile independent call girls & escort companions in Pune. Available 24/7.",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune, Maharashtra, India",
    "geo.position": "18.5204;73.8567",
    "ICBM": "18.5204, 73.8567",
    "coverage": "Pune, Maharashtra, India",
    "distribution": "Global",
    "rating": "General",
    "target": "all",
  },
};

export default function ProductPage() {
  return <ProductClient />;
}