import React from "react";
import { Metadata } from "next";
import HelpSupportClient from "./HelpSupportClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlanjali.in";

export const metadata: Metadata = {
  title: "Help & Support - Customer Service & FAQs",
  description: "Get assistance, booking support, and inquiries help at Anjali Escort Service in Pune.",
  alternates: {
    canonical: `${siteUrl}/helpSupport`,
  },
  openGraph: {
    title: "Help & Support | Anjali Escort Service Pune",
    description: "Get assistance, customer care, and help with bookings and inquiries at Anjali Escort Service in Pune.",
    url: `${siteUrl}/helpSupport`,
    siteName: "Anjali Escort Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help & Support | Anjali Escort Service Pune",
    description: "Get customer assistance and support at Anjali Escort Service in Pune.",
  },
};

export default function HelpAndSupportPage() {
  return <HelpSupportClient />;
}