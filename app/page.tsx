/*
 *|==============================================================================|
 *| app/page.tsx                                                                 |
 *| Autor: Jesús Avalos (21460040)                                               |
 *| Descripción: Pagina de Inicio del sitio web. Es la primera                   |
 *| pagina que ve el usuario al entrar. Contiene:                                |
 *| - Hero: sección principal con imagen de fondo y botones                      |
 *| - Tarjetas rápidas: accesos directos a beneficios, empresas, noticias        |
 *| - Bienvenida: sección informativa con imagen                                 |
 *| - Preview de noticias: muestra el feed de Facebook                           |
 *| - Preview de contacto: resumen de como contactar al sindicato                |
 *|==============================================================================|
 */
import Link from "next/link";
import Image from "next/image"; // Componente de Next.js para imágenes optimizadas
import {
  ArrowRight,
  Shield,
  Users,
  Building2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"; // Iconos que usamos en la pagina
import { Button } from "@/components/ui/button"; // Componente de botón de shadcn/ui

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      {/* Sección principal con imagen de fondo y texto centrado */}
      <section className="relative overflow-hidden bg-secondary">
        {/* Imagen de fondo con opacidad baja para que el texto sea legible */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Instituto Tecnológico de Colima"
            fill
            className="object-cover opacity-20"
            priority // priority = carga la imagen de inmediato (es lo primero que ve el usuario)
          />
        </div>
        {/* Contenido del hero centrado sobre la imagen */}
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
          {/* Etiqueta superior con el nombre de la delegación */}
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            {"Delegación D-V-16 \u00B7 Sección 61 del SNTE"}
          </span>
          {/* Titulo principal */}
          <h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight text-secondary-foreground md:text-5xl">
            Sindicato Nacional de Trabajadores de la Educación
          </h1>
          {/* Subtitulo descriptivo */}
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-secondary-foreground/80 md:text-lg">
            Representamos y apoyamos a los trabajadores del Instituto
            Tecnológico de Colima. Conoce tus beneficios, noticias y más.
          </p>
          {/* Botones de acción */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/beneficios">
                Ver Beneficios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-secondary-foreground/30 bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <Link href="/contacto">Contacto</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== TARJETAS RÁPIDAS ==================== */}
      {/* 3 tarjetas que se superponen al hero con margen negativo (-mt-8) */}
      <section className="mx-auto mt-5 max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {/* Arreglo de datos para las 3 tarjetas */}
          {[
            {
              icon: Shield,
              title: "Beneficios",
              desc: "Seguro de vida, prestamos, capacitación y mas para ti y tu familia.",
              href: "/beneficios",
            },
            {
              icon: Building2,
              title: "Empresas con Descuentos",
              desc: "Catalogo de empresas locales con convenios exclusivos para agremiados.",
              href: "/empresas",
            },
            {
              icon: Users,
              title: "Noticias y Eventos",
              desc: "Mantente al día con las actividades y comunicados de la delegación.",
              href: "/noticias",
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              {/* Icono de la tarjeta */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <card.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="text-base font-semibold text-card-foreground">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.desc}
              </p>
              {/* Link "Ver mas" con flecha que aparece al hacer hover */}
              <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                {"Ver mas"} <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ==================== BIENVENIDA ==================== */}
      {/* Sección con texto a la izquierda e imagen a la derecha */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Bienvenidos
            </span>
            <h2 className="mt-2 text-balance text-2xl font-bold text-foreground md:text-3xl">
              Comprometidos con los trabajadores del Tecnológico de Colima
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              La Delegación D-V-16 de la Sección 61 del SNTE trabaja diariamente
              para garantizar los derechos laborales, promover el bienestar y
              ofrecer beneficios reales a todos los agremiados del Instituto
              Tecnológico de Colima.
            </p>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Nuestro compromiso es brindar un espacio de confianza,
              transparencia y apoyo constante para toda la comunidad
              trabajadora.
            </p>
            <Button asChild className="mt-6 bg-transparent" variant="outline">
              <Link href="/sindicato">Conoce mas sobre nosotros</Link>
            </Button>
          </div>
          {/* Imagen del equipo sindical */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/sindicato.jpg"
              alt="Equipo de la delegación sindical"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ==================== PREVIEW DE NOTICIAS (FACEBOOK) ==================== */}
      {/* Sección con fondo gris (muted) que muestra una preview del feed de Facebook */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Noticias y Eventos
            </span>
            <h2 className="mt-2 text-balance text-2xl font-bold text-foreground md:text-3xl">
              Ultimas publicaciones
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Síguenos en Facebook para estar al tanto de todas las actividades
              y comunicados de la delegación.
            </p>
          </div>
          {/* Tarjeta simulando el feed de Facebook */}
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              {/* Header de la tarjeta con logo de Facebook */}
              <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2]">
                  <svg
                    className="h-5 w-5 text-card"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    Delegación Tec Colima
                  </p>
                  <p className="text-xs text-muted-foreground">Facebook</p>
                </div>
              </div>
              {/* Cuerpo de la tarjeta con mensaje y botón */}
              <div className="p-5">
                <p className="text-center text-sm text-muted-foreground">
                  Medio informativo exclusivo para el personal sindicalizado de
                  la Delegación D-V-16 (sección 61 SNTE)
                </p>
                <div className="mt-4 flex justify-center">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/noticias">
                      Ir a Noticias
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PREVIEW DE CONTACTO ==================== */}
      {/* Tarjeta grande con info de contacto y botón para ir a la pagina completa */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-lg border border-border bg-card p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Lado izquierdo: texto y botón */}
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Contacto
              </span>
              <h2 className="mt-2 text-balance text-2xl font-bold text-foreground md:text-3xl">
                Estamos para ayudarte
              </h2>
              <p className="mt-3 text-muted-foreground">
                Si tienes dudas o necesitas información, no dudes en
                contactarnos. Estamos en la oficina sindical del Tecnológico de
                Colima.
              </p>
              <Button asChild className="mt-6">
                <Link href="/contacto">Ir a Contacto</Link>
              </Button>
            </div>
            {/* Lado derecho: datos de contacto con iconos */}
            <div className="flex flex-col justify-center gap-4">
              {/* Direccion */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <MapPin className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Dirección
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Av. Tecnológico #1, Col. Liberación, Villa de Alvarez,
                    Colima
                  </p>
                </div>
              </div>
              {/* Teléfono */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <Phone className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Teléfono
                  </p>
                  <p className="text-sm text-muted-foreground">312 312 6393</p>
                </div>
              </div>
              {/* Correo */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <Mail className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Correo</p>
                  <p className="break-all text-sm text-muted-foreground">
                    delegacion.sindical@colima.tecnm.mx
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
