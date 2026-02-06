import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen von Senury. Informationen zu Vertragsschluss, Preisen, Zahlung, Widerruf, Nutzungsrechten und Haftung.",
  keywords: [
    "Senury AGB",
    "Allgemeine Geschäftsbedingungen",
    "Nutzungsbedingungen",
    "Vertrag",
  ],
  alternates: {
    canonical: "/agb/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

import AgbPageClient from "./page.client";

export default function AgbPage() {
  return <AgbPageClient />;
}
