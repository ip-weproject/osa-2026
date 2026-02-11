import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1400px'
            }
        },
       extend: {
      colors: {
        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring))",
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive))",
          foreground: "rgb(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "rgb(var(--muted))",
          foreground: "rgb(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent))",
          foreground: "rgb(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "rgb(var(--popover))",
          foreground: "rgb(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "rgb(var(--card))",
          foreground: "rgb(var(--card-foreground))",
        },
                // Custom osa colors
                osa: {
                    blue: '#0077FC',
                    'light-blue': '#475c99',
                    'dark-blue': '#0f1f4c',
                    cian: '#3ac6ad',
                    'light-cian': '#b4fcf8',
                    'dark-cian': '#29b7b0',
                    white: '#fff',
                    black: '#000',
                },
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                display: ['Poppins', 'sans-serif'],
            },
            borderRadius: {
                'xs': '0.125rem',
                'sm': '0.25rem',
                'md': '0.375rem',
                'lg': '0.5rem',
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
                'circle': '50%',
                'pill': '9999px'
            },
            // 1. Aquí unificamos TODOS los keyframes (incluyendo scroll)
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' }
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-in-left': {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                'fade-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                // --- AGREGA ESTOS PARA EL GRADIENTE ---
                moveHorizontal: {
                  "0%": { transform: "translateX(-50%) translateY(-10%)" },
                  "50%": { transform: "translateX(50%) translateY(10%)" },
                  "100%": { transform: "translateX(-50%) translateY(-10%)" },
                },
                moveInCircle: {
                  "0%": { transform: "rotate(0deg)" },
                  "50%": { transform: "rotate(180deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
                moveVertical: {
                  "0%": { transform: "translateY(-50%)" },
                  "50%": { transform: "translateY(50%)" },
                  "100%": { transform: "translateY(-50%)" },
                },
            },
            // 2. Aquí unificamos TODAS las animaciones (incluyendo scroll)
            animation: {
                scroll: 'scroll 40s linear infinite',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
                'fade-in': 'fade-in 0.7s ease-out',
                'fade-in-left': 'fade-in-left 0.7s ease-out',
                'fade-in-right': 'fade-in-right 0.7s ease-out',
            }
        }
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
} satisfies Config;