import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Brand } from "@/components/ui/Brand";
import { Icon } from "@/components/ui/Icon";
import { NavMobile } from "./NavMobile";
const links = [
  { label: "Sobre mí", href: "/#perfil" },
  { label: "Lo que nos mueve", href: "/#gestion" },
];
export function Header() {
  return <header className="site-header">
    <div className="utility-bar"><div className="page-shell utility-inner"><span>Del compromiso con Casanare al Congreso de la República.</span><div className="utility-social"><a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Diego García (nueva pestaña)"><Icon name="instagram" /></a><a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook de Diego García (nueva pestaña)"><Icon name="facebook" /></a><a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer">Canal de WhatsApp <Icon /></a></div></div></div>
    <div className="page-shell navigation-bar"><Brand /><nav className="desktop-nav" aria-label="Navegación principal"><ul>{links.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></nav><Link href="/#tu-voz-cuenta" className="button button-green nav-contact">Tu voz cuenta <Icon /></Link><NavMobile /></div>
  </header>;
}

