/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
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
        su_primary_bg: "rgba(13, 13, 35, 1)",
        su_active_bg: "rgba(255, 255, 255, 0.15)",
        su_enable_bg: "rgba(255, 255, 255, 0.08)",
        su_least_bg: "rgba(46, 46, 65, 1)",
        su_secondary_bg: "rgba(37, 37, 57, 1)",
        su_blue: "#51C0FF",
        su_purple: "#9452FF",
        su_positive: "rgba(117, 255, 193, 1)",
        su_secondary: "rgba(182, 182, 189, 1)",
      },
      backgroundImage: (theme) => ({
        "gradient-primary": `linear-gradient(to right, ${theme(
          "colors.su_purple"
        )}, ${theme("colors.su_blue")})`
      }),
      borderRadius: {
        lg: "var(--radius)",
        md: "16px",
        sm: "8px",
      },
      fontSize: {
        '2xs': '10px',
        '3xs': '8px'
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
    fontFamily: {
      "Urbanist": ['Urbanist', 'sans-serif'],
      "Poppins": ['Poppins', 'sans-serif'],
    }
  },
  plugins: [require("tailwindcss-animate")],
};


// background: linear-gradient(255.29deg, #51C0FF 3.95%, #9452FF 93.55%);