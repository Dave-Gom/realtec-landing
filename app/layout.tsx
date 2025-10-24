import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/sections/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Realtec | Desarrolladora Inmobiliaria Paraguay - Proyectos Industriales y Corporativos",
  description:
    "Realtec, desarrolladora inmobiliaria del Grupo Tecnoedil en Paraguay. Especializados en proyectos industriales, corporativos y de uso mixto. Desarrollamos valor, crecemos juntos con visión a largo plazo.",
  keywords: [
    "desarrolladora inmobiliaria Paraguay",
    "proyectos industriales Paraguay",
    "desarrollo corporativo Paraguay",
    "inversión inmobiliaria Paraguay",
    "Realtec Paraguay",
    "Grupo Tecnoedil",
    "parque industrial Limpio",
    "DOT Sacramento Asunción",
    "desarrollos de uso mixto",
    "construcción industrial Paraguay",
    "inversión inmobiliaria",
    "desarrollo urbano Paraguay",
  ],
  authors: [{ name: "Realtec" }],
  creator: "Realtec - Grupo Tecnoedil",
  publisher: "Realtec",
  category: "Real Estate Development",
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
    locale: "es_PY",
    url: "https://realtec.com.py",
    siteName: "Realtec Paraguay",
    title:
      "Realtec | Desarrolladora Inmobiliaria Paraguay - Proyectos Industriales y Corporativos",
    description:
      "Desarrolladora inmobiliaria especializada en proyectos industriales, corporativos y de uso mixto en Paraguay. Respaldados por más de 50 años de experiencia de Tecnoedil.",
    images: [
      {
        url: "/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Realtec - Desarrolladora Inmobiliaria Paraguay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Realtec | Desarrolladora Inmobiliaria Paraguay",
    description:
      "Desarrollamos proyectos industriales, corporativos y de uso mixto en Paraguay. Desarrollamos valor, crecemos juntos.",
    images: ["/assets/img/twitter-image.jpg"],
    creator: "@realtecpy",
    site: "@realtecpy",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://realtec.com.py",
    languages: {
      "es-PY": "https://realtec.com.py",
      "en-US": "https://realtec.com.py/en",
    },
  },
  applicationName: "Realtec Paraguay",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://realtec.com.py"),
  other: {
    "geo.region": "PY",
    "geo.placename": "Paraguay",
    "geo.position": "-25.2637;-57.5759",
    ICBM: "-25.2637, -57.5759",
    "business:contact_data:street_address": "Asunción, Paraguay",
    "business:contact_data:locality": "Asunción",
    "business:contact_data:region": "Central",
    "business:contact_data:country_name": "Paraguay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Realtec",
    alternateName: "Realtec Paraguay",
    description:
      "Desarrolladora inmobiliaria especializada en proyectos industriales, corporativos y de uso mixto en Paraguay",
    url: "https://realtec.com.py",
    logo: "https://realtec.com.py/assets/img/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Asunción",
      addressRegion: "Central",
      addressCountry: "PY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.2637,
      longitude: -57.5759,
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Grupo Tecnoedil",
      description: "Constructora con más de 50 años de experiencia en Paraguay",
    },
    serviceArea: {
      "@type": "Country",
      name: "Paraguay",
    },
    areaServed: "Paraguay",
    slogan: "Desarrollamos valor, crecemos juntos",
    knowsAbout: [
      "Desarrollo inmobiliario",
      "Proyectos industriales",
      "Desarrollos corporativos",
      "Proyectos de uso mixto",
      "Inversión inmobiliaria",
      "Parques industriales",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Desarrollo Inmobiliario",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desarrollo de Proyectos Industriales",
            description:
              "Desarrollo de parques industriales y complejos manufactureros",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desarrollo Corporativo",
            description: "Oficinas corporativas y centros de negocios",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Proyectos de Uso Mixto",
            description:
              "Desarrollos que combinan uso residencial, comercial y corporativo",
          },
        },
      ],
    },
  };

  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/assets/img/icons/icon-192x192.png"
        />
        <meta name="theme-color" content="#22AF52" />
        <meta name="msapplication-TileColor" content="#22AF52" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
