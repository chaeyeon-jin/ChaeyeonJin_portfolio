/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./app/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "variable-collection-background":
          "var(--variable-collection-background)",
        "variable-collection-black": "var(--variable-collection-black)",
        "variable-collection-grey300": "var(--variable-collection-grey300)",
        "variable-collection-white": "var(--variable-collection-white)",
        "variable-collection-yellow": "var(--variable-collection-yellow)",
      },
      fontFamily: {
        'nohemi': ['Nohemi', 'Helvetica', 'sans-serif'],
        'mango-grotesque': ['Mango Grotesque', 'Helvetica', 'sans-serif'],
      },
      gridTemplateColumns: {
        '6': 'repeat(6, minmax(0, 1fr))',
      },
      spacing: {
        'grid-row': '80px', // 그리드 행 높이 (Margin)
        'grid-gutter': '20px', // 그리드 칼럼 간격 (Gutter)
        'grid-margin': '80px', // 그리드 좌우 마진
      },
      gap: {
        'grid': '20px', // 그리드 기본 간격
      },
    },
  },
  plugins: [],
};

