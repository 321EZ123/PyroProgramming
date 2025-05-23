import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        foreground: "#FFFFFF",
        card: {
          DEFAULT: "#2A2A2A",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#2A2A2A",
          foreground: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#FF5A00",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FF9A00",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#AA4203",
          foreground: "#E0E0E0",
        },
        accent: {
          DEFAULT: "#FFCE00",
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "#D32F2F",
          foreground: "#FFFFFF",
        },
        border: "#FF9A00",
        input: "#3A3A3A",
        ring: "#FF5A00",
        fire: {
          bright: "#FF5A00",
          medium: "#FF9A00",
          yellow: "#FFCE00",
          dark: "#AA4203",
          darker: "#662500",
        },
        chart: {
          '1': '#FF5A00',
          '2': '#FF9A00',
          '3': '#FFCE00',
          '4': '#AA4203',
          '5': '#662500'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
