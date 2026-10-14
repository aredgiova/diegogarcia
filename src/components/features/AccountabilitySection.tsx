import { Icon } from "@/components/ui/Icon";
const reports = [{ year: "2027", period: "A" }, { year: "2026", period: "B" }];
export function AccountabilitySection() {
  return (
    <section id="rendicion" className="section-space accountability-section" aria-labelledby="accountability-heading">
      <div className="page-shell accountability-layout">
        <div>
          <h2 id="accountability-heading" data-motion="lines" aria-label="Nuestra gestión a la vista de todos">
            <span className="motion-line"><span className="motion-line-inner">Nuestra gestión</span></span>
            <span className="motion-line"><span className="motion-line-inner"><span>a la vista de todos.</span></span></span>
          </h2>
          <p>Rendición de cuentas.</p>
          <a href="#contacto" className="text-link">Solicita información al equipo <Icon /></a>
        </div>
        <div className="report-list">
          {reports.map(report => (
            <div className="report report-pending" data-motion="row" key={`${report.year}-${report.period}`}>
              <div className="report-period"><strong>{report.year}</strong><span>{report.period}</span></div>
              <div><h3>Rendición de cuentas {report.year} {report.period}</h3><p>Información pendiente de publicación.</p>{report.year === "2026" && <p>Transmisión en vivo y boletín de prensa pendientes.</p>}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

