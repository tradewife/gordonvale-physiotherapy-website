import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

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
      <body className="relative min-h-screen">
        <div className="relative" style={{ zIndex: 50 }}>
          <Header />
          <main className="pt-20">{children}</main>
        </div>
      </body>
    </html>
  )
}
