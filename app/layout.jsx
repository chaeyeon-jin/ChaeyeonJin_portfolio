import './globals.css'

export const metadata = {
  title: "chaeyeonjin's portfolio",
  description: 'Chaeyeon Jin Portfolio',
  icons: {
    icon: '/SVG/Star.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="font-nohemi">
        {children}
      </body>
    </html>
  )
}

