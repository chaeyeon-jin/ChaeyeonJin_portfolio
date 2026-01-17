import './globals.css'
import SmoothScroll from '../src/components/SmoothScroll'
import Script from 'next/script'

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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BM3XP6WN5S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BM3XP6WN5S');
          `}
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}

