/* 
*|==================================================================================================================================| 
*| lib/colorMaps.ts                                                                                                                 |       
*| Autor: Jesus Avalos (21460040)                                                                                                   |
*| Descripcion: Este archivo contiene los mapas de colores para los beneficios y empresas.                                          |
*| Cada beneficio o empresa tiene asignado un color de fondo y un color de texto para su representacion visual en la aplicacion.    |
*| Estos mapas se utilizan en los componentes que muestran los beneficios y las empresas para mantener una apariencia consistente.  |
*|==================================================================================================================================|
*/


// Mapa de colores para los beneficios
export const beneficiosColorMap: Record<string, string> = {
  Seguro: "bg-blue-50 text-blue-600",        // confianza, protección
  Prestamos: "bg-emerald-50 text-emerald-600", // dinero, crecimiento
  Capacitacion: "bg-violet-50 text-violet-600", // aprendizaje
  Descuentos: "bg-rose-50 text-rose-600",     // ofertas, promociones
  Legal: "bg-slate-100 text-slate-700",       // formalidad / jurídico
  Viaticos: "bg-cyan-50 text-cyan-600",       // viajes / movimiento
}

// Mapa de colores para las empresas
export const empresasColorMap: Record<string, string> = {
  Escolar: "bg-green-50 text-green-600",        // educación
  Salud: "bg-teal-50 text-teal-600",             // medicina
  Restaurante: "bg-orange-50 text-orange-600",   // comida
  Material: "bg-amber-50 text-amber-600",        // herramientas
  Tecnología: "bg-indigo-50 text-indigo-600",    // tech
  Deportes: "bg-red-50 text-red-600",             // energía
}



