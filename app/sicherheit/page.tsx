"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, FileCheck, Download, CheckCircle, Server, Fingerprint, FileText, Globe, Clock, Award } from "lucide-react";

export default function SicherheitPage() {
  const t = useTranslations("security");
  const ct = useTranslations("common");

  const stats = [
    { key: "encryption", icon: Lock },
    { key: "uptime", icon: Clock },
    { key: "locations", icon: Server },
    { key: "exclusive", icon: Globe },
  ];

  const certifications = [
    { key: "stgb", icon: Shield },
    { key: "gdpr", icon: Lock },
    { key: "iso", icon: FileCheck },
    { key: "bsi", icon: Server },
  ];

  const complianceCards = [
    { key: "stgb", icon: Shield },
    { key: "gdpr", icon: Server },
    { key: "iso", icon: FileCheck },
  ];

  const technicalDetails = [
    { key: "encryption", icon: Lock },
    { key: "rbac", icon: Fingerprint },
    { key: "audit", icon: Eye },
    { key: "redundancy", icon: Database },
  ];

  const downloadItems = [
    { key: "toms", icon: FileCheck },
    { key: "avv", icon: FileCheck },
    { key: "whitepaper", icon: FileCheck },
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

      {/* Stats Row */}
      <section className="py-12 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.key} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-1 tracking-tight">
                  {t(`stats.${stat.key}.value`)}
                </div>
                <div className="text-xs text-[#6b6b6b]">{t(`stats.${stat.key}.label`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div key={cert.key} className="text-center">
                <div className="w-12 h-12 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center mx-auto mb-3 rounded-lg">
                  <cert.icon className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <div className="font-medium text-[#1a1a1a]">{t(`certifications.${cert.key}.title`)}</div>
                <div className="text-xs text-[#6b6b6b]">{t(`certifications.${cert.key}.description`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Cards */}
      <section className="py-24 lg:py-32 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">{t("compliance.label")}</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              {t("compliance.title")}
            </h2>
            <p className="text-[#6b6b6b] max-w-2xl mx-auto">
              {t("compliance.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceCards.map((card) => (
              <Card key={card.key} className="bg-white border-[#e8e8e8] rounded-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center mb-6 rounded-lg">
                    <card.icon className="w-7 h-7 text-[#1a1a1a]" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1a1a1a] mb-1">{t(`compliance.cards.${card.key}.title`)}</h3>
                  <p className="text-sm text-[#c9a66b] font-medium mb-4">{t(`compliance.cards.${card.key}.subtitle`)}</p>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{t(`compliance.cards.${card.key}.description`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">{t("technical.label")}</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              {t("technical.title")}
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              {t("technical.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalDetails.map((item) => (
              <Card key={item.key} className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white border border-[#e8e8e8] flex items-center justify-center flex-shrink-0 rounded-lg">
                      <item.icon className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1a1a1a] text-lg mb-2">{t(`technical.features.${item.key}.title`)}</h3>
                      <p className="text-[#6b6b6b] text-sm leading-relaxed">{t(`technical.features.${item.key}.description`)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Location */}
      <section className="py-24 lg:py-32 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">{t("hosting.label")}</span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                {t("hosting.title")}
              </h2>
              <p className="text-[#6b6b6b] text-lg leading-relaxed mb-6">
                {t("hosting.description")}
              </p>
              <ul className="space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1a1a1a]">
                    <CheckCircle className="w-5 h-5 text-[#c9a66b]" />
                    <span>{t(`hosting.benefits.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 border border-[#e8e8e8] rounded-xl shadow-soft">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { key: "exclusive", icon: Globe },
                  { key: "uptime", icon: Clock },
                  { key: "encryption", icon: Lock },
                  { key: "locations", icon: Server },
                ].map((stat) => (
                  <div key={stat.key} className="bg-[#fafafa] p-4 border border-[#e8e8e8] text-center rounded-lg">
                    <stat.icon className="w-6 h-6 text-[#c9a66b] mx-auto mb-2" />
                    <div className="text-2xl font-serif font-medium text-[#1a1a1a] mb-1">{t(`hosting.stats.${stat.key}.value`)}</div>
                    <div className="text-xs text-[#6b6b6b]">{t(`hosting.stats.${stat.key}.label`)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">{t("downloads.label")}</span>
            <h2 className="font-serif font-medium text-2xl md:text-3xl text-[#1a1a1a] mb-4">
              {t("downloads.title")}
            </h2>
            <p className="text-[#6b6b6b]">
              {t("downloads.description")}
            </p>
          </div>

          <div className="space-y-4">
            {downloadItems.map((item) => (
              <div
                key={item.key}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-[#fafafa] border border-[#e8e8e8] hover:border-[#9a9a9a] transition-colors rounded-lg gap-4"
              >
                <div className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-[#1a1a1a] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1a1a1a] font-medium block">{t(`downloads.items.${item.key}.name`)}</span>
                    <span className="text-xs text-[#6b6b6b]">{t(`downloads.items.${item.key}.desc`)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-8 md:ml-0">
                  <span className="text-sm text-[#9a9a9a]">{t(`downloads.items.${item.key}.size`)}</span>
                  <Button variant="outline" size="sm" className="gap-2 rounded-full">
                    <Download className="w-4 h-4" />
                    {t("downloads.downloadButton")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-white/10 flex items-center justify-center mx-auto mb-8 rounded-xl">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-[#9a9a9a] text-lg mb-10 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-[#1a1a1a] hover:bg-[#f5f5f5] h-14 px-8 text-base rounded-full transition-colors">
              {t("cta.primary")}
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base rounded-full">
              {t("cta.secondary")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
