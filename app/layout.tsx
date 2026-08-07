import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { Inter, Oswald, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  metadataBase: new URL("https://iqra-demolition.vercel.app"), // Replace with your actual domain later
  title: "IQRA Demolition",
  description: "Professional demolition services across India",
};

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

  authors: [{ name: "IQRA Demolition" }],

  openGraph: {
    title: "IQRA Demolition",
    description:
      "Professional Building Demolition & Excavation Services in Mumbai.",
    images: ["/images/logo.png"],
    type: "website",
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