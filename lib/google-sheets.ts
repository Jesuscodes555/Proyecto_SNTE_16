/* 
*|=========================================================================|
*| lib/google-sheets.ts                                                    |  
*| Autor: Jesus Avalos (21460040)                                          | 
*| Descripcion: Modulo utilitario para conectarse a Google Sheets          | 
*| y leer los datos de las hojas de calculo que usa la asesora             | 
*| para actualizar empresas y beneficios sin tocar código.                 | 
*|                                                                         | 
*| Como funciona:                                                          | 
*| 1. La asesora edita un Google Sheet normal (como Excel online).         | 
*| 2. Esta funcion llama a la API publica de Google Sheets.                | 
*| 3. Convierte las filas del Sheet en objetos JSON para usar en la web.   | 
*|                                                                         | 
*| Requisitos:                                                             |
*| - La hoja de Google Sheets debe estar compartida como                   | 
*|   "Cualquier persona con el enlace puede ver".                          | 
*| - Se necesita una API Key de Google (variable GOOGLE_SHEETS_API_KEY).   |
*| - El ID del Sheet se saca de la URL:                                    | 
*|   https://docs.google.com/spreadsheets/d/{ESTE_ES_EL_ID}/edit           | 
*|=========================================================================|
*/

// Interfaz que define la estructura de cada empresa en el Sheet
export interface Empresa {
  nombre: string
  descripcion: string
  categoria: string
  contacto: string
  direccion: string
}

// Interfaz que define la estructura de cada beneficio en el Sheet
export interface Beneficio {
  titulo: string
  descripcion: string
  icono: string
}

// URL base de la API de Google Sheets v4 NO BORRAR NI CAMBIAR ESTA URL, ES LA QUE USAMOS PARA LEER LOS DATOS DEL SHEET
const SHEETS_BASE_URL = "https://sheets.googleapis.com/v4/spreadsheets"

/**
 * fetchSheetData - Funcion genérica para leer datos de cualquier hoja
 *
 * @param spreadsheetId - El ID único del Google Sheet
 * @param range - El rango de celdas a leer, ej: "Hoja1!A2:E"
 * @returns Un arreglo de arreglos con los valores de cada fila
 *
 * Nota: usamos revalidate = 300 (5 minutos) para que Next.js
 * no llame a Google Sheets en cada visita, sino que guarde
 * los datos en cache y los refresque cada 5 minutos.
 */
async function fetchSheetData(
  spreadsheetId: string,
  range: string
  
): Promise<string[][]> {
  // Obtenemos la API Key de las variables de entorno
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY


  // Si no hay API Key configurada, retornamos arreglo vacío
  // para que la pagina no truene, solo se muestra sin datos
  if (!apiKey) {
    console.warn(
      "[Google Sheets] No se encontró GOOGLE_SHEETS_API_KEY. Usando datos de respaldo."
    )
    return []
  }

  // Construimos la URL de la API con los parametros necesarios
  const url = `${SHEETS_BASE_URL}/${spreadsheetId}/values/${range}?key=${apiKey}`

  // Hacemos el fetch con cache de 5 minutos (300 segundos)
  const response = await fetch(url, {
    next: { revalidate: 300 },
  })

  // Si la respuesta no es exitosa, mostramos error en consola
  if (!response.ok) {
    console.error(
      "[Google Sheets] Error al obtener datos:",
      response.status,
      response.statusText
    )
    return []
  }

  // Parseamos la respuesta JSON de Google
  const data = await response.json()

  // Google regresa los valores en data.values como arreglo de arreglos
  // Si no hay datos, retornamos arreglo vacío
  return data.values || []

}

/**
 * getEmpresas - Lee la hoja de empresas del Google Sheet
 *
 * La hoja debe tener las columnas en este orden:
 * A: nombre | B: descripcion | C: categoria | D: contacto | E: dirección
 *
 * La primera fila (encabezados) se salta porque el rango empieza en A2.
 * Si no hay API Key o falla la conexión, usa datos de respaldo del JSON local.
 */
export async function getEmpresas(): Promise<Empresa[]> {
  // ID del Google Sheet (sacado de la URL del Sheet)
  const sheetId = process.env.GOOGLE_SHEET_ID || ""

  // Si no hay ID configurado, usamos los datos locales de respaldo
  if (!sheetId) {
    const fallback = await import("@/data/empresas.json")
    return fallback.default as Empresa[]
  }

  // Leemos desde la fila 2 (A2) para saltar los encabezados
  const rows = await fetchSheetData(sheetId, "Empresas!A2:E")

  // Si no hay filas (sheet vacío o error), usamos datos de respaldo
  if (rows.length === 0) {
    const fallback = await import("@/data/empresas.json")
    return fallback.default as Empresa[]
  }

  // Convertimos cada fila (arreglo de strings) a un objeto Empresa
  return rows.map((row) => ({
    nombre: row[0] || "",
    descripcion: row[1] || "",
    categoria: row[2] || "",
    contacto: row[3] || "",
    direccion: row[4] || "",
  }))
}

/**
 * getBeneficios - Lee la hoja de beneficios del Google Sheet
 *
 * La hoja debe tener las columnas en este orden:
 * A: titulo | B: descripcion | C: icono
 *
 * Los iconos validos son: Shield, Banknote, GraduationCap, Tag, Scale, Plane
 * Si no hay API Key o falla la conexión, usa datos de respaldo del JSON local.
 */
export async function getBeneficios(): Promise<Beneficio[]> {
  // ID del Google Sheet de beneficios
  const sheetId = process.env.GOOGLE_SHEET_ID || ""

  // Si no hay ID configurado, usamos los datos locales de respaldo
  if (!sheetId) {
    const fallback = await import("@/data/beneficios.json")
    return fallback.default as Beneficio[]
  }

  // Leemos desde la fila 2 para saltar encabezados
  const rows = await fetchSheetData(sheetId, "Beneficios!A2:C")

  // Si no hay filas, usamos datos de respaldo
  if (rows.length === 0) {
    const fallback = await import("@/data/beneficios.json")
    return fallback.default as Beneficio[]
  }

  // Convertimos cada fila a un objeto Beneficio
  return rows.map((row) => ({
    titulo: row[0] || "",
    descripcion: row[1] || "",
    icono: row[2] || "Shield",
  }))
}
