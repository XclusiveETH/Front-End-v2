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
        su_overlay_bg: "rgba(13, 13, 35, 0.8)",
        su_least_bg: "rgba(46, 46, 65, 1)",
        su_secondary_bg: "rgba(37, 37, 57, 1)",
        su_blue: "#51C0FF",
        su_purple: "#9452FF",
        su_primary: "rgba(255, 255, 255, 1)",
        su_secondary: "rgba(182, 182, 189, 1)",
        su_ternary: "rgba(134, 134, 145, 1)",
        su_disabled: "rgba(86, 86, 101, 1)",
        su_button_disabled: "rgb(49, 49, 68)",
        su_positive: "rgba(117, 255, 193, 1)",
        su_positive_week: "rgba(117, 255, 193, 0.3)",
        su_positive_bg: "rgb(28, 49, 59)",
        su_negative: "rgba(255, 117, 133, 1)",
        su_negative_week: "rgba(255, 117, 133, 0.3)",
        su_negative_bg: "rgb(49, 28, 50)",
        su_info: "rgba(117, 225, 255, 1)",
        su_info_week: "rgba(117, 225, 255, 0.3)",
        su_info_bg: "rgb(28, 44, 68)",
        su_warning: "rgba(255, 193, 117, 1)",
        su_warning_week: "rgba(255, 193, 117, 0.3)",
        su_warning_bg: "rgb(49, 39, 47)",
        su_brand: "rgba(117, 134, 255, 1)"
      },
      backgroundImage: (theme) => ({
        "gradient-primary": `linear-gradient(to right, ${theme(
          "colors.su_purple"
        )}, ${theme("colors.su_blue")})`
      }),
      borderRadius: {
        lg: "var(--radius)",
        md: "16px",
        sm: "12px",
        xs: "8px"
      },
      fontSize: {
        '2xs': '10px',
        '3xs': '8px',
        '4xs': '6px',
        "1.5xl": '22px'
      },
      width: {
        '4.5': "18px"
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
      screens: {
        '3xl': '1680px',
        '4xl': '1780px',
        '5xl': '1920px',
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