import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ablauf | So funktioniert Senury in 5 Schritten",
  description:
    "Von der Datenerfassung bis zur Vollzugsdokumentation: Senury unterstützt Ihren gesamten Beurkundungsprozess in nur 5 Schritten. Effizient, sicher, nachvollziehbar.",
  keywords: [
    "Senury Ablauf",
    "Beurkundungsprozess",
    "Kaufvertrag erstellen",
    "Notar Workflow",
    "Urkundenprozess",
  ],
  alternates: {
    canonical: "/ablauf/",
  },
  openGraph: {
    title: "Senury Ablauf | So funktioniert Senury in 5 Schritten",
    description:
      "Von der Datenerfassung bis zur Vollzugsdokumentation: Senury unterstützt Ihren gesamten Beurkundungsprozess.",
    url: "https://senury.com/ablauf/",
    images: ["/og-image.jpg"],
  },
};

import AblaufPageClient from "./page.client";

export default function AblaufPage() {
  return <AblaufPageClient />;
}
