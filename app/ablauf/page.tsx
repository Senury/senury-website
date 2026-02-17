import type { Metadata } from "next";
import AblaufPageClient from "./page.client";

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
    images: ["/favicon.png"],
  },
};

// HowTo Schema Component
function HowToSchema() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Beurkundungsprozess mit Senury",
    "description": "Senury unterstützt Ihren gesamten Beurkundungsprozess in 5 Schritten: Von der Datenerfassung bis zur Vollzugsdokumentation.",
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "299"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Vorliegende Unterlagen"
      },
      {
        "@type": "HowToSupply",
        "name": "Kundendokumente"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Senury Software"
      },
      {
        "@type": "HowToTool",
        "name": "Microsoft Word"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Intelligente Datenerfassung",
        "text": "Laden Sie vorliegende Sachunterlagen und Kundendokumente hoch. Senury erkennt und extrahiert automatisch alle relevanten Informationen.",
        "url": "https://senury.com/ablauf/#intake"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Automatische Datenextraktion",
        "text": "Die KI prüft alle extrahierten Daten auf Vollständigkeit und Plausibilität. Fehlende Informationen werden markiert.",
        "url": "https://senury.com/ablauf/#extraction"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "KI-gestütztes Drafting",
        "text": "Senury generiert die Urkunde Paragraph für Paragraph, basierend auf Ihren bewährten Vorlagen und Klauseln.",
        "url": "https://senury.com/ablauf/#drafting"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Inhaltliche Prüfung",
        "text": "Sie überprüfen den Entwurf inhaltlich, nehmen Korrekturen vor und finalisieren zur Beurkundung.",
        "url": "https://senury.com/ablauf/#review"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Export & Vollzug",
        "text": "Exportieren Sie die finale Urkunde in Microsoft Word oder PDF. Über die XNotar-Integration können Sie direkt weiterarbeiten.",
        "url": "https://senury.com/ablauf/#export"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  );
}

export default function AblaufPage() {
  return (
    <>
      <HowToSchema />
      <AblaufPageClient />
    </>
  );
}
