"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scale,
  Building2,
  User,
  FileText,
  Gavel,
  Copyright,
  Link2,
  Mail,
  Phone,
  Clock,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function ImpressumPageClient() {
  const t = useTranslations("impressum");

  const sections = [
    { id: "company", icon: Building2 },
    { id: "legal-notes", icon: Gavel },
    { id: "copyright", icon: Copyright },
    { id: "links", icon: Link2 },
    { id: "content-responsibility", icon: User },
    { id: "dispute", icon: Scale },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[#fdfcfb] to-white border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center rounded-xl">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a]">
                Rechtliche Hinweise
              </span>
            </div>
            <h1 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
              Impressum
            </h1>
            <div className="mt-8 flex items-center gap-2 text-sm text-[#9a9a9a]">
              <Clock className="w-4 h-4" />
              <span>Zu letzt geupdated: Januar 2026</span>
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
                            {section.id === "company" && "Angaben gemäß § 5 DDG"}
                            {section.id === "legal-notes" && "Besondere rechtliche Hinweise"}
                            {section.id === "copyright" && "Urheberrecht"}
                            {section.id === "links" && "Haftung für Links"}
                            {section.id === "content-responsibility" && "Verantwortlich für den Inhalt"}
                            {section.id === "dispute" && "Streitbeilegung"}
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
                {/* Company Information */}
                <div id="company" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Building2 className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      Angaben gemäß § 5 DDG
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-6 text-[#6b6b6b] leading-relaxed">
                    <Card className="bg-white border-[#e8e8e8] rounded-xl">
                      <CardContent className="p-6">
                        <h3 className="font-serif text-lg text-[#1a1a1a] mb-4">
                          Senury UG (haftungsbeschränkt)
                        </h3>
                        <address className="not-italic space-y-1 text-[#6b6b6b]">
                          <p className="font-medium text-[#1a1a1a]">Baron-Voght-Straße 19d</p>
                          <p>22609 Hamburg</p>
                        </address>

                        <div className="pt-4 mt-4 border-t border-[#e8e8e8]">
                          <p className="text-sm text-[#9a9a9a] mb-2">Vertreten durch</p>
                          <p className="text-[#1a1a1a] font-medium">Jun Augustin Probst und Johan Kawamura</p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-[#e8e8e8] space-y-2">
                          <p className="text-sm text-[#9a9a9a] mb-2">Kontakt</p>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#c9a66b]" />
                            <a href="tel:+4915758190952" className="text-[#1a1a1a] hover:text-[#c9a66b] transition-colors">
                              +49 157 58190952
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[#c9a66b]" />
                            <a href="mailto:accounts@senury.com" className="text-[#c9a66b] hover:text-[#1a1a1a] transition-colors">
                              accounts@senury.com
                            </a>
                          </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-[#e8e8e8]">
                          <p className="text-sm text-[#9a9a9a] mb-2">Registereintrag</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-[#9a9a9a]">Registergericht</p>
                              <p className="text-[#1a1a1a] font-medium">Amtsgericht Hamburg</p>
                            </div>
                            <div>
                              <p className="text-[#9a9a9a]">Registernummer</p>
                              <p className="text-[#1a1a1a] font-medium">HRB [Nummer]</p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-[#e8e8e8]">
                          <p className="text-sm text-[#9a9a9a] mb-2">Umsatzsteuer-ID</p>
                          <p className="text-sm text-[#6b6b6b]">
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                          </p>
                          <p className="text-[#1a1a1a] font-medium mt-1">[USt-IdNr.]</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Special Legal Notes for Professional Secrecy Holders */}
                <div id="legal-notes" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Gavel className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      Besondere rechtliche Hinweise für Berufsgeheimnisträger
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>
                      Die Senury UG ist auf die Zusammenarbeit mit Berufsgeheimnisträgern (Notare und Rechtsanwälte) spezialisiert. Wir gewährleisten die Einhaltung der folgenden gesetzlichen Standards:
                    </p>
                    <ul className="space-y-4 mt-6">
                      <li className="flex gap-4 bg-[#faf8f7] p-4 rounded-lg">
                        <span className="w-2 h-2 bg-[#c9a66b] rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-[#1a1a1a]">Schutz von Privatgeheimnissen (§ 203 StGB)</span>
                          <p className="text-sm mt-1">
                            Wir verpflichten uns zur Wahrung der Verschwiegenheit gemäß § 203 Abs. 3 Satz 2 StGB. Unsere Mitarbeiter sind strafrechtlich auf das Datengeheimnis verpflichtet, wodurch die Einbeziehung als externer Dienstleister für Notariate rechtssicher ermöglicht wird.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4 bg-[#faf8f7] p-4 rounded-lg">
                        <span className="w-2 h-2 bg-[#c9a66b] rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-[#1a1a1a]">Wahrung der notariellen Amtsausübung (§§ 18, 19 BNotO)</span>
                          <p className="text-sm mt-1">
                            Unsere Software dient ausschließlich als technisches Hilfsmittel. Die abschließende Prüfungs- und Entscheidungsbefugnis sowie die persönliche Amtsführung verbleiben jederzeit vollständig bei der Notarin bzw. dem Notar.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4 bg-[#faf8f7] p-4 rounded-lg">
                        <span className="w-2 h-2 bg-[#c9a66b] rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-[#1a1a1a]">Datenschutz (Art. 28 DSGVO)</span>
                          <p className="text-sm mt-1">
                            Die Verarbeitung personenbezogener Daten erfolgt streng weisungsgebunden auf Grundlage eines separat abzuschließenden Auftragsverarbeitungsvertrages (AVV).
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Copyright */}
                <div id="copyright" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Copyright className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      Urheberrecht
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Arbeit der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    </p>
                    <p>
                      Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                  </div>
                </div>

                {/* Liability for Links */}
                <div id="links" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Link2 className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      Haftung für Links
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>
                      Wir weisen ausdrücklich darauf hin, dass wir für die Angebote Dritter im World Wide Web (sog. „deep links“) nicht verantwortlich sind. Soweit Links auf die Angebote Dritter verweisen, enthalten diese nach unserer Kenntnis keine strafbaren oder anderweitig verbotenen Inhalte. Für diese Inhalte wird keinerlei Haftung übernommen.
                    </p>
                  </div>
                </div>

                {/* Content Responsibility */}
                <div id="content-responsibility" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <User className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      Verantwortlich für den Inhalt
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</p>
                    <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl">
                      <CardContent className="p-6">
                        <p className="font-medium text-[#1a1a1a]">Jun Augustin Probst und Johan Kawamura</p>
                        <p className="text-sm text-[#6b6b6b] mt-1">Baron-Voght Straße 19d, 22609 Hamburg</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Dispute Resolution */}
                <div id="dispute" className="mb-16 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Scale className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a]">
                      Streitbeilegung
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-13 space-y-4 text-[#6b6b6b] leading-relaxed">
                    <p>
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                      <a
                        href="https://ec.europa.eu/consumers/odr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#c9a66b] hover:text-[#1a1a1a] transition-colors"
                      >
                        https://ec.europa.eu/consumers/odr/
                      </a>
                    </p>
                    <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

                    <div className="bg-[#faf8f7] border border-[#e8e8e8] p-4 sm:p-6 rounded-xl mt-6">
                      <h4 className="font-medium text-[#1a1a1a] mb-2">
                        Hinweis gemäß § 36 VSBG:
                      </h4>
                      <p className="text-sm text-[#6b6b6b]">
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Final Note + Contact Combined */}
                <div className="mt-16 pt-8 border-t border-[#e8e8e8]">
                  <Card className="bg-[#1a1a1a] border-0 rounded-xl overflow-hidden">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-lg flex-shrink-0">
                          <Scale className="w-6 h-6 text-[#c9a66b]" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl text-white mb-2">
                            Fragen zum Impressum?
                          </h3>
                          <p className="text-[#9a9a9a] text-sm leading-relaxed">
                            Bei Fragen zu den rechtlichen Hinweisen oder dem Impressum kontaktieren Sie uns gerne.
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 border-t border-white/10">
                        <Link
                          href="/kontakt/"
                          className="inline-flex items-center gap-2 text-sm text-[#c9a66b] hover:text-white transition-colors font-medium"
                        >
                          Kontakt aufnehmen
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
