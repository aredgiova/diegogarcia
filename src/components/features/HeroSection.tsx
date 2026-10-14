import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
export function HeroSection() {
  return <section id="inicio" className="hero" aria-labelledby="hero-heading">
    <div className="page-shell hero-layout">
      <div className="hero-copy">
        <h1 id="hero-heading" className="hero-participation-heading" aria-label="Tu voz también tiene un lugar en el Congreso">
          <span className="motion-line"><span className="motion-line-inner">Tu voz también</span></span>
          <span className="motion-line"><span className="motion-line-inner">tiene un lugar</span></span>
          <span className="motion-line"><span className="motion-line-inner"><span>en el Congreso.</span></span></span>
        </h1>
        <p>Creo en una política cercana a la gente, comprometida con la región y respaldada por hechos.</p>
        <p className="hero-description">Por eso, queremos que este también sea tu espacio. Cuéntanos qué está pasando en tu comunidad, comparte tus ideas y hagamos que las voces de nuestra región lleguen a donde se toman las decisiones.</p>
        <div className="hero-actions">
          <Link href="/#tu-voz-cuenta" className="button button-yellow">Déjame tu idea <Icon /></Link>
          <Link href="/#proyectos" className="hero-text-link">Conoce mi gestión <Icon /></Link>
        </div>
        <a href={siteConfig.social.whatsapp} className="hero-channel" target="_blank" rel="noopener noreferrer"><Icon name="message" /><span>Sigamos en contacto<span>Súmate al canal de WhatsApp</span></span><Icon /></a>
      </div>
      <div className="hero-visual"><div className="hero-shape" aria-hidden="true" /><Image src="/images/diego-portrait-cutout-v2.png" alt="Diego García, de traje azul, sonriendo" fill sizes="(max-width: 700px) 100vw, 52vw" preload className="hero-portrait" /><div className="hero-caption"><span>Diego García</span><span>Con Casanare. Siempre.</span></div></div>
    </div><div className="hero-bottom"><div className="page-shell"><span>Más hechos, más región.</span><Link href="/#perfil">Sobre mí <span className="down-arrow"><Icon /></span></Link></div></div>
  </section>;
}

