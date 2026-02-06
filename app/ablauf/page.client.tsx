"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TextCursorInput, FileText, Search, PenTool, CheckCircle, Settings, Database, Puzzle, Workflow, Check, Users, FileCheck, Download } from "lucide-react";

export default function AblaufPageClient() {
  const t = useTranslations("process");

  const timelineSteps = [
    { key: "intake", icon: FileText, color: "bg-[#c9a66b]" },
    { key: "extraction", icon: Database, color: "bg-[#6b6b6b]" },
    { key: "drafting", icon: PenTool, color: "bg-[#6b6b6b]" },
    { key: "review", icon: Search, color: "bg-[#6b6b6b]" },
    { key: "export", icon: CheckCircle, color: "bg-[#c9a66b]" },
  ];

  const flexibilityCards = [
    { key: "templates", icon: Database },
    { key: "clauses", icon: Puzzle },
    { key: "workflows", icon: Workflow },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#fdfcfb] to-white overflow-hidden">
        {/* Subtle path line - suggests flow/process */}
        <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 opacity-[0.03] hidden lg:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 Q300,20 600,50 T1200,50" fill="none" stroke="#1a1a1a" strokeWidth="2"/>
        </svg>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="pill-badge bg-[#f5f5f5] text-[#6b6b6b] border border-[#e8e8e8] mb-6 inline-block">
              {t("hero.badge")}
            </span>
            <h1 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-[#6b6b6b]">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {timelineSteps.map((step, index) => (
              <div key={step.key} className="relative">
                {/* Connection Line */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-24 w-px h-24 bg-[#e8e8e8]"></div>
                )}

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 ${step.color} text-white flex items-center justify-center rounded-lg font-serif text-lg sm:text-xl shadow-soft flex-shrink-0`}>
                        {t(`timeline.steps.${step.key}.number`)}
                      </div>
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center rounded-lg flex-shrink-0`}>
                        <step.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#1a1a1a]" />
                      </div>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a] mb-2">{t(`timeline.steps.${step.key}.title`)}</h2>
                    <p className="text-[#6b6b6b] font-medium mb-4">{t(`timeline.steps.${step.key}.subtitle`)}</p>
                    <p className="text-[#6b6b6b] leading-relaxed mb-6">{t(`timeline.steps.${step.key}.description`)}</p>
                    <ul className="space-y-2">
                      {[0, 1, 2].map((i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#3d3d3d]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#9a9a9a]"></div>
                          {t(`timeline.steps.${step.key}.features.${i}`)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-[#faf8f7] p-4 sm:p-6 lg:p-8 border border-[#e8e8e8] rounded-xl">
                      {/* Mockup content based on step */}
                      {index === 0 && <DocumentUploadMockup />}
                      {index === 1 && <DataExtractionMockup />}
                      {index === 2 && <AIDraftingMockup />}
                      {index === 3 && <ReviewMockup />}
                      {index === 4 && <ExportMockup />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexibility Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">{t("flexibility.label")}</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              {t("flexibility.title")}
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              {t("flexibility.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {flexibilityCards.map((card) => (
              <Card key={card.key} className="bg-white border-[#e8e8e8] rounded-xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center mb-6 rounded-lg">
                    <card.icon className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-3">{t(`flexibility.cards.${card.key}.title`)}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{t(`flexibility.cards.${card.key}.description`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Settings className="w-16 h-16 text-[#6b6b6b] mx-auto mb-8" />
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-[#9a9a9a] text-lg mb-10 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <Button className="bg-white text-[#1a1a1a] hover:bg-[#f5f5f5] h-14 px-8 text-base rounded-full transition-colors" asChild>
            <Link href="/demo/">
              {t("cta.button")}
            </Link>
          </Button>
          <p className="text-xs text-[#6b6b6b] mt-6">
            {t("cta.footer")}
          </p>
        </div>
      </section>
    </div>
  );
}

// Mockup Components for 4-Step Workflow

function DocumentUploadMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <FileText className="w-4 h-4 text-[#c9a66b]" />
        <span className="text-xs font-medium text-[#1a1a1a]">Dokumenten-Upload</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="border-2 border-dashed border-[#e8e8e8] rounded-lg p-4 bg-[#fafafa] text-center">
          <div className="w-10 h-10 bg-[#c9a66b]/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <Download className="w-5 h-5 text-[#c9a66b] rotate-180" />
          </div>
          <span className="text-xs text-[#6b6b6b]">Dokumente hier ablegen</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-2 bg-[#f5f5f5] rounded-lg">
            <div className="w-8 h-8 bg-[#c9a66b]/20 rounded flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#c9a66b]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-[#1a1a1a] truncate">Grundbuchauszug.pdf</div>
              <div className="text-[10px] text-[#9a9a9a]">2.4 MB</div>
            </div>
            <Check className="w-4 h-4 text-[#c9a66b]" />
          </div>
          <div className="flex items-center gap-2 p-2 bg-[#f5f5f5] rounded-lg">
            <div className="w-8 h-8 bg-[#c9a66b]/20 rounded flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#c9a66b]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-[#1a1a1a] truncate">Notaranschreiben.pdf</div>
              <div className="text-[10px] text-[#9a9a9a]">1.1 MB</div>
            </div>
            <Check className="w-4 h-4 text-[#c9a66b]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DataExtractionMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <Database className="w-4 h-4 text-[#6b6b6b]" />
        <span className="text-xs font-medium text-[#1a1a1a]">Datenextraktion</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 h-1.5 bg-[#f5f5f5] rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-[#6b6b6b] rounded-full"></div>
          </div>
          <span className="text-[10px] text-[#6b6b6b]">75%</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-[#f5f5f5] rounded-lg">
            <span className="text-xs text-[#6b6b6b]">Grundstücksgröße</span>
            <span className="text-xs text-[#1a1a1a] font-medium">1.250 m²</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-[#f5f5f5] rounded-lg">
            <span className="text-xs text-[#6b6b6b]">Eigentümer</span>
            <span className="text-xs text-[#1a1a1a] font-medium">Dr. Schmidt GmbH</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-[#f5f5f5] rounded-lg">
            <span className="text-xs text-[#6b6b6b]">Grundbuchblatt</span>
            <span className="text-xs text-[#1a1a1a] font-medium">Buch 12, Blatt 847</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-[#c9a66b]/10 rounded-lg border border-[#c9a66b]/20">
            <Check className="w-3.5 h-3.5 text-[#c9a66b]" />
            <span className="text-[10px] text-[#1a1a1a]">Alle Pflichtangaben extrahiert</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIDraftingMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <PenTool className="w-4 h-4 text-[#3d3d3d]" />
        <span className="text-xs font-medium text-[#1a1a1a]">KI-Entwurf</span>
      </div>
      <div className="p-4">
        <div className="space-y-2 mb-4">
          <div className="h-2 bg-[#f5f5f5] rounded w-full"></div>
          <div className="h-2 bg-[#f5f5f5] rounded w-11/12"></div>
          <div className="h-2 bg-[#c9a66b]/30 rounded w-4/5"></div>
          <div className="h-2 bg-[#f5f5f5] rounded w-full"></div>
          <div className="h-2 bg-[#f5f5f5] rounded w-5/6"></div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-[#3d3d3d] rounded-lg">
          <div className="w-2 h-2 bg-[#c9a66b] rounded-full animate-pulse"></div>
          <span className="text-[10px] text-white">Paragraph 3 wird generiert...</span>
        </div>
        <div className="flex gap-2 mt-3">
          <span className="px-2 py-1 bg-[#f5f5f5] text-[#6b6b6b] text-[10px] rounded">§433 BGB</span>
          <span className="px-2 py-1 bg-[#f5f5f5] text-[#6b6b6b] text-[10px] rounded">§925 BGB</span>
          <span className="px-2 py-1 bg-[#f5f5f5] text-[#6b6b6b] text-[10px] rounded">12 Klauseln</span>
        </div>
      </div>
    </div>
  );
}

function ReviewMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-[#1a1a1a]" />
        <span className="text-xs font-medium text-[#1a1a1a]">Prüfung & Freigabe</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3 p-3 bg-[#fafafa] rounded-lg border border-[#e8e8e8]">
          <div className="w-8 h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-medium">N</span>
          </div>
          <div className="flex-1">
            <div className="text-xs text-[#1a1a1a] font-medium">Notar prüft Entwurf</div>
            <div className="text-[10px] text-[#9a9a9a]">In Bearbeitung</div>
          </div>
          <div className="w-4 h-4 border-2 border-[#c9a66b] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="space-y-2">
          {[
            "Parteienangaben vollständig",
            "Kaufpreis geprüft",
            "Grundbuchdaten korrekt",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#1a1a1a]" />
              <span className="text-xs text-[#3d3d3d]">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 p-2 bg-[#c9a66b]/10 rounded-lg border border-[#c9a66b]/20">
          <Check className="w-4 h-4 text-[#c9a66b]" />
          <span className="text-[10px] text-[#1a1a1a]">Zur Beurkundung freigegeben</span>
        </div>
      </div>
    </div>
  );
}

function ExportMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <Download className="w-4 h-4 text-[#c9a66b]" />
        <span className="text-xs font-medium text-[#1a1a1a]">Export & Integration</span>
      </div>
      <div className="p-4 space-y-4">
        {/* Success indicator */}
        <div className="flex items-center gap-3 p-3 bg-[#c9a66b]/10 rounded-lg border border-[#c9a66b]/20">
          <div className="w-8 h-8 bg-[#c9a66b] rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-xs font-medium text-[#1a1a1a]">Beurkundung abgeschlossen</div>
            <div className="text-[10px] text-[#6b6b6b]">Nr. 234/2024 • 15.03.2024</div>
          </div>
        </div>

        {/* Export formats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center gap-2 p-3 bg-[#fafafa] rounded-lg border border-[#e8e8e8] hover:border-[#c9a66b]/50 transition-colors">
            <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="text-center">
              <div className="text-[10px] font-medium text-[#1a1a1a]">DOCX</div>
              <div className="text-[9px] text-[#9a9a9a]">Bearbeitbar</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 bg-[#fafafa] rounded-lg border border-[#e8e8e8] hover:border-[#c9a66b]/50 transition-colors">
            <div className="w-10 h-10 bg-[#6b6b6b] rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="text-center">
              <div className="text-[10px] font-medium text-[#1a1a1a]">PDF/A</div>
              <div className="text-[9px] text-[#9a9a9a]">Archiv</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 p-3 bg-[#fafafa] rounded-lg border border-[#e8e8e8] hover:border-[#c9a66b]/50 transition-colors">
            <div className="w-10 h-10 bg-[#c9a66b] rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div className="text-center">
              <div className="text-[10px] font-medium text-[#1a1a1a]">XNotar</div>
              <div className="text-[9px] text-[#9a9a9a]">Direkt</div>
            </div>
          </div>
        </div>

        {/* Audit trail info */}
        <div className="flex items-center gap-2 p-2 bg-[#f5f5f5] rounded-lg">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c9a66b]"></div>
          <span className="text-[10px] text-[#6b6b6b]">Vollständiger Audit-Trail dokumentiert</span>
        </div>
      </div>
    </div>
  );
}
