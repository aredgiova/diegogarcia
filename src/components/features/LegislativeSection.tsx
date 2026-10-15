import { legislativePriorities } from "@/config/content";
import { Icon } from "@/components/ui/Icon";

const priorityIcons = {
  "01": "agriculture",
  "02": "energy",
  "03": "region",
} as const;

export function LegislativeSection() {
  return (
    <section id="gestion" className="section-space legislative-section" aria-labelledby="legislative-heading">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <h2 id="legislative-heading" data-motion="lines" aria-label="Lo que nos mueve">
              <span className="motion-line"><span className="motion-line-inner">Lo que</span></span>
              <span className="motion-line"><span className="motion-line-inner">nos <span>mueve</span></span></span>
            </h2>
            <p>Un campo fuerte es una región con más oportunidades.</p>
          </div>
          <a href="#proyectos" className="text-link">Conoce mi gestión <Icon /></a>
        </div>
        <div className="milestone-list">
          {legislativePriorities.map(priority => (
            <details className="milestone" data-motion="row" key={priority.number}>
              <summary>
                <span className="milestone-topic-icon" aria-hidden="true">
                  <Icon name={priorityIcons[priority.number]} width={44} height={44} />
                </span>
                <h3>{priority.title}</h3>
                <span className="expand-icon" aria-hidden="true" />
              </summary>
              <div className="milestone-body">
                {priority.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

