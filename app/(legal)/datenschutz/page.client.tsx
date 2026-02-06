"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  User,
  FileText,
  Clock,
  Globe,
  Lock,
  Mail,
  Scale,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function DatenschutzPageClient() {
  const t = useTranslations("datenschutz");

  const sections = [
    { id: "geltungsbereich", icon: Scale },
    { id: "verantwortlicher", icon: User },
    { id: "datenschutzbeauftragter", icon: Shield },
    { id: "datenarten", icon: FileText },
    { id: "zwecke", icon: Lock },
    { id: "rechtsgrundlagen", icon: Scale },
    { id: "empfaenger", icon: Globe },
    { id: "speicherdauer", icon: Clock },
    { id: "betroffenenrechte", icon: User },
    { id: "widerruf", icon: AlertCircle },
    { id: "beschwerde", icon: Mail },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[#fdfcfb] to-white border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center rounded-xl">
                <Shield className="w-6 h-6 text-white" />
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
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar Navigation - Sticky on Desktop */}
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-28">
                <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl overflow-hidden">
                  <CardContent className="p-0">
                    <nav className="divide-y divide-[#e8e8e8]">
                      {sections.map((section) => (
                        <Link
                          key={section.id}
                          href={`#${section.id}`}
                          className="group flex items-center gap-3 px-4 sm:px-6 py-3.5 hover:bg-white transition-colors duration-200"
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
                    <div className="bg-[#faf8f7] border-l-4 border-[#c9a66b] p-4 sm:p-6 my-6">
                      <p className="text-[#1a1a1a] font-medium mb-2">
                        {t("sections.geltungsbereich.note.title")}
                      </p>
                      <p className="text-sm text-[#6b6b6b]">
                        {t("sections.geltungsbereich.note.text")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verantwortlicher */}
                <div id="verantwortlicher" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <User className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.verantwortlicher.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.verantwortlicher.p1")}</p>
                    <Card className="bg-white border-[#e8e8e8] rounded-xl">
                      <CardContent className="p-6">
                        <h3 className="font-serif text-lg text-[#1a1a1a] mb-4">
                          {t("sections.verantwortlicher.company")}
                        </h3>
                        <address className="not-italic space-y-1 text-[#6b6b6b]">
                          <p className="font-medium text-[#1a1a1a]">
                            {t("sections.verantwortlicher.name")}
                          </p>
                          <p>{t("sections.verantwortlicher.street")}</p>
                          <p>{t("sections.verantwortlicher.city")}</p>
                          <div className="pt-3 mt-3 border-t border-[#e8e8e8] space-y-1">
                            <p>
                              {t("sections.verantwortlicher.emailLabel")}:{" "}
                              <a
                                href="mailto:datenschutz@senury.de"
                                className="text-[#c9a66b] hover:underline"
                              >
                                {t("sections.verantwortlicher.email")}
                              </a>
                            </p>
                            <p>
                              {t("sections.verantwortlicher.phoneLabel")}:{" "}
                              {t("sections.verantwortlicher.phone")}
                            </p>
                          </div>
                        </address>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Datenschutzbeauftragter */}
                <div id="datenschutzbeauftragter" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Shield className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.datenschutzbeauftragter.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.datenschutzbeauftragter.p1")}</p>
                    <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl">
                      <CardContent className="p-6">
                        <h3 className="font-serif text-lg text-[#1a1a1a] mb-4">
                          {t("sections.datenschutzbeauftragter.contactTitle")}
                        </h3>
                        <div className="space-y-2 text-[#6b6b6b]">
                          <p className="font-medium text-[#1a1a1a]">
                            {t("sections.datenschutzbeauftragter.name")}
                          </p>
                          <p>
                            {t("sections.datenschutzbeauftragter.emailLabel")}:{" "}
                            <a
                              href="mailto:dpo@senury.de"
                              className="text-[#c9a66b] hover:underline"
                            >
                              {t("sections.datenschutzbeauftragter.email")}
                            </a>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Datenarten */}
                <div id="datenarten" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <FileText className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.datenarten.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.datenarten.p1")}</p>
                    <ul className="space-y-3 mt-4">
                      {["kontakt", "nutzung", "vertrag", "technisch"].map(
                        (item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 bg-[#faf8f7] p-4 rounded-lg"
                          >
                            <div className="w-1.5 h-1.5 bg-[#c9a66b] rounded-full mt-2 flex-shrink-0" />
                            <div>
                              <span className="font-medium text-[#1a1a1a]">
                                {t(`sections.datenarten.items.${item}.title`)}
                              </span>
                              <p className="text-sm mt-1">
                                {t(
                                  `sections.datenarten.items.${item}.description`
                                )}
                              </p>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                {/* Zwecke */}
                <div id="zwecke" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Lock className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.zwecke.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.zwecke.p1")}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      {[
                        "bereitstellung",
                        "vertrag",
                        "kommunikation",
                        "sicherheit",
                      ].map((item) => (
                        <div
                          key={item}
                          className="bg-white border border-[#e8e8e8] p-4 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-[#faf8f7] flex items-center justify-center rounded-lg mb-3">
                            <Lock className="w-4 h-4 text-[#c9a66b]" />
                          </div>
                          <h4 className="font-medium text-[#1a1a1a] text-sm mb-1">
                            {t(`sections.zwecke.items.${item}.title`)}
                          </h4>
                          <p className="text-xs text-[#9a9a9a]">
                            {t(`sections.zwecke.items.${item}.description`)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rechtsgrundlagen */}
                <div id="rechtsgrundlagen" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Scale className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.rechtsgrundlagen.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.rechtsgrundlagen.p1")}</p>
                    <div className="space-y-4 mt-6">
                      {["einwilligung", "vertrag", "rechtliche", "interessen"].map(
                        (item) => (
                          <div
                            key={item}
                            className="flex gap-4 p-4 border-l-2 border-[#e8e8e8] hover:border-[#c9a66b] transition-colors"
                          >
                            <span className="text-xs font-mono text-[#9a9a9a] flex-shrink-0 w-16">
                              {t(
                                `sections.rechtsgrundlagen.items.${item}.article`
                              )}
                            </span>
                            <div>
                              <h4 className="font-medium text-[#1a1a1a] text-sm mb-1">
                                {t(
                                  `sections.rechtsgrundlagen.items.${item}.title`
                                )}
                              </h4>
                              <p className="text-sm text-[#6b6b6b]">
                                {t(
                                  `sections.rechtsgrundlagen.items.${item}.description`
                                )}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Empfänger */}
                <div id="empfaenger" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Globe className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.empfaenger.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.empfaenger.p1")}</p>
                    <p>{t("sections.empfaenger.p2")}</p>
                    <div className="bg-[#faf8f7] border border-[#e8e8e8] p-4 sm:p-6 rounded-xl mt-6">
                      <h4 className="font-medium text-[#1a1a1a] mb-3">
                        {t("sections.empfaenger.drittländer.title")}
                      </h4>
                      <p className="text-sm text-[#6b6b6b]">
                        {t("sections.empfaenger.drittländer.text")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Speicherdauer */}
                <div id="speicherdauer" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Clock className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.speicherdauer.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.speicherdauer.p1")}</p>
                    <p>{t("sections.speicherdauer.p2")}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      {["kontakt", "nutzungs", "vertrags", "gesetzliche"].map(
                        (item) => (
                          <div
                            key={item}
                            className="bg-[#faf8f7] p-4 rounded-lg"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="w-4 h-4 text-[#c9a66b]" />
                              <span className="font-medium text-[#1a1a1a] text-sm">
                                {t(
                                  `sections.speicherdauer.items.${item}.title`
                                )}
                              </span>
                            </div>
                            <p className="text-xs text-[#6b6b6b]">
                              {t(
                                `sections.speicherdauer.items.${item}.duration`
                              )}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Betroffenenrechte */}
                <div id="betroffenenrechte" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <User className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.betroffenenrechte.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.betroffenenrechte.p1")}</p>
                    <div className="grid grid-cols-1 gap-3 mt-6">
                      {[
                        "auskunft",
                        "berichtigung",
                        "loeschung",
                        "einschraenkung",
                        "uebertragbarkeit",
                        "widerspruch",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-4 p-4 bg-white border border-[#e8e8e8] rounded-lg hover:border-[#c9a66b] transition-colors"
                        >
                          <div className="w-8 h-8 bg-[#faf8f7] flex items-center justify-center rounded-lg flex-shrink-0">
                            <span className="text-xs font-mono text-[#c9a66b] font-medium">
                              {t(
                                `sections.betroffenenrechte.items.${item}.article`
                              )}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-[#1a1a1a] text-sm mb-1">
                              {t(
                                `sections.betroffenenrechte.items.${item}.title`
                              )}
                            </h4>
                            <p className="text-sm text-[#6b6b6b]">
                              {t(
                                `sections.betroffenenrechte.items.${item}.description`
                              )}
                            </p>
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
                      <AlertCircle className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.widerruf.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.widerruf.p1")}</p>
                    <p>{t("sections.widerruf.p2")}</p>
                  </div>
                </div>

                {/* Beschwerde */}
                <div id="beschwerde" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Mail className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      {t("sections.beschwerde.title")}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>{t("sections.beschwerde.p1")}</p>
                    <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl">
                      <CardContent className="p-6">
                        <h4 className="font-medium text-[#1a1a1a] mb-2">
                          {t("sections.beschwerde.authority")}
                        </h4>
                        <address className="not-italic text-sm text-[#6b6b6b] space-y-1">
                          <p>{t("sections.beschwerde.name")}</p>
                          <p>{t("sections.beschwerde.street")}</p>
                          <p>{t("sections.beschwerde.city")}</p>
                          <p className="pt-2">
                            {t("sections.beschwerde.websiteLabel")}:{" "}
                            <a
                              href="https://www.bfdi.bund.de"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#c9a66b] hover:underline"
                            >
                              www.bfdi.bund.de
                            </a>
                          </p>
                        </address>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Final Note + Contact Combined */}
                <div className="mt-16 pt-8 border-t border-[#e8e8e8]">
                  <Card className="bg-[#1a1a1a] border-0 rounded-xl overflow-hidden">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-lg flex-shrink-0">
                          <Shield className="w-6 h-6 text-[#c9a66b]" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl text-white mb-2">
                            {t("final.title")}
                          </h3>
                          <p className="text-[#9a9a9a] text-sm leading-relaxed">
                            {t("final.text")}
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 border-t border-white/10">
                        <Link
                          href="/kontakt/"
                          className="inline-flex items-center gap-2 text-sm text-[#c9a66b] hover:text-white transition-colors font-medium"
                        >
                          {t("sidebar.contactLink")}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
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
