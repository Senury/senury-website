"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// Monogram Logo Component
function MonogramLogo() {
  return (
    <div className="relative w-8 h-8 mr-3">
      {/* Outer rotated square */}
      <div className="absolute inset-0 border border-[#c9a66b] rotate-3 group-hover:rotate-6 transition-transform duration-500 ease-out" />
      {/* Inner rotated square */}
      <div className="absolute inset-0 border border-[#1a1a1a] -rotate-3 group-hover:-rotate-6 transition-transform duration-500 ease-out" />
      {/* Letter */}
      <span className="absolute inset-0 flex items-center justify-center text-[#1a1a1a] font-serif text-sm font-semibold">
        S
      </span>
    </div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("navigation");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/produkt/", label: t("links.product") },
    { href: "/preis/", label: t("links.pricing") },
    { href: "/sicherheit/", label: t("links.security") },
    { href: "/ablauf/", label: t("links.process") },
    { href: "/faq/", label: t("links.faq") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-[#fdfcfb]/85 backdrop-blur-xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with monogram and tagline */}
          <Link href="/" className="group flex items-center">
            <MonogramLogo />
            <div className="flex flex-col">
              <span className="text-xl font-serif font-semibold tracking-tight text-[#1a1a1a] leading-tight">
                {t("brand.name")}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a] leading-tight">
                {t("brand.tagline")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Floating Pills */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 px-2 py-1.5 bg-[#f5f5f5]/50 rounded-full border border-[#e8e8e8]/50">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-1.5 text-sm transition-all duration-300 rounded-full",
                      isActive
                        ? "text-[#1a1a1a] font-medium"
                        : "text-[#6b6b6b] hover:text-[#1a1a1a]"
                    )}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-white rounded-full shadow-sm border border-[#e8e8e8]" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    {/* Copper dot indicator for active state */}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#c9a66b] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white rounded-full h-10 px-6 text-sm font-medium transition-all duration-200"
            >
              {t("cta")}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#1a1a1a] hover:bg-[#f5f5f5] rounded-full"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-[#fdfcfb] border-l border-[#e8e8e8] p-6"
            >
              {/* Mobile Menu Header with Logo */}
              <div className="flex items-center mb-8">
                <div className="relative w-7 h-7 mr-2.5">
                  <div className="absolute inset-0 border border-[#c9a66b] rotate-3" />
                  <div className="absolute inset-0 border border-[#1a1a1a] -rotate-3" />
                  <span className="absolute inset-0 flex items-center justify-center text-[#1a1a1a] font-serif text-xs font-semibold">
                    S
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-serif font-semibold text-[#1a1a1a] leading-tight">
                    {t("brand.name")}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#9a9a9a]">
                    {t("brand.tagline")}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-base py-3 px-4 rounded-lg transition-all duration-200 border-l-2",
                        isActive
                          ? "text-[#1a1a1a] bg-[#f5f5f5] font-medium border-l-[#c9a66b]"
                          : "text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#fafafa] border-l-transparent"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[#e8e8e8]">
                <Button className="w-full bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white rounded-full h-11 font-medium">
                  {t("cta")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
