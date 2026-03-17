/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      brand: "#10b981",
      background: "#020617",
      card: "#0f172a",
      border: "#1e293b",
      text: "#e2e8f0"
}
    },
  },
  plugins: [],
}
