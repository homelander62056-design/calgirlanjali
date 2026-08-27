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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://calgirlanjali.com";

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
      "description": "Premium Escorts & Companion Services in Pune & PCMC",
      "publisher": {
        "@id": `${siteUrl}/#organization`,
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "Anjali Escort Service",
      "url": siteUrl,
      "logo": `${siteUrl}/images/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8294107610",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"],
      },
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
