'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  HeroHeadline,
  SectionHeadline,
  SubsectionHeadline,
  BodyText,
  LargeBodyText,
  CardHeadline
} from "@/components/ui/Typography"
import {
  WheelchairIcon,
  CarIcon,
  HospitalIcon,
  ShieldIcon,
  LocationIcon,
  ClockIcon,
  LightningIcon,
  HeartIcon
} from "@/components/icons"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'
import { useGSAPAnimations, useReducedMotion } from '@/hooks/use-gsap-animations'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AnimatedPhysiotherapyWebsite() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null)
  const heroButtonRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const expertsRef = useRef<HTMLElement>(null)
  const facilitiesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const footerRef = useRef<HTMLElement>(null)

  const { 
    fadeInUp, 
    fadeInLeft, 
    fadeInRight, 
    staggerReveal, 
    heroEntrance,
    createParallax 
  } = useGSAPAnimations()
  
  const { safeAnimate } = useReducedMotion()

  useGSAP(() => {
    safeAnimate(() => {
      // Hero entrance animation
      if (heroTitleRef.current && heroSubtitleRef.current && heroButtonRef.current) {
        heroEntrance(
          heroTitleRef.current,
          heroSubtitleRef.current,
          heroButtonRef.current
        )
      }

      // Animate background lighting effects with parallax
      createParallax('.hero-bg-effect', 0.3)
      createParallax('.services-bg-effect', 0.2)
      createParallax('.experts-bg-effect', 0.4)

      // Services cards staggered reveal
      staggerReveal('.service-card', { 
        duration: 1.2, 
        stagger: 0.2,
        ease: 'power2.out'
      })

      // Experts section fade in from left
      if (expertsRef.current) {
        fadeInLeft(expertsRef.current, { 
          duration: 1.2, 
          ease: 'power2.out' 
        })
      }

      // Facilities icons scale in animation
      staggerReveal('.facility-icon', { 
        duration: 0.8, 
        stagger: 0.1,
        ease: 'back.out(1.7)'
      })

      // Contact form fade in from bottom
      if (contactRef.current) {
        fadeInUp(contactRef.current, { 
          duration: 1, 
          ease: 'power2.out' 
        })
      }

      // Footer fade in
      if (footerRef.current) {
        fadeInUp(footerRef.current, { 
          duration: 0.8, 
          ease: 'power2.out' 
        })
      }

      // Add scroll-triggered animations for section headlines
      gsap.utils.toArray('.section-headline').forEach((headline: any) => {
        gsap.fromTo(headline, 
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headline,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Animate service card images on scroll
      gsap.utils.toArray('.service-image').forEach((image: any) => {
        gsap.fromTo(image,
          {
            scale: 1.1,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: image,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    })
  }, [])

  // Add hover animations for interactive elements
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card')
    const facilityIcons = document.querySelectorAll('.facility-icon')
    const buttons = document.querySelectorAll('.animated-button')

    const cleanupFunctions: (() => void)[] = []

    // Service cards hover animation
    cards.forEach((card) => {
      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)

      cleanupFunctions.push(() => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      })
    })

    // Facility icons hover animation
    facilityIcons.forEach((icon) => {
      const handleMouseEnter = () => {
        gsap.to(icon, {
          scale: 1.1,
          rotation: 5,
          duration: 0.2,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.2,
          ease: 'power2.out'
        })
      }

      icon.addEventListener('mouseenter', handleMouseEnter)
      icon.addEventListener('mouseleave', handleMouseLeave)

      cleanupFunctions.push(() => {
        icon.removeEventListener('mouseenter', handleMouseEnter)
        icon.removeEventListener('mouseleave', handleMouseLeave)
      })
    })

    // Button hover animations
    buttons.forEach((button) => {
      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        })
      }

      button.addEventListener('mouseenter', handleMouseEnter)
      button.addEventListener('mouseleave', handleMouseLeave)

      cleanupFunctions.push(() => {
        button.removeEventListener('mouseenter', handleMouseEnter)
        button.removeEventListener('mouseleave', handleMouseLeave)
      })
    })

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-transparent relative">

      {/* Hero Section with Professional Photography Style */}
      <section ref={heroRef} className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background with cinematic lighting */}
        <div className="absolute inset-0 bg-transparent"></div>

        {/* Cinematic lighting effects matching aegnt.site */}
        <div className="absolute inset-0 hero-bg-effect">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-orange-400/8 rounded-full blur-2xl"></div>
        </div>

        {/* Professional photo overlay effect */}
        <div className="absolute inset-0 bg-transparent"></div>

        <div className="page-container">
          <div className="hero-content">
            <div ref={heroTitleRef}>
              <HeroHeadline 
                className="hero-text-spacing text-black text-balance text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
              >
              Physiotherapy for <span className="font-normal italic">everybody</span>
              </HeroHeadline>
            </div>
            <div ref={heroSubtitleRef}>
              <LargeBodyText 
                className="text-black/70 body-text-spacing max-w-2xl text-pretty"
              >
              Hands-on, experienced, and compassionate care for all ages and conditions.
              </LargeBodyText>
            </div>
            <div className="inline-block" ref={heroButtonRef}>
              <Button 
                className="animated-button bg-black text-white hover:bg-black/90 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 tracking-wide"
              >
                Book now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section - Professional Photography Style */}
      <section ref={expertsRef} className="section-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0 experts-bg-effect">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/4 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container">
          <HeroHeadline className="section-headline content-spacing text-black text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Experts in pain, movement & rehabilitation
          </HeroHeadline>
          
          <div className="space-y-8 text-black/70 text-content mb-12 sm:mb-16 md:mb-20">
              <LargeBodyText>
                We're a team of experienced physiotherapists who are passionate about helping people move better, feel better and live better. Our clinic offers a wide range of services including sports injury treatment, chronic pain management, post-surgical rehabilitation, and preventive care.
              </LargeBodyText>
              <LargeBodyText>
                Our approach combines the latest evidence-based treatments with hands-on manual therapy techniques. We believe in empowering our patients through education and providing them with the tools they need for long-term success.
              </LargeBodyText>
              <LargeBodyText>
                Whether you're recovering from an injury, managing a chronic condition, or looking to optimize your performance, our team is here to support you every step of the way. We work closely with other healthcare professionals to ensure you receive comprehensive care.
              </LargeBodyText>
          </div>
        </div>
      </section>

      {/* Services Section - Cinematic Cards */}
      <section ref={servicesRef} className="section-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0 services-bg-effect">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Sports & Injury Care */}
            <Card className="service-card glass-card hover:border-white/40 transition-all duration-700 group">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg mb-10 relative overflow-hidden">
                  <img
                    src="/sports.jpg"
                    alt="Sports and Injury Care"
                    className="service-image absolute inset-0 w-full h-full object-cover object-center z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0">
                    <div className="absolute top-6 left-6 w-16 h-16 bg-orange-400/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-8 right-8 w-12 h-12 bg-blue-400/30 rounded-full blur-lg"></div>
                  </div>
                  <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide z-10">
                    Sports Care
                  </div>
                </div>
<SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
  Sports & injury care
</SectionHeadline>
                <LargeBodyText className="text-gray-700">
                  Treatment and rehabilitation for sports and non-related injuries, chronic pain and acute conditions.
                </LargeBodyText>
              </CardContent>
            </Card>

            {/* NCS & Aged Care */}
            <Card className="service-card glass-card hover:border-white/40 transition-all duration-700 group">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="w-full h-80 bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-lg mb-10 relative overflow-hidden">
                  <img
                    src="/aged-care.jpg"
                    alt="Aged Care Programs"
                    className="service-image absolute inset-0 w-full h-full object-cover object-center z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0">
                    <div className="absolute top-6 right-6 w-20 h-20 bg-orange-400/15 rounded-full blur-xl"></div>
                    <div className="absolute bottom-6 left-6 w-14 h-14 bg-blue-400/20 rounded-full blur-lg"></div>
                  </div>
                  <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide z-10">Aged Care</div>
                </div>
<SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
  NCS & aged care
</SectionHeadline>
                <LargeBodyText className="text-gray-700">
                  Responsive NCS expertise, accessible care and support for all ages and abilities.
                </LargeBodyText>
              </CardContent>
            </Card>

            {/* Women's Health */}
            <Card className="service-card glass-card hover:border-white/40 transition-all duration-700 group">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="w-full h-80 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg mb-10 relative overflow-hidden">
                  <img
                    src="/woman.jpg"
                    alt="Pregnancy Pain and Fitness"
                    className="service-image absolute inset-0 w-full h-full object-cover object-center z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0">
                    <div className="absolute top-8 left-8 w-18 h-18 bg-purple-400/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-6 right-6 w-16 h-16 bg-orange-400/15 rounded-full blur-lg"></div>
                  </div>
                  <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide z-10">
                    Women's Health
                  </div>
                </div>
<SectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
  Women's Health
</SectionHeadline>
<LargeBodyText className="text-gray-700">
  Specialized care including pelvic floor dysfunction, pregnancy, and women's pain care.
