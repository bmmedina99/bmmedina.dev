/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Orbitron', 'sans-serif'],
        content: ['Onest', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
