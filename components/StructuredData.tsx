export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "IQRA Demolition & Wrecking Co.",

    image: "https://iqrademolition.com/images/logo.png",

    logo: "https://iqrademolition.com/images/logo.png",

    url: "https://iqrademolition.com",

    telephone: "+91-9768888198",

    email: "info@iqrademolition.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },

    areaServed: [
      "Mumbai",
      "Navi Mumbai",
      "Thane",
      "Maharashtra",
    ],

    priceRange: "₹₹",

    openingHours: "Mo-Sa 09:00-18:00",

   sameAs: [
  "https://www.instagram.com/iqra_demolition/",
  "https://www.facebook.com/iqrademolition",
  "https://www.linkedin.com/company/iqra-demolition",
],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}