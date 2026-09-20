import React from "react";
import { Metadata } from "next";
import SecurityClient from "@/app/security/SecurityClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlanjali.in";

export const metadata: Metadata = {
  title: "Security – Safe Escort Booking & Anti-Scam Policy",
  description: "Learn how Anjali Escort Service protects users in Pune, identifies common scams, and reports fraudulent activities securely.",
  alternates: {
    canonical: `${siteUrl}/security`,
  },
  openGraph: {
    title: "Security & Anti-Scam Policy | Anjali Escort Service Pune",
    description: "Learn how Anjali Escort Service protects users in Pune, identifies common scams, and reports fraudulent activities securely.",
    url: `${siteUrl}/security`,
    siteName: "Anjali Escort Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security & Anti-Scam Policy | Anjali Escort Service Pune",
    description: "Security guidelines and scam reporting procedure for Anjali Escort Service Pune.",
  },
};

export default function SecurityPage() {
  return <SecurityClient />;
}