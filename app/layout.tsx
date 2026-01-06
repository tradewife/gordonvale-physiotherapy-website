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
  title: 'Gordonvale Physiotherapy Clinic',
  description: 'Trusted physiotherapy, rehabilitation, and wellness services for the Gordonvale community.',
  generator: 'Gordonvale Physiotherapy Website',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.png',
  },
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