</LargeBodyText>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Services Grid */}
      <section ref={facilitiesRef} className="section-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="page-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-20 md:mb-24">
            <div className="facility-icon group text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-white/50 transition-all duration-500">
                <WheelchairIcon width={32} height={32} color="currentColor" />
              </div>
              <LargeBodyText className="font-light text-black/80 group-hover:text-black transition-colors duration-500 tracking-wide">
                Wheelchair access
              </LargeBodyText>
            </div>
            <div className="facility-icon group text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-white/50 transition-all duration-500">
                <CarIcon width={32} height={32} color="currentColor" />
              </div>
              <LargeBodyText className="font-light text-black/80 group-hover:text-black transition-colors duration-500 tracking-wide">
                Disabled parking
              </LargeBodyText>
            </div>
            <div className="facility-icon group text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-white/50 transition-all duration-500">
                <HospitalIcon width={32} height={32} color="currentColor" />
              </div>
              <LargeBodyText className="font-light text-black/80 group-hover:text-black transition-colors duration-500 tracking-wide">
                Modern equipment
              </LargeBodyText>
            </div>
            <div className="facility-icon group text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-white/50 transition-all duration-500">
                <ShieldIcon width={32} height={32} color="currentColor" />
              </div>
              <LargeBodyText className="font-light text-black/80 group-hover:text-black transition-colors duration-500 tracking-wide">
                Insurance care
              </LargeBodyText>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 text-center">
            <div className="facility-icon group text-black/70 hover:text-black transition-colors duration-500 cursor-pointer">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-white/50 transition-all duration-500">
                <LocationIcon width={32} height={32} color="currentColor" />
              </div>
              <LargeBodyText className="font-light tracking-wide">Central location</LargeBodyText>
            </div>
            <div className="facility-icon group text-black/70 hover:text-black transition-colors duration-500 cursor-pointer">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-white/50 transition-all duration-500">
                <ClockIcon width={32} height={32} color="currentColor" />
              </div>
              <LargeBodyText className="font-light tracking-wide">Flexible hours</LargeBodyText>
            </div>
            <div className="facility-icon group text-black/70 hover:text-black transition-colors duration-500 cursor-pointer">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-white/50 transition-all duration-500">
                <LightningIcon width={32} height={32} color="currentColor" />
              </div>
              <LargeBodyText className="font-light tracking-wide">Fast recovery</LargeBodyText>
            </div>
            <div className="facility-icon group text-black/70 hover:text-black transition-colors duration-500 cursor-pointer">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-white/50 transition-all duration-500">
                <HeartIcon width={32} height={32} color="currentColor" />
              </div>
              <LargeBodyText className="font-light tracking-wide">Caring team</LargeBodyText>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Professional Layout */}
      <section ref={contactRef} className="section-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/4 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeadline className="section-headline content-spacing text-black text-balance">Book an appointment</SectionHeadline>

            <div className="glass-card p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-white/20 ">
              <form className="space-y-8">
                <Input
                  placeholder="Name"
                  className="glass-card glass-input placeholder:text-black/40 focus:border-black/70 focus:ring-black/10 h-16 text-lg  font-light"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="glass-card glass-input placeholder:text-black/40 focus:border-black/70 focus:ring-black/10 h-16 text-lg  font-light"
                />
                <Input
                  placeholder="Phone"
                  type="tel"
                  className="glass-card glass-input placeholder:text-black/40 focus:border-black/70 focus:ring-black/10 h-16 text-lg  font-light"
                />
                <Textarea
                  placeholder="Message"
                  rows={6}
                  className="glass-card glass-input placeholder:text-black/40 focus:border-black/70 focus:ring-black/10 text-lg  font-light"
                />
                <Button className="animated-button w-full bg-black text-white hover:bg-black/90 py-6 text-xl font-medium transition-all duration-300 tracking-wide">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal Professional */}
      <footer ref={footerRef} className="glass-card text-black section-spacing border-t border-black/10 relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
            <div>
              <CardHeadline className="font-light mb-8 text-black tracking-wide">Contact</CardHeadline>
              <BodyText className="text-black/60 leading-relaxed font-light">
                Shop 8C, Bryce's Arcade
                <br />
                58 Norman St, Gordonvale
                <br />
                Queensland 4865
                <br />
                Phone: 0401 942 903
                <br />
                Email: reception@gordonvalephysiotherapy.com
              </BodyText>
            </div>
            <div>
              <CardHeadline className="font-light mb-8 text-black tracking-wide">Services</CardHeadline>
              <ul className="text-black/60 space-y-4 font-light">
                <li><BodyText className="hover:text-black transition-colors duration-500 cursor-pointer">
                  Pain &amp; Movement Management
                </BodyText></li>
                <li><BodyText className="hover:text-black transition-colors duration-500 cursor-pointer">
                  Aquatic Physiotherapy
                </BodyText></li>
                <li><BodyText className="hover:text-black transition-colors duration-500 cursor-pointer">
                  Running Rehabilitation
                </BodyText></li>
                <li><BodyText className="hover:text-black transition-colors duration-500 cursor-pointer">
                  Women's Health
                </BodyText></li>
                <li><BodyText className="hover:text-black transition-colors duration-500 cursor-pointer">
                  NDIS Services
                </BodyText></li>
              </ul>
            </div>
            <div>
              <CardHeadline className="font-light mb-8 text-black tracking-wide">Hours</CardHeadline>
              <BodyText className="text-black/60 leading-relaxed font-light">
                Monday - Friday: 9:00am - 5:00pm
                <br />
                After hours appointments by arrangement
                <br />
                Closed Public Holidays
              </BodyText>
            </div>
            <div>
              <CardHeadline className="font-light mb-8 text-black tracking-wide">Follow Us</CardHeadline>
              <BodyText className="text-black/60 leading-relaxed font-light">
                <a 
                  href="https://facebook.com/helencooper000/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors duration-500"
                >
                  Facebook
                </a>
              </BodyText>
            </div>
          </div>
          <div className="border-t border-black/10 mt-20 pt-12 text-center text-black/40 font-light">
            <BodyText>&copy; 2024 Gordonvale Physiotherapy. All rights reserved.</BodyText>
          </div>
        </div>
      </footer>
    </div>
  )
}
