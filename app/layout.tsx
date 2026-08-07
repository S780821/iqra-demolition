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
  metadataBase: new URL("https://iqra-demolition.vercel.app"), // Change to your custom domain after purchase

  title: {
    default: "IQRA Demolition",
    template: "%s | IQRA Demolition",
  },

  description:
    "IQRA Demolition provides professional building demolition, industrial demolition, excavation, dismantling and site clearance services across Mumbai, Navi Mumbai and Maharashtra.",

  keywords: [
    "Building Demolition Mumbai",
    "Demolition Contractor Mumbai",
    "Industrial Demolition",
    "Excavation Contractor",
    "Site Clearance",
    "Concrete Demolition",
    "RCC Demolition",
    "Rock Breaking",
    "Demolition Maharashtra",
    "IQRA Demolition",
  ],

  authors: [
    {
      name: "IQRA Demolition",
    },
  ],

  openGraph: {
    title: "IQRA Demolition",
    description:
      "Professional Building Demolition & Excavation Services in Mumbai.",

    url: "https://iqra-demolition.vercel.app",

    siteName: "IQRA Demolition",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "IQRA Demolition",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IQRA Demolition",
    description:
      "Professional Building Demolition & Excavation Services in Mumbai.",
    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${oswald.variable}`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
