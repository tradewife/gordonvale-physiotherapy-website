'use client'

import { ReactNode, useEffect, useState } from 'react'
import BackgroundAnimation from '@/components/BackgroundAnimation'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/use-gsap-animations'

// Ensure GSAP plugins on client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * GlobalAnimations
 * - Mounts site-wide background ambient animation layer
 * - Adds gentle page-enter animation for any page content
 * - Provides basic scroll/hover class-based hooks that other pages can opt into
 */
export default function GlobalAnimations({ children }: { children: ReactNode }) {
  const { safeAnimate } = useReducedMotion()
  const [bgReady, setBgReady] = useState(false)

  // Page enter + scroll animations for all pages
  useEffect(() => {
    if (!bgReady) {
      return
    }

    const cleanupFns: Array<() => void> = []

    // Entrance animation for visible content
    safeAnimate(() => {
      const candidates = document.querySelectorAll<HTMLElement>(
        // include common content containers and typography components
        'main, section, article, .page-container, .glass-card, .card, [data-animate], h1, h2, h3, p, ul, li, .animated-button'
      )

      const anim = gsap.fromTo(
        candidates,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.02,
          overwrite: true,
        }
      )
      cleanupFns.push(() => anim.kill())
    })

    // Scroll-trigger fade-up on sections
    safeAnimate(() => {
      const sections = gsap.utils.toArray<HTMLElement>('section, article, .glass-card, .card')
      sections.forEach((el) => {
        const tween = gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
        cleanupFns.push(() => tween.kill())
      })
    })

    // Headline reveal
    safeAnimate(() => {
      const headlines = gsap.utils.toArray<HTMLElement>('h1, h2, .section-headline')
      headlines.forEach((el) => {
        const tween = gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
        cleanupFns.push(() => tween.kill())
      })
    })

    // Subtle parallax hooks (opt-in via class names)
    safeAnimate(() => {
      const effectClasses = [
        '.hero-bg-effect',
        '.services-bg-effect',
        '.experts-bg-effect',
        '.page-bg-effect',
        '.bg-effect'
      ]
      effectClasses.forEach((cls) => {
        const tween = gsap.to(cls, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: cls,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
        cleanupFns.push(() => tween.kill())
      })
    })

    return () => {
      cleanupFns.forEach((fn) => fn())
    }
  }, [safeAnimate, bgReady])

  useEffect(() => {
    if (typeof document !== 'undefined' && document.documentElement.dataset.bgReady === 'true') {
      setBgReady(true)
      return
    }

    const handleReady = () => setBgReady(true)
    window.addEventListener('background-ready', handleReady)
    const timeoutId = window.setTimeout(() => setBgReady(true), 2500)

    return () => {
      window.removeEventListener('background-ready', handleReady)
      window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Ambient background animation across the whole site */}
      <BackgroundAnimation />

      {/* Foreground application content */}
      <div
        className={`relative z-50 transition-opacity duration-700 ease-out ${
          bgReady ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
