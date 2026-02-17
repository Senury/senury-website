import type { Metadata } from "next";
import FAQPageClient from "./page.client";

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
    images: ["/favicon.png"],
  },
};

// FAQPage Schema Component
function FAQPageSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ist Senury für alle Notare geeignet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Senury ist für alle Notare und deren Mitarbeitende geeignet, die effizienter arbeiten möchten. Besonders hilfreich ist Senury bei der Erstellung von Kaufverträgen und anderen Urkunden."
        }
      },
      {
        "@type": "Question",
        "name": "Ist Senury §203 StGB-konform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Senury ist von Grund auf für den §203 StGB-Kontext entwickelt. Die berufsrechtliche Verschwiegenheitsverpflichtung wird unmittelbar bei Beginn der Zusammenarbeit abgeschlossen. Alle Daten werden in ISO-27001-zertifizierten Rechenzentren in Deutschland gespeichert."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich meine eigenen Vorlagen verwenden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Senury unterstützt die Verwendung Ihrer eigenen Vorlagen. Sie können Ihre bewährten Klauseln zentral verwalten und der KI-Assistent berücksichtigt diese bei der Entwurfserstellung."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Exportformate werden unterstützt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Senury unterstützt den Export in Microsoft Word (.docx) sowie PDF. Über die XNotar-Integration können Sie Dokumente direkt in Ihr Notariatssystem übertragen."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist das Pilot-Paket?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Das Pilot-Paket ist für Notare gedacht, die Senury ausprobieren möchten. Es umfasst alle Kernfunktionen für bis zu 50 Vorgänge pro Monat. Die Mindestlaufzeit beträgt 3 Monate, danach können Sie flexibel kündigen."
        }
      },
      {
        "@type": "Question",
        "name": "Wie sicher sind meine Mandantendaten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alle Daten werden mit AES-256 verschlüsselt – sowohl im Transit (TLS 1.3) als auch im Ruhezustand. Die Server stehen in ISO-27001-zertifizierten Rechenzentren in Deutschland. Es erfolgt keine Datenweitergabe an Dritte."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich mein Paket später wechseln?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Sie können jederzeit zwischen den Paketen wechseln. Ein Wechsel zum Professional- oder Enterprise-Paket ist jederzeit möglich, eine Reduzierung zum Monatsende."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQPageSchema />
      <FAQPageClient />
    </>
  );
}
