"use client"
/* 
*|==============================================================================|
*| app/empresas/EmpresasClient.tsx                                              |
*| Autor: Jesús Avalos (21460040)                                               |
*| Descripción: Componente cliente que muestra el catalogo de empresas con.     |
*| descuentos exclusivos para los agremiados del SNTE. Recibe los datos.        |
*| de las empresas como props desde la pagina principal (Server Component).     |
*| y permite filtrar por categoría usando un estado local.                      |
*|==============================================================================|
*/

import { Building2, Phone, MapPin } from "lucide-react"
import type { Empresa } from "@/lib/google-sheets"


// Componente principal de la pagina (Server Component asíncrono)
// Tiene una parte asíncrona porque necesita esperar los datos de Google Sheets
export default function EmpresasClient({ initialEmpresas}: {
  initialEmpresas: Empresa[]
}) {
  
  const empresas = initialEmpresas // Si no hay datos, usamos arreglo vacío para evitar errores
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
            y los cambios se reflejan automáticamente en la pagina.
          </p>
        </div>
      </section>

      {/* Grid de tarjetas de empresas */}
      <section className="mx-auto max-w-7xl px-6 py-10 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Iteramos sobre cada empresa para crear su tarjeta */}
          {empresas.map((empresa) => (
            <article
              key={empresa.codigo}
              className="flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              {/* Icono + nombre */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-card-foreground">
                    {empresa.nombre}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Código: {empresa.codigo}
                  </p>
                </div>
              </div>

              {/* Descripción */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {empresa.descripcion}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
