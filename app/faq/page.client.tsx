"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Mail, Scale, Shield, FileText, Download, Clock, Database, HelpCircle, Search, ChevronRight } from "lucide-react";

export default function FAQPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const t = useTranslations("faq");

  const categories = [
    { id: "all", label: t("categories.all") },
    { id: "preis", label: t("categories.pricing") },
    { id: "sicherheit", label: t("categories.security") },
    { id: "technik", label: t("categories.technical") },
    { id: "produkt", label: t("categories.product") },
  ];

  const faqs = [
    { id: "notar", category: "produkt", icon: Scale },
    { id: "stgb", category: "sicherheit", icon: Shield },
    { id: "vorlagen", category: "produkt", icon: FileText },
    { id: "export", category: "technik", icon: Download },
    { id: "pilot", category: "preis", icon: Clock },
    { id: "daten", category: "sicherheit", icon: Database },
    { id: "preiswechsel", category: "preis", icon: Scale },
    { id: "integration", category: "technik", icon: FileText },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      t(`items.${faq.id}.question`).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(`items.${faq.id}.answer`).toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#fdfcfb] to-white overflow-hidden">
        {/* Subtle vertical lines - suggests list/columns */}
        <div className="absolute inset-0 opacity-[0.02] hidden lg:block" style={{
          backgroundImage: `linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '120px 100%',
        }} />

        <div className="relative max-w-6xl mx-auto px-6">
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

      {/* Search */}
      <section className="py-8 bg-white border-b border-[#e8e8e8]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a9a9a]" />
            <input
              type="text"
              placeholder={t("search.placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 bg-[#fafafa] border border-[#e8e8e8] rounded-full text-[#1a1a1a] placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#1a1a1a] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-4 sm:py-6 bg-white border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-[#fafafa] text-[#6b6b6b] hover:bg-[#f5f5f5]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#faf8f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-[#9a9a9a] mx-auto mb-4" />
              <p className="text-[#6b6b6b]">{t("noResults")}</p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full space-y-4">
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white border border-[#e8e8e8] rounded-xl overflow-hidden data-[state=open]:shadow-soft"
                >
                  <AccordionTrigger className="text-left text-[#1a1a1a] hover:no-underline py-6 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#fafafa] border border-[#e8e8e8] flex items-center justify-center flex-shrink-0 rounded-lg">
                        <faq.icon className="w-5 h-5 text-[#1a1a1a]" />
                      </div>
                      <span className="font-medium">{t(`items.${faq.id}.question`)}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6b6b6b] pb-6 px-6 pl-16">
                    {t(`items.${faq.id}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </section>

      {/* Contact CTA Box */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Card className="bg-[#1a1a1a] border-0 rounded-xl overflow-hidden">
            <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
              <HelpCircle className="w-12 h-12 sm:w-16 sm:h-16 text-[#6b6b6b] mx-auto mb-4 sm:mb-6" />
              <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-white mb-4">
                {t("contact.title")}
              </h2>
              <p className="text-[#9a9a9a] text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
                {t("contact.description")}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Button className="bg-white text-[#1a1a1a] hover:bg-[#f5f5f5] h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base rounded-full transition-colors w-full sm:w-auto" asChild>
                  <Link href="/kontakt/">
                    <Mail className="w-4 h-4 mr-2" />
                    {t("contact.contactButton")}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base rounded-full w-full sm:w-auto"
                  asChild
                >
                  <Link href="/demo/">
                    {t("contact.demoButton")}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
