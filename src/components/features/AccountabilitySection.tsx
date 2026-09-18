import { Icon } from "@/components/ui/Icon";
const reports = [{ month: "Agosto", year: "2026", title: "Defensa del presupuesto" },{ month: "Julio", year: "2026", title: "Control político" },{ month: "Junio", year: "2026", title: "Trabajo en territorio" }];
export function AccountabilitySection() {
  return <section id="rendicion" className="section-space accountability-section" aria-labelledby="accountability-heading"><div className="page-shell accountability-layout"><div><h2 id="accountability-heading">La gestión,<br /><span>a la vista de todos.</span></h2><p>Un espacio para consultar los informes de trabajo legislativo y social, mes a mes.</p><a href="#contacto" className="text-link">Solicita información al equipo <Icon /></a></div><div className="report-list">{reports.map(report => <div className="report" key={report.month}><div className="report-period"><strong>{report.month}</strong><span>{report.year}</span></div><div><h3>{report.title}</h3><p>Informe pendiente de publicación</p></div><Icon name="download" /></div>)}</div></div></section>;
}

