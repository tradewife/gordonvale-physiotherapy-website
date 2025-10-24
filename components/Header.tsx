"use client"

import Link from "next/link"
import { CallButton } from "@/components/CallButton"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "@/components/icons"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { SubsectionHeadline, BodyText } from "@/components/ui/Typography"
import { SITE_EMAIL } from "@/lib/constants"

export default function Header() {
  return (
    <header className="fixed top-0 w-full glass-nav" style={{ zIndex: 50 }}>
      <div className="page-container py-4 sm:py-6 flex items-center justify-between">
        <SubsectionHeadline className="text-black font-light tracking-wider">Gordonvale Physiotherapy</SubsectionHeadline>
        
        <nav className="hidden md:flex items-center justify-center flex-1 max-w-4xl mx-auto">
          <div className="flex items-center justify-evenly w-full">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="Our Team" />
            <NavLink href="/services" label="Services" />
            <NavLink href="/dizzy-clinic" label="Dizzy Clinic" />
            <NavLink href="/ndis" label="NDIS" />
            <NavLink href="/products" label="Products" />
            <NavLink href="/telehealth" label="Telehealth" />
            <NavLink href="/contact" label="Contact" />
            <NavLink href="/blog" label="Blog" />
          </div>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon width={24} height={24} color="currentColor" />
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

        <div className="flex items-center gap-2">
          <CallButton className="bg-black text-white hover:bg-black/90 transition-all duration-300 px-4 py-3 sm:px-5 font-medium text-sm tracking-wide">
            Call
          </CallButton>
          <Button asChild variant="outline" className="border-black/20 text-black hover:bg-black/5 transition-all duration-300 px-4 py-3 sm:px-5 font-medium text-sm tracking-wide">
            <a href={`mailto:${SITE_EMAIL}`} aria-label="Email reception">Email</a>
          </Button>
        </div>
      </div>
    </header>
  )
}

interface NavLinkProps {
  href: string
  label: string
}

function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className="group relative px-3 py-2 transition-all duration-300"
    >
      <span className="text-black/70 group-hover:text-black transition-colors duration-300 text-sm font-light tracking-wide uppercase">
        {label}
      </span>
      
      {/* Animated horizontal bar */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  )
}
