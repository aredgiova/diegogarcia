"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import { useMunicipalityParticipation } from "./MunicipalityParticipation";

export function ContactForm() {
  const { municipality, setMunicipality } = useMunicipalityParticipation();
  const [prepared, setPrepared] = useState<{
    body: string;
    href: string;
    municipality: string;
  } | null>(null);
  const currentPreparation =
    prepared?.municipality === municipality ? prepared : null;

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const messageInput = event.currentTarget.elements.namedItem(
      "message",
    ) as HTMLTextAreaElement;
    const message = messageInput.value.trim();

    if (message.length < 10) {
      messageInput.setCustomValidity(
        "Escribe un mensaje de al menos 10 caracteres, sin contar los espacios al inicio y al final.",
      );
      messageInput.reportValidity();
      return;
    }

    const subject = String(data.get("subject"));
    const body = (
      "Hola, equipo de Diego García.\n\nMi nombre es " +
      String(data.get("name")).trim() +
      " y escribo desde " +
      String(data.get("municipality")).trim() +
      ".\nMotivo: " +
      subject +
      "\n\n" +
      message
    ).replace(/\r?\n/g, "\r\n");
    const href =
      `mailto:${siteConfig.contactEmail}` +
      `?subject=${encodeURIComponent(`Tu voz cuenta: ${subject}`)}` +
      `&body=${encodeURIComponent(body)}`;
    setPrepared({ body, href, municipality });

    const emailLink = document.createElement("a");
    emailLink.href = href;
    emailLink.hidden = true;
    document.body.append(emailLink);
    emailLink.click();
    emailLink.remove();
  }

  return (
    <form
      id="tu-voz-cuenta"
      className="contact-form"
      onSubmit={prepare}
      onChange={() => setPrepared(null)}
    >
      <h3>Déjame tu idea.</h3>
      <p>
        ¿Tienes una solicitud, una propuesta o quieres invitarme a una reunión en
        tu comunidad? Hagámoslo realidad.
      </p>
      <p>Solo debes llenar este formulario ¡es muy fácil!</p>
      <div className="form-row">
        <div>
          <label htmlFor="contact-name">Nombre</label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="Tu nombre"
            required
            maxLength={100}
            pattern={".*\\S.*"}
          />
        </div>
        <div>
          <label htmlFor="contact-municipality">Municipio</label>
          <input
            id="contact-municipality"
            name="municipality"
            autoComplete="address-level2"
            placeholder="¿Desde dónde nos escribes?"
            value={municipality}
            onChange={(event) => setMunicipality(event.target.value)}
            required
            maxLength={100}
            pattern={".*\\S.*"}
          />
        </div>
      </div>
      <label htmlFor="contact-subject">Motivo de contacto</label>
      <select
        id="contact-subject"
        name="subject"
        defaultValue="Comparte tu idea"
      >
        <option>Comparte tu idea</option>
        <option>Solicitud general</option>
        <option>Petición formal</option>
        <option>Invitación a evento</option>
        <option>Agendar reunión</option>
        <option>Quiero ser voluntario</option>
      </select>
      <label htmlFor="contact-message">Tu mensaje</label>
      <textarea
        id="contact-message"
        name="message"
        rows={4}
        placeholder="Cuéntanos qué está pasando en tu comunidad o comparte tu idea…"
        required
        minLength={10}
        maxLength={3000}
        onInput={(event) => event.currentTarget.setCustomValidity("")}
      />
      <p className="form-note">
        Al continuar se abrirá tu aplicación de correo. Revisa el mensaje y
        envíalo desde tu cuenta.
      </p>
      <button className="button button-green" type="submit">
        Continuar en mi correo <Icon />
      </button>
      <p className="form-status" role="status">
        {currentPreparation
          ? "Mensaje preparado. Confirma el envío en tu aplicación de correo."
          : ""}
      </p>
      {currentPreparation && (
        <div className="prepared-message">
          <p className="form-note">
            Si tu correo no se abre, copia este texto y envíalo a{" "}
            <span className="contact-email">{siteConfig.contactEmail}</span>.
          </p>
          <label htmlFor="prepared-message">Mensaje preparado</label>
          <textarea
            id="prepared-message"
            value={currentPreparation.body}
            readOnly
            rows={6}
            onFocus={(event) => event.target.select()}
          />
          <a
            className="text-link"
            href={currentPreparation.href}
          >
            Volver a abrir mi correo <Icon />
          </a>
        </div>
      )}
    </form>
  );
}

