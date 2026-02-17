import type { Metadata } from "next";
import ProduktPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Produkt | KI-gestützte Notariatssoftware",
  description:
    "Senury bietet intelligente Vorgangsverwaltung, KI-gestütztes Drafting, Recherche und Datenerfassung. Die Komplettlösung für Ihr Notariat.",
  keywords: [
    "Notariatssoftware Funktionen",
    "KI Kaufvertrag",
    "Vorgangsverwaltung Notar",
    "Klauselbibliothek",
    "Notar Software Features",
  ],
  alternates: {
    canonical: "/produkt/",
  },
  openGraph: {
    title: "Senury Produkt | KI-gestützte Notariatssoftware",
    description:
      "Intelligente Vorgangsverwaltung, KI-gestütztes Drafting und Recherche. Die Komplettlösung für Ihr Notariat.",
    url: "https://senury.com/produkt/",
    images: ["/favicon.png"],
  },
};

// SoftwareApplication Schema Component
function SoftwareApplicationSchema() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Senury",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "EUR",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock"
    },
    "description": "Senury ist eine KI-gestützte Notariatssoftware für die effiziente Erstellung von Kaufverträgen und Urkunden. §203 StGB-konform, DSGVO-konform, Made in Germany.",
    "url": "https://senury.com",
    "screenshot": "https://senury.com/favicon.png",
    "featureList": "Vorgangsverwaltung, KI-gestütztes Drafting, Recherche, Datenerfassung, Klauselbibliothek, Microsoft 365 Integration",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
    />
  );
}

export default function ProduktPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <ProduktPageClient />
    </>
  );
}
