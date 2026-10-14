// ─── Configuración del sitio ──────────────────────────────────────────────────

export const siteConfig = {
  name: "Diego García",
  description:
    "Representante a la Cámara por Casanare. Comprometido con el servicio público, el desarrollo regional y la construcción de oportunidades.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://diegogarciaalfonso.com",
  author: "Diego García",
  keywords: [
    "Diego García",
    "Casanare",
    "Representante a la Cámara",
    "Política",
    "Alianza Verde",
    "Verde 101"
  ] as string[],
  social: {
    twitter: "@DiegoGarcia_101", 
    facebook: "https://www.facebook.com/DiegoGarciaCasanare/",
    instagram: "https://www.instagram.com/diegogarciaalfonso/",
    tiktok: "https://www.tiktok.com/@diegogarciaalfonso",
    whatsapp: "https://whatsapp.com/channel/0029Vb7AK181SWsxgENu9a19",
  },
  navigation: {
    main: [
      { label: "Inicio", href: "/#inicio" },
      { label: "Sobre mí", href: "/#perfil" },
      { label: "Lo que nos mueve", href: "/#gestion" },
      { label: "Iniciativas legislativas", href: "/#proyectos" },
      { label: "Columnas de opinión", href: "/#columnas" },
      { label: "Trabajo social", href: "/#social" },
      { label: "Mapa de Casanare", href: "/#casanare" },
      { label: "Tu voz cuenta", href: "/#tu-voz-cuenta" },
      { label: "Prensa", href: "/#prensa" },
      { label: "Rendición de cuentas", href: "/#rendicion" },
      { label: "Contacto", href: "/#contacto" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
