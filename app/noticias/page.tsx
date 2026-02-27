/*
*|=========================================================================|
*| app/noticias/page.tsx                                                   |  
*| Autor: Jesus Avalos (21460040)                                          | 
*| Descripcion: Pagina de Noticias que integra el feed de Facebook         | 
*| de la pagina oficial del sindicato. Usa el componente                   | 
*| FacebookFeed que carga el plugin oficial de Meta (Facebook              |   
*| Page Plugin) para mostrar las publicaciones en tiempo real.             |   
*|=========================================================================|  
*/

import type { Metadata } from "next"
import { FacebookFeed } from "@/components/facebook-feed" // Componente del feed de FB

// Metadatos SEO
export const metadata: Metadata = {
  title: "Noticias | SNTE Delegacion D-V-16",
  description:
    "Noticias, eventos y comunicados de la Delegacion D-V-16 de la Seccion 61 del SNTE. Integrado con nuestra pagina de Facebook.",
}

export default function NoticiasPage() {
  return (
    <>
      {/* Encabezado de la pagina */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Comunicacion
          </span>
          <h1 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Noticias y Eventos
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Mantente informado sobre las actividades, comunicados y eventos de
            la delegacion. Nuestras publicaciones se comparten directamente
            desde nuestra pagina oficial de Facebook.
          </p>
        </div>
      </section>

      {/* Seccion del feed de Facebook centrado */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl">
          {/* Componente que carga el Facebook SDK y muestra el feed */}
          <FacebookFeed />
        </div>
      </section>
    </>
  )
}
