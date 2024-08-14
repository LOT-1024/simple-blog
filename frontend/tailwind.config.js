/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueDark: '#1E293B',
        slateLight: '#64748B',
        grayLight:'#E2E8F0'
      }
    },
  },
  plugins: [],
}