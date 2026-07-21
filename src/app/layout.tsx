import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { DOCTOR, SITE_URL } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Cirurgião Cardiovascular no ES | Dr. Leandro Batisti",
  description:
    "Dr. Leandro Batisti, cirurgião cardiovascular no ES. Avaliação, segunda opinião e acompanhamento em Cariacica e Vila Velha. CRM-ES 9.973 · RQE 11.811.",
  applicationName: DOCTOR.shortName,
  authors: [{ name: DOCTOR.name, url: SITE_URL }],
  creator: DOCTOR.name,
  category: "Saúde",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: DOCTOR.shortName,
    title: "Cirurgião cardiovascular no Espírito Santo | Dr. Leandro Batisti",
    description:
      "Avaliação, segunda opinião e acompanhamento em Cariacica e Vila Velha. CRM-ES 9.973 · RQE 11.811.",
    images: [
      {
        url: "/images/og-dr-leandro.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Leandro Batisti, cirurgião cardiovascular no Espírito Santo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cirurgião Cardiovascular no ES | Dr. Leandro Batisti",
    description:
      "Avaliação, segunda opinião e acompanhamento em Cariacica e Vila Velha.",
    images: ["/images/og-dr-leandro.webp"],
  },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f1eb",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${newsreader.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
