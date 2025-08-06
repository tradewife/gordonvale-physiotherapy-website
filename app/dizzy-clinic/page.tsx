'use client'

import React, { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  HeroHeadline,
  SectionHeadline,
  LargeBodyText
} from "@/components/ui/Typography"
import { useGSAP } from "@gsap/react"
import { useGSAPAnimations, useReducedMotion } from "@/hooks/use-gsap-animations"

export default function DizzyClinicPage() {
  const heroRef = useRef<HTMLElement>(null)
  const heroTitleRef = useRef<HTMLDivElement>(null)
  const heroSubtitleRef = useRef<HTMLDivElement>(null)

  const { fadeInUp, staggerReveal, heroEntrance } = useGSAPAnimations()
  const { safeAnimate } = useReducedMotion()

  useGSAP(() => {
    safeAnimate(() => {
      if (heroTitleRef.current && heroSubtitleRef.current) {
        heroEntrance(heroTitleRef.current, heroSubtitleRef.current, heroSubtitleRef.current)
      }
      staggerReveal('.dizzy-card', { duration: 1, stagger: 0.15 })
      fadeInUp('section.section-spacing', { duration: 0.9 })
    })
  }, [])

  return (
    <div className="min-h-screen bg-transparent relative">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-spacing relative">
        <div className="absolute inset-0 page-bg-effect pointer-events-none" />
        <div className="page-container">
          <div className="hero-content">
            <div ref={heroTitleRef}>
              <HeroHeadline className="hero-text-spacing text-black text-balance">
                Dizzy <span className="font-normal">Clinic</span>
              </HeroHeadline>
            </div>
            <div ref={heroSubtitleRef}>
              <LargeBodyText className="text-black/70 body-text-spacing max-w-2xl text-pretty">
                Specialized treatment and rehabilitation for dizziness, vertigo and balance disorders.
              </LargeBodyText>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing relative">
        <div className="page-container">
          <div className="space-y-8 text-black/70 text-content mb-12 sm:mb-16 md:mb-20">
              <LargeBodyText>
                Our Dizzy Clinic provides thorough assessment and treatment for patients experiencing 
                dizziness, vertigo, and balance disorders. We use evidence-based techniques to determine 
                the underlying causes and develop targeted treatment plans.
              </LargeBodyText>
              <LargeBodyText>
                Through comprehensive evaluation and specialized interventions, we help patients regain 
                confidence in their balance and reduce symptoms that impact daily activities.
              </LargeBodyText>
            </div>

            {/* Treatment Approaches */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
              
              {/* Habituation Exercises */}
              <Card className="dizzy-card glass-card transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-0 mb-0"></div>
                  <SectionHeadline className="mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Habituation Exercises
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700">
                    Specialized exercises designed to help your vestibular system adapt and reduce 
                    sensitivity to movements that trigger dizziness symptoms.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Eye-Head Coordination */}
              <Card className="dizzy-card glass-card transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-0 mb-0"></div>
                  <SectionHeadline className="mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Eye Head Coordination Exercises
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700">
                    Targeted exercises to improve focus and visual stability during head movements, 
                    helping to reduce dizziness and improve overall balance function.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Balance Training */}
              <Card className="dizzy-card glass-card transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-0 mb-0"></div>
                  <SectionHeadline className="mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Balance and Gait Exercises
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700">
                    Progressive balance training and gait exercises designed to build confidence 
                    and improve stability in various environments and situations.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* BPPV Treatment */}
              <Card className="dizzy-card glass-card transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-0 mb-0"></div>
                  <SectionHeadline className="mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Repositioning Techniques for BPPV
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700">
                    Specialized repositioning techniques including the Epley manoeuvre for treating 
                    Benign Paroxysmal Positional Vertigo (BPPV) and related conditions.
                  </LargeBodyText>
                </CardContent>
              </Card>

            </div>

            <div className="space-y-8 text-black/70 text-content">
              <SectionHeadline className="text-black mb-6">
                Thorough Assessment Process
              </SectionHeadline>
              <LargeBodyText>
                Our comprehensive assessment process begins with a detailed history and examination 
                to determine the underlying causes of your dizziness or balance problems.
              </LargeBodyText>
              <LargeBodyText>
                Based on our findings, we develop an individualized treatment plan that may include 
                various combinations of the specialized techniques above, tailored to your specific 
                condition and goals.
              </LargeBodyText>
            </div>
        </div>
      </section>
    </div>
  )
}
