import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
export function HeroSection() {
  return <section id="inicio" className="hero" aria-labelledby="hero-heading">
    <div className="page-shell hero-layout">
      <div className="hero-copy"><h1 id="hero-heading">Casanare,<br />aquí estoy<br /><span>para servirte.</span></h1><p>Diego García. Representante a la Cámara por Casanare.</p><p className="hero-description">Una trayectoria escrita en movimiento, con el territorio en el corazón.</p><div className="hero-actions"><Link href="/#perfil" className="button button-yellow">Conoce mi historia <Icon /></Link><Link href="/#gestion" className="hero-text-link">Nuestra gestión <Icon /></Link></div><a href={siteConfig.social.whatsapp} className="hero-channel" target="_blank" rel="noopener noreferrer"><Icon name="message" /><span>Sigamos en contacto<span>Súmate al canal de WhatsApp</span></span><Icon /></a></div>
      <div className="hero-visual"><div className="hero-shape" aria-hidden="true" /><Image src="/images/diego-portrait-cutout-v2.png" alt="Diego García, de traje azul, sonriendo" fill sizes="(max-width: 700px) 100vw, 52vw" preload className="hero-portrait" /><div className="hero-caption"><span>Diego García</span><span>Con Casanare. Siempre.</span></div></div>
    </div><div className="hero-bottom"><div className="page-shell"><span>Servicio público. Desarrollo regional. Oportunidades.</span><Link href="/#perfil">Descubre nuestra historia <span className="down-arrow"><Icon /></span></Link></div></div>
  </section>;
}

