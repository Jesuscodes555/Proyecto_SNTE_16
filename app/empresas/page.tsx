/*
*|=========================================================================|
*| app/empresas/page.tsx                                                   |  
*| Autor: Jesús Avalos (21460040)                                          | 
*| Descripción: Página que muestra el catálogo de empresas con             | 
*| descuentos exclusivos para los agremiados del SNTE.                     |
*| Los datos se cargan desde Google Sheets para que la asesora             | 
*| pueda actualizarlos sin tocar el código. Si no hay conexión             | 
*| a Google Sheets, se usan los datos locales de respaldo.                 | 
*|=========================================================================|
*/

import EmpresasClient from "./EmpresasClient"
import { getEmpresas } from "@/lib/google-sheets"
import type { Metadata } from "next"

// Metadatos SEO de la página para motores de búsqueda
export const metadata: Metadata = {
  title: "Empresas con Descuentos | SNTE Delegación D-V-16",
  description:
    "Catálogo de empresas con convenios y descuentos exclusivos para agremiados de la Delegación D-V-16.",
}

export const dynamic = "force-dynamic" // Forzamos que esta página sea dinámica para siempre mostrar datos actualizados de Google Sheets  

// Componente principal de la página (Server Component asíncrono)
// Tiene una parte asíncrona porque necesita esperar los datos de Google Sheets
export default async function Page() {
  const empresas = await getEmpresas()
  return <EmpresasClient initialEmpresas={empresas} />
} 
