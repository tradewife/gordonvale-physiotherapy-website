import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-black/10" style={{ zIndex: 50 }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-light text-black tracking-wider">Gordonvale Physiotherapy</div>
        
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

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px] md:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left font-light text-xl tracking-wider">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-6 mt-8">
              <Link
                href="/"
                className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
              >
                Our Team
              </Link>
              <Link
                href="/services"
                className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
              >
                Services
              </Link>
              <Link
                href="/dizzy-clinic"
                className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
              >
                Dizzy Clinic
              </Link>
              <Link
                href="/ndis"
                className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
              >
                NDIS
              </Link>
              <Link
                href="/products"
                className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
              >
                Products
              </Link>
              <Link
                href="/telehealth"
                className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
              >
                Telehealth
              </Link>
              <Link
                href="/contact"
                className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
              >
                Blog
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Button className="bg-black text-white hover:bg-black/90 transition-all duration-300 px-6 py-3 sm:px-8 font-medium text-sm tracking-wide">
          Book now
        </Button>
      </div>
    </header>
  )
}
