/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black':'#231737',
      'white':'#ffffff',
      'gray': {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
      },
      'indigo': {
        light: '#7e6d9b',
        DEFAULT: '#472f70',
        dark: '#352354',
        50: '#f6f5f8', 
        100: '#edeaf1', 
        200: '#d1cbdb', 
        300: '#b5acc6', 
        400: '#7e6d9b', 
        500: '#472f70', 
        600: '#402a65', 
        700: '#352354', 
        800: '#2b1c43', 
        900: '#231737',
      }, 
    },
    extend: {},
  },
  plugins: [],
}
