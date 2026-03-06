/*
*|=========================================================================|
*| components/navbar.tsx                                                   |     
*| Autor: Jesus Avalos (21460040)                                          | 
*| Descripcion: Componente de la barra de navegacion principal.            |   
*| Es "sticky" (se queda fija arriba al hacer scroll) y tiene              |   
*| version de escritorio (links horizontales) y version movil              | 
*| (menu hamburguesa que se abre/cierra). Usa "use client"                 | 
*| porque necesita useState para controlar el menu movil.                  |      
*|=========================================================================|
*/

"use client"

import Link from "next/link" // Componente de Next.js para navegacion sin recargar la pagina
import { usePathname } from "next/navigation" // Hook para saber en que pagina estamos
import { useState } from "react" // Hook de React para manejar estado (menu abierto/cerrado)
import { Menu, X } from "lucide-react" // Iconos de hamburguesa y cerrar
import { cn } from "@/lib/utils" // Utilidad para combinar clases CSS condicionalmente

// Arreglo con todos los links de navegacion
// href: la ruta de la pagina, label: el texto que se muestra
const links = [
  { href: "/", label: "Inicio" },
  { href: "/sindicato", label: "Sindicato" },
  { href: "/beneficios", label: "Beneficios" },
  { href: "/empresas", label: "Empresas" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
]

export function Navbar() {
  // usePathname nos dice la ruta actual, ej: "/beneficios"
  const pathname = usePathname()
  // Estado para controlar si el menu movil esta abierto o cerrado
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    // header sticky: se queda pegado arriba al hacer scroll
    // backdrop-blur: efecto de desenfoque en el fondo (vidrio esmerilado)
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / nombre del sindicato - al hacer click va al inicio */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          {/* Cuadro naranja con la S como placeholder del logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">
              S
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-tight text-foreground">
              SNTE D-V-16
            </span>
            <span className="text-xs leading-tight text-muted-foreground">
              Sección 61
            </span>
          </div>
        </Link>

        {/* Menu de escritorio - se oculta en pantallas pequenas (hidden md:flex) */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  // Si es la pagina actual, se resalta con fondo de acento
                  pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Boton hamburguesa - solo visible en movil (md:hidden) */}
        <button
          type="button"
          className="rounded-md p-2 text-muted-foreground hover:bg-muted md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {/* Muestra X si esta abierto, hamburguesa si esta cerrado */}
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Menu movil desplegable - solo se muestra cuando mobileOpen es true */}
      {mobileOpen && (
        <div className="border-t border-border px-6 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)} // Cierra el menu al seleccionar
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
