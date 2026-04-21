/*
 *|=========================================================================|
 *| components/footer.tsx                                                   |
 *| Autor: Jesus Avalos (21460040)                                          |
 *| Descripcion: Componente del pie de pagina que se muestra en             |
 *| todas las paginas del sitio. Contiene la información del                |
 *| sindicato, links de navegación, datos de contacto y el link             |
 *| al aviso de privacidad. Usa el color "secondary" (azul oscuro)          |
 *| como fondo para diferenciarlo del contenido principal. El texto es      |
 *|=========================================================================|
 */

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react"; // Iconos de contacto
import Image from "next/image";

export function Footer() {
  return (
    // El footer usa bg-secondary (azul oscuro) con texto claro
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Grid de 3 columnas en escritorio, 1 en móvil */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Columna 1: Logo y descripcion del sindicato */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {/* Placeholder del logo - mismo estilo que el navbar */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden">
                <Image
                  src="/images/Logo.jpg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="transition-transform duration-200 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">SNTE Delegación D-V-16</p>
                <p className="text-xs text-secondary-foreground/70">
                  Sección 61
                </p>
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/80">
              Sindicato Nacional de Trabajadores de la Educación. Delegación del
              Instituto Tecnológico de Colima.
            </p>
          </div>

          {/* Columna 2: Links de navegación rápida */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/60">
              Navegación
            </h3>
            <nav className="flex flex-col gap-2">
              {/* Mismo arreglo de links que en la navbar */}
              {[
                { href: "/", label: "Inicio" },
                { href: "/sindicato", label: "Sindicato" },
                { href: "/beneficios", label: "Beneficios" },
                { href: "/empresas", label: "Empresas" },
                { href: "/noticias", label: "Noticias" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 3: Datos de contacto con iconos */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/60">
              Contacto
            </h3>
            <div className="flex flex-col gap-3">
              {/* Direccion física */}
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  Av. Tecnológico #1, Col. Liberación, Villa de Álvarez, Colima
                </span>
              </div>
              {/* Teléfono */}
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  312 312 6393
                </span>
              </div>
              {/* Correo electrónico */}
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  delegacion.sindical@colima.tecnm.mx
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior con copyright y aviso de privacidad */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-secondary-foreground/10 pt-6 md:flex-row">
          <p className="text-xs text-secondary-foreground/60">
            SNTE Delegación D-V-16, Sección 61. Todos los derechos reservados.
          </p>
          <Link
            href="/aviso-de-privacidad"
            className="text-xs text-secondary-foreground/60 transition-colors hover:text-primary-foreground"
          >
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
