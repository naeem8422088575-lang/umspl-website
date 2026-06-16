/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: 'rgb(var(--ocean-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--ocean-default) / <alpha-value>)',
          dark: 'rgb(var(--ocean-dark) / <alpha-value>)',
        },
        marineGray: {
          light: 'rgb(var(--marine-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--marine-default) / <alpha-value>)',
          dark: 'rgb(var(--marine-dark) / <alpha-value>)',
        }
      },
    },
  },
  plugins: [],
}