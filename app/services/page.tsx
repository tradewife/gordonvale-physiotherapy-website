'use client'

import React, { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  HeroHeadline,
  SectionHeadline,
  LargeBodyText
} from "@/components/ui/Typography"
import { useGSAPAnimations, useReducedMotion } from "@/hooks/use-gsap-animations"
import { useGSAP } from "@gsap/react"

export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null)
  const heroTitleRef = useRef<HTMLDivElement>(null)
  const heroSubtitleRef = useRef<HTMLDivElement>(null)

  const { fadeInUp, staggerReveal, heroEntrance } = useGSAPAnimations()
  const { safeAnimate } = useReducedMotion()

  useGSAP(() => {
    safeAnimate(() => {
      if (heroTitleRef.current && heroSubtitleRef.current) {
        // Reuse subtitle for button param (not present on this page)
        heroEntrance(heroTitleRef.current, heroSubtitleRef.current, heroSubtitleRef.current)
      }
      staggerReveal('.service-card', { duration: 1, stagger: 0.15 })
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
              <HeroHeadline className="hero-text-spacing text-black text-balance section-headline">
                Comprehensive <span className="font-normal">physiotherapy services</span>
              </HeroHeadline>
            </div>
            <div ref={heroSubtitleRef}>
              <LargeBodyText className="text-black/70 body-text-spacing max-w-2xl text-pretty">
                Evidence-based treatment and personalized care for all ages and conditions.
              </LargeBodyText>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/4 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              
              {/* Pain Management */}
              <Card className="service-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <img
                      src="/pain.jpg"
                      alt="Pain Management"
                      className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide z-10">
                      Pain Management
                    </div>
                  </div>
                  <SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Management of Acute and Chronic Pain
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700 mb-6">
                    Physiotherapy plays a crucial role in pain management through evidence-based treatments 
                    that address both the symptoms and underlying causes of pain conditions.
                  </LargeBodyText>
                  <LargeBodyText className="text-gray-700">
                    Our comprehensive approach includes manual therapy, exercise prescription, education, 
                    and lifestyle modifications to help you achieve lasting pain relief and improved function.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Aquatic Physiotherapy */}
              <Card className="service-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <img
                      src="/aquatic.jpg"
                      alt="Aquatic Physiotherapy"
                      className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide z-10">
                      Aquatic Therapy
                    </div>
                  </div>
                  <SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Aquatic Physiotherapy at Gordonvale Pool
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700 mb-6">
                    Our hydrotherapy services utilize the unique properties of water to provide 
                    low-impact, high-resistance exercise in a supportive environment.
                  </LargeBodyText>
                  <LargeBodyText className="text-gray-700">
                    Perfect for post-surgical rehabilitation, arthritis management, and conditions 
                    where land-based exercise may be too challenging or painful.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Running Rehabilitation */}
              <Card className="service-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <img
                      src="/running.jpg"
                      alt="Running Rehabilitation"
                      className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide z-10">
                      Running Rehab
                    </div>
                  </div>
                  <SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Running Rehabilitation
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700 mb-6">
                    Specialized treatment for running-related injuries including shin splints, 
                    plantar fasciitis, IT band syndrome, and other common running conditions.
                  </LargeBodyText>
                  <LargeBodyText className="text-gray-700">
                    Our approach includes biomechanical assessment, gait analysis, and progressive 
                    return-to-running programs to get you back to your sport safely and efficiently.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Aged Care */}
              <Card className="service-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <img
                      src="/aged-care.jpg"
                      alt="Aged Care Programs"
                      className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide z-10">
                      Aged Care
                    </div>
                  </div>
                  <SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Aged Care - Add Life to Your Years
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700 mb-6">
                    Specialized physiotherapy services designed to help older adults maintain 
                    independence, improve mobility, and enhance quality of life through targeted 
                    interventions and fall prevention programs.
                  </LargeBodyText>
                  <LargeBodyText className="text-gray-700">
                    Our aged care services include balance training, strength conditioning, 
                    mobility aids assessment, and home safety evaluations.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Women's Health */}
              <Card className="service-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-pink-600/20 to-pink-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <img
                      src="/woman.jpg"
                      alt="Women's Health"
                      className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide z-10">
                      Women&apos;s Health
                    </div>
                  </div>
                  <SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Women&apos;s Health and Continence
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700 mb-6">
                    Helen specializes in women&apos;s health physiotherapy, offering dedicated 1-hour 
                    sessions for comprehensive assessment and treatment of pelvic floor dysfunction, 
                    pregnancy-related conditions, and continence issues.
                  </LargeBodyText>
                  <LargeBodyText className="text-gray-700">
                    Our women&apos;s health services provide a comfortable, private environment for 
                    addressing sensitive health concerns with expert, compassionate care.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Pediatric Physiotherapy */}
              <Card className="service-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <img
                      src="/pediatric.jpg"
                      alt="Pediatric Physiotherapy"
                      className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide z-10">
                      Pediatric Care
                    </div>
                  </div>
                  <SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Pediatric Physiotherapy
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700 mb-6">
                    Specialized physiotherapy services for children, including NDIS clients, 
                    focusing on developmental support, motor skills development, and addressing 
                    childhood movement disorders.
                  </LargeBodyText>
                  <LargeBodyText className="text-gray-700">
                    Our pediatric approach is play-based and family-centered, ensuring children 
                    feel comfortable while achieving their developmental and functional goals.
                  </LargeBodyText>
                </CardContent>
              </Card>

          </div>
        </div>
      </section>
    </div>
  )
}
