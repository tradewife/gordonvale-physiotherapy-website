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
import { useGSAPAnimations, useReducedMotion } from "@/hooks/use-gsap-animations"

export default function AboutPage() {
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
      staggerReveal('.about-card', { duration: 1, stagger: 0.15 })
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
                Meet our <span className="font-normal">expert team</span>
              </HeroHeadline>
            </div>
            <div ref={heroSubtitleRef}>
              <LargeBodyText className="text-black/70 body-text-spacing max-w-2xl text-pretty">
                Our experienced physiotherapists are dedicated to providing evidence-based treatment and personalized care.
              </LargeBodyText>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/4 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              
              {/* Helen Cooper */}
              <Card className="about-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Helen Cooper
                  </CardHeadline>
                  <BodyText className="text-orange-400/80 mb-8 font-light uppercase tracking-wider">Principal Physiotherapist</BodyText>
                  <LargeBodyText className="text-gray-700 mb-6">
                    Helen founded Gordonvale Physiotherapy in 2016 with a vision to provide comprehensive,
                    evidence-based physiotherapy care to the local community. With extensive experience in
                    pain management, women&apos;s health, and rehabilitation.
                  </LargeBodyText>
                  <LargeBodyText className="text-gray-700">
                    Helen specializes in women&apos;s health and continence, offering dedicated 1-hour sessions
                    for comprehensive care and treatment.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Rhys Simpson */}
              <Card className="about-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Rhys Simpson
                  </CardHeadline>
                  <BodyText className="text-blue-400/80 mb-8 font-light uppercase tracking-wider">Physiotherapist</BodyText>
                  <LargeBodyText className="text-gray-700 mb-6">
                    Rhys graduated from Australian Catholic University in 2021 and has developed a
                    particular expertise in aged care physiotherapy services.
                  </LargeBodyText>
                  <LargeBodyText className="text-gray-700">
                    He brings fresh perspectives and evidence-based approaches to rehabilitation,
                    with a focus on helping older adults maintain independence and quality of life.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Steven Miller */}
              <Card className="about-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Steven Miller
                  </CardHeadline>
                  <BodyText className="text-purple-400/80 mb-8 font-light uppercase tracking-wider">Allied Health Assistant &amp; Physiotherapy Student</BodyText>
                  <LargeBodyText className="text-gray-700">
                    Steven combines his role as an Allied Health Assistant with his ongoing physiotherapy
                    studies, bringing enthusiasm and current knowledge to patient care while supporting
                    our physiotherapists in delivering comprehensive treatment programs.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Peta Leo */}
              <Card className="about-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Peta Leo
                  </CardHeadline>
                  <BodyText className="text-green-400/80 mb-8 font-light uppercase tracking-wider">Allied Health Assistant</BodyText>
                  <LargeBodyText className="text-gray-700">
                    Peta provides essential support to our physiotherapy team, assisting with patient
                    care and treatment programs. Her dedication to helping patients achieve their
                    rehabilitation goals makes her an invaluable part of our team.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* David Holzheimer */}
              <Card className="about-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    David Holzheimer
                  </CardHeadline>
                  <BodyText className="text-orange-400/80 mb-8 font-light uppercase tracking-wider">CEO</BodyText>
                  <LargeBodyText className="text-gray-700">
                    David brings extensive expertise in NDIS and Aged Care services, ensuring our
                    clinic operates at the highest standards while maintaining focus on quality
                    patient outcomes and service delivery.
                  </LargeBodyText>
                </CardContent>
              </Card>

              {/* Hayley Barnes */}
              <Card className="about-card glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Hayley Barnes
                  </CardHeadline>
                  <BodyText className="text-blue-400/80 mb-8 font-light uppercase tracking-wider">Practice Manager</BodyText>
                  <LargeBodyText className="text-gray-700">
                    Hayley ensures the smooth operation of our clinic, managing appointments,
                    coordinating care, and providing exceptional customer service to all our
                    patients and their families.
                  </LargeBodyText>
                </CardContent>
              </Card>

          </div>
        </div>
      </section>
    </div>
  )
}
