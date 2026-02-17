import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Wir helfen Ihnen gerne",
  description:
    "Kontaktieren Sie Senury für Fragen zur Notariatssoftware, Preise oder Terminvereinbarung. Wir sind für Sie da.",
  keywords: [
    "Senury Kontakt",
    "Notariatssoftware Anfrage",
    "KI Notar Kontakt",
    "Demo vereinbaren",
  ],
  alternates: {
    canonical: "/kontakt/",
  },
  openGraph: {
    title: "Senury Kontakt | Wir helfen Ihnen gerne",
    description:
      "Kontaktieren Sie uns für Fragen zur Notariatssoftware, Preise oder Terminvereinbarung.",
    url: "https://senury.com/kontakt/",
    images: ["/favicon.png"],
  },
};

import KontaktPageClient from "./page.client";

export default function KontaktPage() {
  return <KontaktPageClient />;
}
