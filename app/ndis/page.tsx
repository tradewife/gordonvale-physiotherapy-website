'use client'

import React, { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  HeroHeadline,
  SectionHeadline,
  CardHeadline,
  BodyText,
  LargeBodyText
} from "@/components/ui/Typography"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useGSAPAnimations, useReducedMotion } from "@/hooks/use-gsap-animations"

export default function NDISPage() {
  const heroRef = useRef<HTMLElement>(null)
  const heroTitleRef = useRef<HTMLDivElement>(null)
  const heroSubtitleRef = useRef<HTMLDivElement>(null)

  const { fadeInUp, staggerReveal } = useGSAPAnimations()
  const { safeAnimate } = useReducedMotion()

  useGSAP(() => {
    safeAnimate(() => {
      // Initially hide section headings to prevent global animations from showing them
      gsap.set('.ndis-section-heading', { opacity: 0, y: 40 })

      // Create a timeline for proper three-stage staggered sequence
      const tl = gsap.timeline()

      // Stage 1: Main heading appears first
      if (heroTitleRef.current) {
        tl.fromTo(heroTitleRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
        )
      }

      // Stage 2: Subtitle appears after main heading completes
      if (heroSubtitleRef.current) {
        tl.fromTo(heroSubtitleRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
          '+=0.3'  // Start 0.3s AFTER main heading finishes
        )
      }

      // Stage 3: Section headings appear after subtitle completes
      tl.fromTo('.ndis-section-heading',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '+=0.3'  // Start 0.3s AFTER subtitle finishes
      )

      // Then animate treatment/program cards shortly after section headings
      staggerReveal('.ndis-card', { duration: 1, stagger: 0.15, delay: 0.5 })
      // Fade in other sections
      fadeInUp('section.section-spacing', { duration: 0.9 })
    })
  }, [])

  return (
    <div className="min-h-screen bg-transparent relative">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0 page-bg-effect">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container">
          <div className="hero-content">
            <div ref={heroTitleRef}>
              <HeroHeadline className="hero-text-spacing text-black text-balance">
                NDIS <span className="font-normal">Services</span>
              </HeroHeadline>
            </div>
            <div ref={heroSubtitleRef}>
              <LargeBodyText className="text-black/70 body-text-spacing max-w-2xl text-pretty">
                As a registered NDIS provider, we have experienced staff with in-depth knowledge
                in NDIS plan reading and implementation. We work closely with participants to
                help them achieve their nominated goals through evidence-based physiotherapy interventions.
              </LargeBodyText>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/4 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container">

            {/* Treatment Options */}
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-12 sm:mb-16 text-black ndis-section-heading">
              Treatment Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 content-spacing">
              
              <Card className="ndis-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Pain &amp; Movement Management
                  </CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    Comprehensive pain management and movement optimization strategies.
                  </LargeBodyText>
                </CardContent>
              </Card>

              <Card className="ndis-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Post Surgery Rehabilitation
                  </CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    Targeted rehabilitation programs following surgical procedures.
                  </LargeBodyText>
                </CardContent>
              </Card>

              <Card className="ndis-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Balance and Falls Prevention
                  </CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    Targeted programs to improve balance and reduce fall risk.
                  </LargeBodyText>
                </CardContent>
              </Card>

              <Card className="ndis-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Strength and Conditioning
                  </CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    Progressive strength training and conditioning programs.
                  </LargeBodyText>
                </CardContent>
              </Card>

              <Card className="ndis-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Education and Advice
                  </CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    Comprehensive education and self-management strategies.
                  </LargeBodyText>
                </CardContent>
              </Card>

              <Card className="ndis-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Equipment Supply
                  </CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    Assessment and provision of appropriate mobility equipment.
                  </LargeBodyText>
                </CardContent>
              </Card>

            </div>

            {/* Program Types */}
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-12 sm:mb-16 text-black mt-24 sm:mt-32 md:mt-40">
              Program Types
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 content-spacing">
              
              <Card className="ndis-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Clinic-Based Programs
                  </CardHeadline>
                  <ul className="text-gray-700 space-y-4">
                    <li><LargeBodyText className="text-gray-700">• Therapeutic Treatments</LargeBodyText></li>
                    <li><LargeBodyText className="text-gray-700">• Gymnasium programs with accessible equipment</LargeBodyText></li>
                    <li><LargeBodyText className="text-gray-700">• Rehabilitation programs</LargeBodyText></li>
                    <li><LargeBodyText className="text-gray-700">• Exercise physiotherapy</LargeBodyText></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Community-Based Programs
                  </CardHeadline>
                  <ul className="text-gray-700 space-y-4">
                    <li><LargeBodyText className="text-gray-700">• In home physiotherapy</LargeBodyText></li>
                    <li><LargeBodyText className="text-gray-700">• Hydrotherapy programs</LargeBodyText></li>
                    <li><LargeBodyText className="text-gray-700">• Community access support</LargeBodyText></li>
                    <li><LargeBodyText className="text-gray-700">• Mobile equipment assessment</LargeBodyText></li>
                  </ul>
                </CardContent>
              </Card>

            </div>

            <div className="space-y-8 text-black/70 text-content content-spacing mt-24 sm:mt-32 md:mt-40">
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-black mb-12 sm:mb-16">
                Accessible Gymnasium Equipment
              </h2>
              <LargeBodyText>
                Our clinic features accessible gymnasium equipment designed to accommodate 
                participants of all abilities and mobility levels. This includes accessible 
                exercise machines, parallel bars, mat areas, and adaptive equipment.
              </LargeBodyText>
              <LargeBodyText>
                All equipment is regularly maintained and our staff are trained in safe 
                operation and modification techniques to ensure every participant can 
                access appropriate exercise opportunities.
              </LargeBodyText>
            </div>
          
        </div>
      </section>
    </div>
  )
}
