"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  FileText,
  Search,
  FolderOpen,
  Mail,
  AlertTriangle,
  Clock,
  Shield,
  Zap,
  Lock,
  Sparkles,
  GitCompare,
  BookOpen,
  Scale,
  Star,
  Gift,
  Settings,
} from "lucide-react";

// Enhanced UI Mockup Components
function WorkspaceMockup() {
  return (
    <div className="relative">
      {/* Main Container with asymmetric layout */}
      <div className="bg-white shadow-[0_32px_64px_-24px_rgba(0,0,0,0.12)] border border-[#e8e8e8] rounded-2xl overflow-hidden">
        {/* Header with subtle gradient */}
        <div className="bg-gradient-to-r from-[#faf8f7] via-white to-[#faf8f7] border-b border-[#e8e8e8] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#c9a66b]/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#9a9a9a]/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/20"></div>
            </div>
            <div className="h-4 w-px bg-[#e8e8e8] mx-1"></div>
            <span className="text-[10px] tracking-wider text-[#9a9a9a] uppercase font-medium">Senury</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#c9a66b]/10 flex items-center justify-center">
              <span className="text-[8px] font-serif text-[#c9a66b]">N</span>
            </div>
          </div>
        </div>

        <div className="flex h-72">
          {/* Sidebar - more refined */}
          <div className="w-16 bg-[#fafafa] border-r border-[#e8e8e8] flex flex-col items-center py-5 gap-5">
            <div className="w-8 h-8 rounded-lg bg-[#c9a66b]/10 flex items-center justify-center">
              <FolderOpen className="w-4 h-4 text-[#c9a66b]" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center shadow-lg">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-lg hover:bg-[#f5f5f5] flex items-center justify-center transition-colors">
              <Search className="w-4 h-4 text-[#9a9a9a]" />
            </div>
            <div className="mt-auto mb-2">
              <div className="w-8 h-8 rounded-lg hover:bg-[#f5f5f5] flex items-center justify-center transition-colors">
                <Settings className="w-4 h-4 text-[#9a9a9a]" />
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Document Header */}
            <div className="px-5 py-4 border-b border-[#e8e8e8] flex items-center justify-between bg-gradient-to-r from-white to-[#fafafa]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-serif text-[#1a1a1a] tracking-tight">
                  Kaufvertrag_Entwurf_v2.urk
                </span>
                <span className="px-2 py-0.5 bg-[#c9a66b]/10 text-[#c9a66b] text-[9px] rounded-full font-medium tracking-wide">
                  AKTUELL
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[9px] text-[#9a9a9a]">Gespeichert</span>
              </div>
            </div>

            {/* Document Content - Kaufvertrag Draft */}
            <div className="flex-1 p-5 overflow-hidden">
              <div className="max-w-lg mx-auto space-y-4">
                {/* Document title area */}
                <div className="text-center pb-4 border-b border-[#f0f0f0]">
                  <div className="font-serif text-[11px] text-[#1a1a1a] tracking-wide">Kaufvertrag</div>
                  <div className="text-[8px] text-[#9a9a9a] mt-1">Entwurf vom 7. Februar 2025</div>
                </div>

                {/* Contract Paragraphs with real legal content */}
                <div className="space-y-3">
                  {/* § 1 Kaufgegenstand */}
                  <div className="flex gap-2 items-start">
                    <div className="w-4 h-4 rounded bg-[#c9a66b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[7px] text-[#c9a66b] font-serif">§1</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-serif text-[9px] text-[#1a1a1a] font-medium mb-0.5">Kaufgegenstand</div>
                      <div className="text-[8px] text-[#6b6b6b] leading-relaxed">
                        Der Verkäufer veräußert das im Grundbuch...
                      </div>
                    </div>
                  </div>

                  {/* § 2 Kaufpreis */}
                  <div className="flex gap-2 items-start pt-1">
                    <div className="w-4 h-4 rounded bg-[#9a9a9a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[7px] text-[#9a9a9a] font-serif">§2</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-serif text-[9px] text-[#1a1a1a] font-medium mb-0.5">Kaufpreis und Fälligkeit</div>
                      <div className="text-[8px] text-[#6b6b6b] leading-relaxed">
                        Der Kaufpreis beträgt <span className="text-[#c9a66b] font-medium">EUR 485.000,00</span>...
                      </div>
                    </div>
                  </div>

                  {/* § 3 Auflassung */}
                  <div className="flex gap-2 items-start pt-1">
                    <div className="w-4 h-4 rounded bg-[#c9a66b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[7px] text-[#c9a66b] font-serif">§3</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-serif text-[9px] text-[#1a1a1a] font-medium mb-0.5">Auflassungc</div>
                      <div className="text-[8px] text-[#6b6b6b] leading-relaxed">
                        Der Verkäufer lässt sich das Eigentum...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom toolbar */}
            <div className="px-4 py-2 border-t border-[#e8e8e8] bg-[#fafafa] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[9px] text-[#9a9a9a]">Zeile 142, Spalte 12</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[8px] rounded">§203 OK</span>
                <span className="text-[9px] text-[#9a9a9a]">1.240 Wörter</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent elements */}
      <div className="absolute -top-4 -right-4 bg-white shadow-lg border border-[#e8e8e8] rounded-xl p-3 animate-in fade-in slide-in-from-right-4 duration-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#c9a66b]/10 flex items-center justify-center">
            <Check className="w-4 h-4 text-[#c9a66b]" />
          </div>
          <div>
            <div className="text-[9px] text-[#9a9a9a]">Klausel geprüft</div>
            <div className="text-[10px] font-medium text-[#1a1a1a]">Auflassung v2.3</div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-3 -left-3 bg-[#1a1a1a] shadow-xl rounded-lg p-2.5 animate-in fade-in slide-in-from-left-4 duration-700 delay-150">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#c9a66b]" />
          <span className="text-[9px] text-white/90">KI-Assistenz aktiv</span>
        </div>
      </div>
    </div>
  );
}

function VorgangListMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center justify-between">
        <span className="text-xs font-medium text-[#1a1a1a]">Vorgänge</span>
        <span className="text-[10px] text-[#9a9a9a]">12 aktive</span>
      </div>
      <div className="p-3 space-y-2">
        {[
          { name: "KV-2024-084", status: "Entwurf", color: "bg-[#c9a66b]" },
          { name: "KV-2024-083", status: "Prüfung", color: "bg-[#6b6b6b]" },
          { name: "KV-2024-082", status: "Final", color: "bg-[#1a1a1a]" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-2 bg-[#fafafa] rounded-lg"
          >
            <span className="text-xs text-[#1a1a1a] font-medium">{item.name}</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full text-white ${item.color}`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SplitViewMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3">
        <span className="text-xs font-medium text-[#1a1a1a]">Editor</span>
      </div>
      <div className="flex h-56">
        <div className="w-1/3 bg-[#fafafa] border-r border-[#e8e8e8] p-3">
          <div className="text-[10px] text-[#9a9a9a] mb-2">Daten</div>
          <div className="space-y-2">
            <div className="h-6 bg-white border border-[#e8e8e8] rounded flex items-center px-2">
              <span className="text-[9px] text-[#6b6b6b]">Kaufpreis: 450.000 €</span>
            </div>
            <div className="h-6 bg-white border border-[#e8e8e8] rounded flex items-center px-2">
              <span className="text-[9px] text-[#6b6b6b]">Grundstück: 850m²</span>
            </div>
          </div>
        </div>
        <div className="w-2/3 p-3">
          <div className="text-[10px] text-[#9a9a9a] mb-2">Vorschau</div>
          <div className="space-y-1.5">
            <div className="h-2 bg-[#f5f5f5] rounded w-full"></div>
            <div className="h-2 bg-[#f5f5f5] rounded w-5/6"></div>
            <div className="h-2 bg-[#f5f5f5] rounded w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIChatMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#c9a66b]" />
        <span className="text-xs font-medium text-[#1a1a1a]">Entwurfsassistent</span>
      </div>
      <div className="p-3 space-y-3">
        <div className="flex gap-2">
          <div className="w-6 h-6 bg-[#1a1a1a] rounded-full flex items-center justify-center">
            <span className="text-[8px] text-white">U</span>
          </div>
          <div className="bg-[#f5f5f5] rounded-lg p-2 max-w-[80%]">
            <span className="text-[10px] text-[#1a1a1a]">
              Bitte gib mir eine bewährte Musterklausel für Auflassung
            </span>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="bg-[#c9a66b]/10 rounded-lg p-2 max-w-[80%]">
            <span className="text-[10px] text-[#1a1a1a]">
              Die Auflassung erfolgt unter der aufschiebenden Bedingung...
            </span>
          </div>
          <div className="w-6 h-6 bg-[#c9a66b]/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-[#c9a66b]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function VersionCompareMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center justify-between">
        <span className="text-xs font-medium text-[#1a1a1a]">Versionsvergleich</span>
        <GitCompare className="w-4 h-4 text-[#9a9a9a]" />
      </div>
      <div className="p-3 space-y-2">
        <div className="flex items-center gap-2 p-2 bg-red-50 rounded border border-red-100">
          <span className="text-[10px] text-red-600 line-through">450.000 €</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-green-50 rounded border border-green-100">
          <span className="text-[10px] text-green-600">475.000 €</span>
          <span className="text-[9px] text-[#9a9a9a]">— Kaufpreis angepasst</span>
        </div>
      </div>
    </div>
  );
}

function FormMockup() {
  return (
    <div className="bg-white shadow-soft border border-[#e8e8e8] rounded-xl overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3">
        <span className="text-xs font-medium text-[#1a1a1a]">Datenerfassung</span>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <label className="text-[10px] text-[#9a9a9a] block mb-1">Kaufpreis</label>
          <div className="h-8 bg-[#f5f5f5] border border-[#e8e8e8] rounded flex items-center px-3">
            <span className="text-xs text-[#1a1a1a]">€ 450.000,00</span>
          </div>
        </div>
        <div>
          <label className="text-[10px] text-[#9a9a9a] block mb-1">Grundstücksgröße</label>
          <div className="h-8 bg-[#f5f5f5] border border-[#e8e8e8] rounded flex items-center px-3">
            <span className="text-xs text-[#1a1a1a]">850 m²</span>
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

function FeatureDetailCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group bg-white p-6 border border-[#e8e8e8] hover:border-[#d0d0d0] hover:shadow-soft transition-all duration-300">
      <div className="w-10 h-10 flex items-center justify-center bg-[#fafafa] border border-[#e8e8e8] rounded-lg mb-4 group-hover:bg-[#f5f5f5] transition-colors">
        <Icon className="w-5 h-5 text-[#1a1a1a]" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#6b6b6b] leading-relaxed">{description}</p>
    </div>
  );
}

export default function ProduktPageClient() {
  const t = useTranslations("product");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#fdfcfb] to-white overflow-hidden">
        {/* Subtle document lines - suggests text/contract */}
        <div className="absolute inset-0 opacity-[0.02] hidden lg:block" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 32px, #1a1a1a 32px, #1a1a1a 33px)`,
        }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="pill-badge bg-[#f5f5f5] text-[#6b6b6b] border border-[#e8e8e8] mb-6 inline-block">
              {t("hero.badge")}
            </span>
            <h1 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-[#6b6b6b] mb-8">{t("hero.description")}</p>
            <Button className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white h-14 px-8 text-base rounded-full transition-colors" asChild>
              <Link href="/demo/">{t("hero.cta")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28 bg-white overflow-visible">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative mt-8 sm:mt-12">
            <WorkspaceMockup />
          </div>
          <p className="text-center text-sm text-[#9a9a9a] mt-6">{t("screenshot.caption")}</p>
        </div>
      </section>

      {/* Feature 1: Vorgangsverwaltung - Text Left, Mockup Right */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
                {t("features.caseManagement.label")}
              </span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                {t("features.caseManagement.title")}
              </h2>
              <p className="text-[#6b6b6b] text-lg leading-relaxed mb-8">
                {t("features.caseManagement.description")}
              </p>
              <ul className="space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <Check className="w-5 h-5 text-[#c9a66b]" strokeWidth={1.5} />
                    <span>{t(`features.caseManagement.benefits.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 border border-[#e8e8e8] shadow-soft rounded-xl">
              <VorgangListMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: KI-Drafting - Mockup Left, Text Right */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 bg-[#faf8f7] p-8 border border-[#e8e8e8] rounded-xl">
              <div className="space-y-4">
                <SplitViewMockup />
                <div className="grid grid-cols-2 gap-4">
                  <AIChatMockup />
                  <VersionCompareMockup />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a66b] mb-4 block">
                {t("features.aiDrafting.label")}
              </span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                {t("features.aiDrafting.title")}
              </h2>
              <p className="text-[#6b6b6b] text-lg leading-relaxed mb-8">
                {t("features.aiDrafting.description")}
              </p>
              <ul className="space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <Check className="w-5 h-5 text-[#c9a66b]" strokeWidth={1.5} />
                    <span>{t(`features.aiDrafting.benefits.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Recherche - Text Left, Mockup Right */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
                {t("features.aiResearch.label")}
              </span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                {t("features.aiResearch.title")}
              </h2>
              <p className="text-[#6b6b6b] text-lg leading-relaxed mb-8">
                {t("features.aiResearch.description")}
              </p>
              <ul className="space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <Check className="w-5 h-5 text-[#c9a66b]" strokeWidth={1.5} />
                    <span>{t(`features.aiResearch.benefits.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 border border-[#e8e8e8] shadow-soft rounded-xl">
              <AIChatMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Intake - Mockup Left, Text Right */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 bg-[#faf8f7] p-8 border border-[#e8e8e8] rounded-xl">
              <FormMockup />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a66b] mb-4 block">
                {t("features.dataCapture.label")}
              </span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                {t("features.dataCapture.title")}
              </h2>
              <p className="text-[#6b6b6b] text-lg leading-relaxed mb-8">
                {t("features.dataCapture.description")}
              </p>
              <ul className="space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <Check className="w-5 h-5 text-[#c9a66b]" strokeWidth={1.5} />
                    <span>{t(`features.dataCapture.benefits.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail Grid */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
              {t("detailGrid.label")}
            </span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              {t("detailGrid.title")}
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              {t("detailGrid.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e8e8]">
            <FeatureDetailCard
              icon={FolderOpen}
              title={t("detailGrid.items.caseManagement.title")}
              description={t("detailGrid.items.caseManagement.description")}
            />
            <FeatureDetailCard
              icon={FileText}
              title={t("detailGrid.items.aiDrafting.title")}
              description={t("detailGrid.items.aiDrafting.description")}
            />
            <FeatureDetailCard
              icon={BookOpen}
              title={t("detailGrid.items.clauseLibrary.title")}
              description={t("detailGrid.items.clauseLibrary.description")}
            />
            <FeatureDetailCard
              icon={Search}
              title={t("detailGrid.items.research.title")}
              description={t("detailGrid.items.research.description")}
            />
            <FeatureDetailCard
              icon={Zap}
              title={t("detailGrid.items.integrations.title")}
              description={t("detailGrid.items.integrations.description")}
            />
            <FeatureDetailCard
              icon={GitCompare}
              title={t("detailGrid.items.control.title")}
              description={t("detailGrid.items.control.description")}
            />
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
              {t("documentTypes.label")}
            </span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              {t("documentTypes.title")}
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              {t("documentTypes.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { key: "purchaseContract", icon: FileText },
              { key: "gift", icon: Gift },
              { key: "transfer", icon: Scale },
              { key: "more", icon: Star },
            ].map((doc) => (
              <Card
                key={doc.key}
                className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-white border border-[#e8e8e8] flex items-center justify-center rounded-lg mb-4">
                    <doc.icon className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-serif text-lg font-medium text-[#1a1a1a]">
                      {t(`documentTypes.types.${doc.key}.title`)}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      t(`documentTypes.types.${doc.key}.status`) ===
                      "Vollständig"
                        ? "bg-[#c9a66b]/10 text-[#c9a66b]"
                        : t(`documentTypes.types.${doc.key}.status`) ===
                            "Verfügbar"
                          ? "bg-[#6b6b6b]/10 text-[#6b6b6b]"
                          : "bg-[#e5e5e5] text-[#9a9a9a]"
                    }`}
                  >
                    {t(`documentTypes.types.${doc.key}.status`)}
                  </span>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed mt-3">
                    {t(`documentTypes.types.${doc.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
              {t("security.label")}
            </span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              {t("security.title")}
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              {t("security.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { key: "encryption", icon: Lock },
              { key: "compliance", icon: Shield },
              { key: "hosting", icon: Clock },
            ].map((feature) => (
              <Card
                key={feature.key}
                className="bg-[#faf8f7] border-[#e8e8e8] rounded-none"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-white border border-[#e8e8e8] flex items-center justify-center rounded-lg mb-6">
                    <feature.icon className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">
                    {t(`security.features.${feature.key}.title`)}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">
                    {t(`security.features.${feature.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
              {t("integrations.label")}
            </span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              {t("integrations.title")}
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              {t("integrations.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-[#e8e8e8] rounded-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center rounded-lg mb-6">
                  <FileText className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-3">
                  {t("integrations.word.title")}
                </h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {t("integrations.word.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#e8e8e8] rounded-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center rounded-lg mb-6">
                  <Mail className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-3">
                  {t("integrations.outlook.title")}
                </h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {t("integrations.outlook.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#faf8f7] border border-[#e8e8e8] p-4 sm:p-6 flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-[#6b6b6b] flex-shrink-0 mt-0.5 hidden sm:block" />
            <div className="flex-1">
              <h4 className="font-medium text-[#1a1a1a] mb-2">{t("disclaimer.title")}</h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">{t("disclaimer.text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-[#9a9a9a] text-lg mb-10 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <Button className="bg-white text-[#1a1a1a] hover:bg-[#f5f5f5] h-14 px-8 text-base rounded-full transition-colors" asChild>
            <Link href="/demo/">{t("cta.button")}</Link>
          </Button>
          <p className="text-xs text-[#6b6b6b] mt-6">{t("cta.footer")}</p>
        </div>
      </section>
    </div>
  );
}
