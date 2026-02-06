import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise | Transparente Kosten für Ihr Notariat",
  description:
    "Senury Preise: Pilot-Paket ab 299€/Monat, Professional ab 599€/Monat, Enterprise auf Anfrage. Alle Pakete sind §203 StGB-konform und DSGVO-konform.",
  keywords: [
    "Senury Preise",
    "Notariatssoftware Kosten",
    "KI Software Preise",
    "Notar Software Abo",
    "Kaufvertrag Software Preis",
  ],
  alternates: {
    canonical: "/preis/",
  },
  openGraph: {
    title: "Senury Preise | Transparente Kosten für Ihr Notariat",
    description:
      "Pilot-Paket ab 299€/Monat, Professional ab 599€/Monat. §203 StGB-konform, DSGVO-konform, Made in Germany.",
    url: "https://senury.com/preis/",
    images: ["/og-image.jpg"],
  },
};

import PreisPageClient from "./page.client";

export default function PreisPage() {
  return <PreisPageClient />;
}
