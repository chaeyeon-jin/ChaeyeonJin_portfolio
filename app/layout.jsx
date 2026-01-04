import './globals.css'

export const metadata = {
  title: '진채연의 포트폴리오',
  description: 'Chaeyeon Jin Portfolio',
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

