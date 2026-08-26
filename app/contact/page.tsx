import React from "react";
import { Metadata } from "next";
import ContactClient from "./ContactClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://priyaescortservices.com";

export const metadata: Metadata = {
  title: "Contact Us - 24/7 Concierge & Inquiries",
  description: "Contact Priya Escort Services in Pune 24/7. Confidential booking, instant WhatsApp & direct phone calls.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | Priya Escort Services",
    description: "Contact Priya Escort Services in Pune 24/7. Confidential booking, instant WhatsApp & direct phone calls.",
    url: `${siteUrl}/contact`,
    siteName: "cal girl pune",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Priya Escort Services",
    description: "Contact Priya Escort Services in Pune 24/7 for discreet booking and inquiries.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
