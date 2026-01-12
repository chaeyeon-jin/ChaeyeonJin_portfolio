import './globals.css'
import SmoothScroll from '../src/components/SmoothScroll'

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
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}

