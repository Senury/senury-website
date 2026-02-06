import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senury | KI-gestützte Notariatssoftware",
  description:
    "Senury hilft Notaren bei der effizienten Erstellung von Kaufverträgen und Urkunden. §203 StGB-konform, DSGVO-konform, Made in Germany. Vereinbaren Sie eine Demo.",
  keywords: [
    "Notariatssoftware",
    "Kaufvertrag Software",
    "KI Notar",
    "Beurkundung",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Senury | KI-gestützte Notariatssoftware",
    description:
      "Senury hilft Notaren bei der effizienten Erstellung von Kaufverträgen und Urkunden. Vereinbaren Sie eine Demo.",
    url: "https://senury.com",
    images: ["/og-image.jpg"],
  },
};

import HomePageClient from "./page.client";

export default function HomePage() {
  return <HomePageClient />;
}
