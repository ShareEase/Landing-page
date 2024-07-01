/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // presets: [require("nativewind/preset")],
  // theme: {
  //   extend: {},
  // },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "900px",
      },
    },

    fontFamily: {
      sans: ["var(--font-halvatica)"],
    },

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        textlight: "var(--text-light)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          100: "#FFBF67",
          200: "#FFAA34",
          300: "hsl(var(--primary))",
          400: "#CC7701",
          500: "#995901",
          600: "#663C00",
          700: "#4D2D00",
          800: "#331E00",
          900: "#1A0F00",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#FF9501",
          0: "#FFFFFF",
          0.5: "#FFF4E6",
          1: "#FFEACC",
          1.5: "#FFDFB3",
          2: "#FFD599",
          3: "#FFBF67",
          4: "#FFAA34",
          5: "#FF9501",
          6: "#CC7701",
          7: "#995901",
          8: "#663C00",
          8.5: "#4D2D00",
          9: "#331E00",
          9.5: "#1A0F00",
          10: "#000000",
        },
        blue: "hsl(var(--blue))",
        success: "hsl(var(--success))",
        gray: { DEFAULT: "hsl(var(--gray))", 500: "#1E1E1E" },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      //   2xl: ""
      // },
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
};
