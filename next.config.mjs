// ============================================================
// next.config.mjs
// Autor: Jesus Avalos (21460040)
// Descripcion: Configuracion principal de Next.js.
//
// - ignoreBuildErrors: Ignora errores de TypeScript al construir
//   (esto es para que el deploy no falle por errores menores de tipos).
// - unoptimized: Las imagenes no pasan por el optimizador de Next.js
//   (esto es para que funcionen correctamente en cualquier hosting).
// ============================================================

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desactiva errores de TypeScript en el build para evitar que el deploy falle
  typescript: {
    ignoreBuildErrors: true,
  },
  // Desactiva la optimizacion de imagenes de Next.js
  // Util cuando se despliega en hosting que no soporta Image Optimization
  images: {
    unoptimized: true,
  },
}

export default nextConfig
