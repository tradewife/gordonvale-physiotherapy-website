import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  HeroHeadline,
  SectionHeadline,
  LargeBodyText
} from "@/components/ui/Typography"

export default function DizzyClinicPage() {
  return (
    <div className="min-h-screen bg-transparent relative">
      {/* Hero Section */}
      <section className="hero-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container">
          <div className="hero-content">
            <HeroHeadline className="hero-text-spacing text-black text-balance">
              Dizzy <span className="font-normal">Clinic</span>
            </HeroHeadline>
            <LargeBodyText className="text-black/70 body-text-spacing max-w-2xl text-pretty">
              Specialized treatment and rehabilitation for dizziness, vertigo and balance disorders.
            </LargeBodyText>
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
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white font-light text-lg tracking-wide">
                      Habituation
                    </div>
                  </div>
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
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-48 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white font-light text-lg tracking-wide">
                      Eye Coordination
                    </div>
                  </div>
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
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white font-light text-lg tracking-wide">
                      Balance Training
                    </div>
                  </div>
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
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white font-light text-lg tracking-wide">
                      BPPV Treatment
                    </div>
                  </div>
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
