/*
 *|=========================================================================|
 *| app/sindicato/page.tsx                                                  |
 *| Autor: Jesús Avalos (21460040)                                          |
 *| Descripción: Página "Sindicato" que muestra la información              |
 *| institucional de la Delegación D-V-16. Incluye:                         |
 *| - Historia y compromiso de la delegación                                |
 *| - Misión y Visión en tarjetas lado a lado                               |
 *| - Valores sindicales en grid de 4 columnas                              |
 *| - Estructura organizacional (mesa directiva)                            |
 *|=========================================================================|
 */

import Image from "next/image";
import { Target, Eye, Heart, Users, BookOpen, Handshake } from "lucide-react";
import type { Metadata } from "next";

// Metadatos SEO de la página
export const metadata: Metadata = {
  title: "Sindicato | SNTE Delegación D-V-16",
  description:
    "Conoce la misión, visión, valores y estructura de la Delegación D-V-16 de la Sección 61 del SNTE en el Instituto Tecnológico de Colima.",
};

// Arreglo de valores sindicales con su icono, título y descripción
// Cada valor se renderiza como una tarjeta en el grid
const values = [
  {
    icon: Heart,
    title: "Solidaridad",
    description:
      "Trabajamos unidos para el bienestar común de todos los agremiados y sus familias.",
  },
  {
    icon: Handshake,
    title: "Transparencia",
    description:
      "Gestión abierta y honesta en cada una de nuestras acciones y decisiones sindicales.",
  },
  {
    icon: Users,
    title: "Unidad",
    description:
      "Fortalecemos los lazos entre los trabajadores para lograr objetivos comunes.",
  },
  {
    icon: BookOpen,
    title: "Justicia Laboral",
    description:
      "Defendemos los derechos de cada trabajador con apego a la ley y la equidad.",
  },
];

// Arreglo con los cargos de la mesa directiva
// Los que dicen "Por confirmar" se actualizan cuando se tengan los nombres
const structure = [
  {
    cargo: "Secretario General",
    nombre: "Xiomara Clementina Rodríguez Guzmán",
  },
  {
    cargo: "Secretario de Organización",
    nombre: "María Heidi Del Pilar Vizcaíno Granados",
  },
  {
    cargo: "Secretario de Trabajo y Conflictos",
    nombre: "Jorge Alejandro Chávez Larios",
  },
  {
    cargo: "Secretario de Finanzas",
    nombre: "Mario Alfredo Benítez Montes",
  },
  {
    cargo: "Secretario de Escalafón y Promoción",
    nombre: "Gloria Monserrat Ayala Arreola",
  },
  {
    cargo: "Secretario de Orientación Ideológica y Sindical",
    nombre: "Teresa Alejandra Calleros Rodríguez",
  },
  {
    cargo: "Secretario de Previsión y Asistencia Social",
    nombre: "Sael Voriz Hoyos",
  },
];

export default function SindicatoPage() {
  return (
    <>
      {/* ==================== ENCABEZADO ==================== */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Sobre Nosotros
          </span>
          <h1 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Delegación Sindical D-V-16
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Somos la representación sindical de los trabajadores del Instituto
            Tecnológico de Colima, pertenecientes a la Sección 61 del Sindicato
            Nacional de Trabajadores de la Educación (SNTE).
          </p>
        </div>
      </section>

      {/* ==================== IMAGEN + HISTORIA ==================== */}
      {/* Grid de 2 columnas: imagen a la izquierda, texto a la derecha */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Imagen de los trabajadores */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/sindicato.jpg"
              alt="Trabajadores del Instituto Tecnológico de Colima"
              fill
              className="object-cover"
            />
          </div>
          {/* Texto de historia */}
          <div>
            <h2 className="text-balance text-2xl font-bold text-foreground">
              Nuestra historia y compromiso
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              La Delegación D-V-16 forma parte de la Sección 61 del SNTE y opera
              dentro del Instituto Tecnológico de Colima. Nuestra labor se
              centra en representar, apoyar y brindar beneficios laborales y
              sociales a todos los agremiados.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              En conjunto con el Tecnológico Nacional de México, formamos un
              entorno institucional que combina educación, organización laboral
              y servicios orientados al bienestar de la comunidad tecnológica.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== MISIÓN Y VISION ==================== */}
      {/* 2 tarjetas lado a lado sobre fondo gris */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Tarjeta de Misión */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <Target className="h-5 w-5 text-accent-foreground" />
                </div>
                <h2 className="text-xl font-bold text-card-foreground">
                  Misión
                </h2>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Representar y defender los derechos laborales de los
                trabajadores del Instituto Tecnológico de Colima, promoviendo su
                bienestar integral a través de la gestión de beneficios, la
                capacitación continua y la comunicación efectiva entre los
                agremiados y las autoridades institucionales.
              </p>
            </div>
            {/* Tarjeta de Visión */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <Eye className="h-5 w-5 text-accent-foreground" />
                </div>
                <h2 className="text-xl font-bold text-card-foreground">
                  Visión
                </h2>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Ser una delegación sindical reconocida por su transparencia,
                eficiencia y compromiso con el desarrollo profesional y personal
                de sus agremiados, consolidando un ambiente laboral justo,
                inclusivo y de respeto mutuo dentro de la comunidad del
                Tecnológico de Colima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VALORES ==================== */}
      {/* Grid de 4 tarjetas centradas con icono, titulo y descripcion */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Principios
          </span>
          <h2 className="mt-2 text-balance text-2xl font-bold text-foreground md:text-3xl">
            Nuestros Valores
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Iteramos sobre el arreglo de valores */}
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center"
            >
              {/* Icono circular */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <value.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-card-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== ESTRUCTURA ORGANIZACIONAL ==================== */}
      {/* Tabla/lista de la mesa directiva */}
      <section className="border-t border-border bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Organización
            </span>
            <h2 className="mt-2 text-balance text-2xl font-bold text-foreground md:text-3xl">
              Estructura Sindical
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Conoce a las personas que conforman la mesa directiva de la
              Delegación D-V-16.
            </p>
          </div>
          {/* Lista tipo tabla con bordes entre filas */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="overflow-hidden rounded-lg border border-border bg-card">
              {structure.map((member, index) => (
                <div
                  key={member.cargo}
                  className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                    index !== structure.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  {/* Nombre del cargo */}
                  <span className="text-sm font-semibold text-card-foreground">
                    {member.cargo}
                  </span>
                  {/* Nombre de la persona */}
                  <span className="text-sm text-muted-foreground">
                    {member.nombre}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
