/*
 *|=========================================================================|
 *| components/navbar.tsx                                                   |
 *| Autor: Jesús Avalos (21460040)                                          |
 *| Descripción: Componente de la barra de navegación principal.            |
 *| Es "sticky" (se queda fija arriba al hacer scroll) y tiene              |
 *| versión de escritorio (links horizontales) y versión móvil              |
 *| (menú hamburguesa que se abre/cierra). Usa "use client"                 |
 *| porque necesita useState para controlar el menú móvil.                  |
 *|=========================================================================|
 */

"use client";

import Link from "next/link"; // Componente de Next.js para navegación sin recargar la página
import { usePathname } from "next/navigation"; // Hook para saber en qué página estamos
import { useState } from "react"; // Hook de React para manejar estado (menú abierto/cerrado)
import { Menu, X } from "lucide-react"; // Iconos de hamburguesa y cerrar
import { cn } from "@/lib/utils"; // Utilidad para combinar clases CSS condicionalmente
import Image from "next/image"; // Componente de Next.js para optimizar imágenes

// Arreglo con todos los links de navegación
// href: la ruta de la pagina, label: el texto que se muestra
const links = [
  { href: "/", label: "Inicio" },
  { href: "/sindicato", label: "Sindicato" },
  { href: "/beneficios", label: "Beneficios" },
  { href: "/empresas", label: "Empresas" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  // usePathname nos dice la ruta actual, ej: "/beneficios"
  const pathname = usePathname();
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <div className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={44}
              height={44}
              className="transition-transform duration-200 hover:scale-105"
            />
            {/* <span className="text-lg font-bold text-primary-foreground">S</span> */}
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

        {/* Menú de escritorio - se oculta en pantallas pequeñas (hidden md:flex) */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  // Si es la página actual, se resalta con fondo de acento
                  pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa - solo visible en móvil (md:hidden) */}
        <button
          type="button"
          className="rounded-md p-2 text-muted-foreground hover:bg-muted md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {/* Muestra X si está abierto, hamburguesa si está cerrado */}
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Menú móvil desplegable - solo se muestra cuando mobileOpen es true */}
      {mobileOpen && (
        <div className="border-t border-border px-6 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)} // Cierra el menú al seleccionar
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
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
  );
}
