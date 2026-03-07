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

import type { Metadata } from "next"
import { FacebookFeed } from "@/components/facebook-feed" // Componente del feed de FB

// Metadatos SEO
export const metadata: Metadata = {
  title: "Noticias | SNTE Delegación D-V-16",
  description:
    "Noticias, eventos y comunicados de la Delegación D-V-16 de la Sección 61 del SNTE. Integrado con nuestra página de Facebook.",
}

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
        <div className="mx-auto max-w-2xl">
          {/* Componente que carga el Facebook SDK y muestra el feed */}
          <FacebookFeed />
        </div>
      </section>
    </>
  )
}
