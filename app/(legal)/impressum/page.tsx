import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Rechtliche Hinweise",
  description:
    "Impressum von Senury. Angaben gemäß § 5 TMG. Kontakt, Handelsregister, USt-IdNr. und verantwortliche Personen.",
  keywords: [
    "Senury Impressum",
    "Rechtliche Hinweise",
    "Anbieterkennzeichnung",
  ],
  alternates: {
    canonical: "/impressum/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

import ImpressumPageClient from "./page.client";

export default function ImpressumPage() {
  return <ImpressumPageClient />;
}
