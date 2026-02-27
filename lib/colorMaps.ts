/* 
*|==================================================================================================================================| 
*| lib/colorMaps.ts                                                                                                                 |       
*| Autor: Jesus Avalos (21460040)                                                                                                   |
*| Descripcion: Este archivo contiene los mapas de colores para los beneficios y empresas.                                          |
*| Cada beneficio o empresa tiene asignado un color de fondo y un color de texto para su representacion visual en la aplicacion.    |
*| Estos mapas se utilizan en los componentes que muestran los beneficios y las empresas para mantener una apariencia consistente.  |
*|==================================================================================================================================|
*/



export const beneficiosColorMap: Record<string, string> = {
  Seguro: "bg-blue-50 text-blue-600", // Azul para seguro de vida
  Prestamos: "bg-emerald-50 text-emerald-600", // Esmeralda para prestamos
  Capacitacion: "bg-violet-50 text-violet-600", // Violeta para capacitacion
  Descuentos: "bg-amber-50 text-amber-600", // Amaber para descuentos
  Legal: "bg-slate-50 text-slate-600", // Slate para asesoria legal
  Viaticos: "bg-sky-50 text-sky-600", // Cielo para viaticos
}

export const empresasColorMap: Record<string, string> = {
  Escolar: "bg-emerald-50 text-emerald-600", // Esmeralda para escolar
  Salud: "bg-sky-50 text-sky-600", // Cielo para salud
  Restaurante: "bg-amber-50 text-amber-600", // Amaber para restaurante
  Material: "bg-violet-50 text-violet-600",  // Violeta para material
  //Tecnología: "bg-indigo-50 text-indigo-600",
  Tecnología: "bg-rose-50 text-rose-600", // Rosa para tecnología
  Deportes: "bg-orange-50 text-orange-600", // Naranja para deportes
}



