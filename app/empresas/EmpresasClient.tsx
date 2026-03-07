"use client"
/* 
*|==============================================================================|
*| app/empresas/EmpresasClient.tsx                                              |
*| Autor: Jesus Avalos (21460040)                                               |
*| Descripcion: Componente cliente que muestra el catalogo de empresas con.     |
*| descuentos exclusivos para los agremiados del SNTE. Recibe los datos.        |
*| de las empresas como props desde la pagina principal (Server Component).     |
*| y permite filtrar por categoria usando un estado local.                      |
*|==============================================================================|
*/

import { Building2, Phone, MapPin } from "lucide-react"
import { getEmpresas } from "@/lib/google-sheets"
import { useState } from "react"
import type { Empresa } from "@/lib/google-sheets"
import { empresasColorMap } from "@/lib/colorMaps"


// Mapa de colores por categoría para las etiquetas de cada tarjeta
// Cada categoría tiene un color de fondo y texto diferente

// Componente principal de la pagina (Server Component asíncrono)
// Tiene una parte asincrona porque necesita esperar los datos de Google Sheets
export default function EmpresasClient({ initialEmpresas}: {
  initialEmpresas: Empresa[]
}) {
  const [filtro, setFiltro] = useState("Todas") 

  const empresas = initialEmpresas 

  const categorias = [
    "Todas",
    ...Array.from(new Set(empresas.map(e => e.categoria))) // Extraemos las categorías únicas para el filtro
  ]

  const empresasFiltradas = 
  filtro === "Todas" 
    ? empresas 
    : empresas.filter(e => e.categoria === filtro)

  return (
    <>
      {/* Encabezado de la pagina con titulo y descripción */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Convenios
          </span>
          <h1 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Empresas con Descuentos
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Estas son las empresas que ofrecen descuentos y beneficios
            exclusivos a los agremiados de la Delegación D-V-16. Si conoces una
            empresa que quiera participar, contáctenos.  
          </p>
        </div>
      </section>

      {/* Aviso para la asesora de como actualizar los datos */}
      <section className="mx-auto max-w-7xl px-6 pt-10">
        <div className="rounded-lg border border-primary/20 bg-accent p-4">
          <p className="text-sm text-accent-foreground">
            <span className="font-semibold">Para la administradora:</span> Este
            catálogo se actualiza desde una hoja de Google Sheets. Solo abre el
            Sheet compartido, agrega una nueva fila con los datos de la empresa
            y los cambios se reflejan automaticamente en la pagina.
          </p>
        </div>
      </section>

      {/* Filtro por categoría - muestra un dropdown con las categorías disponibles */}
      <section className="mx-auto max-w-7xl px-6 pt-6">
        <div className="flex flex-wrap gap-2">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`rounded-full px-3 py-1 text-sm border transition
                ${filtro === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-background border-border hover:bg-muted"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de tarjetas de empresas */}
      <section className="mx-auto max-w-7xl px-6 py-10 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Iteramos sobre cada empresa para crear su tarjeta */}
          {empresasFiltradas.map((empresa) => (
            <article
              key={empresa.nombre}
              className="flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              {/* Parte superior: icono de empresa + etiqueta de categoría */}
              <div className="flex items-start justify-between gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                  empresasColorMap[empresa.categoria]?.split(" ")[0] ?? "bg-gray-100" }`}>
                  <Building2 className={`h-5 w-5 ${
                    empresasColorMap[empresa.categoria]?.split(" ")[1] ??
                    "text-gray-800"}`} />
                </div>
                {/* Etiqueta con color según la categoría */}
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    empresasColorMap[empresa.categoria] ??
                    "bg-gray-100 text-gray-600"
                  }`}
                >
                  {empresa.categoria}
                </span>
              </div>

              {/* Nombre y descripción de la empresa */}
              <h3 className="mt-4 text-base font-semibold text-card-foreground">
                {empresa.nombre}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {empresa.descripcion}
              </p>

              {/* Información de contacto y dirección */}
              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs text-muted-foreground">
                    {empresa.contacto}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs text-muted-foreground">
                    {empresa.direccion}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
