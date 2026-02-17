import type { Metadata } from "next";
import HomePageClient from "./page.client";

export const metadata: Metadata = {
  title: "Senury | KI-gestützte Notariatssoftware",
  description:
    "Senury hilft Notaren bei der effizienten Erstellung von Kaufverträgen und Urkunden. §203 StGB-konform, DSGVO-konform, Made in Germany. Vereinbaren Sie eine Demo.",
  keywords: [
    "Notariatssoftware",
    "Kaufvertrag Software",
    "KI Notar",
    "Beurkundung",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Senury | KI-gestützte Notariatssoftware",
    description:
      "Senury hilft Notaren bei der effizienten Erstellung von Kaufverträgen und Urkunden. Vereinbaren Sie eine Demo.",
    url: "https://senury.com",
    images: ["/favicon.png"],
  },
};

// Organization Schema Component
function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Senury",
    "url": "https://senury.com",
    "logo": "https://senury.com/favicon.png",
    "description": "Senury ist eine KI-gestützte Notariatssoftware für die effiziente Erstellung von Kaufverträgen und Urkunden.",
    "sameAs": [
      "https://www.linkedin.com/company/senury"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "hello@senury.com",
      "availableLanguage": ["German"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <HomePageClient />
    </>
  );
}
