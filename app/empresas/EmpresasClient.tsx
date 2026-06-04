"use client";
/*
 *|==============================================================================|
 *| app/empresas/EmpresasClient.tsx                                              |
 *| Autor: Jesús Avalos (21460040)                                               |
 *| Descripción: Componente cliente que muestra el catálogo de empresas con      |
 *| descuentos exclusivos para los agremiados del SNTE. Recibe los datos         |
 *| de las empresas como props desde la página principal (Server Component)      |
 *| y permite filtrar por categoría usando un estado local.                      |
 *|==============================================================================|
 */

import { Building2, Phone, MapPin } from "lucide-react";
import type { Empresa } from "@/lib/google-sheets";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";


// Componente principal de la página (Server Component asíncrono)
// Tiene una parte asíncrona porque necesita esperar los datos de Google Sheets
export default function EmpresasClient({
  initialEmpresas,
}: {
  initialEmpresas: Empresa[];
}) {
  const empresas = initialEmpresas; // Si no hay datos, usamos arreglo vacío para evitar errores 
  return (
    <>
      {/* Encabezado de la página con título y descripción */}
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

      {/* Aviso para la asesora de cómo actualizar los datos */}
      <section className="mx-auto max-w-7xl px-6 pt-10">
        <div className="rounded-lg border border-primary/20 bg-accent p-4">
          <p className="text-sm text-accent-foreground">
            <span className="font-semibold">Para la administradora:</span> Este
            catálogo se actualiza desde una hoja de Google Sheets. Solo abre el
            Sheet compartido, agrega una nueva fila con los datos de la empresa
            y los cambios se reflejan automáticamente en la página.
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
              className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              {/* Código de la empresa */}
              <div
                onClick={() => {
                  if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(empresa.codigo)
                  } else {
                    //Fallback para navegadores antiguos o no seguros
                    const textArea = document.createElement("textarea")
                    textArea.value = empresa.codigo
                    document.body.appendChild(textArea)
                    textArea.select()
                    document.execCommand("copy")
                    document.body.removeChild(textArea)
                  }
                  toast.success("Código copiado" ,{
                    icon: <CheckCircle className="h-4 w-4"/>
                  })
                }}
                className="mb-5 cursor-pointer select-none rounded-md bg-primary/10 px-3 py-2 text-center transition hover:bg-primary/20 active:scale-95"
                title="Haz clic para copiar el código al portapapeles"
              >
                <p className="mt-1 text-xl font-bold  tracking-wider text-primary">
                  Código: {empresa.codigo}
                </p>
              </div>
              {/* Icono + nombre */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {empresa.nombre}
                </h3>
              </div>

              {/* Descripción */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {empresa.descripcion}
              </p>
              <div className="mt-6 border-t border-dashed border-border pt-3 text-center">
                <span className="text-sm leading relaxed text-muted-foreground">
                  Presenta el código mostrado arriba en la empresa para obtener tu descuento exclusivo.
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
