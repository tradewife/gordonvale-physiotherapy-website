'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "@/components/icons"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { SubsectionHeadline, BodyText } from "@/components/ui/Typography"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'
import { useReducedMotion } from '@/hooks/use-gsap-animations'

export default function AnimatedHeader() {
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { safeAnimate } = useReducedMotion()

  useGSAP(() => {
    safeAnimate(() => {
      // Initial state - slight slide-in, match container translucency
      gsap.set(headerRef.current, { y: -60, opacity: 0 })
      gsap.set([logoRef.current, navRef.current, buttonRef.current], { y: -10, opacity: 0 })

      // Entrance
      const tl = gsap.timeline()
      tl.to(headerRef.current, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' })
        .to([logoRef.current, navRef.current, buttonRef.current], {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out'
        }, '-=0.3')

      // Match the page container transparency with a faint separator line
      const applyStyles = (scrolled: boolean) => {
        gsap.to(headerRef.current, {
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.22)',
          backdropFilter: scrolled ? 'blur(24px)' : 'blur(22px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          duration: 0.25,
          ease: 'power2.out'
        })
      }
      // apply immediately
      applyStyles(false)

      const onScroll = () => applyStyles(window.scrollY > 0)
      window.addEventListener('scroll', onScroll)

      return () => window.removeEventListener('scroll', onScroll)
    })
  }, [])

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 w-full transition-all duration-300 glass-nav border-b border-black/10" 
      style={{ zIndex: 50, backgroundColor: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(22px)' }}
    >
      <div className="page-container py-4 sm:py-6 flex items-center justify-between">
        <div ref={logoRef}>
          <SubsectionHeadline className="text-black font-light tracking-wider">
            Gordonvale Physiotherapy
          </SubsectionHeadline>
        </div>
        
        <nav ref={navRef} className="hidden md:flex items-center justify-center flex-1 max-w-4xl mx-auto">
          <div className="flex items-center justify-evenly w-full">
            <AnimatedNavLink href="/" label="Home" />
            <AnimatedNavLink href="/about" label="Our Team" />
            <AnimatedNavLink href="/services" label="Services" />
            <AnimatedNavLink href="/dizzy-clinic" label="Dizzy Clinic" />
            <AnimatedNavLink href="/ndis" label="NDIS" />
            <AnimatedNavLink href="/products" label="Products" />
            <AnimatedNavLink href="/telehealth" label="Telehealth" />
            <AnimatedNavLink href="/contact" label="Contact" />
            <AnimatedNavLink href="/blog" label="Blog" />
          </div>
        </nav>

        {/* Mobile menu removed per request to avoid extra vertical panel */}
        {/* If you want to restore later, re-add the Sheet with Trigger/Content. */}

        <Button 
          ref={buttonRef}
          className="bg-black text-white hover:bg-black/90 transition-all duration-300 px-6 py-3 sm:px-8 font-medium text-sm tracking-wide hover:scale-105 hover:shadow-lg"
        >
          Book now
        </Button>
      </div>
    </header>
  )
}

interface NavLinkProps {
  href: string
  label: string
}

function AnimatedNavLink({ href, label }: NavLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const { safeAnimate } = useReducedMotion()

  useEffect(() => {
    const link = linkRef.current
    if (!link) return

    safeAnimate(() => {
      const handleMouseEnter = () => {
        gsap.to(link, {
          y: -2,
          duration: 0.2,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        gsap.to(link, {
          y: 0,
          duration: 0.2,
          ease: 'power2.out'
        })
      }

      link.addEventListener('mouseenter', handleMouseEnter)
      link.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        link.removeEventListener('mouseenter', handleMouseEnter)
        link.removeEventListener('mouseleave', handleMouseLeave)
      }
    })
  }, [safeAnimate])

  return (
    <Link 
      ref={linkRef}
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

function AnimatedMobileLink({ href, label }: NavLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const { safeAnimate } = useReducedMotion()

  useEffect(() => {
    const link = linkRef.current
    if (!link) return

    safeAnimate(() => {
      const handleMouseEnter = () => {
        gsap.to(link, {
          x: 10,
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        gsap.to(link, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      link.addEventListener('mouseenter', handleMouseEnter)
      link.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        link.removeEventListener('mouseenter', handleMouseEnter)
        link.removeEventListener('mouseleave', handleMouseLeave)
      }
    })
  }, [safeAnimate])

  return (
    <Link 
      ref={linkRef}
      href={href} 
      className="text-black/70 hover:text-black transition-all duration-500"
    >
      <BodyText className="font-light tracking-wide uppercase text-lg">
        {label}
      </BodyText>
    </Link>
  )
}
