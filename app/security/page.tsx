import React from "react";
import { Metadata } from "next";
import SecurityClient from "@/app/security/SecurityClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://priyaescortservices.com";

export const metadata: Metadata = {
  title: "Security – How to Report a Scam",
  description: "Learn how Priya Escort Services protects users, identifies common scams, and reports fraudulent activities securely.",
  alternates: {
    canonical: `${siteUrl}/security`,
  },
  openGraph: {
    title: "Security & Anti-Scam Policy | Priya Escort Services",
    description: "Learn how Priya Escort Services protects users, identifies common scams, and reports fraudulent activities securely.",
    url: `${siteUrl}/security`,
    siteName: "cal girl hyderabad",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security & Anti-Scam Policy | Priya Escort Services",
    description: "Security guidelines and scam reporting procedure for Priya Escort Services.",
  },
};

export default function SecurityPage() {
  return <SecurityClient />;
}