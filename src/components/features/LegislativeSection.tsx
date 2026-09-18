import { milestones } from "@/config/content";
import { Icon } from "@/components/ui/Icon";
export function LegislativeSection() {
  return <section id="gestion" className="section-space legislative-section" aria-labelledby="legislative-heading"><div className="page-shell"><div className="section-heading"><div><h2 id="legislative-heading">Acciones concretas<br />por <span>Casanare.</span></h2><p>El trabajo legislativo y de control político, más cerca de ti.</p></div><a href="#proyectos" className="text-link">Explora los proyectos de ley <Icon /></a></div><p className="editorial-note">Agenda legislativa · contenidos en revisión antes de su publicación.</p><div className="milestone-list">{milestones.map(item => <details className="milestone" key={item.iso}><summary><div className="milestone-date"><time dateTime={item.iso}>{item.date}</time><span>{item.category}</span></div><h3>{item.title}</h3><span className="expand-icon" aria-hidden="true" /></summary><div className="milestone-body"><p>{item.summary}</p><span>Reseña preliminar. Documentación de soporte pendiente.</span></div></details>)}</div></div></section>;
}

