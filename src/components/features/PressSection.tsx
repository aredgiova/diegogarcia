import Image from "next/image";
import { pressBulletins } from "@/config/press";
import { Icon } from "@/components/ui/Icon";
export function PressSection() {
  return (
    <section id="prensa" className="section-space press-section" aria-labelledby="press-heading">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <h2 id="press-heading" data-motion="lines" aria-label="Sala de prensa"><span className="motion-line"><span className="motion-line-inner"><span>Sala de prensa</span></span></span></h2>
            <p>Comunicaciones y recursos para contar nuestra historia.</p>
          </div>
        </div>
        <div className="press-layout">
          <aside className="press-kit" data-motion="image" aria-label="Recursos de prensa">
            <div className="press-kit-photo"><Image src="/images/diego_portrait_2.jpg" alt="Fotografía oficial de Diego García disponible para descargar" fill sizes="(max-width: 800px) 100vw, 40vw" /></div>
            <div className="press-kit-content">
              <h3>Recursos de prensa</h3>
              <a href="/images/diego_portrait_2.jpg" download="Diego-Garcia-retrato.jpg">Fotografía oficial <span>JPG</span><Icon name="download" /></a>
              <a href="/images/diego_walking.jpg" download="Diego-Garcia-Congreso.jpg">Fotografía en el Congreso <span>JPG</span><Icon name="download" /></a>
              <p className="press-resource-pending">Dossier de prensa <span>Pendiente de publicación</span></p>
              <a href="#perfil">Biografía <Icon /></a>
            </div>
          </aside>
          <div className="press-news">
            <h3>Boletines y comunicados de prensa</h3>
            {pressBulletins.map(bulletin => (
              <article key={bulletin.id} aria-label={`Comunicado de prensa ${bulletin.code}`}>
                <time dateTime={bulletin.date}>{bulletin.dateLabel}</time>
                <p className="press-bulletin-meta">Comunicado {bulletin.code} · PDF · {bulletin.pages} {bulletin.pages === 1 ? "página" : "páginas"} · {Math.round(bulletin.bytes / 1024)} KB</p>
                <div className="press-bulletin-actions">
                  <a href={bulletin.file} className="button button-green" target="_blank" rel="noopener noreferrer" aria-label={`Ver comunicado ${bulletin.code} en PDF, se abre en una pestaña nueva`}>Ver PDF <Icon /></a>
                  <a href={bulletin.file} className="text-link" download aria-label={`Descargar comunicado ${bulletin.code} en PDF`}>Descargar <Icon name="download" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

