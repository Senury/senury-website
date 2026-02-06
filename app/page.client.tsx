"use client";

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
    <div className="group bg-white p-6 border border-[#e8e8e8] hover:border-[#d0d0d0] hover:shadow-soft transition-all duration-300">
      <div className="w-10 h-10 flex items-center justify-center bg-[#fafafa] border border-[#e8e8e8] rounded-lg mb-4 group-hover:bg-[#f5f5f5] transition-colors">
        <Icon className="w-5 h-5 text-[#1a1a1a]" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">
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

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-serif text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-1 tracking-tight">
        {number}
      </div>
      <div className="text-xs text-[#6b6b6b]">{label}</div>
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
      <div className="w-12 h-12 bg-[#1a1a1a] text-white flex items-center justify-center rounded-full mb-4 font-serif text-lg">
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

export default function HomePageClient() {
  const t = useTranslations("home");
  const ct = useTranslations("common");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#fdfcfb] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="mb-4 sm:mb-6">
                <span className="pill-badge bg-[#f5f5f5] text-[#6b6b6b] border border-[#e8e8e8] text-xs sm:text-sm">
                  {t("hero.badge")}
                </span>
              </div>
              <h1 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#1a1a1a] mb-4 sm:mb-6 tracking-tight">
                {t("hero.title")}
                <span className="italic text-[#6b6b6b] block mt-2">
                  {t("hero.subtitle")}
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#6b6b6b] mb-6 sm:mb-8 max-w-md leading-relaxed">
                {t("hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white text-sm font-medium h-12 px-6 rounded-full transition-all w-full sm:w-auto">
                  {t("hero.ctaPrimary")}
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
            <div className="relative min-h-[350px] sm:min-h-[400px] lg:min-h-[550px] w-full flex items-center justify-center order-1 lg:order-2">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px] bg-gradient-to-br from-[#c9a66b]/10 to-transparent rounded-full blur-3xl"></div>

              <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto">
                {/* Main Mockup */}
                <div className="relative z-10 scale-90 sm:scale-100">
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

      {/* Stats Bar */}
      <section className="py-10 sm:py-12 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <StatCard
              number={t("stats.timeSaved.value")}
              label={t("stats.timeSaved.label")}
            />
            <StatCard
              number={t("stats.timeComparison.value")}
              label={t("stats.timeComparison.label")}
            />
            <StatCard
              number={t("stats.gdpr.value")}
              label={t("stats.gdpr.label")}
            />
            <StatCard
              number={t("stats.stgb.value")}
              label={t("stats.stgb.label")}
            />
          </div>
        </div>
      </section>

      {/* Problem Section - Pain Point */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
                {t("problem.label")}
              </span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                {t("problem.title")}
              </h2>
              <p className="text-lg text-[#6b6b6b] mb-8 leading-relaxed">
                {t("problem.description")}
              </p>
              <ul className="space-y-4">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9a9a9a]" />
                    <span>{t(`problem.painPoints.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#faf8f7] p-8 border border-[#e8e8e8]">
              <div className="bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-[#9a9a9a]" />
                  <span className="font-medium text-[#1a1a1a]">
                    {t("problem.chart.title")}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#6b6b6b]">
                        {t("problem.chart.dataEntry")}
                      </span>
                      <span className="text-[#1a1a1a] font-medium">
                        45 {ct("timeUnits.minutes")}
                      </span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full">
                      <div className="h-2 bg-[#9a9a9a] rounded-full w-[60%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#6b6b6b]">
                        {t("problem.chart.drafting")}
                      </span>
                      <span className="text-[#1a1a1a] font-medium">
                        2.5 {ct("timeUnits.hours")}
                      </span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full">
                      <div className="h-2 bg-[#9a9a9a] rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#6b6b6b]">
                        {t("problem.chart.corrections")}
                      </span>
                      <span className="text-[#1a1a1a] font-medium">
                        1 {ct("timeUnits.hours")}
                      </span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full">
                      <div className="h-2 bg-[#9a9a9a] rounded-full w-[40%]"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e8e8e8]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#6b6b6b]">
                      {t("problem.chart.total")}
                    </span>
                    <span className="text-xl font-serif font-medium text-[#1a1a1a]">
                      ~4 {ct("timeUnits.hours")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 bg-white p-8 border border-[#e8e8e8] shadow-soft">
              <div className="bg-[#fafafa] p-6 border border-[#e8e8e8]">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-5 h-5 text-[#c9a66b]" />
                  <span className="font-medium text-[#1a1a1a]">
                    {t("solution.chart.title")}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#6b6b6b]">
                        {t("solution.chart.dataEntry")}
                      </span>
                      <span className="text-[#1a1a1a] font-medium">
                        15 {ct("timeUnits.minutes")}
                      </span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full">
                      <div className="h-2 bg-[#c9a66b] rounded-full w-[20%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#6b6b6b]">
                        {t("solution.chart.aiDraft")}
                      </span>
                      <span className="text-[#1a1a1a] font-medium">
                        5 {ct("timeUnits.minutes")}
                      </span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full">
                      <div className="h-2 bg-[#c9a66b] rounded-full w-[10%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#6b6b6b]">
                        {t("solution.chart.yourReview")}
                      </span>
                      <span className="text-[#1a1a1a] font-medium">
                        10 {ct("timeUnits.minutes")}
                      </span>
                    </div>
                    <div className="h-2 bg-[#f5f5f5] rounded-full">
                      <div className="h-2 bg-[#c9a66b] rounded-full w-[15%]"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e8e8e8]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#6b6b6b]">
                      {t("solution.chart.total")}
                    </span>
                    <span className="text-xl font-serif font-medium text-[#c9a66b]">
                      ~30 {ct("timeUnits.minutes")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a66b] mb-4 block">
                {t("solution.label")}
              </span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                {t("solution.title")}
              </h2>
              <p className="text-lg text-[#6b6b6b] mb-8 leading-relaxed">
                {t("solution.description")}
              </p>
              <ul className="space-y-4">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <Check className="w-5 h-5 text-[#c9a66b]" strokeWidth={1.5} />
                    <span>{t(`solution.benefits.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
              {t("features.label")}
            </span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              {t("features.title")}
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              {t("features.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e8e8]">
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

      {/* More than Kaufverträge */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
                {t("documents.label")}
              </span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                {t("documents.title")}
              </h2>
              <p className="text-lg text-[#6b6b6b] mb-6 leading-relaxed">
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
            <div className="bg-[#faf8f7] p-8 border border-[#e8e8e8] rounded-xl">
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

      {/* Process Timeline */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
              {t("process.label")}
            </span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              {t("process.title")}
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-xl mx-auto">
              {t("process.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-[#e8e8e8]"></div>

            <ProcessStep
              number={t("process.steps.capture.number")}
              title={t("process.steps.capture.title")}
              description={t("process.steps.capture.description")}
            />
            <ProcessStep
              number={t("process.steps.generate.number")}
              title={t("process.steps.generate.title")}
              description={t("process.steps.generate.description")}
            />
            <ProcessStep
              number={t("process.steps.finalize.number")}
              title={t("process.steps.finalize.title")}
              description={t("process.steps.finalize.description")}
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-none">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#c9a66b] text-[#c9a66b]"
                    />
                  ))}
                </div>

                <blockquote className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-8 leading-relaxed">
                  &ldquo;{t("testimonial.quote")}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#e5e5e5] rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-[#6b6b6b]">N</span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-[#1a1a1a]">
                      {t("testimonial.author")}
                    </div>
                    <div className="text-sm text-[#6b6b6b]">
                      {t("testimonial.role")}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-sm text-[#9a9a9a] uppercase tracking-widest">
              {t("integrations.label")}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 px-4 py-2 bg-white border border-[#e8e8e8]">
              <FileText className="w-5 h-5 text-[#1a1a1a]" />
              <span className="text-sm font-medium text-[#1a1a1a]">
                {t("integrations.items.word")}
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white border border-[#e8e8e8]">
              <MessageSquare className="w-5 h-5 text-[#1a1a1a]" />
              <span className="text-sm font-medium text-[#1a1a1a]">
                {t("integrations.items.outlook")}
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white border border-[#e8e8e8]">
              <LayoutGrid className="w-5 h-5 text-[#1a1a1a]" />
              <span className="text-sm font-medium text-[#1a1a1a]">
                {t("integrations.items.xnotar")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-[#6b6b6b] text-lg mb-8 max-w-xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white h-12 px-8 text-sm rounded-full">
              {t("cta.primary")}
            </Button>
            <Button
              variant="outline"
              className="border-[#d0d0d0] text-[#1a1a1a] hover:bg-[#fafafa] h-12 px-8 text-sm rounded-full"
            >
              {t("cta.secondary")}
            </Button>
          </div>
          <p className="text-xs text-[#9a9a9a] mt-6">{t("cta.footer")}</p>
        </div>
      </section>
    </div>
  );
}
