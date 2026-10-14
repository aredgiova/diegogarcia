import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
export function PressSection() {
  return (
    <section id="prensa" className="section-space press-section" aria-labelledby="press-heading">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <h2 id="press-heading" data-motion="lines" aria-label="Prensa"><span className="motion-line"><span className="motion-line-inner"><span>Prensa.</span></span></span></h2>
            <p>Comunicaciones y recursos para contar nuestra historia.</p>
          </div>
          <a href={siteConfig.social.facebook} className="text-link" target="_blank" rel="noopener noreferrer">Actualidad en Facebook <Icon /></a>
        </div>
        <div className="press-layout">
          <div className="press-news">
            <h3>Boletines y comunicados de prensa</h3>
            <p className="section-pending">Boletines y comunicados pendientes de publicación.</p>
          </div>
          <aside className="press-kit" data-motion="image" aria-label="Recursos de prensa">
            <div className="press-kit-photo"><Image src="/images/diego_portrait_2.jpg" alt="Fotografía oficial de Diego García disponible para descargar" fill sizes="(max-width: 800px) 100vw, 35vw" /></div>
            <div className="press-kit-content">
              <h3>Recursos de prensa</h3>
              <p>Fotografías oficiales, dossier de prensa y biografía.</p>
              <a href="/images/diego_portrait_2.jpg" download="Diego-Garcia-retrato.jpg">Fotografía oficial <span>JPG</span><Icon name="download" /></a>
              <a href="/images/diego_walking.jpg" download="Diego-Garcia-Congreso.jpg">Fotografía en el Congreso <span>JPG</span><Icon name="download" /></a>
              <p className="press-resource-pending">Dossier de prensa <span>Pendiente de publicación</span></p>
              <a href="#perfil">Biografía <Icon /></a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

