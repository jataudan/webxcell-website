/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta": ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "dotted-blue":
          "repeating-linear-gradient(to right, #3B82F6 0, #3B82F6 2px, transparent 2px, transparent 4px)",
      },
      backgroundColor: {
        "custom-gray": "rgba(70, 70, 70, 1)", // Convert 255 to 1 for valid RGBA
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
        "slide-in-top": "slide-in-top 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
