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
      { label: "Perfil", href: "/#perfil" },
      { label: "Gestión Legislativa", href: "/#gestion" },
      { label: "Proyectos de Ley", href: "/#proyectos" },
      { label: "Trabajo Social", href: "/#social" },
      { label: "Prensa", href: "/#prensa" },
      { label: "Rendición de Cuentas", href: "/#rendicion" },
      { label: "Contacto", href: "/#contacto" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
