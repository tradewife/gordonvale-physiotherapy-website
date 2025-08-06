'use client'

import React, { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  HeroHeadline,
  SectionHeadline,
  CardHeadline,
  LargeBodyText
} from "@/components/ui/Typography"
import { useGSAP } from "@gsap/react"
import { useGSAPAnimations, useReducedMotion } from "@/hooks/use-gsap-animations"

export default function ContactPage() {
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
      // Animate info cards and the form card
      staggerReveal('.contact-card', { duration: 1, stagger: 0.15 })
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
                Contact <span className="font-normal">Us</span>
              </HeroHeadline>
            </div>
            <div ref={heroSubtitleRef}>
              <LargeBodyText className="text-black/70 body-text-spacing max-w-2xl text-pretty">
                Get in touch to book an appointment or learn more about our services.
              </LargeBodyText>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/4 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
              
              {/* Contact Information */}
              <div>
                <Card className="contact-card glass-card mb-8">
                  <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                    <SectionHeadline className="mb-8 text-black">
                      Visit Our Clinic
                    </SectionHeadline>
                    <div className="space-y-6">
                      <div>
                        <CardHeadline className="mb-3 text-black">Address</CardHeadline>
                        <LargeBodyText className="text-gray-700">
                          Shop 8C, Bryce&apos;s Arcade<br />
                          58 Norman St, Gordonvale<br />
                          Queensland 4865
                        </LargeBodyText>
                      </div>
                      <div>
                        <CardHeadline className="mb-3 text-gray-900">Phone</CardHeadline>
                        <LargeBodyText className="text-gray-700">
                          0401 942 903
                        </LargeBodyText>
                      </div>
                      <div>
                        <CardHeadline className="mb-3 text-gray-900">Email</CardHeadline>
                        <LargeBodyText className="text-gray-700">
                          reception@gordonvalephysiotherapy.com
                        </LargeBodyText>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="contact-card glass-card">
                  <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                    <SectionHeadline className="mb-8 text-black">
                      Opening Hours
                    </SectionHeadline>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <LargeBodyText className="text-gray-700">Monday - Friday</LargeBodyText>
                        <LargeBodyText className="text-gray-900">9:00am - 5:00pm</LargeBodyText>
                      </div>
                      <div className="flex justify-between">
                        <LargeBodyText className="text-gray-700">After Hours</LargeBodyText>
                        <LargeBodyText className="text-gray-900">By arrangement</LargeBodyText>
                      </div>
                      <div className="flex justify-between">
                        <LargeBodyText className="text-gray-700">Public Holidays</LargeBodyText>
                        <LargeBodyText className="text-gray-900">Closed</LargeBodyText>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="contact-card glass-card">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <SectionHeadline className="mb-8 text-black">
                    Send us a Message
                  </SectionHeadline>
                  <form className="space-y-6">
                    <div>
                      <LargeBodyText className="block text-gray-700 mb-3">
                        Name *
                      </LargeBodyText>
                      <Input 
                        className="glass-card glass-input placeholder:text-black/40 focus:border-black/40 text-lg p-4"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <LargeBodyText className="block text-gray-700 mb-3">
                        Email Address *
                      </LargeBodyText>
                      <Input 
                        type="email"
                        className="glass-card glass-input placeholder:text-black/40 focus:border-black/40 text-lg p-4"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <LargeBodyText className="block text-gray-700 mb-3">
                        Message *
                      </LargeBodyText>
                      <Textarea 
                        className="glass-card glass-input placeholder:text-black/40 focus:border-black/40 text-lg p-4 min-h-[150px]"
                        placeholder="Tell us about your condition or how we can help you..."
                      />
                    </div>
                    <Button className="w-full bg-white text-black hover:bg-transparent transition-all duration-300 py-4 text-lg font-medium">
                      Send Message
                    </Button>
                  </form>
                  
                  <div className="mt-12 pt-8 border-t border-black/10">
                    <LargeBodyText className="text-gray-700 mb-4">
                      Please call 0401942903 to make your appointment or for further information.
                    </LargeBodyText>
                    <LargeBodyText className="text-gray-700 mb-4">
                      If we have your email address we can send you an online form to complete 
                      for your face to face or telehealth appointment.
                    </LargeBodyText>
                    <LargeBodyText className="text-gray-700">
                      Please do not try to attach any documents to this form.
                    </LargeBodyText>
                  </div>
                </CardContent>
              </Card>

          </div>
        </div>
      </section>
    </div>
  )
}
