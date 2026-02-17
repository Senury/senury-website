"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  FileText,
  Zap,
  Shield,
  Check,
  Sparkles,
  TextCursorInput,
  BookOpen,
  Clock,
  Users,
  Lock,
  Star,
  MessageSquare,
  LayoutGrid,
  Search,
  Scale,
} from "lucide-react";

// Enhanced UI Mockup Components
function ClauseLibraryMockup() {
  return (
    <div className="bg-white shadow-elevated border border-[#e8e8e8] rounded-lg overflow-hidden">
      <div className="bg-[#fafafa] border-b border-[#e8e8e8] p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5]"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] text-[#9a9a9a]">Klauselbibliothek</span>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="p-2.5 rounded border border-[#e8e8e8] hover:border-[#d0d0d0] transition-colors cursor-pointer">
          <div className="flex justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-[#1a1a1a] uppercase tracking-wider">
              Grundschuld
            </span>
          </div>
          <div className="h-1.5 bg-[#f0f0f0] rounded w-full mb-1"></div>
          <div className="h-1.5 bg-[#f0f0f0] rounded w-2/3"></div>
        </div>
        <div className="p-2.5 bg-[#fafafa] border border-[#e8e8e8] rounded">
          <div className="flex justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-[#1a1a1a] uppercase tracking-wider">
              Auflassung
            </span>
            <Check className="w-3 h-3 text-[#c9a66b]" />
          </div>
          <p className="text-[9px] text-[#6b6b6b] leading-relaxed font-serif">
            Die Beteiligten sind sich darüber einig, dass das Eigentum am
            Grundbesitz auf den Käufer übergehen soll...
          </p>
        </div>
        <div className="p-2.5 rounded border border-[#e8e8e8] hover:border-[#d0d0d0] transition-colors cursor-pointer">
          <div className="flex justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-[#1a1a1a] uppercase tracking-wider">
              Belastungsvollmacht
            </span>
          </div>
          <div className="h-1.5 bg-[#f0f0f0] rounded w-3/4 mb-1"></div>
          <div className="h-1.5 bg-[#f0f0f0] rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

function VersionTabsMockup() {
  return (
    <div className="glass-panel p-1.5 flex gap-0.5 items-center rounded-lg">
      <div className="px-3 py-1.5 bg-[#1a1a1a] text-white text-[10px] font-medium rounded-md">
        Entwurf
      </div>
      <div className="px-3 py-1.5 text-[#6b6b6b] text-[10px] font-medium hover:text-[#1a1a1a] cursor-pointer transition-colors rounded-md">
        Vergleich
      </div>
      <div className="px-3 py-1.5 text-[#6b6b6b] text-[10px] font-medium hover:text-[#1a1a1a] cursor-pointer transition-colors rounded-md">
        Final
      </div>
    </div>
  );
}

function AIAssistantMockup() {
  return (
    <div className="glass-panel p-3 flex flex-col gap-2 max-w-[200px] rounded-xl shadow-soft">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-[#c9a66b]/10 flex items-center justify-center text-[#c9a66b] rounded-lg">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-semibold text-[#1a1a1a]">
            KI-Assistent
          </span>
          <span className="text-[9px] text-[#9a9a9a]">Generiert in 2.3s</span>
        </div>
      </div>
      <div className="text-[9px] text-[#6b6b6b] leading-relaxed border-l-2 border-[#c9a66b]/30 pl-2">
        &quot;Kaufpreiszahlung wurde an die Fälligkeitsvoraussetzungen
        angepasst.&quot;
      </div>
      <button className="w-full bg-[#1a1a1a] text-white text-[9px] font-medium py-1.5 rounded-md hover:bg-[#2d2d2d] transition-colors">
        Übernehmen
      </button>
    </div>
  );
}

function FloatingCardMockup({
  title,
  content,
  delay = 0,
}: {
  title: string;
  content: string;
  delay?: number;
}) {
  return (
    <div
      className="bg-white/90 backdrop-blur-sm border border-[#e8e8e8] p-3 rounded-lg shadow-soft"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-[#c9a66b]"></div>
        <span className="text-[10px] font-medium text-[#1a1a1a]">{title}</span>
      </div>
      <div className="text-[9px] text-[#6b6b6b]">{content}</div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group bg-white p-5 sm:p-6 lg:p-8 border border-[#e8e8e8] hover:border-[#c9a66b]/30 hover:shadow-elevated transition-all duration-500">
      <div className="w-12 h-12 flex items-center justify-center bg-[#fafafa] border border-[#e8e8e8] rounded-xl mb-6 group-hover:bg-[#c9a66b]/5 group-hover:border-[#c9a66b]/20 transition-all duration-500">
        <Icon className="w-6 h-6 text-[#1a1a1a] group-hover:text-[#c9a66b] transition-colors duration-500" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-3 group-hover:text-[#c9a66b] transition-colors duration-500">
          {title}
        </h3>
        <p className="text-sm text-[#6b6b6b] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TrustBadge({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[#6b6b6b]">
      <Icon className="w-4 h-4" strokeWidth={1.5} />
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-14 h-14 bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] flex items-center justify-center rounded-full mb-5 font-serif text-lg font-medium relative z-10">
        {number}
      </div>
      <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}

// Section Label Component
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="w-8 h-px bg-[#c9a66b]/30"></div>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a66b]">
        {children}
      </span>
      <div className="w-8 h-px bg-[#c9a66b]/30"></div>
    </div>
  );
}

// Decorative Line Component
function DecorativeLine() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#e8e8e8] to-transparent"></div>
  );
}

export default function HomePageClient() {
  const t = useTranslations("home");
  const ct = useTranslations("common");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-20 sm:pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-b from-[#fdfcfb] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h1 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#1a1a1a] mb-4 sm:mb-6 tracking-tight">
                {t("hero.title")}
                <span className="italic text-[#6b6b6b] block mt-2">
                  {t("hero.subtitle")}
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#6b6b6b] mb-6 sm:mb-8 max-w-md leading-relaxed">
                {t("hero.description")}
                <span className="font-semibold text-[#1a1a1a]">{t("hero.descriptionHighlight")}</span>.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white text-sm font-medium h-12 px-6 rounded-full transition-all w-full sm:w-auto" asChild>
                  <Link href="/demo/">{t("hero.ctaPrimary")}</Link>
                </Button>
                <Link
                  href="/sicherheit/"
                  className="group flex items-center justify-center sm:justify-start gap-2 text-[#6b6b6b] hover:text-[#1a1a1a] h-12 px-2 transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {t("hero.ctaSecondary")}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Content - Floating Mockups */}
            <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[580px] w-full flex items-center justify-center order-1 lg:order-2 py-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-[#c9a66b]/20 to-transparent rounded-full blur-3xl"></div>

              <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto">
                {/* Main Mockup */}
                <div className="relative z-10 scale-[0.85] sm:scale-100 max-w-full">
                  <ClauseLibraryMockup />
                </div>

                {/* Floating Elements - Hidden on smallest screens, shown on sm+ */}
                <div className="hidden sm:block absolute -top-4 -right-4 lg:-right-8 z-20">
                  <VersionTabsMockup />
                </div>

                <div className="hidden sm:block absolute -bottom-6 -right-4 lg:-right-12 z-20">
                  <AIAssistantMockup />
                </div>

                <div className="hidden sm:block absolute top-1/4 -left-8 lg:-left-16 z-20">
                  <FloatingCardMockup
                    title={ct("mockups.status")}
                    content={ct("mockups.draftGenerated")}
                    delay={100}
                  />
                </div>

                <div className="hidden lg:block absolute bottom-1/4 -right-16 z-20">
                  <FloatingCardMockup
                    title={ct("mockups.review")}
                    content={ct("mockups.allClausesValid")}
                    delay={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 sm:py-8 bg-white border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12">
            <TrustBadge icon={Shield} label={t("trust.stgb")} />
            <div className="hidden md:block w-px h-4 bg-[#e8e8e8]"></div>
            <TrustBadge icon={Lock} label={t("trust.gdpr")} />
            <div className="hidden md:block w-px h-4 bg-[#e8e8e8]"></div>
            <TrustBadge icon={Check} label={t("trust.iso")} />
            <div className="hidden md:block w-px h-4 bg-[#e8e8e8]"></div>
            <TrustBadge icon={Star} label={t("trust.madeInGermany")} />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#faf8f7] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 bg-white p-6 sm:p-8 lg:p-10 border border-[#e8e8e8] shadow-elevated">
              <div className="bg-[#fafafa] p-5 sm:p-6 lg:p-8 border border-[#e8e8e8]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-[#c9a66b]/10 flex items-center justify-center rounded-lg">
                    <Zap className="w-5 h-5 text-[#c9a66b]" />
                  </div>
                  <span className="font-medium text-[#1a1a1a]">
                    {t("solution.chart.title")}
                  </span>
                </div>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#6b6b6b]">
                        {t("solution.chart.upload")}
                      </span>
                      <span className="text-[#1a1a1a] font-medium">
                        5 {ct("timeUnits.minutes")}
                      </span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full overflow-hidden">
                      <div className="h-2 bg-[#c9a66b] rounded-full w-[25%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#6b6b6b]">
                        {t("solution.chart.aiDraft")}
                      </span>
                      <span className="text-[#1a1a1a] font-medium">
                        5 {ct("timeUnits.minutes")}
                      </span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full overflow-hidden">
                      <div className="h-2 bg-[#c9a66b] rounded-full w-[25%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#6b6b6b]">
                        {t("solution.chart.yourReview")}
                      </span>
                      <span className="text-[#1a1a1a] font-medium">
                        10 {ct("timeUnits.minutes")}
                      </span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full overflow-hidden">
                      <div className="h-2 bg-[#c9a66b] rounded-full w-[50%]"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-[#e8e8e8]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#6b6b6b]">
                      {t("solution.chart.total")}
                    </span>
                    <span className="text-2xl font-serif font-medium text-[#c9a66b]">
                      ~20 {ct("timeUnits.minutes")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionLabel>{t("solution.label")}</SectionLabel>
              <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6 text-center lg:text-left">
                {t("solution.title")}
              </h2>
              <p className="text-lg text-[#6b6b6b] mb-10 leading-relaxed text-center lg:text-left">
                {t("solution.description")}
              </p>
              <ul className="space-y-3 sm:gap-4">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start gap-3 sm:gap-4 text-[#1a1a1a]">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#c9a66b]/10 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#c9a66b]" strokeWidth={2} />
                    </div>
                    <span className="text-base">{t(`solution.benefits.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* More than Kaufverträge */}
      <section className="py-20 sm:py-28 lg:py-36 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <SectionLabel>{t("documents.label")}</SectionLabel>
              <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
                {t("documents.title")}
              </h2>
              <p className="text-lg text-[#6b6b6b] mb-8 leading-relaxed">
                {t("documents.description")}
              </p>
              <ul className="space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <Scale className="w-4 h-4 text-[#c9a66b]" />
                    <span>{t(`documents.types.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#faf8f7] p-5 sm:p-6 lg:p-8 border border-[#e8e8e8] rounded-xl">
              <div className="space-y-4">
                <div className="p-4 bg-white border border-[#e8e8e8] rounded-lg flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#c9a66b]/10 flex items-center justify-center rounded-lg">
                    <FileText className="w-5 h-5 text-[#c9a66b]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#1a1a1a]">
                      {t("documents.status.purchaseContract.name")}
                    </div>
                    <div className="text-sm text-[#6b6b6b]">
                      {t("documents.status.purchaseContract.status")}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white border border-[#e8e8e8] rounded-lg flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#6b6b6b]/10 flex items-center justify-center rounded-lg">
                    <Star className="w-5 h-5 text-[#6b6b6b]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#1a1a1a]">
                      {t("documents.status.gift.name")}
                    </div>
                    <div className="text-sm text-[#6b6b6b]">
                      {t("documents.status.gift.status")}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white border border-[#e8e8e8] rounded-lg flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#9a9a9a]/10 flex items-center justify-center rounded-lg">
                    <MessageSquare className="w-5 h-5 text-[#9a9a9a]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#1a1a1a]">
                      {t("documents.status.transfer.name")}
                    </div>
                    <div className="text-sm text-[#6b6b6b]">
                      {t("documents.status.transfer.status")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <SectionLabel>{t("features.label")}</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-5">
              {t("features.title")}
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              {t("features.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            <FeatureCard
              icon={TextCursorInput}
              title={t("features.items.intelligentCapture.title")}
              description={t("features.items.intelligentCapture.description")}
            />
            <FeatureCard
              icon={FileText}
              title={t("features.items.aiDrafting.title")}
              description={t("features.items.aiDrafting.description")}
            />
            <FeatureCard
              icon={Search}
              title={t("features.items.aiResearch.title")}
              description={t("features.items.aiResearch.description")}
            />
            <FeatureCard
              icon={BookOpen}
              title={t("features.items.clauseLibrary.title")}
              description={t("features.items.clauseLibrary.description")}
            />
            <FeatureCard
              icon={Users}
              title={t("features.items.collaboration.title")}
              description={t("features.items.collaboration.description")}
            />
            <FeatureCard
              icon={LayoutGrid}
              title={t("features.items.integration.title")}
              description={t("features.items.integration.description")}
            />
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-12 sm:py-14 bg-gradient-to-br from-[#faf8f7] via-white to-[#f5f0eb] relative overflow-hidden border-y border-[#e8e8e8]">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a66b]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9a9a9a] mb-3 block">
                {t("integrations.label")}
              </span>
              <h2 className="font-serif font-medium text-2xl sm:text-3xl text-[#1a1a1a] mb-4">
                {t("integrations.title")}
              </h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
                {t("integrations.description")}
              </p>

              {/* Integration Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-[#e8e8e8] text-xs hover:border-[#0078D4]/30 transition-colors">
                  <Image src="/icons/microsoft-word-icon.svg" alt="Word" width={14} height={14} className="w-3.5 h-3.5" />
                  <span className="font-medium text-[#1a1a1a]">Word</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-[#e8e8e8] text-xs hover:border-[#0078D4]/30 transition-colors">
                  <Image src="/icons/microsoft-outlook-icon.svg" alt="Outlook" width={14} height={14} className="w-3.5 h-3.5" />
                  <span className="font-medium text-[#1a1a1a]">Outlook</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-[#e8e8e8] text-xs hover:border-[#0078D4]/30 transition-colors">
                  <Image src="/icons/azure-icon.svg" alt="Azure" width={14} height={14} className="w-3.5 h-3.5" />
                  <span className="font-medium text-[#1a1a1a]">Azure</span>
                </div>
              </div>
            </div>

            {/* Right: Centered Integration Visual */}
            <div className="flex justify-center">
              <div className="relative flex items-center gap-6">
                {/* Microsoft Tools - Left */}
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-white border border-[#e8e8e8] shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                    <Image src="/icons/microsoft-word-icon.svg" alt="Microsoft Word" width={24} height={24} className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 bg-white border border-[#e8e8e8] shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                    <Image src="/icons/microsoft-outlook-icon.svg" alt="Microsoft Outlook" width={24} height={24} className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 bg-white border border-[#e8e8e8] shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                    <Image src="/icons/azure-icon.svg" alt="Microsoft Azure" width={24} height={24} className="w-6 h-6" />
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="flex flex-col gap-3 py-1.5">
                  <div className="w-12 h-px bg-[#e8e8e8] relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c9a66b]" />
                  </div>
                  <div className="w-12 h-px bg-[#e8e8e8] relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c9a66b]" />
                  </div>
                  <div className="w-12 h-px bg-[#e8e8e8] relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c9a66b]" />
                  </div>
                </div>

                {/* Senury Hub - Circular Design */}
                <div className="relative">
                  {/* Outer ring */}
                  <div className="w-20 h-20 rounded-full border border-[#e8e8e8] bg-white flex items-center justify-center shadow-lg">
                    {/* Inner circle with S */}
                    <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                      <span className="font-serif text-white text-2xl">S</span>
                    </div>
                  </div>
                  {/* Connected indicator */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#c9a66b] rounded-full flex items-center justify-center border-2 border-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
        {/* Subtle shield outline decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02] hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="#1a1a1a" strokeWidth="0.5">
            <path d="M50 5 L90 25 V55 C90 75 50 95 50 95 C50 95 10 75 10 55 V25 L50 5Z" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
              {t("securitySection.label")}
            </span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-4">
              {t("securitySection.title")}
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              {t("securitySection.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 max-w-md sm:max-w-none mx-auto">
            {/* ISO 27001 */}
            <div className="group bg-[#e5e5e5] border border-[#e8e8e8] p-4 sm:p-5 hover:border-[#c9a66b]/30 transition-all duration-300 flex flex-row sm:flex-col gap-4 sm:gap-0">
              <div className="w-20 h-20 sm:w-full sm:aspect-[4/3] sm:h-auto relative flex-shrink-0 overflow-hidden">
                <Image
                  src="/security/ISO_27001.png"
                  alt="ISO 27001 Zertifizierung"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white border border-[#e8e8e8] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#c9a66b]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-[#1a1a1a]">
                    {t("securitySection.cards.iso.title")}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6b6b6b] leading-relaxed">
                  {t("securitySection.cards.iso.description")}
                </p>
              </div>
            </div>

            {/* §203 StGB */}
            <div className="group bg-[#e5e5e5] border border-[#e8e8e8] p-4 sm:p-5 hover:border-[#c9a66b]/30 transition-all duration-300 flex flex-row sm:flex-col gap-4 sm:gap-0">
              <div className="w-20 h-20 sm:w-full sm:aspect-[4/3] sm:h-auto relative flex-shrink-0 overflow-hidden">
                <Image
                  src="/security/StGB.jpg"
                  alt="§203 StGB Berufsgeheimnis"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white border border-[#e8e8e8] flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#c9a66b]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-[#1a1a1a]">
                    {t("securitySection.cards.stgb.title")}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6b6b6b] leading-relaxed hyphens-auto" lang="de">
                  {t("securitySection.cards.stgb.description")}
                </p>
              </div>
            </div>

            {/* DSGVO */}
            <div className="group bg-[#e5e5e5] border border-[#e8e8e8] p-4 sm:p-5 hover:border-[#c9a66b]/30 transition-all duration-300 flex flex-row sm:flex-col gap-4 sm:gap-0">
              <div className="w-20 h-20 sm:w-full sm:aspect-[4/3] sm:h-auto relative flex-shrink-0 overflow-hidden">
                <Image
                  src="/security/DSGVO.webp"
                  alt="DSGVO Datenschutz"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white border border-[#e8e8e8] flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#c9a66b]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-[#1a1a1a]">
                    {t("securitySection.cards.gdpr.title")}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6b6b6b] leading-relaxed">
                  {t("securitySection.cards.gdpr.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/sicherheit/"
              className="group inline-flex items-center gap-2 text-[#1a1a1a] hover:text-[#c9a66b] transition-colors"
            >
              <span className="font-medium">{t("securitySection.link")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#faf8f7] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <SectionLabel>{t("process.label")}</SectionLabel>
            <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-5">
              {t("process.title")}
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-xl mx-auto">
              {t("process.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 relative">
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#e8e8e8] to-transparent"></div>

            <ProcessStep
              number={t("process.steps.upload.number")}
              title={t("process.steps.upload.title")}
              description={t("process.steps.upload.description")}
            />
            <ProcessStep
              number={t("process.steps.extract.number")}
              title={t("process.steps.extract.title")}
              description={t("process.steps.extract.description")}
            />
            <ProcessStep
              number={t("process.steps.draft.number")}
              title={t("process.steps.draft.title")}
              description={t("process.steps.draft.description")}
            />
            <ProcessStep
              number={t("process.steps.review.number")}
              title={t("process.steps.review.title")}
              description={t("process.steps.review.description")}
            />
          </div>

          {/* CTA to full process page */}
          <div className="mt-16 text-center">
            <Link
              href="/ablauf/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-full hover:bg-[#2d2d2d] transition-colors"
            >
              {t("process.cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
        {/* Top horizontal line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8e8e8] to-transparent" />

        {/* Gradient vignette from edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(250,248,247,1)_100%)] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col items-center text-center">
            {/* Large decorative quote mark */}
            <div className="text-[#c9a66b]/20 font-serif text-[80px] sm:text-[100px] lg:text-[120px] leading-none mb-2 select-none">
              &ldquo;
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] leading-[1.3] mb-8 -mt-8">
              {t("testimonial.quote")}
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-3 text-sm">
              <span className="w-8 h-px bg-[#c9a66b]" />
              <span className="text-[#6b6b6b]">{t("testimonial.author")}</span>
              <span className="text-[#9a9a9a]">·</span>
              <span className="text-[#9a9a9a]">{t("testimonial.role")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#faf8f7] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8e8e8] to-transparent"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <SectionLabel>Loslegen</SectionLabel>
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-[#6b6b6b] text-lg mb-10 max-w-xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base rounded-full shadow-lg shadow-[#1a1a1a]/10 transition-all" asChild>
              <Link href="/demo/">{t("cta.primary")}</Link>
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-[#d0d0d0] text-[#1a1a1a] hover:bg-white hover:border-[#c9a66b]/30 h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base rounded-full transition-all"
              asChild
            >
              <Link href="/kontakt/">{t("cta.secondary")}</Link>
            </Button>
          </div>
          <p className="text-xs text-[#9a9a9a] mt-8">{t("cta.footer")}</p>
        </div>
      </section>
    </div>
  );
}
