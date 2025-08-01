import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import './globals.css'
import '../styles/glass.css'
import Header from '@/components/Header'
import BackgroundAnimation from '@/components/BackgroundAnimation'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-instrument-serif'
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`relative min-h-screen ${instrumentSerif.variable}`}>
        <BackgroundAnimation />
        <div className="relative" style={{ zIndex: 50 }}>
          <Header />
          <main className="pt-20">{children}</main>
        </div>
      </body>
    </html>
  )
}
