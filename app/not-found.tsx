"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Home, Search, ArrowRight, FolderOpen } from "lucide-react";

export default function NotFoundPage() {
  const t = useTranslations("notFound");

  const quickLinks = [
    { href: "/", label: t("links.home"), icon: Home },
    { href: "/produkt/", label: t("links.product"), icon: FolderOpen },
    { href: "/kontakt/", label: t("links.contact"), icon: Search },
  ];

  return (
    <div className="min-h-screen bg-[#fdfcfb] relative overflow-hidden">
      {/* Background Pattern - Subtle grid suggesting file organization */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50" />

      {/* Floating Document silhouettes - decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Document 1 */}
        <div className="absolute top-[15%] left-[8%] w-32 h-40 bg-white border border-[#e8e8e8] rounded-lg shadow-soft opacity-40 rotate-[-12deg] hidden lg:block">
          <div className="p-4 space-y-2">
            <div className="h-2 w-16 bg-[#e8e8e8] rounded" />
            <div className="h-2 w-full bg-[#f5f5f5] rounded" />
            <div className="h-2 w-3/4 bg-[#f5f5f5] rounded" />
            <div className="h-2 w-full bg-[#f5f5f5] rounded" />
          </div>
        </div>

        {/* Document 2 */}
        <div className="absolute top-[25%] right-[12%] w-28 h-36 bg-white border border-[#e8e8e8] rounded-lg shadow-soft opacity-30 rotate-[8deg] hidden lg:block">
          <div className="p-3 space-y-2">
            <div className="h-2 w-12 bg-[#e8e8e8] rounded" />
            <div className="h-2 w-full bg-[#f5f5f5] rounded" />
            <div className="h-2 w-2/3 bg-[#f5f5f5] rounded" />
          </div>
        </div>

        {/* Document 3 - smaller, more faded */}
        <div className="absolute bottom-[20%] left-[15%] w-24 h-32 bg-white border border-[#e8e8e8] rounded-lg shadow-soft opacity-25 rotate-[15deg] hidden xl:block">
          <div className="p-3 space-y-1.5">
            <div className="h-1.5 w-10 bg-[#e8e8e8] rounded" />
            <div className="h-1.5 w-full bg-[#f5f5f5] rounded" />
            <div className="h-1.5 w-4/5 bg-[#f5f5f5] rounded" />
          </div>
        </div>

        {/* Large faded 404 watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif font-medium text-[#1a1a1a] opacity-[0.02] select-none pointer-events-none hidden xl:block">
          404
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
        <div className="max-w-2xl w-full text-center">

          {/* Main Typography */}
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-medium text-[#1a1a1a] tracking-tight mb-4">
            404
          </h1>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4">
            {t("title")}
          </h2>

          <p className="text-base sm:text-lg text-[#6b6b6b] max-w-md mx-auto leading-relaxed mb-10">
            {t("description")}
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#2d2d2d] transition-all duration-200 hover:shadow-medium w-full sm:w-auto justify-center"
            >
              <Home className="w-4 h-4" />
              {t("cta.primary")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/kontakt/"
              className="inline-flex items-center gap-2 border border-[#e8e8e8] bg-white text-[#1a1a1a] px-8 py-3.5 rounded-full text-sm font-medium hover:border-[#c9a66b] hover:text-[#c9a66b] transition-all duration-200 w-full sm:w-auto justify-center"
            >
              {t("cta.secondary")}
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-[#e8e8e8] pt-10">
            <p className="text-xs font-medium uppercase tracking-widest text-[#9a9a9a] mb-6">
              {t("quickLinks.title")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 p-4 bg-white border border-[#e8e8e8] rounded-xl hover:border-[#c9a66b] transition-all duration-200 hover:shadow-soft"
                >
                  <div className="w-10 h-10 bg-[#faf8f7] rounded-lg flex items-center justify-center group-hover:bg-[#c9a66b] group-hover:bg-opacity-10 transition-colors">
                    <link.icon className="w-5 h-5 text-[#9a9a9a] group-hover:text-[#c9a66b] transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-[#6b6b6b] group-hover:text-[#1a1a1a] transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#e5e5e5] ml-auto opacity-0 group-hover:opacity-100 group-hover:text-[#c9a66b] transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Reference Number - Legal aesthetic touch */}
          <div className="mt-12 pt-6 border-t border-dashed border-[#e8e8e8]">
            <p className="text-xs text-[#9a9a9a] font-mono tracking-wider">
              {t("reference")}: <span className="text-[#6b6b6b]">404-ERR-NOT-FOUND</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
