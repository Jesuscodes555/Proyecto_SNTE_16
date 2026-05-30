/*
 *|=========================================================================|
 *| app/contacto/page.tsx                                                   |
 *| Autor: Jesús Avalos (21460040)                                          |
 *| Descripción: Pagina de Contacto con toda la información para            |
 *| comunicarse con la delegación sindical. Incluye:                        |
 *| - Tarjetas con dirección, teléfono, correo y horario                    |
 *| - Mapa embebido de Google Maps con la ubicación del Tec                 |
 *| - Datos de la Secretaria General                                        |
 *|=========================================================================|
 */

import { Phone, Mail, MapPin, Clock } from "lucide-react"; // Iconos de contacto
import type { Metadata } from "next";

// Metadatos SEO
export const metadata: Metadata = {
  title: "Contacto | SNTE Delegación D-V-16",
  description:
    "Contacta a la Delegación D-V-16 del SNTE. Dirección, teléfono, correo y horario de atención en el Instituto Tecnológico de Colima.",
};

// Arreglo con la información de contacto
// Cada elemento tiene un icono, etiqueta, valor y opcionalmente un href (link)
const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value:
      "Oficina Sindical, Av. Tecnológico #1, Col. Liberación, Villa de Álvarez, Colima",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "312 312 6393 / 312 176 9033",
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "delegacion.sindical@colima.tecnm.mx",
    href: "mailto:delegacion.sindical@colima.tecnm.mx", // Abre la app de correo al hacer click
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: "Lunes a viernes, 12:00 p.m. a 6:00 p.m.",
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* ==================== ENCABEZADO ==================== */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Comunícate con nosotros
          </span>
          <h1 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Contacto
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Si tienes alguna duda, necesitas información o quieres acercarte a
            la delegación sindical, aquí encontrarás toda la información para
            comunicarte con nosotros.
          </p>
        </div>
      </section>

      {/* ==================== TARJETAS DE CONTACTO ==================== */}
      {/* Grid de 2 columnas con la info de contacto */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Iteramos sobre cada elemento de contacto */}
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex min-w-0 items-start gap-4 rounded-lg border border-border bg-card p-6"
            >
              {/* Icono del tipo de contacto */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent">
                <item.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  {item.label}
                </p>
                {/* Si tiene href (como el correo), lo hacemos link clickeable */}
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 break-all text-sm leading-relaxed text-primary transition-colors hover:text-primary/80"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 break-words text-sm leading-relaxed text-muted-foreground">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== MAPA DE GOOGLE ==================== */}
      {/* Iframe embebido de Google Maps con la ubicación del Tec de Colima */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Ubicación
            </span>
            <h2 className="mt-2 text-balance text-2xl font-bold text-foreground md:text-3xl">
              Dónde encontrarnos
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              La oficina sindical se encuentra dentro de las instalaciones del
              Instituto Tecnológico de Colima.
            </p>
          </div>
          {/* Iframe del mapa - la URL se genera desde Google Maps > Compartir > Insertar */}
          <div className="mt-10 overflow-hidden rounded-lg border border-border shadow-sm">
            <iframe
              title="Ubicación del Instituto Tecnológico de Colima"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.469946412322!2d-103.72625458964036!3d19.261919146035183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255ac989b702cf%3A0xd6b8fbaecb0c480f!2sTecNM%20-%20Campus%20Colima!5e0!3m2!1ses-419!2smx!4v1780101351324!5m2!1ses-419!2smx"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" // Carga el mapa solo cuando el usuario hace scroll hasta ahi
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ==================== SECRETARIA GENERAL ==================== */}
      {/* Tarjeta centrada con los datos de la líder sindical */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl rounded-lg border border-border bg-card p-8 text-center">
          <h2 className="text-xl font-bold text-card-foreground">
            Secretaria General
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Dra. Xiomara Clementina Rodríguez Guzmán
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Delegación D-V-16 de la Sección 61 del SNTE
          </p>
          {/* Correo y teléfono de la Secretaria General */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:xiomara.rodriguez@colima.tecnm.mx"
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              xiomara.rodriguez@colima.tecnm.mx
            </a>
            <span className="hidden text-border sm:inline">|</span>
            <span className="text-sm text-muted-foreground">
              Tel: 312 176 9033
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
