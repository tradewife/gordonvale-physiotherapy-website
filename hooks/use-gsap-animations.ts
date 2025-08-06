'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, RefObject } from 'react'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export interface AnimationOptions {
  duration?: number
  delay?: number
  ease?: string
  stagger?: number
}

export function useGSAPAnimations() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Fade in animation from bottom
  const fadeInUp = (
    selector: string | Element | RefObject<Element>,
    options: AnimationOptions = {}
  ) => {
    const {
      duration = 1,
      delay = 0,
      ease = 'power2.out',
      stagger = 0.1
    } = options

    return gsap.fromTo(
      selector,
      {
        y: 60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        stagger,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Fade in animation from left
  const fadeInLeft = (
    selector: string | Element | RefObject<Element>,
    options: AnimationOptions = {}
  ) => {
    const {
      duration = 1,
      delay = 0,
      ease = 'power2.out'
    } = options

    return gsap.fromTo(
      selector,
      {
        x: -60,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Fade in animation from right
  const fadeInRight = (
    selector: string | Element | RefObject<Element>,
    options: AnimationOptions = {}
  ) => {
    const {
      duration = 1,
      delay = 0,
      ease = 'power2.out'
    } = options

    return gsap.fromTo(
      selector,
      {
        x: 60,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Scale in animation
  const scaleIn = (
    selector: string | Element | RefObject<Element>,
    options: AnimationOptions = {}
  ) => {
    const {
      duration = 0.8,
      delay = 0,
      ease = 'back.out(1.7)',
      stagger = 0.1
    } = options

    return gsap.fromTo(
      selector,
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration,
        delay,
        ease,
        stagger,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Staggered reveal animation for cards
  const staggerReveal = (
    selector: string | Element | RefObject<Element>,
    options: AnimationOptions = {}
  ) => {
    const {
      duration = 1.2,
      delay = 0,
      ease = 'power2.out',
      stagger = 0.2
    } = options

    return gsap.fromTo(
      selector,
      {
        y: 80,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease,
        stagger,
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Hero entrance animation
  const heroEntrance = (
    titleSelector: string | Element | RefObject<Element>,
    subtitleSelector: string | Element | RefObject<Element>,
    buttonSelector: string | Element | RefObject<Element>
  ) => {
    const tl = gsap.timeline()

    tl.fromTo(
      titleSelector,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out'
      }
    )
    .fromTo(
      subtitleSelector,
      {
        y: 60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      },
      '-=0.8'
    )
    .fromTo(
      buttonSelector,
      {
        y: 40,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)'
      },
      '-=0.6'
    )

    return tl
  }

  // Hover animation for interactive elements
  const createHoverAnimation = (
    element: Element,
    options: {
      scale?: number
      duration?: number
      ease?: string
    } = {}
  ) => {
    const { scale = 1.05, duration = 0.3, ease = 'power2.out' } = options

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale,
        duration,
        ease
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration,
        ease
      })
    }

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    // Return cleanup function
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }

  // Parallax effect for background elements
  const createParallax = (
    selector: string | Element | RefObject<Element>,
    speed: number = 0.5
  ) => {
    return gsap.to(selector, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: selector,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  }

  // Loading animation
  const createLoadingAnimation = () => {
    const tl = gsap.timeline()
    
    // Create a loading overlay
    const overlay = document.createElement('div')
    overlay.className = 'fixed inset-0 bg-white z-[100] flex items-center justify-center'
    overlay.innerHTML = `
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-black/20 border-t-black rounded-full animate-spin mb-4"></div>
        <p class="text-black/70 font-light tracking-wide">Loading...</p>
      </div>
    `
    document.body.appendChild(overlay)

    // Animate out the loading screen
    tl.to(overlay, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      delay: 1,
      onComplete: () => {
        document.body.removeChild(overlay)
      }
    })

    return tl
  }

  return {
    containerRef,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerReveal,
    heroEntrance,
    createHoverAnimation,
    createParallax,
    createLoadingAnimation
  }
}

// Utility function to respect reduced motion preferences
export function respectsReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Custom hook for reduced motion
export function useReducedMotion() {
  const { contextSafe } = useGSAP()

  const safeAnimate = contextSafe((animationFn: () => void) => {
    if (!respectsReducedMotion()) {
      animationFn()
    }
  })

  return { safeAnimate, respectsReducedMotion: respectsReducedMotion() }
}
