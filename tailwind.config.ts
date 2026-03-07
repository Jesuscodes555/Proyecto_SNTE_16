/*
*|==========================================================================|
*| tailwind.config.ts                                                       | 
*| Autor: Jesus Avalos (21460040)                                           |
*| Descripcion: Configuración de Tailwind CSS para el proyecto.             |
*| Aquí se definen los colores personalizados del tema (usando              |
*| variables CSS de globals.css), las fuentes, los radios de                |
*| borde y las animaciones del accordion de shadcn/ui.                      |
*|                                                                          |
*| Los colores del tema se basan en variables HSL para que se               |
*| puedan cambiar fácilmente desde globals.css sin tocar este archivo.      |
*|==========================================================================|  
*/

import type { Config } from "tailwindcss"

const config: Config = {
  // Modo oscuro activado por clase CSS (no se usa en este proyecto, pero queda listo)
  darkMode: ["class"],

  // Archivos donde Tailwind busca clases CSS para generar los estilos
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}", // Agregado para incluir archivos en la carpeta lib (como colorMaps.ts)
  ],
  theme: {
    extend: {
      // Colores del tema - todos usan variables CSS definidas en globals.css
      // Esto permite cambiar los colores en un solo lugar (globals.css)
      colors: {
        background: "hsl(var(--background))", // Fondo general de la pagina
        foreground: "hsl(var(--foreground))", // Color de texto principal
        card: {
          DEFAULT: "hsl(var(--card))", // Fondo de tarjetas
          foreground: "hsl(var(--card-foreground))", // Texto dentro de tarjetas
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))", // Color principal (naranja SNTE)
          foreground: "hsl(var(--primary-foreground))", // Texto sobre fondo naranja
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Color secundario (azul marino)
          foreground: "hsl(var(--secondary-foreground))", // Texto sobre fondo azul
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Fondo suave para secciones alternadas
          foreground: "hsl(var(--muted-foreground))", // Texto gris para info secundaria
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Color de acento (naranja claro)
          foreground: "hsl(var(--accent-foreground))", // Texto sobre fondo acento
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Rojo para errores o alertas
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))", // Color de bordes
        input: "hsl(var(--input))", // Color de bordes en inputs
        ring: "hsl(var(--ring))", // Color del anillo de focus
        // Colores para gráficas (no se usan en este proyecto pero los dejo)
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Colores del sidebar (no se usa en este proyecto)
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      // Fuentes tipográficas del proyecto
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"], // Poppins como fuente principal
        mono: ["var(--font-geist-mono)", "monospace"], // Mono-espaciada (para código)
      },

      // Radios de borde basados en la variable --radius de globals.css
      borderRadius: {
        lg: "var(--radius)", // Radio grande
        md: "calc(var(--radius) - 2px)", // Radio mediano
        sm: "calc(var(--radius) - 4px)", // Radio chico
      },

      // Animaciones para el componente Accordion de shadcn/ui
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  // Plugin de animaciones de Tailwind (necesario para shadcn/ui)
  plugins: [require("tailwindcss-animate")],
}

export default config
