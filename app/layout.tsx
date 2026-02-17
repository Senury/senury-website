import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://senury.com"),
  title: {
    default: "Senury | KI-gestützte Notariatssoftware",
    template: "%s | Senury",
  },
  description:
    "Senury hilft Notaren und Mitarbeitenden bei der effizienten Erstellung von Kaufverträgen und weiteren Urkunden. Unterstützend, nicht ersetzend.",
  keywords: [
    "Notariatssoftware",
    "Kaufvertrag Software",
    "Notar Software",
    "KI Notar",
    "Beurkundung Software",
    "Urkunden Software",
    "Legal Tech",
    "Notariat Digitalisierung",
  ],
  authors: [{ name: "Senury" }],
  creator: "Senury",
  publisher: "Senury",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://senury.com",
    siteName: "Senury",
    title: "Senury | KI-gestützte Notariatssoftware",
    description:
      "Senury hilft Notaren bei der effizienten Erstellung von Kaufverträgen und Urkunden. §203 StGB-konform, DSGVO-konform, Made in Germany.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Senury - KI-gestützte Notariatssoftware",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Senury | KI-gestützte Notariatssoftware",
    description:
      "Senury hilft Notaren bei der effizienten Erstellung von Kaufverträgen und Urkunden.",
    images: ["/favicon.png"],
    creator: "@senury",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
  classification: "Legal Technology",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr">
      <body
        className={`${inter.variable} ${newsreader.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="pt-16 lg:pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
