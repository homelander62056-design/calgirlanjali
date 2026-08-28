import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderPage from "./components/header";
import FooterPage from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#d62860",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.calgirlanjali.in";

export const metadata: Metadata = {
  title: {
    default: "Anjali Escort Service | Premium Escorts in Pune & PCMC",
    template: "%s | Anjali Escort Service",
  },
  description: "Anjali Escort Service provides professional, elegant, and discreet escort services in Pune. Explore verified call girls, VIP models, and contact us 24/7.",
  authors: [{ name: "Anjali Escort Service" }],
  keywords: [
    "call girl",
    "cal girl",
    "call girl Pune",
    "call girls in Pune",
    "Pune call girl service",
    "escort service",
    "escort service in Pune",
    "Pune escort services",
    "Anjali escort service",
    "calgirlanjali",
    "call girl Anjali",
    "independent escorts Pune",
    "VIP escorts Pune",
    "Russian escorts in Pune",
    "college girl escorts Pune",
    "housewife escorts Pune",
    "celebrity escorts Pune",
    "air hostess escorts Pune",
    "model escorts Pune",
    "Koregaon Park call girl",
    "Koregaon Park escorts",
    "Viman Nagar call girls",
    "Viman Nagar escorts",
    "Kalyani Nagar call girl",
    "Kalyani Nagar escorts",
    "Baner call girl",
    "Baner escorts service",
    "Hinjewadi call girl",
    "Hinjewadi IT park escorts",
    "Wakad call girl",
    "Wakad escort service",
    "Kothrud call girl",
    "Kothrud escorts",
    "Hadapsar call girls",
    "Magarpatta call girl",
    "Magarpatta escorts",
    "Shivaji Nagar escorts",
    "Aundh call girl",
    "PCMC call girl service",
    "Pimpri Chinchwad escorts",
    "hotel outcall escorts Pune",
    "incall escort service Pune",
    "24/7 call girl service Pune",
    "genuine call girl in Pune",
    "verified Pune escorts",
    "cheap call girls in Pune",
    "luxury escorts in Pune",
    "high profile escorts Pune",
    "cash on delivery call girl Pune",
    "WhatsApp call girl number Pune",
    "Pune companion service",
    "best escort service Pune",
  ],
  creator: "Anjali Escort Service",
  publisher: "Anjali Escort Service",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Anjali Escort Service | Premium Escorts in Pune & PCMC",
    description: "Anjali Escort Service provides professional, elegant, and discreet escort services in Pune. Explore verified profiles and contact us 24/7.",
    url: siteUrl,
    siteName: "Anjali Escort Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjali Escort Service | Premium Escorts in Pune & PCMC",
    description: "Anjali Escort Service provides professional, elegant, and discreet escort services in Pune. Explore verified profiles and contact us 24/7.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Anjali Escort Service",
      "alternateName": ["CalGirl Anjali", "Anjali Pune Escorts", "Call Girl Pune"],
      "description": "Premier Escort Service and Call Girls in Pune & PCMC. 100% verified independent companions available 24/7.",
      "publisher": {
        "@id": `${siteUrl}/#organization`,
      },
      "inLanguage": "en-IN",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${siteUrl}/product?city={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#organization`,
      "name": "Anjali Escort Service",
      "alternateName": "CalGirl Anjali",
      "url": siteUrl,
      "logo": `${siteUrl}/images/logo.png`,
      "image": `${siteUrl}/images/firstpage.avif`,
      "description": "Verified VIP Call Girls & Escort Service in Pune with direct WhatsApp and phone booking.",
      "telephone": "+91-8294107610",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Online",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Koregaon Park / Viman Nagar / Baner",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411001",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.5204,
        "longitude": 73.8567,
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
        "Pune",
        "PCMC",
        "Koregaon Park",
        "Kalyani Nagar",
        "Viman Nagar",
        "Hinjewadi",
        "Baner",
        "Wakad",
        "Kothrud",
        "Shivajinagar",
        "Aundh",
        "Magarpatta City",
        "Kharadi",
        "Pimpri Chinchwad",
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1480",
        "bestRating": "5",
        "worstRating": "1",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8294107610",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I book a verified call girl in Pune via Anjali Escort Service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Booking is instant and 100% confidential. Browse our verified models gallery on calgirlanjali, select your preferred companion, and click the WhatsApp or Call button (+91 82941 07610) to confirm your booking within minutes.",
          },
        },
        {
          "@type": "Question",
          "name": "Which areas in Pune do you provide escort services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide 24/7 in-call and out-call escort services across all prime locations in Pune and PCMC including Koregaon Park, Kalyani Nagar, Viman Nagar, Hinjewadi IT Park, Baner, Wakad, Kothrud, Magarpatta City, Kharadi, and Shivaji Nagar.",
          },
        },
        {
          "@type": "Question",
          "name": "Are the escort photos and profiles 100% genuine and verified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every companion profile on Anjali Escort Service is verified with genuine recent photos, accurate specifications, and real direct contact information.",
          },
        },
        {
          "@type": "Question",
          "name": "Is my privacy and confidentiality guaranteed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We maintain strict discretion and client privacy. No personal data is shared or retained.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col justify-between bg-white text-zinc-800 font-sans">
        <HeaderPage />
        <main className="flex-1">{children}</main>
        <FooterPage />
      </body>
    </html>
  );
}
