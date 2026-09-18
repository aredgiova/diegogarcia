"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
export function ContactForm() {
  const [prepared, setPrepared] = useState("");
  const [status, setStatus] = useState("");
  async function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = "Hola, equipo de Diego García.\n\nMi nombre es " + String(data.get("name")).trim() + " y escribo desde " + String(data.get("municipality")).trim() + ".\nMotivo: " + data.get("subject") + "\n\n" + String(data.get("message")).trim();
    setPrepared(text);
    try { await navigator.clipboard.writeText(text); setStatus("Solicitud copiada. Abre Facebook y pégala en un mensaje al equipo. Aún no se ha enviado."); }
    catch { setStatus("Tu solicitud está lista. Copia el texto de abajo y compártelo con el equipo en Facebook. Aún no se ha enviado."); }
  }
  return <form className="contact-form" onSubmit={prepare} onChange={() => { setPrepared(""); setStatus(""); }}><h3>Cuéntanos tu propuesta.</h3><p>Prepara tu mensaje y compártelo con el equipo por Facebook.</p><div className="form-row"><div><label htmlFor="contact-name">Nombre</label><input id="contact-name" name="name" autoComplete="name" placeholder="Tu nombre" required maxLength={100} pattern={".*\\S.*"} /></div><div><label htmlFor="contact-municipality">Municipio</label><input id="contact-municipality" name="municipality" autoComplete="address-level2" placeholder="¿Desde dónde nos escribes?" required maxLength={100} pattern={".*\\S.*"} /></div></div><label htmlFor="contact-subject">Motivo de contacto</label><select id="contact-subject" name="subject" defaultValue="Solicitud general"><option>Solicitud general</option><option>Petición formal</option><option>Invitación a evento</option><option>Agendar reunión</option><option>Quiero ser voluntario</option></select><label htmlFor="contact-message">Tu mensaje</label><textarea id="contact-message" name="message" rows={4} placeholder="Te escuchamos…" required minLength={10} maxLength={3000} /><p className="form-note">El envío directo aún no está habilitado. Este formulario prepara una copia de tu solicitud; tus datos no se guardan en el sitio.</p><button className="button button-green" type="submit">Preparar y copiar mensaje <Icon /></button><p className="form-status" role="status">{status}</p>{prepared && <div className="prepared-message"><label htmlFor="prepared-message">Mensaje listo para compartir</label><textarea id="prepared-message" value={prepared} readOnly rows={6} onFocus={event => event.target.select()} /><a className="text-link" href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">Abrir Facebook de Diego <Icon /></a></div>}</form>;
}

