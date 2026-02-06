"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  Euro,
  Shield,
  RotateCcw,
  Scale,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function AgbPageClient() {
  const t = useTranslations("agb");

  const sections = [
    { id: "geltungsbereich", icon: Scale },
    { id: "vertragsschluss", icon: FileText },
    { id: "preise", icon: Euro },
    { id: "zahlung", icon: CheckCircle2 },
    { id: "widerruf", icon: RotateCcw },
    { id: "nutzung", icon: Shield },
    { id: "haftung", icon: AlertCircle },
    { id: "laufzeit", icon: Clock },
    { id: "schlussbestimmungen", icon: Scale },
  ];

  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-white to-[#fdfcfb] border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center rounded-xl">
                <FileText className="w-6 h-6 text-[#c9a66b]" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a]">
                {t("hero.badge")}
              </span>
            </div>
            <h1 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-base sm:text-lg text-[#6b6b6b] max-w-2xl leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-[#9a9a9a]">
              <Clock className="w-4 h-4" />
              <span>{t("hero.lastUpdated")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-28">
                <Card className="bg-white border-[#e8e8e8] rounded-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-[#e8e8e8] bg-[#faf8f7]">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9a9a9a]">
                        {t("sidebar.title")}
                      </p>
                    </div>
                    <nav className="divide-y divide-[#e8e8e8]">
                      {sections.map((section) => (
                        <Link
                          key={section.id}
                          href={`#${section.id}`}
                          className="group flex items-center gap-3 px-4 py-3.5 hover:bg-[#faf8f7] transition-colors duration-200"
                        >
                          <section.icon className="w-4 h-4 text-[#9a9a9a] group-hover:text-[#c9a66b] transition-colors flex-shrink-0" />
                          <span className="text-sm text-[#6b6b6b] group-hover:text-[#1a1a1a] transition-colors">
                            {t(`sections.${section.id}.title`)}
                          </span>
                          <ChevronRight className="w-4 h-4 text-[#e5e5e5] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8 xl:col-span-9">
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="mb-12 p-6 bg-[#faf8f7] border border-[#e8e8e8] rounded-xl">
                  <p className="text-[#6b6b6b] leading-relaxed m-0">{t("introduction")}</p>
                </div>

                {/* Geltungsbereich */}
                <div id="geltungsbereich" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Scale className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.geltungsbereich.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.geltungsbereich.p1")}</p>
                    <p>{t("sections.geltungsbereich.p2")}</p>
                    <div className="bg-white border-l-4 border-[#c9a66b] p-4 sm:p-6 my-6">
                      <p className="text-[#1a1a1a] font-medium mb-2">{t("sections.geltungsbereich.note.title")}</p>
                      <p className="text-sm text-[#6b6b6b] m-0">{t("sections.geltungsbereich.note.text")}</p>
                    </div>
                  </div>
                </div>

                {/* Vertragsschluss */}
                <div id="vertragsschluss" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <FileText className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.vertragsschluss.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.vertragsschluss.p1")}</p>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>{t("sections.vertragsschluss.steps.1")}</li>
                      <li>{t("sections.vertragsschluss.steps.2")}</li>
                      <li>{t("sections.vertragsschluss.steps.3")}</li>
                    </ol>
                  </div>
                </div>

                {/* Preise */}
                <div id="preise" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Euro className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.preise.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.preise.p1")}</p>
                    <p>{t("sections.preise.p2")}</p>
                    <Card className="bg-white border-[#e8e8e8] rounded-xl mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-serif text-lg text-[#1a1a1a] mb-4">
                          {t("sections.preise.pricing.title")}
                        </h3>
                        <ul className="space-y-3">
                          {t.raw("sections.preise.pricing.items").map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-[#c9a66b] rounded-full mt-2 flex-shrink-0" />
                              <span className="text-[#6b6b6b]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Zahlung */}
                <div id="zahlung" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.zahlung.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.zahlung.p1")}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      {t.raw("sections.zahlung.methods").map((method: string, index: number) => (
                        <div key={index} className="bg-white border border-[#e8e8e8] p-4 rounded-lg">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#c9a66b]" />
                            <span className="text-[#1a1a1a] font-medium">{method}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Widerruf */}
                <div id="widerruf" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <RotateCcw className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.widerruf.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.widerruf.p1")}</p>
                    <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl">
                      <CardContent className="p-6">
                        <h3 className="font-serif text-lg text-[#1a1a1a] mb-4">
                          {t("sections.widerruf.model.title")}
                        </h3>
                        <div className="space-y-3 text-sm text-[#6b6b6b]">
                          <p className="font-medium text-[#1a1a1a]">{t("sections.widerruf.model.recipient")}</p>
                          <p>{t("sections.widerruf.model.address")}</p>
                          <div className="pt-3 border-t border-[#e8e8e8] mt-3">
                            <p>{t("sections.widerruf.model.text")}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Nutzung */}
                <div id="nutzung" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Shield className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.nutzung.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.nutzung.p1")}</p>
                    <ul className="space-y-3 mt-4">
                      {t.raw("sections.nutzung.obligations").map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#c9a66b] rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Haftung */}
                <div id="haftung" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <AlertCircle className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.haftung.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.haftung.p1")}</p>
                    <p>{t("sections.haftung.p2")}</p>
                    <div className="bg-white border border-[#e8e8e8] p-4 sm:p-6 rounded-xl mt-6">
                      <h4 className="font-medium text-[#1a1a1a] mb-3">{t("sections.haftung.exclusion.title")}</h4>
                      <ul className="space-y-2 text-sm">
                        {t.raw("sections.haftung.exclusion.items").map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-[#c9a66b]">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Laufzeit */}
                <div id="laufzeit" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Clock className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.laufzeit.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.laufzeit.p1")}</p>
                    <p>{t("sections.laufzeit.p2")}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div className="bg-[#faf8f7] p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-[#c9a66b]" />
                          <span className="font-medium text-[#1a1a1a]">{t("sections.laufzeit.notice.title")}</span>
                        </div>
                        <p className="text-sm">{t("sections.laufzeit.notice.text")}</p>
                      </div>
                      <div className="bg-[#faf8f7] p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="w-4 h-4 text-[#c9a66b]" />
                          <span className="font-medium text-[#1a1a1a]">{t("sections.laufzeit.termination.title")}</span>
                        </div>
                        <p className="text-sm">{t("sections.laufzeit.termination.text")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schlussbestimmungen */}
                <div id="schlussbestimmungen" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Scale className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.schlussbestimmungen.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.schlussbestimmungen.p1")}</p>
                    <p>{t("sections.schlussbestimmungen.p2")}</p>
                    <p>{t("sections.schlussbestimmungen.p3")}</p>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-16 pt-8 border-t border-[#e8e8e8]">
                  <Card className="bg-[#1a1a1a] border-0 rounded-xl overflow-hidden">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-lg flex-shrink-0">
                          <Mail className="w-6 h-6 text-[#c9a66b]" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl text-white mb-2">
                            {t("final.title")}
                          </h3>
                          <p className="text-[#9a9a9a] text-sm leading-relaxed mb-4">
                            {t("final.text")}
                          </p>
                          <Link
                            href="/kontakt/"
                            className="inline-flex items-center gap-2 text-sm text-[#c9a66b] hover:text-white transition-colors"
                          >
                            {t("final.link")}
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
