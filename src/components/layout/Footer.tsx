import Link from "next/link";
import { Brand } from "@/components/ui/Brand";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
export function Footer() {
  return <footer className="site-footer"><div className="page-shell"><div className="footer-main"><div className="footer-brand"><Brand light /><p>El compromiso con nuestra tierra<br />se construye todos los días.</p></div><nav aria-label="Explora el sitio"><h2>Explora</h2><ul>{siteConfig.navigation.main.filter(item => item.label !== "Inicio").map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav><div className="footer-social"><h2>Sigamos conectados</h2><a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">Instagram <Icon /></a><a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">Facebook <Icon /></a><a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok <Icon /></a><a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer">Canal de WhatsApp <Icon /></a></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Diego García. Todos los derechos reservados.</p><span>Casanare, Colombia</span><Link href="/#inicio">Volver al inicio <span className="up-arrow"><Icon /></span></Link></div></div></footer>;
}

