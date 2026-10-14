"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import mapData from "../../../public/data/casanare-map.json";
import { Icon } from "@/components/ui/Icon";
import { useMunicipalityParticipation } from "./MunicipalityParticipation";

const municipalities = [...mapData.municipalities].sort((a, b) =>
  a.name.localeCompare(b.name, "es"),
);

/** Local extension: the existing green/yellow palette and display type frame a
 * geographic selector. The map and list share a selection; the action carries
 * that municipality into the existing idea form. Geometry is attributed OSM
 * data, served locally. No activity counts or news are inferred from selection.
 */
export function CasanareMapSection() {
  const [selectedId, setSelectedId] = useState("yopal");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const municipalityRefs = useRef(new Map<string, SVGGElement>());
  const { setMunicipality } = useMunicipalityParticipation();
  const selected = municipalities.find(item => item.id === selectedId)!;

  function navigateMap(event: KeyboardEvent<SVGGElement>, index: number) {
    let nextIndex = index;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % municipalities.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + municipalities.length) % municipalities.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = municipalities.length - 1;
        break;
      case "Enter":
      case " ":
        break;
      default:
        return;
    }
    event.preventDefault();
    const nextMunicipality = municipalities[nextIndex];
    setSelectedId(nextMunicipality.id);
    municipalityRefs.current.get(nextMunicipality.id)?.focus();
  }

  function startIdea() {
    setMunicipality(selected.name);
    requestAnimationFrame(() => {
      document.getElementById("contact-message")?.focus({ preventScroll: true });
    });
  }

  return (
    <section id="casanare" className="section-space municipality-section" aria-labelledby="municipality-heading">
      <div className="page-shell">
        <div className="section-heading municipality-heading">
          <h2 id="municipality-heading" data-motion="lines" aria-label="Diecinueve municipios, una sola voz.">
            <span className="motion-line"><span className="motion-line-inner">Diecinueve municipios,</span></span>
            <span className="motion-line"><span className="motion-line-inner"><span>una sola voz.</span></span></span>
          </h2>
          <p>Selecciona tu municipio en el mapa o en la lista y comparte lo que está pasando en tu comunidad.</p>
        </div>

        <div className="municipality-layout">
          <figure className="municipality-map">
            <p id="municipality-map-instructions" className="sr-only">Selecciona un municipio. Con el teclado, usa las flechas para cambiar de municipio, Inicio para el primero y Fin para el último. También puedes usar la lista de municipios.</p>
            <svg viewBox={mapData.viewBox} className="casanare-map" role="group" aria-label="Mapa interactivo de Casanare">
              <g role="radiogroup" aria-label="Municipios de Casanare" aria-describedby="municipality-map-instructions">
                {municipalities.map((item, index) => (
                  <g
                    key={item.id}
                    ref={element => {
                      if (element) municipalityRefs.current.set(item.id, element);
                      else municipalityRefs.current.delete(item.id);
                    }}
                    className={"municipality-area" + (item.id === selectedId ? " is-selected" : "")}
                    data-municipality={item.id}
                    role="radio"
                    aria-label={item.name}
                    aria-checked={item.id === selectedId}
                    tabIndex={item.id === selectedId ? 0 : -1}
                    onClick={() => setSelectedId(item.id)}
                    onKeyDown={event => navigateMap(event, index)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <title>{item.name}</title>
                    <path d={item.path} />
                  </g>
                ))}
              </g>
              <g className="municipality-rivers" aria-hidden="true">
                {mapData.rivers.map(river => <path key={river.name} d={river.path} className={river.principal ? "river-principal" : undefined} />)}
              </g>
              <path className="municipality-outline" d={mapData.departmentPath} aria-hidden="true" />
              <g className="municipality-labels" aria-hidden="true">
                {municipalities.map(item => (
                  <g key={item.id}>
                    <circle cx={item.capital[0]} cy={item.capital[1]} r={item.id === selectedId ? 4.5 : 3} className={item.id === selectedId ? "capital-selected" : undefined} />
                    {(item.labelVisibleByDefault || item.id === selectedId || item.id === hoveredId) && (
                      <text
                        x={item.id === selectedId ? item.selectedLabel[0] : item.center[0]}
                        y={item.id === selectedId ? item.selectedLabel[1] : item.center[1]}
                        textAnchor={item.id === selectedId && item.selectedLabel[0] < 120 ? "start" : "middle"}
                        className={"municipality-label" + (item.id === selectedId ? " label-selected" : "") + (item.id === hoveredId ? " label-hovered" : "")}
                      >
                        {item.name}
                      </text>
                    )}
                  </g>
                ))}
              </g>
            </svg>
            <div className="municipality-legend" aria-hidden="true">
              <span><i className="legend-municipality" />Municipios</span>
              <span><i className="legend-selected" />Tu selección</span>
              <span><i className="legend-river" />Ríos principales</span>
            </div>
            <figcaption className="municipality-attribution">
              Límites municipales: © <a href={mapData.attributionUrl} target="_blank" rel="noopener noreferrer">colaboradores de OpenStreetMap</a>.
              {" "}<a href={mapData.licenseUrl} target="_blank" rel="noopener noreferrer">ODbL</a> · <a href="/data/casanare-map.json" download>Datos cartográficos</a>
            </figcaption>
          </figure>

          <div className="municipality-panel">
            <label htmlFor="municipality-picker">Elige tu municipio</label>
            <select id="municipality-picker" value={selectedId} onChange={event => setSelectedId(event.target.value)}>
              {municipalities.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
            </select>
            <div className="municipality-selected" aria-labelledby="selected-municipality-heading">
              <h3 id="selected-municipality-heading">{selected.name}</h3>
              <p>¿Qué está pasando en {selected.name}? Comparte una idea, una necesidad o una propuesta para tu comunidad.</p>
              <a href="#tu-voz-cuenta" className="button button-yellow" onClick={startIdea}>Dejar una idea desde {selected.name} <Icon /></a>
            </div>
            <p className="municipality-help">Cada municipio tiene un lugar en esta conversación.</p>
            <p className="sr-only" role="status" aria-atomic="true">Municipio seleccionado: {selected.name}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
