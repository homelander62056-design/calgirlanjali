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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://priyaescortservices.com";

export const metadata: Metadata = {
  title: {
    default: "cal girl pune | Professional Escort Services in Pune",
    template: "%s | cal girl pune",
  },
  description: "Priya Escort Services provides professional and discreet escort services in Pune. Explore our services and contact us for more information.",
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
    title: "cal girl pune | Professional Escort Services in Pune",
    description: "Priya Escort Services provides professional and discreet escort services in Pune. Explore our services and contact us for more information.",
    url: siteUrl,
    siteName: "cal girl pune",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cal girl pune | Professional Escort Services in Pune",
    description: "Priya Escort Services provides professional and discreet escort services in Pune. Explore our services and contact us for more information.",
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
      <body className="min-h-full flex flex-col justify-between bg-white text-zinc-800 font-sans">
        <HeaderPage />
        <main className="flex-1">{children}</main>
        <FooterPage />
      </body>
    </html>
  );
}
