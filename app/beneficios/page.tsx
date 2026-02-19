// ============================================================
// app/beneficios/page.tsx
// Autor: Jesus Avalos (21460040)
// Descripcion: Pagina que muestra los beneficios sindicales
// disponibles para los agremiados de la Delegacion D-V-16.
// Los datos se cargan desde Google Sheets para que la asesora
// pueda actualizarlos sin necesidad de modificar el codigo.
// Incluye un CTA (llamada a la accion) hacia la pagina de empresas.
// ============================================================

import React from "react"
import Link from "next/link"
import {
  Shield,
  Banknote,
  GraduationCap,
  Tag,
  Scale,
  Plane,
  ArrowRight,
} from "lucide-react"
import { getBeneficios } from "@/lib/google-sheets"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { beneficiosColorMap } from "@/lib/colorMaps" // Importamos el mapa de colores para beneficios

export const dynamic = "force-dynamic" // Forzamos que esta pagina sea dinamica para siempre mostrar datos actualizados de Google Sheets

// Metadatos SEO de la pagina
export const metadata: Metadata = {
  title: "Beneficios | SNTE Delegacion D-V-16",
  description:
    "Conoce todos los beneficios que ofrece la Delegacion D-V-16 del SNTE a sus agremiados del Instituto Tecnologico de Colima.",
}

// Mapa de iconos: conecta el nombre del icono (string del Sheet)
// con el componente real de Lucide React para renderizarlo
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Seguro: Shield, // Icono de escudo - para seguro de vida
  Prestamos: Banknote, // Icono de billete - para prestamos
  Capacitacion: GraduationCap, // Icono de birrete - para capacitacion
  Descuentos: Tag, // Icono de etiqueta - para descuentos
  Legal: Scale, // Icono de balanza - para asesoria legal
  Viaticos: Plane, // Icono de avion - para viaticos
}



// Componente principal (Server Component asincrono)
export default async function BeneficiosPage() {
  // Obtenemos los beneficios desde Google Sheets (o datos de respaldo)
  const beneficios = await getBeneficios()

  return (
    <>
      {/* Encabezado de la pagina */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Para Agremiados
          </span>
          <h1 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Beneficios Sindicales
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Como miembro de la Delegacion D-V-16, tienes acceso a una serie de
            beneficios pensados para tu bienestar y el de tu familia. Aqui te
            presentamos los principales.
          </p>
        </div>
      </section>

      {/* Grid de tarjetas de beneficios */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Iteramos sobre cada beneficio para crear su tarjeta */}
          {beneficios.map((beneficio) => {
            // Buscamos el icono en el mapa; si no existe, usamos Shield por defecto
            const key = beneficio.icono?.trim() || "" // Convertimos el nombre del icono a una clave para el mapa (ej: "Seguro" -> "Seguro")
            const Icon = iconMap[key] || Shield // Icono por defecto si no se encuentra el especificado 
            const colorClass = beneficiosColorMap[key as keyof typeof beneficiosColorMap] || "bg-muted text-muted-foreground" // Color por defecto si no se encuentra el especificado
            return (
              <div
                key={beneficio.titulo}
                className={`group flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md `}
              >
                {/* Icono del beneficio con efecto hover */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-110 ${colorClass}`}>
                  <Icon className="h-6 w-6" />
                </div>
                {/* Titulo y descripcion del beneficio */}
                <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                  {beneficio.titulo}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {beneficio.descripcion}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Seccion CTA - invita a ver las empresas con descuentos */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-bold text-foreground">
              Tambien contamos con convenios con empresas locales
            </h2>
            <p className="mt-3 text-muted-foreground">
              Descubre las empresas que ofrecen descuentos exclusivos a los
              agremiados del SNTE en el Instituto Tecnologico de Colima.
            </p>
            <Button asChild className="mt-6">
              <Link href="/empresas">
                Ver Empresas con Descuentos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
