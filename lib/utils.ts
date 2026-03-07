/*
*|=========================================================================|
*| lib/utils.ts                                                            |  
*| Autor: Jesus Avalos (21460040)                                          | 
*| Descripcion: Función utilitaria para combinar clases de CSS             | 
*| de Tailwind de forma condicional. Usa clsx para manejar                 | 
*| clases condicionales y twMerge para resolver conflictos                 |
*| entre clases de Tailwind (ej: si pones "p-4" y "p-6",                   | 
*| twMerge se queda solo con la ultima).                                   |           
*|=========================================================================|
*/

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn - Combina clases de CSS de forma inteligente
 *
 * Ejemplo de uso:
 *   cn("p-4 bg-red-500", isActive && "bg-blue-500")
 *   // Si isActive es true, retorna "p-4 bg-blue-500"
 *   // twMerge resuelve el conflicto entre bg-red y bg-blue
 *
 * @param inputs - Clases CSS (strings, objetos o arrays)
 * @returns String con las clases combinadas sin conflictos
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
