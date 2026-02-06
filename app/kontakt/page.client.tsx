"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function KontaktPageClient() {
  const t = useTranslations("contact");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: Mail,
      key: "email",
    },
    {
      icon: Phone,
      key: "phone",
    },
    {
      icon: MapPin,
      key: "address",
    },
    {
      icon: Clock,
      key: "hours",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[#fdfcfb] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="pill-badge bg-[#f5f5f5] text-[#6b6b6b] border border-[#e8e8e8] text-xs sm:text-sm mb-6 inline-block">
              {t("hero.badge")}
            </span>
            <h1 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-4 sm:mb-6 tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-base sm:text-lg text-[#6b6b6b] max-w-2xl mx-auto">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white border-y border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactMethods.map((method) => (
              <Card
                key={method.key}
                className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl overflow-hidden group hover:shadow-soft transition-shadow duration-300"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-14 h-14 bg-white border border-[#e8e8e8] flex items-center justify-center mx-auto mb-4 rounded-xl group-hover:border-[#c9a66b] transition-colors duration-300">
                    <method.icon className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">
                    {t(`methods.${method.key}.title`)}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm">
                    {t(`methods.${method.key}.value`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#faf8f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Form */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
                {t("form.label")}
              </span>
              <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] mb-4">
                {t("form.title")}
              </h2>
              <p className="text-[#6b6b6b] mb-8">
                {t("form.description")}
              </p>

              {isSubmitted ? (
                <Card className="bg-white border-[#e8e8e8] rounded-xl">
                  <CardContent className="p-8 sm:p-12 text-center">
                    <div className="w-16 h-16 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center mx-auto mb-6 rounded-xl">
                      <CheckCircle className="w-8 h-8 text-[#c9a66b]" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1a1a1a] mb-2">
                      {t("form.success.title")}
                    </h3>
                    <p className="text-[#6b6b6b]">
                      {t("form.success.message")}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#1a1a1a]">
                        {t("form.fields.name.label")}
                      </label>
                      <Input
                        type="text"
                        placeholder={t("form.fields.name.placeholder")}
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        required
                        className="h-12 bg-white border-[#e8e8e8] rounded-lg focus:border-[#1a1a1a] focus:ring-0"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#1a1a1a]">
                        {t("form.fields.email.label")}
                      </label>
                      <Input
                        type="email"
                        placeholder={t("form.fields.email.placeholder")}
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        required
                        className="h-12 bg-white border-[#e8e8e8] rounded-lg focus:border-[#1a1a1a] focus:ring-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#1a1a1a]">
                      {t("form.fields.company.label")}
                    </label>
                    <Input
                      type="text"
                      placeholder={t("form.fields.company.placeholder")}
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="h-12 bg-white border-[#e8e8e8] rounded-lg focus:border-[#1a1a1a] focus:ring-0"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#1a1a1a]">
                      {t("form.fields.message.label")}
                    </label>
                    <Textarea
                      placeholder={t("form.fields.message.placeholder")}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="bg-white border-[#e8e8e8] rounded-lg focus:border-[#1a1a1a] focus:ring-0 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white h-12 px-8 rounded-full transition-all duration-200"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {t("form.submit")}
                  </Button>
                </form>
              )}
            </div>

            {/* Right: Quick Actions */}
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
                {t("quickActions.label")}
              </span>

              {/* Demo Card */}
              <Card className="bg-white border-[#e8e8e8] rounded-xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#faf8f7] border border-[#e8e8e8] flex items-center justify-center flex-shrink-0 rounded-lg">
                      <Calendar className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-1">
                        {t("quickActions.demo.title")}
                      </h3>
                      <p className="text-sm text-[#6b6b6b] mb-4">
                        {t("quickActions.demo.description")}
                      </p>
                      <Button
                        variant="outline"
                        className="border-[#e8e8e8] text-[#1a1a1a] hover:bg-[#faf8f7] rounded-full h-10 px-6 text-sm"
                        asChild
                      >
                        <Link href="/demo/">
                          {t("quickActions.demo.button")}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Card */}
              <Card className="bg-[#1a1a1a] border-0 rounded-xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-medium text-white mb-1">
                        {t("quickActions.faq.title")}
                      </h3>
                      <p className="text-sm text-[#9a9a9a] mb-4">
                        {t("quickActions.faq.description")}
                      </p>
                      <Button
                        variant="outline"
                        className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white rounded-full h-10 px-6 text-sm"
                        asChild
                      >
                        <Link href="/faq/">
                          {t("quickActions.faq.button")}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4 block">
            {t("trust.label")}
          </span>
          <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] mb-6">
            {t("trust.title")}
          </h2>
          <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto mb-8">
            {t("trust.description")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {["stgb", "gdpr", "iso", "germany"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-[#6b6b6b]"
              >
                <CheckCircle className="w-4 h-4 text-[#c9a66b]" />
                <span>{t(`trust.badges.${item}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
