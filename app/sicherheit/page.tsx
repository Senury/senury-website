import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sicherheit | §203 StGB-konform & DSGVO-konform",
  description:
    "Senury erfüllt höchste Sicherheitsstandards: AES-256 Verschlüsselung, deutsches Hosting, §203 StGB-konform, DSGVO-konform, ISO 27001 orientiert.",
  keywords: [
    "Senury Sicherheit",
    "§203 StGB konform",
    "DSGVO konform",
    "Notar Software sicher",
    "KI Software Datenschutz",
    "Verschlüsselung Notariat",
  ],
  alternates: {
    canonical: "/sicherheit/",
  },
  openGraph: {
    title: "Senury Sicherheit | §203 StGB-konform & DSGVO-konform",
    description:
      "Höchste Sicherheitsstandards für Ihr Notariat. AES-256 Verschlüsselung, deutsches Hosting, ISO 27001 orientiert.",
    url: "https://senury.com/sicherheit/",
    images: ["/og-image.jpg"],
  },
};

import SicherheitPageClient from "./page.client";

export default function SicherheitPage() {
  return <SicherheitPageClient />;
}
