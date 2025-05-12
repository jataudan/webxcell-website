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
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        custom: "0px 4px 40px rgba(99, 90, 217, 0.07)",
      },
      backgroundImage: {
        "dotted-blue":
          "repeating-linear-gradient(to right, #3B82F6 0, #3B82F6 2px, transparent 2px, transparent 4px)",
        "custom-gradient": "linear-gradient(180deg, #ffffff80 0%, #ff6700 85%)",
        "mix-gradient": "linear-gradient(180deg, #D77C42, #B76735, #323332)",
        "orange-gradient": "linear-gradient(90deg, #D77C42, #B76735, #323332)",
        "portfolio-gradient": "linear-gradient(#635AD9, #219BE4)",
        "portfolio-custome-gradient":
          "linear-gradient(180deg, rgba(99,90,217,100), rgba(97,140,239,43), rgba(96,178,255,0.36))",
      },
      backgroundColor: {
        "custom-gray": "rgba(70, 70, 70, 1)",
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
      screens: {
        "2xl-custom": "1400px",
        "custom-font": "1450px",
      },
    },
  },
  plugins: [],
};
