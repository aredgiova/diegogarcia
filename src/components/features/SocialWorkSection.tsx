import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
export function SocialWorkSection() {
  return <section id="social" className="territory-section" aria-labelledby="territory-heading"><div className="territory-image" data-motion="image"><Image src="/images/diego_portrait_1.jpg" alt="Retrato de Diego García frente al Congreso" fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div className="page-shell territory-layout"><div className="territory-copy"><h2 id="territory-heading" data-motion="lines" aria-label="El territorio en el centro."><span className="motion-line"><span className="motion-line-inner">El territorio</span></span><span className="motion-line"><span className="motion-line-inner">en el <span>centro.</span></span></span></h2><p>Escuchar con respeto, trabajar con la gente y transformar las problemáticas en acciones territoriales.</p><p>Historias ciudadanas, reuniones comunitarias y el día a día de nuestro trabajo, en los canales de Diego.</p><a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="button button-yellow"><Icon name="instagram" />Acompaña nuestra ruta <Icon /></a><a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="territory-facebook">También estamos en Facebook <Icon /></a></div></div></section>;
}

