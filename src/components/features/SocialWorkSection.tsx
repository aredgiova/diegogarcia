import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

const communityVideos = [
  {
    title: "Gestión del servicio de gas en Yopal",
    href: "https://www.facebook.com/share/v/19id6CeTuE/",
    image: "/images/social/gas-en-yopal.jpg",
    alt: "Diego García conversando con un integrante de la comunidad durante una gestión del servicio de gas",
  },
  {
    title: "Una jornada de entrega de vivienda",
    href: "https://www.facebook.com/share/r/1ERkUGjMzS/",
    image: "/images/social/entrega-de-vivienda.jpg",
    alt: "Diego García acompañando a un hombre con sombrero durante una jornada con las familias",
  },
  {
    title: "Las inundaciones en el campo casanareño",
    href: "https://www.facebook.com/share/v/1Exs2FAHCr/",
    image: "/images/social/campo-casanareno.jpg",
    alt: "Diego García junto a un agricultor en un cultivo de maíz",
  },
] as const;

export function SocialWorkSection() {
  return (
    <section id="social" className="territory-section" aria-labelledby="territory-heading">
      <div className="page-shell">
        <div className="territory-copy">
          <h2 id="territory-heading" data-motion="lines" aria-label="Con nuestra gente">
            <span className="motion-line"><span className="motion-line-inner">Con nuestra gente</span></span>
          </h2>
          <p>Historias de nuestra gente, encuentros con las comunidades y momentos que reflejan nuestro trabajo en el territorio. Conoce de cerca cómo seguimos recorriendo Casanare, escuchando y trabajando por nuestra región.</p>
          <ul className="territory-stories" aria-label="Videos de nuestra comunidad">
            {communityVideos.map(video => (
              <li key={video.href}>
                <a href={video.href} target="_blank" rel="noopener noreferrer" className="territory-story">
                  <span className="territory-story-media">
                    <Image src={video.image} alt={video.alt} width={720} height={1280} sizes="(max-width: 700px) 100vw, 33vw" unoptimized />
                    <span className="territory-story-play" aria-hidden="true"><Icon name="play" /></span>
                  </span>
                  <h3>{video.title}</h3>
                  <span className="territory-story-link">Ver en Facebook <Icon /></span>
                  <span className="sr-only">Se abre en una pestaña nueva.</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

