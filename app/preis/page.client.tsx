"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, HelpCircle, Shield, Clock, Scale, ArrowRight, Star, Lock, Server } from "lucide-react";
import Link from "next/link";

export default function PreisPageClient() {
  const [isYearly, setIsYearly] = useState(false);
  const t = useTranslations("pricing");
  const ct = useTranslations("common");

  const pricingTiers = [
    { key: "pilot", popular: false },
    { key: "professional", popular: true },
    { key: "enterprise", popular: false },
  ];

  const featureComparison = [
    { key: "casesPerMonth", pilot: "50", professional: "200", enterprise: ct("values.unlimited") },
    { key: "templates", pilot: "5", professional: "20", enterprise: ct("values.unlimited") },
    { key: "wordAddIn", pilot: false, professional: true, enterprise: true },
    { key: "outlookAddIn", pilot: false, professional: true, enterprise: true },
    { key: "collaboration", pilot: false, professional: true, enterprise: true },
    { key: "versionCompare", pilot: false, professional: true, enterprise: true },
    { key: "auditLog", pilot: false, professional: true, enterprise: true },
    { key: "apiAccess", pilot: false, professional: false, enterprise: true },
    { key: "onPremise", pilot: false, professional: false, enterprise: true },
    { key: "supportResponse", pilot: "24h", professional: "4h", enterprise: "24/7" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-12 sm:pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#fdfcfb] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

      {/* Pricing Toggle & Cards */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isYearly ? "text-[#1a1a1a] font-medium" : "text-[#6b6b6b]"}`}>
              {t("toggle.monthly")}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-[#e8e8e8] rounded-full transition-colors"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-[#1a1a1a] font-medium" : "text-[#6b6b6b]"}`}>
              {t("toggle.yearly")}
            </span>
            <span className="pill-badge bg-[#c9a66b]/10 text-[#c9a66b] text-[10px]">
              {t("toggle.save")}
            </span>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.key}
                className={`bg-white ${tier.popular ? "border-[#1a1a1a] border-2 shadow-elevated" : "border-[#e8e8e8]"} relative rounded-xl overflow-hidden`}
              >
                {tier.popular && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white text-xs font-medium px-4 py-1 rounded-b-lg">
                    {t(`tiers.${tier.key}.popular`)}
                  </div>
                )}
                <CardContent className="p-8 pt-10">
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-2">{t(`tiers.${tier.key}.name`)}</h3>
                  <p className="text-sm text-[#6b6b6b] mb-6">{t(`tiers.${tier.key}.description`)}</p>

                  <div className="mb-6">
                    {tier.key === "enterprise" ? (
                      <span className="text-4xl font-serif font-medium text-[#1a1a1a]">{t(`tiers.${tier.key}.price`)}</span>
                    ) : (
                      <div className="flex items-baseline">
                        <span className="text-4xl font-serif font-medium text-[#1a1a1a]">
                          €{isYearly ? t(`tiers.${tier.key}.priceYearly`) : t(`tiers.${tier.key}.priceMonthly`)}
                        </span>
                        <span className="text-[#9a9a9a] ml-2">/Monat</span>
                      </div>
                    )}
                    {isYearly && tier.key !== "enterprise" && (
                      <p className="text-xs text-[#6b6b6b] mt-1">
                        Bei jährlicher Zahlung
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#3d3d3d]">
                        <Check className="w-4 h-4 text-[#c9a66b] flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{t(`tiers.${tier.key}.features.${i}`)}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full h-12 rounded-full transition-colors ${
                      tier.popular
                        ? "bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white"
                        : "bg-white border border-[#e8e8e8] text-[#1a1a1a] hover:bg-[#fafafa]"
                    }`}
                    asChild
                  >
                    <Link href="/demo/">
                      {t(`tiers.${tier.key}.cta`)}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-[#6b6b6b]">
              <Shield className="w-4 h-4" />
              <span className="text-xs">{t("trust.stgb")}</span>
            </div>
            <div className="flex items-center gap-2 text-[#6b6b6b]">
              <Lock className="w-4 h-4" />
              <span className="text-xs">{t("trust.gdpr")}</span>
            </div>
            <div className="flex items-center gap-2 text-[#6b6b6b]">
              <Server className="w-4 h-4" />
              <span className="text-xs">{t("trust.hosting")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 lg:py-32 bg-[#faf8f7] border-y border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif font-medium text-2xl md:text-3xl text-[#1a1a1a] mb-4">
              {t("comparison.title")}
            </h2>
            <p className="text-[#6b6b6b]">
              {t("comparison.description")}
            </p>
          </div>

          <div className="bg-white border border-[#e8e8e8] rounded-xl overflow-hidden overflow-x-auto scrollbar-hide">
            <div className="min-w-[500px]">
              <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 bg-[#fafafa] border-b border-[#e8e8e8] text-xs sm:text-sm font-medium text-[#1a1a1a]">
                <div className="min-w-[120px]">{t("comparison.header.feature")}</div>
                <div className="text-center min-w-[80px]">{t("comparison.header.pilot")}</div>
                <div className="text-center min-w-[100px]">{t("comparison.header.professional")}</div>
                <div className="text-center min-w-[100px]">{t("comparison.header.enterprise")}</div>
              </div>

              {featureComparison.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 border-b border-[#e8e8e8] last:border-0 text-xs sm:text-sm">
                  <div className="text-[#1a1a1a] min-w-[120px]">{t(`comparison.features.${row.key}`)}</div>
                  <div className="text-center text-[#6b6b6b] min-w-[80px]">
                    {typeof row.pilot === "boolean" ? (
                      row.pilot ? (
                        <Check className="w-4 h-4 text-[#c9a66b] mx-auto" />
                      ) : (
                        <span className="text-[#e5e5e5]">—</span>
                      )
                    ) : (
                      row.pilot
                    )}
                  </div>
                  <div className="text-center text-[#6b6b6b] min-w-[100px]">
                    {typeof row.professional === "boolean" ? (
                      row.professional ? (
                        <Check className="w-4 h-4 text-[#c9a66b] mx-auto" />
                      ) : (
                        <span className="text-[#e5e5e5]">—</span>
                      )
                    ) : (
                      row.professional
                    )}
                  </div>
                  <div className="text-center text-[#6b6b6b] min-w-[100px]">
                    {typeof row.enterprise === "boolean" ? (
                      row.enterprise ? (
                        <Check className="w-4 h-4 text-[#c9a66b] mx-auto" />
                      ) : (
                        <span className="text-[#e5e5e5]">—</span>
                      )
                    ) : (
                      row.enterprise
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">{t("faq.label")}</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a]">
              {t("faq.title")}
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {["roi", "changePackage", "contractDuration", "limitExceeded"].map((key) => (
              <AccordionItem key={key} value={key} className="border-b border-[#e8e8e8]">
                <AccordionTrigger className="text-left text-[#1a1a1a] hover:no-underline py-6">
                  {t(`faq.items.${key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-[#6b6b6b] pb-6">
                  {t(`faq.items.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">{t("trustSection.label")}</span>
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              {t("trustSection.title")}
            </h2>
            <p className="text-[#6b6b6b] max-w-2xl mx-auto">
              {t("trustSection.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { key: "dataSecurity", icon: Shield },
              { key: "onboarding", icon: Clock },
              { key: "cancellation", icon: Scale },
              { key: "trial", icon: HelpCircle },
            ].map((item) => (
              <Card key={item.key} className="bg-white border-[#e8e8e8] rounded-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center flex-shrink-0 rounded-lg">
                      <item.icon className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1a1a1a] mb-2">{t(`trustSection.items.${item.key}.question`)}</h3>
                      <p className="text-sm text-[#6b6b6b] leading-relaxed">{t(`trustSection.items.${item.key}.answer`)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-5xl mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-[#9a9a9a] text-lg mb-10 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-[#1a1a1a] hover:bg-[#f5f5f5] h-14 px-8 text-base rounded-full transition-colors" asChild>
              <Link href="/demo/">
                {t("cta.button")}
              </Link>
            </Button>
            <Link href="/faq/" className="group flex items-center gap-2 text-[#9a9a9a] hover:text-white transition-colors">
              <span>{t("cta.faqLink")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
