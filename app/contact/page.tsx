import React from "react";
import { Metadata } from "next";
import ContactClient from "./ContactClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlanjali.in";

export const metadata: Metadata = {
  title: "Contact Us - 24/7 Call Girl & Escort Booking Pune",
  description: "Contact Anjali Escort Service in Pune 24/7. Confidential booking, instant WhatsApp & direct phone calls for verified call girls & models.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | Anjali Escort Service Pune",
    description: "Contact Anjali Escort Service in Pune 24/7. Confidential booking, instant WhatsApp & direct phone calls.",
    url: `${siteUrl}/contact`,
    siteName: "Anjali Escort Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Anjali Escort Service Pune",
    description: "Contact Anjali Escort Service in Pune 24/7 for discreet booking and inquiries.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
