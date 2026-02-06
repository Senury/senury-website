import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Senury | KI-gestützte Notariatssoftware",
  description: "Senury hilft Notaren und Mitarbeitenden bei der effizienten Erstellung von Kaufverträgen und weiteren Urkunden. Unterstützend, nicht ersetzend.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${newsreader.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
