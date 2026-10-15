import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="inicio" className="hero hero-reference" aria-labelledby="hero-heading">
      <div className="hero-reference-visual">
        <Image
          src="/images/diego-hero-banner.jpg"
          alt="Diego García sonriendo y levantando el pulgar, con escenas de encuentro con la comunidad al fondo"
          fill
          unoptimized
          sizes="(max-width: 900px) 100vw, (max-width: 1100px) 570px, 660px"
          preload
          className="hero-reference-image"
        />
      </div>
      <div className="page-shell hero-reference-layout">
        <div className="hero-reference-copy">
          <h1 id="hero-heading" aria-label="Tu voz también tiene un lugar en el Congreso">
            <span className="motion-line"><span className="motion-line-inner"><span className="hero-reference-highlight">Tu voz también</span></span></span>
            <span className="motion-line"><span className="motion-line-inner"><span className="hero-reference-highlight">tiene</span> un lugar</span></span>
            <span className="motion-line"><span className="motion-line-inner">en el Congreso</span></span>
          </h1>
          <p className="hero-reference-lead">Creo en una política cercana a la gente, comprometida con la región y respaldada por hechos.</p>
          <p className="hero-reference-description">Por eso, queremos que este también sea tu espacio. Cuéntanos qué está pasando en tu comunidad, comparte tus ideas y hagamos que las voces de nuestra región lleguen a donde se toman las decisiones.</p>
          <div className="hero-reference-actions">
            <Link href="/#casanare" className="button hero-reference-primary">Déjanos tu idea</Link>
            <Link href="/#proyectos" className="hero-reference-secondary">Iniciativas legislativas</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

