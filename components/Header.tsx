import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { SubsectionHeadline, BodyText } from "@/components/ui/Typography"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-transparent backdrop-blur-xl border-b border-black/10" style={{ zIndex: 50 }}>
      <div className="page-container py-4 sm:py-6 flex items-center justify-between">
        <SubsectionHeadline className="text-black font-light tracking-wider">Gordonvale Physiotherapy</SubsectionHeadline>
        
        <nav className="hidden md:flex space-x-4 lg:space-x-8">
          <Link href="/" className="text-black/70 hover:text-black transition-all duration-500">
            <BodyText className="font-light tracking-wide uppercase">Home</BodyText>
          </Link>
          <Link href="/about" className="text-black/70 hover:text-black transition-all duration-500">
            <BodyText className="font-light tracking-wide uppercase">Our Team</BodyText>
          </Link>
          <Link href="/services" className="text-black/70 hover:text-black transition-all duration-500">
            <BodyText className="font-light tracking-wide uppercase">Services</BodyText>
          </Link>
          <Link href="/dizzy-clinic" className="text-black/70 hover:text-black transition-all duration-500">
            <BodyText className="font-light tracking-wide uppercase">Dizzy Clinic</BodyText>
          </Link>
          <Link href="/ndis" className="text-black/70 hover:text-black transition-all duration-500">
            <BodyText className="font-light tracking-wide uppercase">NDIS</BodyText>
          </Link>
          <Link href="/products" className="text-black/70 hover:text-black transition-all duration-500">
            <BodyText className="font-light tracking-wide uppercase">Products</BodyText>
          </Link>
          <Link href="/telehealth" className="text-black/70 hover:text-black transition-all duration-500">
            <BodyText className="font-light tracking-wide uppercase">Telehealth</BodyText>
          </Link>
          <Link href="/contact" className="text-black/70 hover:text-black transition-all duration-500">
            <BodyText className="font-light tracking-wide uppercase">Contact</BodyText>
          </Link>
          <Link href="/blog" className="text-black/70 hover:text-black transition-all duration-500">
            <BodyText className="font-light tracking-wide uppercase">Blog</BodyText>
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
              <SheetTitle className="text-left">
                <SubsectionHeadline className="font-light tracking-wider">Menu</SubsectionHeadline>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-6 mt-8">
              <Link href="/" className="text-black/70 hover:text-black transition-all duration-500">
                <BodyText className="font-light tracking-wide uppercase text-xl">Home</BodyText>
              </Link>
              <Link href="/about" className="text-black/70 hover:text-black transition-all duration-500">
                <BodyText className="font-light tracking-wide uppercase text-lg">Our Team</BodyText>
              </Link>
              <Link href="/services" className="text-black/70 hover:text-black transition-all duration-500">
                <BodyText className="font-light tracking-wide uppercase text-lg">Services</BodyText>
              </Link>
              <Link href="/dizzy-clinic" className="text-black/70 hover:text-black transition-all duration-500">
                <BodyText className="font-light tracking-wide uppercase text-lg">Dizzy Clinic</BodyText>
              </Link>
              <Link href="/ndis" className="text-black/70 hover:text-black transition-all duration-500">
                <BodyText className="font-light tracking-wide uppercase text-lg">NDIS</BodyText>
              </Link>
              <Link href="/products" className="text-black/70 hover:text-black transition-all duration-500">
                <BodyText className="font-light tracking-wide uppercase text-lg">Products</BodyText>
              </Link>
              <Link href="/telehealth" className="text-black/70 hover:text-black transition-all duration-500">
                <BodyText className="font-light tracking-wide uppercase text-lg">Telehealth</BodyText>
              </Link>
              <Link href="/contact" className="text-black/70 hover:text-black transition-all duration-500">
                <BodyText className="font-light tracking-wide uppercase text-lg">Contact</BodyText>
              </Link>
              <Link href="/blog" className="text-black/70 hover:text-black transition-all duration-500">
                <BodyText className="font-light tracking-wide uppercase text-lg">Blog</BodyText>
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
