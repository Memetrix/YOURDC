import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://yourdc.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YOURDC - Профессиональный дата-центр в Москве",
    template: "%s | YOURDC"
  },
  description: "Надежный дата-центр YOURDC предлагает колокацию серверов, облачные услуги, аренду стоек и виртуальных серверов. Tier III сертификация, 99.99% uptime, круглосуточная поддержка.",
  keywords: [
    "дата-центр",
    "colocation",
    "колокация серверов",
    "аренда серверов",
    "облачные услуги",
    "VPS",
    "виртуальные серверы",
    "Tier III",
    "дата-центр Москва",
    "размещение серверов"
  ],
  authors: [{ name: "YOURDC" }],
  creator: "YOURDC",
  publisher: "YOURDC",
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
    locale: "ru_RU",
    url: siteUrl,
    siteName: "YOURDC",
    title: "YOURDC - Профессиональный дата-центр в Москве",
    description: "Надежный дата-центр YOURDC предлагает колокацию серверов, облачные услуги, аренду стоек и виртуальных серверов. Tier III сертификация, 99.99% uptime.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YOURDC - Профессиональный дата-центр",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YOURDC - Профессиональный дата-центр в Москве",
    description: "Надежный дата-центр YOURDC предлагает колокацию серверов, облачные услуги, аренду стоек и виртуальных серверов.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
