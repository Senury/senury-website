import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senury live erleben | Demo-Termin",
  description:
    "Sichern Sie sich einen der ersten Demo-Termine im April 2026. Erleben Sie live, wie Senury Ihren Notariatsalltag transformiert. Wählen Sie Ihren Wunschtermin.",
  keywords: [
    "Senury Demo",
    "Demo-Termin",
    "Notariatssoftware Demo",
    "KI Notar Demo",
    "Produktvorführung",
    "Termin vereinbaren",
  ],
  alternates: {
    canonical: "/demo/",
  },
  openGraph: {
    title: "Senury live erleben | Demo-Termin",
    description:
      "Sichern Sie sich einen der ersten Demo-Termine im April 2026. Wählen Sie Ihren Wunschtermin – wir bestätigen innerhalb von 24 Stunden.",
    url: "https://senury.com/demo/",
    images: ["/favicon.png"],
  },
};

import DemoPageClient from "./page.client";
import DemoComingSoon from "./page-coming-soon";

export default function DemoPage() {
  const isEnabled = process.env.ENABLE_DEMO_REQUEST === "true";

  if (!isEnabled) {
    return <DemoComingSoon />;
  }

  return <DemoPageClient />;
}
