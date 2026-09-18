import Link from "next/link";
export function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/#inicio" className={"brand" + (light ? " brand--light" : "")} aria-label="Diego García, volver al inicio"><span className="brand-name">Diego<span>García<span className="brand-dot">.</span></span></span><span className="brand-place">Casanare<br />Colombia</span></Link>;
}

