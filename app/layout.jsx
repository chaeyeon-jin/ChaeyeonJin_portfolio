import './globals.css'
import { Urbanist, Instrument_Serif } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
})

export const metadata = {
  title: '진채연의 포트폴리오',
  description: 'Chaeyeon Jin Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${urbanist.variable} ${instrumentSerif.variable} font-urbanist`}>
        {children}
      </body>
    </html>
  )
}

