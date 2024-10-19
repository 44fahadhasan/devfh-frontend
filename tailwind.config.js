/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
      },
    },
  },
  plugins: [],
};
