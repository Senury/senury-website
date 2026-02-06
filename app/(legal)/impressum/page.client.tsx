"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Building2, User, Mail, Phone, MapPin, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ImpressumPageClient() {
  const t = useTranslations("impressum");

  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-white to-[#fdfcfb] border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center rounded-xl">
                <Scale className="w-6 h-6 text-[#c9a66b]" />
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
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Column - Company Info */}
            <div className="lg:col-span-7 space-y-12">
              {/* Company Details Card */}
              <Card className="bg-white border-[#e8e8e8] rounded-xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <Building2 className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">
                      {t("company.title")}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="pb-6 border-b border-[#e8e8e8]">
                      <p className="text-sm text-[#9a9a9a] mb-1">{t("company.nameLabel")}</p>
                      <p className="text-lg font-medium text-[#1a1a1a]">{t("company.name")}</p>
                      <p className="text-sm text-[#6b6b6b] mt-1">{t("company.legalForm")}</p>
                    </div>

                    <div className="pb-6 border-b border-[#e8e8e8]">
                      <p className="text-sm text-[#9a9a9a] mb-1">{t("company.addressLabel")}</p>
                      <address className="not-italic text-[#1a1a1a]">
                        <p className="font-medium">{t("company.street")}</p>
                        <p>{t("company.city")}</p>
                      </address>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-[#9a9a9a] mb-1">{t("company.emailLabel")}</p>
                        <a
                          href={`mailto:${t("company.email")}`}
                          className="text-[#c9a66b] hover:text-[#1a1a1a] transition-colors"
                        >
                          {t("company.email")}
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-[#9a9a9a] mb-1">{t("company.phoneLabel")}</p>
                        <a
                          href={`tel:${t("company.phone")}`}
                          className="text-[#1a1a1a] hover:text-[#c9a66b] transition-colors"
                        >
                          {t("company.phone")}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Registration Info */}
              <Card className="bg-white border-[#e8e8e8] rounded-xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <FileText className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">
                      {t("registration.title")}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-[#e8e8e8]">
                      <div>
                        <p className="text-sm text-[#9a9a9a] mb-1">{t("registration.courtLabel")}</p>
                        <p className="text-[#1a1a1a] font-medium">{t("registration.court")}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#9a9a9a] mb-1">{t("registration.numberLabel")}</p>
                        <p className="text-[#1a1a1a] font-medium">{t("registration.number")}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-[#9a9a9a] mb-1">{t("registration.vatLabel")}</p>
                      <p className="text-[#1a1a1a] font-medium">{t("registration.vatId")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Management */}
              <Card className="bg-white border-[#e8e8e8] rounded-xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center rounded-lg">
                      <User className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">
                      {t("management.title")}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[#6b6b6b]">{t("management.description")}</p>
                    <ul className="space-y-3">
                      {t.raw("management.persons").map((person: string, index: number) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-[#c9a66b] rounded-full" />
                          <span className="text-[#1a1a1a] font-medium">{person}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Content Responsibility & Links */}
            <div className="lg:col-span-5 space-y-8">
              {/* Content Responsibility */}
              <Card className="bg-[#1a1a1a] border-0 rounded-xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-serif text-lg text-white mb-4">
                    {t("contentResponsibility.title")}
                  </h3>
                  <p className="text-sm text-[#9a9a9a] mb-4 leading-relaxed">
                    {t("contentResponsibility.description")}
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white font-medium">{t("contentResponsibility.name")}</p>
                    <p className="text-sm text-[#9a9a9a]">{t("contentResponsibility.address")}</p>
                  </div>
                </CardContent>
              </Card>

              {/* EU Dispute Resolution */}
              <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg text-[#1a1a1a] mb-3">
                    {t("disputeResolution.title")}
                  </h3>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed mb-4">
                    {t("disputeResolution.text")}
                  </p>
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#c9a66b] hover:text-[#1a1a1a] transition-colors"
                  >
                    {t("disputeResolution.link")}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg text-[#1a1a1a] mb-4">{t("links.title")}</h3>
                <Link
                  href="/datenschutz/"
                  className="flex items-center justify-between p-4 bg-white border border-[#e8e8e8] rounded-xl hover:border-[#c9a66b] transition-colors group"
                >
                  <span className="text-[#6b6b6b] group-hover:text-[#1a1a1a]">{t("links.privacy")}</span>
                  <ExternalLink className="w-4 h-4 text-[#9a9a9a] group-hover:text-[#c9a66b]" />
                </Link>
                <Link
                  href="/agb/"
                  className="flex items-center justify-between p-4 bg-white border border-[#e8e8e8] rounded-xl hover:border-[#c9a66b] transition-colors group"
                >
                  <span className="text-[#6b6b6b] group-hover:text-[#1a1a1a]">{t("links.terms")}</span>
                  <ExternalLink className="w-4 h-4 text-[#9a9a9a] group-hover:text-[#c9a66b]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
