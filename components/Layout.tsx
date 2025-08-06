import Link from "next/link"
import { Button } from "@/components/ui/button"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  console.log('Layout component rendering with BackgroundAnimation...')
  return (
    <div className="min-h-screen bg-white relative">
      <div className="fixed top-4 right-4 w-8 h-8 bg-blue-500 rounded-full" style={{ zIndex: 9999 }}>
        LAYOUT
      </div>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl border-b border-black/10 relative">
        <div className="page-container py-4 sm:py-6 flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-light text-black tracking-wider">
            Gordonvale Physiotherapy
          </Link>
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <Link
              href="/"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Our Team
            </Link>
            <Link
              href="/services"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Services
            </Link>
            <Link
              href="/dizzy-clinic"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Dizzy Clinic
            </Link>
            <Link
              href="/ndis"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              NDIS
            </Link>
            <Link
              href="/products"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Products
            </Link>
            <Link
              href="/telehealth"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Telehealth
            </Link>
            <Link
              href="/contact"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Blog
            </Link>
          </nav>
          <Button className="bg-black text-white hover:bg-black/90 transition-all duration-300 px-6 py-2 sm:px-8 sm:py-3 font-medium text-sm tracking-wide">
            Book now
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <footer className="bg-transparent text-black section-spacing border-t border-black/10 relative z-10">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="page-container">
          <div className="content-wrapper">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
            <div>
              <h4 className="font-light mb-8 text-black text-xl tracking-wide">Contact</h4>
              <p className="text-black/60 leading-relaxed text-sm font-light">
                Shop 8C, Bryce&apos;s Arcade
                <br />
                58 Norman St, Gordonvale
                <br />
                Queensland 4865
                <br />
                Phone: 0401 942 903
                <br />
                Email: reception@gordonvalephysiotherapy.com
              </p>
            </div>
            <div>
              <h4 className="font-light mb-8 text-black text-xl tracking-wide">Services</h4>
              <ul className="text-black/60 space-y-4 text-sm font-light">
                <li className="hover:text-black transition-colors duration-500 cursor-pointer">
                  Pain &amp; Movement Management
                </li>
                <li className="hover:text-black transition-colors duration-500 cursor-pointer">
                  Aquatic Physiotherapy
                </li>
                <li className="hover:text-black transition-colors duration-500 cursor-pointer">
                  Running Rehabilitation
                </li>
                <li className="hover:text-black transition-colors duration-500 cursor-pointer">
                  Women&apos;s Health
                </li>
                <li className="hover:text-black transition-colors duration-500 cursor-pointer">
                  NDIS Services
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-8 text-black text-xl tracking-wide">Hours</h4>
              <p className="text-black/60 leading-relaxed text-sm font-light">
                Monday - Friday: 9:00am - 5:00pm
                <br />
                After hours appointments by arrangement
                <br />
                Closed Public Holidays
              </p>
            </div>
            <div>
              <h4 className="font-light mb-8 text-black text-xl tracking-wide">Follow Us</h4>
              <p className="text-black/60 leading-relaxed text-sm font-light">
                <a 
                  href="https://facebook.com/helencooper000/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors duration-500"
                >
                  Facebook
                </a>
              </p>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}