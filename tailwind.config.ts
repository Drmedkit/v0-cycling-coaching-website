import type { Config } from "tailwindcss"

const config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", xl: "3rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        ink: "#18313b",
        paper: "#f4f2ec",
        cream: "#e9e4d8",
        teal: "#176f72",
        "teal-dark": "#0e4d50",
        mist: "#dbe7e3",
        sun: "#d7b66c"
      },
      borderRadius: { lg: "1.75rem", md: "1rem", sm: ".65rem" },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"]
      },
      maxWidth: { reading: "72ch" }
    }
  },
  plugins: []
} satisfies Config

export default config
