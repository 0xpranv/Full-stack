import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        yellow: {
          "50": "#FFFAEB",
          "100": "#FFF5D6",
          "200": "#FFECB3",
          "300": "#FFE28A",
          "400": "#FFD761",
          "500": "#FFCE3C",
          "600": "#FABB00",
          "700": "#BD8E00",
          "800": "#806000",
          "900": "#3D2E00",
          "950": "#1F1700",
        },
        orange: {
          50: "#FFF5E5",
          100: "#FFEDD1",
          200: "#FFDAA3",
          300: "#FFC875",
          400: "#FFB647",
          500: "#FFA319",
          600: "#E08700",
          700: "#A86500",
          800: "#704300",
          900: "#382200",
          950: "#190F00",
        },
        teal: {
          50: "#F0FAFA",
          100: "#E0F5F5",
          200: "#C2EBEB",
          300: "#A3E0E0",
          400: "#85D6D6",
          500: "#66CCCC",
          600: "#3DB8B8",
          700: "#2E8A8A",
          800: "#1F5C5C",
          900: "#0F2E2E",
          950: "#081717",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#EE772F",
        secondary: "#9984D4",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
