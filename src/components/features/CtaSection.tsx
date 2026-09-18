import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "./ContactForm";
export function CtaSection() {
  return <section id="contacto" className="section-space contact-section" aria-labelledby="contact-heading"><div className="page-shell contact-layout"><div className="contact-copy"><h2 id="contact-heading" data-motion="lines" aria-label="Las buenas ideas empiezan con una conversación."><span className="motion-line"><span className="motion-line-inner">Las buenas ideas</span></span><span className="motion-line"><span className="motion-line-inner">empiezan con una</span></span><span className="motion-line"><span className="motion-line-inner"><span>conversación.</span></span></span></h2><p>¿Tienes una solicitud, una propuesta o quieres invitarme a una reunión en tu comunidad? Trabajemos juntos.</p><div className="contact-offices" data-motion="copy"><div><h3>En Bogotá</h3><p>Congreso de la República<br />Edificio Nuevo</p></div><div><h3>En Casanare</h3><p>Yopal, Casanare<br />Sede principal</p></div></div><a className="contact-channel" href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="message" /><span>Noticias directamente en tu celular<strong>Únete al canal de WhatsApp</strong></span><Icon /></a></div><ContactForm /></div></section>;
}

