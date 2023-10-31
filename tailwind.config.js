/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: ["./index.html", "/src/**/*.{js,ts,tsx,tsx}"],
  },
  plugins: [require("daisyui")],
}

