import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "../../public/fonts/poppins/poppins-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/poppins/poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/poppins/poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/poppins/poppins-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/poppins/poppins-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.social.twitter,
    images: ["/og.png"],
  },
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#075c43" },
    { media: "(prefers-color-scheme: dark)", color: "#075c43" },
  ],
  width: "device-width",
  initialScale: 1,
};

const designContract = "\u003c!--\nTHESIS: Una portada cívica centrada en Diego, su historia y la gestión de Casanare.\nOWN-WORLD: Verde #075c43, amarillo #f4d343, superficies claras, Poppins, titulares Bold (700) y cuerpo Regular (400), planos diagonales y fotografías reales.\nSTORY: Conocer a Diego, explorar gestión y proyectos, consultar prensa y transparencia, contactar al equipo.\nFIRST VIEWPORT: Navegación blanca; titular grande a la izquierda, retrato a la derecha, acción amarilla y franja de contacto. En móvil se apilan.\nFORM: Referencia política elegida por el usuario; prevalece sobre el sorteo a9aea8b0.\nFINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md\n--\u003e";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="es"
      className={poppins.variable}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col antialiased">
        <template id="design-contract" dangerouslySetInnerHTML={{ __html: designContract }} />
        <a href="#contenido" className="skip-link">Saltar al contenido</a><Header />
        <main id="contenido" tabIndex={-1} className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
