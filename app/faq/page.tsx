import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Häufig gestellte Fragen zu Senury",
  description:
    "Antworten auf alle wichtigen Fragen zu Senury: Preise, Sicherheit, §203 StGB, DSGVO, Integrationen und mehr. Finden Sie schnell die passende Antwort.",
  keywords: [
    "Senury FAQ",
    "Notariatssoftware Fragen",
    "KI Notar FAQ",
    "§203 StGB Fragen",
    "DSGVO Notar Software",
  ],
  alternates: {
    canonical: "/faq/",
  },
  openGraph: {
    title: "Senury FAQ | Häufig gestellte Fragen",
    description:
      "Antworten auf alle wichtigen Fragen zu Senury: Preise, Sicherheit, §203 StGB, DSGVO und mehr.",
    url: "https://senury.com/faq/",
    images: ["/og-image.jpg"],
  },
};

import FAQPageClient from "./page.client";

export default function FAQPage() {
  return <FAQPageClient />;
}
