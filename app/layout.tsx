import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://site-xavier-alves-advocacia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Xavier & Alves Advocacia", template: "%s | Xavier & Alves" },
  description: "Advocacia previdenciária e trabalhista com estratégia, proximidade e clareza.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Xavier & Alves Advocacia",
    description: "Direito com estratégia, proximidade e propósito.",
    url: siteUrl,
    siteName: "Xavier & Alves Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 675,
      type: "image/jpeg",
      alt: "Xavier & Alves Advocacia — Dayanne Alves e Dayane Xavier. Direito com estratégia, proximidade e propósito.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xavier & Alves Advocacia",
    description: "Direito com estratégia, proximidade e propósito.",
    images: ["/og-image.jpg"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Xavier & Alves Advocacia",
    url: siteUrl,
    areaServed: "Brasil",
    knowsAbout: ["Direito Previdenciário", "Direito Trabalhista", "Direito Trabalhista Empresarial"],
    sameAs: ["https://instagram.com/xaviereaalves.advocacia"],
  };
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }} />
      </body>
    </html>
  );
}
