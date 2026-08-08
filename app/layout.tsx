import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { Inter, Oswald, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iqra-demolition.com"),

  title: {
    default: "Demolition Contractors in India | IQRA Demolition",
    template: "%s | IQRA Demolition",
  },

  description:
    "IQRA Demolition is a professional demolition and dismantling company based in Mumbai, providing building demolition, RCC demolition, industrial demolition, factory dismantling, excavation, site clearance and scrap recovery services across India.",

  keywords: [
    "demolition contractors India",
    "demolition company India",
    "demolition services India",
    "building demolition contractors India",
    "building demolition India",
    "RCC demolition contractors India",
    "RCC structure demolition India",
    "industrial demolition India",
    "industrial demolition contractors India",
    "factory demolition India",
    "factory dismantling India",
    "building dismantling India",
    "site clearance contractors India",
    "site clearance services India",
    "excavation contractors India",
    "excavation services India",
    "concrete breaking contractors India",
    "scrap recovery demolition India",
    "demolition contractor Maharashtra",
    "demolition contractor Mumbai",
    "IQRA Demolition",
  ],

  authors: [
    {
      name: "IQRA Demolition",
    },
  ],

  creator: "IQRA Demolition",

  publisher: "IQRA Demolition",

  applicationName: "IQRA Demolition",

  category: "Construction",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://iqra-demolition.com/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://iqra-demolition.com/",
    siteName: "IQRA Demolition",

    title: "Demolition Contractors in India | IQRA Demolition",

    description:
      "Professional building demolition, RCC demolition, industrial demolition, factory dismantling, excavation, site clearance and scrap recovery services across India.",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "IQRA Demolition - Professional Demolition Contractors in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Demolition Contractors in India | IQRA Demolition",

    description:
      "Professional demolition, dismantling, excavation and site clearance services across India.",

    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geist.variable,
          inter.variable,
          oswald.variable,
          "font-sans"
        )}
      >
        <StructuredData />

        {children}
      </body>
    </html>
  );
}
