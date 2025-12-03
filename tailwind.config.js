/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EAFF71',
        'lime': '#EAFF71', // 호환성을 위해 유지
        'bg-cream': '#FEFFF5',
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
        'instrument-serif': ['Instrument Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

