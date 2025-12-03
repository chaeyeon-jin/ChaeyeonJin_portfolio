/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EAFF71',
        'lime': '#EAFF71', // 호환성을 위해 유지
        'bg-cream': '#FEFFF5',
      },
      fontFamily: {
        'urbanist': ['var(--font-urbanist)', 'sans-serif'],
        'instrument-serif': ['var(--font-instrument-serif)', 'serif'],
      },
    },
  },
  plugins: [],
}

