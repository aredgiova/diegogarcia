import Image from "next/image";
import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/#inicio"
      className={"brand" + (light ? " brand--light" : "")}
      aria-label="Diego García, congresista. Hechos + Región. Volver al inicio"
    >
      <span className="brand-image-frame">
        <Image
          src="/images/diego-garcia-logo.jpg"
          alt="Diego García, congresista. Hechos + Región."
          width={2151}
          height={1033}
          sizes="(max-width: 600px) 246px, (max-width: 800px) 246px, (max-width: 1180px) 290px, 330px"
          preload={!light}
          className="brand-logo-image"
        />
      </span>
    </Link>
  );
}

