/*
*|=========================================================================|
*| app/aviso-de-privacidad/page.tsx                                        |  
*| Autor: Jesus Avalos (21460040)                                          | 
*| Descripcion: Pagina del Aviso de Privacidad. Es un requisito.           |
*| legal en Mexico (Ley Federal de Proteccion de Datos Personales).        |
*| que todo sitio web que recabe datos tenga uno. Esta pagina.             |
*| es estatica (no carga datos externos) y se accede desde el.             |
*| link en el footer del sitio.                                            |
*|=========================================================================|
*/

import type { Metadata } from "next"

// Metadatos SEO
export const metadata: Metadata = {
  title: "Aviso de Privacidad | SNTE Delegacion D-V-16",
  description: "Aviso de privacidad de la Delegacion D-V-16 del SNTE.",
}

export default function AvisoPrivacidadPage() {
  return (
    // Contenedor centrado con ancho maximo de lectura comoda (max-w-3xl)
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
        Aviso de Privacidad
      </h1>
      {/* Contenido del aviso en formato de parrafos con subtitulos */}
      <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          La Delegación D-V-16 de la Sección 61 del Sindicato Nacional de
          Trabajadores de la Educación (SNTE), con domicilio en Av. Tecnológico
          #1, Col. Liberación, Villa de Álvarez, Colima, es responsable del
          tratamiento de los datos personales que nos proporcione, los cuales
          seran protegidos conforme a lo dispuesto por la Ley Federal de
          Protección de Datos Personales en Posesión de los Particulares.
        </p>

        {/* Subtitulo: que datos se recaban */}
        <h2 className="text-lg font-semibold text-foreground">
          Datos personales recabados
        </h2>
        <p>
          Para las finalidades señaladas en el presente aviso de privacidad,
          podemos recabar sus datos personales de distintas formas: cuando usted
          nos los proporciona directamente, cuando visita nuestro sitio web o
          cuando los obtenemos a traves de otras fuentes permitidas por la ley.
        </p>

        {/* Subtitulo: para que se usan los datos */}
        <h2 className="text-lg font-semibold text-foreground">
          Finalidades del tratamiento
        </h2>
        <p>
          Los datos personales que recabamos los utilizaremos para las
          siguientes finalidades necesarias para la gestion sindical:
          comunicación con los agremiados, difusión de beneficios y servicios,
          organización de eventos y actividades sindicales, y atención a
          solicitudes de información.
        </p>

        {/* Subtitulo: como contactar para dudas */}
        <h2 className="text-lg font-semibold text-foreground">Contacto</h2>
        <p>
          Si tiene preguntas sobre este aviso de privacidad, puede contactarnos
          en el correo electronico:{" "}
          <a
            href="mailto:delegacion.sindical@colima.tecnm.mx"
            className="font-medium text-primary hover:text-primary/80"
          >
            delegacion.sindical@colima.tecnm.mx
          </a>
        </p>

        {/* Fecha de ultima actualizacion */}
        <p className="mt-4 text-xs text-muted-foreground/60">
          Ultima actualización: Febrero 2026
        </p>
      </div>
    </section>
  )
}
