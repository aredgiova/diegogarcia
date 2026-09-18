# Making Real

Sitio web full-stack construido con Next.js 15, TypeScript, Tailwind CSS y React 19. Diseñado para desplegarse en Vercel.

## Stack

| Tecnología | Versión | Rol |
|---|---|---|
| Next.js | 15 (latest) | Framework full-stack con App Router |
| React | 19 | UI y composición de componentes |
| TypeScript | 5 | Tipado estricto |
| Tailwind CSS | 4 | Estilos utilitarios |
| Node.js | 20+ | Runtime principal |
| Vercel | — | Despliegue en producción |

## Estructura

```
src/
├── app/                    # App Router de Next.js
│   ├── api/
│   │   └── health/        # GET /api/health
│   ├── globals.css        # Estilos globales + design tokens
│   ├── layout.tsx         # Layout raíz con metadata
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 personalizado
│   ├── sitemap.ts         # Sitemap dinámico
│   └── robots.ts          # robots.txt
├── components/
│   ├── layout/            # Header, Footer, NavMobile
│   ├── ui/                # Button, Card, Container, Section, Badge
│   └── features/          # HeroSection, FeaturesSection, StackSection, CtaSection
├── config/
│   └── site.ts            # Configuración central del sitio
├── lib/
│   └── utils.ts           # cn() utility
└── types/
    └── api.ts             # Tipos de respuesta API
```

## Inicio rápido

```bash
# 1. Clonar el repositorio
git clone <url-del-repo>
cd making-real

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus valores

# 4. Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check |

## API

### `GET /api/health`

```json
{
  "success": true,
  "data": {
    "status": "ok",
    "service": "web-api",
    "timestamp": "2025-01-01T00:00:00.000Z",
    "environment": "production"
  },
  "message": null
}
```

## Variables de entorno

Copia `.env.example` como `.env.local` y completa los valores. **Nunca subas `.env.local` al repositorio.**

## Despliegue en Vercel

1. Push a GitHub
2. Importa el repositorio en [vercel.com](https://vercel.com)
3. Agrega las variables de entorno en el dashboard de Vercel
4. Deploy automático

No se requiere `vercel.json` — Vercel detecta automáticamente Next.js.

## Próximos pasos

- [ ] Definir contenido real del sitio
- [ ] Implementar formulario de contacto (`/api/v1/contact`)
- [ ] Integrar autenticación (NextAuth.js o Auth.js)
- [ ] Agregar base de datos (PostgreSQL + Prisma) si se requiere
- [ ] Implementar dashboard/panel administrativo
- [ ] Integrar analytics

---

Construido con ♥ usando Next.js + TypeScript + Tailwind CSS
