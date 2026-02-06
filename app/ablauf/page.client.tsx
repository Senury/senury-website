"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TextCursorInput, FileText, Search, PenTool, CheckCircle, Settings, Database, Puzzle, Workflow, Check, Users, FileCheck, Download } from "lucide-react";

export default function AblaufPageClient() {
  const t = useTranslations("process");

  const timelineSteps = [
    { key: "intake", icon: TextCursorInput, color: "bg-[#c9a66b]" },
    { key: "drafting", icon: FileText, color: "bg-[#6b6b6b]" },
    { key: "review", icon: Search, color: "bg-[#3d3d3d]" },
    { key: "finalization", icon: PenTool, color: "bg-[#1a1a1a]" },
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
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#fdfcfb] to-white">
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
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${step.color} text-white flex items-center justify-center rounded-lg sm:rounded-xl font-serif text-xl sm:text-2xl shadow-soft flex-shrink-0`}>
                        {t(`timeline.steps.${step.key}.number`)}
                      </div>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center rounded-lg flex-shrink-0`}>
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a1a1a]" />
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
                      {index === 0 && <FormMockup />}
                      {index === 1 && <EditorMockup />}
                      {index === 2 && <CollaborationMockup />}
                      {index === 3 && <ChecklistMockup />}
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

// Mockup Components
function FormMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <TextCursorInput className="w-4 h-4 text-[#c9a66b]" />
        <span className="text-xs font-medium text-[#1a1a1a]">Datenerfassung</span>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <label className="text-[10px] text-[#9a9a9a] block mb-1">Name Verkäufer</label>
          <div className="h-8 bg-[#f5f5f5] border border-[#e8e8e8] rounded flex items-center px-3">
            <span className="text-xs text-[#1a1a1a]">Dr. Schmidt GmbH</span>
          </div>
        </div>
        <div>
          <label className="text-[10px] text-[#9a9a9a] block mb-1">Name Käufer</label>
          <div className="h-8 bg-[#f5f5f5] border border-[#e8e8e8] rounded flex items-center px-3">
            <span className="text-xs text-[#1a1a1a]">Müller & Co. KG</span>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-[#c9a66b]/10 rounded border border-[#c9a66b]/20">
          <Check className="w-4 h-4 text-[#c9a66b]" />
          <span className="text-[10px] text-[#1a1a1a]">Alle Pflichtfelder ausgefüllt</span>
        </div>
      </div>
    </div>
  );
}

function EditorMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <FileText className="w-4 h-4 text-[#6b6b6b]" />
        <span className="text-xs font-medium text-[#1a1a1a]">Kaufvertrag_Entwurf.docx</span>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <div className="h-2 bg-[#f5f5f5] rounded w-full"></div>
          <div className="h-2 bg-[#f5f5f5] rounded w-11/12"></div>
          <div className="h-2 bg-[#f5f5f5] rounded w-4/5"></div>
          <div className="h-2 bg-[#e5e5e5] rounded w-full"></div>
          <div className="h-2 bg-[#f5f5f5] rounded w-5/6"></div>
        </div>
        <div className="flex gap-2 mt-4">
          <span className="px-2 py-1 bg-[#f5f5f5] text-[#6b6b6b] text-[10px] rounded">§433 BGB</span>
          <span className="px-2 py-1 bg-[#f5f5f5] text-[#6b6b6b] text-[10px] rounded">8 Klauseln</span>
        </div>
      </div>
    </div>
  );
}

function CollaborationMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <Users className="w-4 h-4 text-[#3d3d3d]" />
        <span className="text-xs font-medium text-[#1a1a1a]">Kollaboration</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3 p-3 bg-[#fafafa] rounded-lg">
          <div className="w-8 h-8 bg-[#e5e5e5] rounded-full flex items-center justify-center text-xs text-[#6b6b6b]">M</div>
          <div className="flex-1">
            <div className="text-sm text-[#1a1a1a]">Bitte Kaufpreis prüfen</div>
            <div className="text-xs text-[#9a9a9a]">vor 5 Minuten</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-[#fafafa] rounded-lg">
          <div className="w-8 h-8 bg-[#e5e5e5] rounded-full flex items-center justify-center text-xs text-[#6b6b6b]">K</div>
          <div className="flex-1">
            <div className="text-sm text-[#1a1a1a]">Grundschuld-Klausel angepasst</div>
            <div className="text-xs text-[#9a9a9a]">vor 12 Minuten</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChecklistMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <FileCheck className="w-4 h-4 text-[#1a1a1a]" />
        <span className="text-xs font-medium text-[#1a1a1a]">Vollständigkeits-Check</span>
      </div>
      <div className="p-4 space-y-2">
        {[
          "Parteien vollständig",
          "Kaufpreis definiert",
          "Zahlungsmodalitäten",
          "Auflassung",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#1a1a1a]" />
            <span className="text-sm text-[#3d3d3d]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExportMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <Download className="w-4 h-4 text-[#c9a66b]" />
        <span className="text-xs font-medium text-[#1a1a1a]">Vollzugsdokumentation</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="p-3 bg-[#fafafa] rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-[#6b6b6b]" />
            <span className="text-sm font-medium text-[#1a1a1a]">Beurkundung abgeschlossen</span>
          </div>
          <div className="text-xs text-[#6b6b6b]">Nr. 234/2024 - 15.03.2024</div>
        </div>
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-[#f5f5f5] text-[#6b6b6b] text-[10px] rounded">XNotar</span>
          <span className="px-2 py-1 bg-[#f5f5f5] text-[#6b6b6b] text-[10px] rounded">PDF</span>
        </div>
      </div>
    </div>
  );
}
