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
  metadataBase: new URL("https://iqra-demolition.vercel.app"),

  title: {
    default: "Demolition Contractors in Mumbai | IQRA Demolition",
    template: "%s | IQRA Demolition",
  },

  description:
    "IQRA Demolition provides professional building demolition, RCC demolition, industrial demolition, excavation, site clearance and scrap recovery services in Mumbai, Navi Mumbai and across Maharashtra.",

  keywords: [
    "demolition contractors Mumbai",
    "demolition company Mumbai",
    "building demolition Mumbai",
    "RCC demolition Mumbai",
    "industrial demolition Mumbai",
    "factory demolition Mumbai",
    "site clearance Mumbai",
    "excavation contractors Mumbai",
    "demolition contractors Maharashtra",
    "IQRA Demolition",
  ],

  authors: [
    {
      name: "IQRA Demolition",
    },
  ],

  creator: "IQRA Demolition",

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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://iqra-demolition.vercel.app/",
    siteName: "IQRA Demolition",
    title: "Demolition Contractors in Mumbai | IQRA Demolition",
    description:
      "Professional building, RCC and industrial demolition, excavation and site clearance services in Mumbai, Navi Mumbai and Maharashtra.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "IQRA Demolition",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Demolition Contractors in Mumbai | IQRA Demolition",
    description:
      "Professional demolition, excavation and site clearance services across Mumbai, Navi Mumbai and Maharashtra.",
    images: ["/images/logo.png"],
  },

  alternates: {
    canonical: "https://iqra-demolition.vercel.app/",
  },

  icons: {
    icon: "/favicon.png",
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
