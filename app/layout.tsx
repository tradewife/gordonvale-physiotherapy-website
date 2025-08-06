import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'
import '../styles/glass.css'
import AnimatedHeader from '@/components/AnimatedHeader'
import GlobalAnimations from '@/components/GlobalAnimations'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

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
    <html lang="en" className={`${instrumentSans.variable} ${instrumentSerif.variable}`}>
      <body className="relative min-h-screen">
        <GlobalAnimations>
          <div className="relative" style={{ zIndex: 50 }}>
            <AnimatedHeader />
            <main className="pt-20">{children}</main>
          </div>
        </GlobalAnimations>
      </body>
    </html>
  )
}
