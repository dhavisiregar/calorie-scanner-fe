/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#34d399",
          "green-dark": "#059669",
          blue: "#60a5fa",
          amber: "#f59e0b",
          red: "#f87171",
        },
        surface: {
          base: "#0a0a0f",
          card: "#111116",
          elevated: "#18181f",
        },
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.15", transform: "scale(1)" },
          "50%":       { opacity: "0.25", transform: "scale(1.04)" },
        },
        spinRing: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up":    "fadeUp 0.5s ease both",
        "fade-up-1":  "fadeUp 0.5s ease 0.1s both",
        "fade-up-15": "fadeUp 0.5s ease 0.15s both",
        "fade-up-2":  "fadeUp 0.5s ease 0.2s both",
        "fade-up-25": "fadeUp 0.5s ease 0.25s both",
        "fade-up-3":  "fadeUp 0.5s ease 0.3s both",
        "fade-up-35": "fadeUp 0.5s ease 0.35s both",
        "fade-up-4":  "fadeUp 0.5s ease 0.4s both",
        "fade-up-6":  "fadeUp 0.6s ease both",
        "pulse-slow":  "pulseSlow 8s ease-in-out infinite",
        "pulse-slow-d":"pulseSlow 10s ease-in-out 2s infinite",
      },
      backgroundImage: {
        "glow-green": "radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)",
        "glow-blue":  "radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%)",
        "btn-primary": "linear-gradient(135deg, #34d399, #059669)",
      },
    },
  },
  plugins: [],
};
