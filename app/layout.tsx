/*
*|=========================================================================|
*| app/layout.tsx                                                          |  
*| Autor: Jesus Avalos (21460040)                                          | 
*| Descripción: Layout principal de la aplicación. Este archivo            | 
*| envuelve TODAS las paginas del sitio, es decir, todo lo que             |   
*| se ponga aquí (navbar, footer, fuentes) aparece en cada pagina.         | 
*| Next.js usa este archivo como la estructura base del HTML.              | 
*|=========================================================================|  
*/

import React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google" // Fuente tipográfica de Google
import "./globals.css" // Estilos globales (colores, tokens de diseño)
import { Navbar } from "@/components/navbar" // Barra de navegación
import { Footer } from "@/components/footer" // Pie de pagina

// Configuration de la fuente Poppins con los pesos que usamos
// La variable CSS --font-poppins permite usarla en Tailwind
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

// Metadatos de la pagina para SEO (aparecen en Google y en la pestaña del navegador)
export const metadata: Metadata = {
  title: "SNTE Delegación D-V-16 | Instituto Tecnológico de Colima",
  description:
    "Pagina web oficial de la Delegación D-V-16 de la Sección 61 del SNTE en el Instituto Tecnológico de Colima. Información sindical, beneficios, noticias y contacto.",
}

// Color del tema para navegadores móviles (la barrita de arriba en Android)
export const viewport: Viewport = {
  themeColor: "#e07020",
}

// Componente RootLayout: estructura HTML base de todo el sitio
// Recibe {children} que es la pagina actual que se esta mostrando
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // lang="es" para indicar a los navegadores que el sitio esta en español
    <html lang="es">
      {/* Aplicamos la variable de la fuente y la clase antialiased para suavizar el texto */}
      <body className={`${poppins.variable} font-sans antialiased`}>
        {/* Navbar se muestra arriba en todas las paginas */}
        <Navbar />
        {/* main contiene el contenido de cada pagina individual */}
        <main>{children}</main>
        {/* Footer se muestra abajo en todas las paginas */}
        <Footer />
      </body>
    </html>
  )
}
