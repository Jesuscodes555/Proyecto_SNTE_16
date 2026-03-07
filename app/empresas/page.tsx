/*
*|=========================================================================|
*| app/empresas/page.tsx                                                   |  
*| Autor: Jesus Avalos (21460040)                                          | 
*| Descripcion: Pagina que muestra el catalogo de empresas con             | 
*| descuentos exclusivos para los agremiados del SNTE.                     |
*| Los datos se cargan desde Google Sheets para que la asesora             | 
*| pueda actualizarlos sin tocar el código. Si no hay conexión             | 
*| a Google Sheets, se usan los datos locales de respaldo.                 | 
*|=========================================================================|
*/

import EmpresasClient from "./EmpresasClient"
import { getEmpresas } from "@/lib/google-sheets"
import type { Metadata } from "next"

// Metadatos SEO de la pagina para motores de busqueda
export const metadata: Metadata = {
  title: "Empresas con Descuentos | SNTE Delegación D-V-16",
  description:
    "Catalogo de empresas con convenios y descuentos exclusivos para agremiados de la Delegación D-V-16.",
}

export const dynamic = "force-dynamic" // Forzamos que esta pagina sea dinamica para siempre mostrar datos actualizados de Google Sheets  

// Componente principal de la pagina (Server Component asíncrono)
// Tiene una parte asíncrona porque necesita esperar los datos de Google Sheets
export default async function Page() {
  const empresas = await getEmpresas()
  return <EmpresasClient initialEmpresas={empresas} />
} 