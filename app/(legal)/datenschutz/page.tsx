import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Senury. Informationen zur Verarbeitung Ihrer personenbezogenen Daten, Ihre Rechte und unseren Datenschutzbeauftragten.",
  keywords: [
    "Senury Datenschutz",
    "Datenschutzerklärung",
    "DSGVO",
    "Datenschutzbeauftragter",
  ],
  alternates: {
    canonical: "/datenschutz/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

import DatenschutzPageClient from "./page.client";

export default function DatenschutzPage() {
  return <DatenschutzPageClient />;
}
