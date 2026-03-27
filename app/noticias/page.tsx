/*
 *|=========================================================================|
 *| app/noticias/page.tsx                                                   |
 *| Autor: Jesús Avalos (21460040)                                          |
 *| Descripción: Pagina de Noticias que integra el feed de Facebook         |
 *| de la página oficial del sindicato. Usa el componente                   |
 *| FacebookFeed que carga el plugin oficial de Meta (Facebook              |
 *| Page Plugin) para mostrar las publicaciones en tiempo real.             |
 *|=========================================================================|
 */

import type { Metadata } from "next";
import { FacebookFeed } from "@/components/facebook-feed"; // Componente del feed de FB

// Metadatos SEO
export const metadata: Metadata = {
  title: "Noticias | SNTE Delegación D-V-16",
  description:
    "Noticias, eventos y comunicados de la Delegación D-V-16 de la Sección 61 del SNTE. Integrado con nuestra página de Facebook.",
};

export default function NoticiasPage() {
  return (
    <>
      {/* Encabezado de la página */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Comunicación
          </span>
          <h1 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Noticias y Eventos
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Mantente informado sobre las actividades, comunicados y eventos de
            la delegación. Nuestras publicaciones se comparten directamente
            desde nuestra página oficial de Facebook.
          </p>
        </div>
      </section>

      {/* Sección del feed de Facebook centrado */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Icono  */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-lg border border-border bg-card shadow-sm">
            <svg
              className="h-7 w-7 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
            </svg>
          </div>
          {/* Texto */}
          <h3 className="mt-4 text-lg font-semibold text-foreground">
            Síguenos en Facebook
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Consulta nuestras noticias, comunicados y eventos directamente en
            nuestra página Oficial de Facebook
          </p>

          {/* Botón */}
          <a
            href="https://www.facebook.com/share/1UbRXBFq2r/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#1877F2] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Ir a Facebook
          </a>
        </div>
        <h3 className="mt-6 text-lg text-center font-semibold text-foreground">
            Ahí encontrarás lo siguiente
        </h3>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h4 className="text-sm font-semibold text-foreground">
              Comunicados oficiales
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Información importante para los agremiados.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4">
            <h4 className="text-sm font-semibold text-foreground">
              Eventos y actividades
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Participa en las actividades organizadas por la delegación.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4">
            <h4 className="text-sm font-semibold text-foreground">
              Avisos importantes
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Actualizaciones relevantes para la comunidad.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4">
            <h4 className="text-sm font-semibold text-foreground">
              Noticias recientes
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Mantente informado de lo más reciente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
