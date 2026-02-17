import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo | Persönliche Produktvorführung",
  description:
    "Vereinbaren Sie eine persönliche Demo von Senury. Lassen Sie sich unsere KI-gestützte Notariatssoftware in einem 30-minütigen Videoanruf vorstellen.",
  keywords: [
    "Senury Demo",
    "Notariatssoftware Demo",
    "KI Notar Demo",
    "Produktvorführung",
    "Software Test",
  ],
  alternates: {
    canonical: "/demo/",
  },
  openGraph: {
    title: "Senury Demo | Persönliche Produktvorführung",
    description:
      "Vereinbaren Sie eine persönliche Demo. Lassen Sie sich Senury in einem 30-minütigen Videoanruf vorstellen.",
    url: "https://senury.com/demo/",
    images: ["/favicon.png"],
  },
};

import DemoPageClient from "./page.client";

export default function DemoPage() {
  return <DemoPageClient />;
}
