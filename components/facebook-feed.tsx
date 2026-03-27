/*
*|=========================================================================|
*| components/facebook-feed.tsx                                            |     
*| Autor: Jesus Avalos (21460040)                                          | 
*| Descripcion: Componente cliente que carga el Facebook SDK               |   
*| y muestra el feed de la pagina oficial del sindicato usando             |   
*| el Facebook Page Plugin de Meta. Este plugin es gratuito y              |   
*| no requiere API Key, solo que la pagina de FB sea publica.              | 
*|                                                                         | 
*| Como funciona:                                                          | 
*| 1. Al montarse el componente, carga el script del SDK de Facebook       | 
*| 2. El SDK busca los elementos con clase "fb-page" y los renderiza       | 
*| 3. Mientras carga, se muestra un placeholder con botón a Facebook       | 
*|                                                                         | 
*| Nota: usa "use client" porque necesita useEffect para cargar            | 
*| el script del SDK en el navegador (no funciona en el servidor).         |   
*|=========================================================================|
*/
"use client"

import { useEffect, useRef } from "react"

export function FacebookFeed() {
  // useRef para tener referencia al contenedor del plugin
  // Lo necesitamos para decirle al SDK de FB que parsee este div
  const containerRef = useRef<HTMLDivElement>(null)

  // useEffect se ejecuta cuando el componente se monta en el navegador
  useEffect(() => {
    // Verificamos que estamos en el navegador (no en el servidor)
    if (typeof window !== "undefined" && !(window as any).FB) {
      // Creamos el tag <script> del SDK de Facebook
      const script = document.createElement("script")
      script.src =
        "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v21.0"
      script.async = true // Se carga de forma asíncrona para no bloquear la pagina
      script.defer = true // Se ejecuta después de que el HTML termine de cargar
      script.crossOrigin = "anonymous"
      document.body.appendChild(script)

      // Cuando el script termina de cargar, le decimos al SDK
      // que Parsee (renderiza) los elementos de Facebook en nuestro contenedor
      script.onload = () => {
        if ((window as any).FB) {
          ;(window as any).FB.XFBML.parse(containerRef.current)
        }
      }
    } else if ((window as any).FB) {
      // Si el SDK ya estaba cargado (navegación entre paginas), solo Parseamos
      ;(window as any).FB.XFBML.parse(containerRef.current)
    }
  }, []) // [] = solo se ejecuta una vez al montar el componente

  return (
    <div className="flex flex-col gap-6">
      {/* Aviso informativo sobre la integración */}
      <div className="rounded-lg border border-primary/20 bg-accent p-4">
        <p className="text-sm text-accent-foreground">
          <span className="font-semibold">Integración con Facebook:</span>{" "}
          Las publicaciones se cargan directamente desde la pagina oficial del
          sindicato. Si no ves contenido, puede ser que tu navegador bloquee las
          cookies de terceros.
        </p>
      </div>

      {/* Contenedor del Facebook Page Plugin */}
      <div
        ref={containerRef}
        className="flex justify-center overflow-hidden rounded-lg border border-border bg-card"
      >
        {/*
          El div fb-page es reconocido por el SDK de Facebook
          data-href: URL de la pagina de Facebook del sindicato
          data-tabs: que pestañas mostrar (timeline = publicaciones)
          data-width/height: dimensiones del plugin
          data-adapt-container-width: se ajusta al ancho del contenedor
        */}
        <div
          className="fb-page"
          data-href="https://www.facebook.com/profile.php?id=100064841498938"
          data-tabs="timeline"
          data-width="500"
          data-height="700"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          {/* Contenido de respaldo mientras carga el SDK o si falla */}
          <blockquote
            cite="https://www.facebook.com/profile.php?id=100064841498938"
            className="fb-xfbml-parse-ignore"
          >
            <div className="flex flex-col items-center gap-4 p-10">
              {/* Icono de Facebook */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2]">
                <svg
                  className="h-7 w-7 text-card"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Cargando publicaciones de Facebook...
              </p>
              {/* Botón de respaldo para ir directo a Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100064841498938"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#1877F2] px-4 py-2 text-sm font-medium text-card transition-opacity hover:opacity-90"
              >
                Visitar en Facebook
              </a>
            </div>
          </blockquote>
        </div>
      </div>

      {/* Link directo a la pagina de Facebook */}
      <div className="text-center">
        <a
          href="https://www.facebook.com/profile.php?id=100064841498938"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Visitar nuestra pagina en Facebook
        </a>
      </div>
    </div>
  )
}
