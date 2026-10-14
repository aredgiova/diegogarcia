import { Icon } from "@/components/ui/Icon";

export function BillsSection() {
  return (
    <section
      id="proyectos"
      className="section-space bills-section"
      aria-labelledby="bills-heading"
    >
      <div className="page-shell bills-layout">
        <div className="bills-intro">
          <h2
            id="bills-heading"
            data-motion="lines"
            aria-label="Iniciativas legislativas."
          >
            <span className="motion-line">
              <span className="motion-line-inner">Iniciativas</span>
            </span>
            <span className="motion-line">
              <span className="motion-line-inner">
                <span>legislativas.</span>
              </span>
            </span>
          </h2>
          <p>
            Propuestas legislativas para transformar las realidades de Casanare y
            el país.
          </p>
          <a className="text-link" href="#contacto">
            Conversa con el equipo <Icon />
          </a>
        </div>

        <div className="bills-list">
          <article className="bill-content" data-motion="copy">
            <h3>Más recursos para fortalecer la salud de nuestra región</h3>
            <p className="bill-subtitle">
              Estampilla Pro-Hospital Regional de la Orinoquía (HORO).
            </p>
            <p className="bill-description">
              Una iniciativa que busca crear una fuente de financiación para
              fortalecer la infraestructura, tecnología y capacidad de atención de
              nuestro hospital.
            </p>

            <div className="bill-facts">
              <div>
                <h4>¿Qué proponemos?</h4>
                <p>
                  Autorizar a la Asamblea de Casanare y al Concejo de Yopal para
                  establecer la Estampilla Pro-HORO, un mecanismo que permitiría
                  recaudar recursos destinados al fortalecimiento del hospital.
                </p>
              </div>
            </div>

            <dl className="bill-numbers">
              <div>
                <dt>Tope de emisión propuesto</dt>
                <dd>$300.000 millones</dd>
              </div>
              <div>
                <dt>Tarifa máxima propuesta</dt>
                <dd>2%</dd>
              </div>
            </dl>

            <details className="bill-benefits">
              <summary>
                ¿Para qué se utilizarían los recursos?
                <span className="expand-icon" aria-hidden="true" />
              </summary>
              <ul>
                <li>Infraestructura hospitalaria</li>
                <li>Equipos biomédicos</li>
                <li>Medicamentos e insumos</li>
                <li>Tecnología y telemedicina</li>
                <li>Investigación y formación</li>
                <li>Innovación médica</li>
              </ul>
            </details>

            <details className="bill-benefits">
              <summary>
                ¿A quiénes se busca proteger?
                <span className="expand-icon" aria-hidden="true" />
              </summary>
              <p>
                El proyecto contempla exenciones para determinados contratos de
                prestación de servicios de personas naturales y microempresas,
                bajo las condiciones y el límite de 10 salarios mínimos mensuales
                previstos en el texto.
              </p>
            </details>

            <div className="bill-progress bill-facts">
              <div>
                <h4>¿En qué va el proyecto?</h4>
                <p>Información sobre el avance pendiente de actualización.</p>
              </div>
            </div>
            <p className="document-pending">
              Video y documento del proyecto pendientes de publicación.
            </p>
          </article>

          <article className="bill-content" data-motion="copy">
            <h3>Que los recursos lleguen a nuestras regiones</h3>
            <p className="bill-subtitle">
              Proyecto de Ley – Sistema General de Participaciones (SGP)
            </p>
            <p className="bill-description">
              Las regiones necesitan recursos para atender las necesidades de su
              gente. Por eso, desde el Congreso impulsamos una iniciativa que
              busca garantizar que los porcentajes de recursos destinados a los
              territorios lleguen efectivamente a las regiones.
            </p>

            <div className="bill-facts">
              <div>
                <h4>¿Qué buscamos?</h4>
                <p>Información detallada pendiente de publicación.</p>
              </div>
            </div>

            <div className="bill-progress bill-facts">
              <div>
                <h4>¿En qué va el proyecto?</h4>
                <p>Información sobre el avance pendiente de actualización.</p>
              </div>
            </div>
            <p className="document-pending">
              Video y documento del proyecto pendientes de publicación.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
