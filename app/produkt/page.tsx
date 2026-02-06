import type { Metadata } from "next";

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
    images: ["/og-image.jpg"],
  },
};

import ProduktPageClient from "./page.client";

export default function ProduktPage() {
  return <ProduktPageClient />;
}
