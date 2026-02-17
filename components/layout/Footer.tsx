"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Linkedin, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#faf8f7] border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-serif font-semibold tracking-tight text-[#1a1a1a]">Senury</span>
            </Link>
            <p className="mt-4 text-sm text-[#6b6b6b] leading-relaxed">
              {t("brand.description")}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/senury"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9a9a9a] hover:text-[#1a1a1a] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Senury"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9a9a9a] hover:text-[#1a1a1a] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4">
              {t("links.product.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/produkt/"
                  className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                >
                  {t("links.product.features")}
                </Link>
              </li>
              <li>
                <Link
                  href="/preis/"
                  className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                >
                  {t("links.product.pricing")}
                </Link>
              </li>
              <li>
                <Link
                  href="/ablauf/"
                  className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                >
                  {t("links.product.process")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4">
              {t("links.company.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ueber-uns/"
                  className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                >
                  {t("links.company.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/sicherheit/"
                  className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                >
                  {t("links.company.security")}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq/"
                  className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                >
                  {t("links.company.faq")}
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt/"
                  className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                >
                  {t("links.company.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a] mb-4">
              {t("links.legal.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum/"
                  className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                >
                  {t("links.legal.imprint")}
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz/"
                  className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                >
                  {t("links.legal.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/agb/"
                  className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                >
                  {t("links.legal.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-[#e8e8e8]" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs text-[#9a9a9a]">
            {t("copyright", { year: currentYear })}
          </p>
          <p className="text-xs text-[#9a9a9a]">
            {t("tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
