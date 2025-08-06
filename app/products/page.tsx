'use client'

import React, { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  HeroHeadline,
  SectionHeadline,
  LargeBodyText,
  OverlayText
} from "@/components/ui/Typography"
import { useGSAPAnimations, useReducedMotion } from "@/hooks/use-gsap-animations"
import { useGSAP } from "@gsap/react"

export default function ProductsPage() {
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
      staggerReveal('.product-card', { duration: 1, stagger: 0.15 })
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
                Products <span className="font-normal">& Equipment</span>
              </HeroHeadline>
            </div>
            <div ref={heroSubtitleRef}>
              <LargeBodyText className="text-black/70 body-text-spacing max-w-2xl text-pretty">
                Quality products and equipment to support your health and rehabilitation journey.
              </LargeBodyText>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/4 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              
              {/* Therabubble */}
              <Card className="product-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <img
                      src="/therabubble.jpg"
                      alt="Therabubble respiratory care device"
                      className="absolute inset-0 w-full h-full object-contain object-center z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <OverlayText className="absolute bottom-8 left-8 text-white z-10">
                      Respiratory Care
                    </OverlayText>
                  </div>
                  <SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Therabubble
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700 mb-6">
                    Get rid of excess phlegm and start breathing better. Created by physiotherapists, 
                    the Therabubble™ Original is an effective and affordable bubble PEP device.
                  </LargeBodyText>
                  <LargeBodyText className="text-gray-700">
                    This device helps clear phlegm from the lungs and improve ventilation. 
                    It can be used in hospitals or at home, ideal for patients with various respiratory conditions.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Archies */}
              <Card className="product-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <img
                      src="/archies.jpg"
                      alt="Archies orthotic thongs and slides"
                      className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <OverlayText className="absolute bottom-8 left-8 text-white z-10">
                      Orthotic Footwear
                    </OverlayText>
                  </div>
                  <SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Archies Thongs & Slides
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700 mb-6">
                    Orthotic support footwear with real arch support up to 2.2cm, featuring 
                    specialized foam material for superior comfort and foot health.
                  </LargeBodyText>
                  <LargeBodyText className="text-gray-700">
                    These innovative thongs and slides provide the support your feet need 
                    while maintaining the casual comfort you want for everyday wear.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Walking Aids */}
              <Card className="product-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <img
                      src="/mobility.jpg"
                      alt="Mobility Aids"
                      className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <OverlayText className="absolute bottom-8 left-8 text-white z-10">
                      Mobility Support
                    </OverlayText>
                  </div>
                  <SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Walking Aids, Splints and Braces
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700 mb-6">
                    Comprehensive range of mobility and support equipment including walking sticks, 
                    frames, crutches, moonboots, braces and various support devices.
                  </LargeBodyText>
                  <LargeBodyText className="text-gray-700">
                    Our team can assess your needs and provide appropriate equipment to 
                    support your mobility and recovery goals.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Olive And Bee */}
              <Card className="product-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <img
                      src="/olive-bee.jpg"
                      alt="Olive & Bee"
                      className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <OverlayText className="absolute bottom-8 left-8 text-white z-10">
                      Personal Care
                    </OverlayText>
                  </div>
                  <SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Olive And Bee
                  </SectionHeadline>
                  <LargeBodyText className="text-gray-700 mb-6">
                    100% Natural Personal Lubricant designed for comfort and safety. 
                    This premium product provides natural, effective lubrication for personal care needs.
                  </LargeBodyText>
                  <LargeBodyText className="text-gray-700">
                    Made with natural ingredients, this product is gentle, effective, and 
                    suitable for sensitive skin and various personal care applications.
                  </LargeBodyText>
                </CardContent>
              </Card>

          </div>
        </div>
      </section>
    </div>
  )
}
