import Link from "next/link";
export function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/#inicio" className={"brand" + (light ? " brand--light" : "")} aria-label="Diego García, Más hechos, más región. Volver al inicio"><span className="brand-name">Diego<span>García<span className="brand-dot">.</span></span></span><span className="brand-place">Más hechos,<br />más región</span></Link>;
}

