import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  HeroHeadline,
  SectionHeadline,
  SubsectionHeadline,
  CardHeadline,
  LargeBodyText
} from "@/components/ui/Typography"

export default function NDISPage() {
  return (
    <div className="min-h-screen bg-transparent relative">
      
      <div className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="max-w-4xl">
              <HeroHeadline className="mb-6 sm:mb-8 text-black text-balance">
                NDIS <span className="font-normal">Services</span>
              </HeroHeadline>
              <LargeBodyText className="text-black/70 mb-8 sm:mb-12 max-w-2xl text-pretty">
                Registered NDIS Provider with experienced staff and in-depth knowledge in NDIS plan reading.
              </LargeBodyText>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              
              {/* Overview */}
              <Card className="glass-card mb-16">
                <CardContent className="p-16">
                  <SectionHeadline className="mb-12 text-black font-light">
                    Helping Participants Achieve Their Goals
                  </SectionHeadline>
                  <p className="text-gray-700 text-xl leading-relaxed font-light mb-8">
                    As a registered NDIS provider, we have experienced staff with in-depth knowledge 
                    in NDIS plan reading and implementation. We work closely with participants to 
                    help them achieve their nominated goals through evidence-based physiotherapy interventions.
                  </p>
                  <p className="text-gray-700 text-xl leading-relaxed font-light">
                    Our team understands the complexities of NDIS funding and works efficiently to 
                    maximize the value of your plan while delivering high-quality, personalized care.
                  </p>
                </CardContent>
              </Card>

              {/* Treatment Options */}
              <div className="mb-16">
                <SectionHeadline className="mb-12 text-black font-light text-center">
                  Treatment Options
                </SectionHeadline>
                <div className="grid lg:grid-cols-3 gap-8">
                  
                  <Card className="glass-card hover:border-white/40 transition-all duration-700 group ">
                    <CardContent className="p-8">
                      <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500 font-light">
                        Pain &amp; Movement Management
                      </CardHeadline>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Comprehensive pain management and movement optimization strategies.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card hover:border-white/40 transition-all duration-700 group ">
                    <CardContent className="p-8">
                      <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500 font-light">
                        Post Surgery Rehabilitation
                      </CardHeadline>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Specialized rehabilitation programs following surgical procedures.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card hover:border-white/40 transition-all duration-700 group ">
                    <CardContent className="p-8">
                      <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500 font-light">
                        Balance and Falls Prevention
                      </CardHeadline>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Targeted programs to improve balance and reduce fall risk.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card hover:border-white/40 transition-all duration-700 group ">
                    <CardContent className="p-8">
                      <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500 font-light">
                        Strength and Conditioning
                      </CardHeadline>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Progressive strength training and conditioning programs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card hover:border-white/40 transition-all duration-700 group ">
                    <CardContent className="p-8">
                      <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500 font-light">
                        Education and Advice
                      </CardHeadline>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Comprehensive education and self-management strategies.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card hover:border-white/40 transition-all duration-700 group ">
                    <CardContent className="p-8">
                      <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500 font-light">
                        Equipment Supply
                      </CardHeadline>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Assessment and provision of appropriate mobility equipment.
                      </p>
                    </CardContent>
                  </Card>

                </div>
              </div>

              {/* Program Types */}
              <div className="mb-16">
                <SectionHeadline className="mb-12 text-black font-light text-center">
                  Program Types
                </SectionHeadline>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                  
                  <Card className="glass-card hover:border-white/40 transition-all duration-700 group ">
                    <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                      <SubsectionHeadline className="mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500 font-light">
                        Clinic-Based Programs
                      </SubsectionHeadline>
                      <ul className="text-gray-700 leading-relaxed text-lg font-light space-y-3">
                        <li>• Therapeutic Treatments</li>
                        <li>• Gymnasium programs with specialized equipment</li>
                        <li>• Rehabilitation programs</li>
                        <li>• Exercise physiotherapy</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="glass-card hover:border-white/40 transition-all duration-700 group ">
                    <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                      <SubsectionHeadline className="mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500 font-light">
                        Community-Based Programs
                      </SubsectionHeadline>
                      <ul className="text-gray-700 leading-relaxed text-lg font-light space-y-3">
                        <li>• In home physiotherapy</li>
                        <li>• Hydrotherapy programs</li>
                        <li>• Community access support</li>
                        <li>• Mobile equipment assessment</li>
                      </ul>
                    </CardContent>
                  </Card>

                </div>
              </div>

              {/* Specialized Equipment */}
              <Card className="glass-card mb-16">
                <CardContent className="p-16">
                  <SectionHeadline className="mb-12 text-black font-light">
                    Specialized Gymnasium Equipment
                  </SectionHeadline>
                  <p className="text-gray-700 text-xl leading-relaxed font-light mb-8">
                    Our clinic features specialized gymnasium equipment designed to accommodate 
                    participants of all abilities and mobility levels. This includes accessible 
                    exercise machines, parallel bars, mat areas, and adaptive equipment.
                  </p>
                  <p className="text-gray-700 text-xl leading-relaxed font-light">
                    All equipment is regularly maintained and our staff are trained in safe 
                    operation and modification techniques to ensure every participant can 
                    access appropriate exercise opportunities.
                  </p>
                </CardContent>
              </Card>

              {/* Plan Management */}
              <Card className="glass-card ">
                <CardContent className="p-16">
                  <SectionHeadline className="mb-12 text-black font-light">
                    Plan Management Support
                  </SectionHeadline>
                  <p className="text-gray-700 text-xl leading-relaxed font-light mb-8">
                    We support all plan management types including self managed, plan managed, 
                    provider managed, and NDIA managed plans. Our experienced team can help 
                    navigate the complexities of NDIS funding and documentation.
                  </p>
                  <p className="text-gray-700 text-xl leading-relaxed font-light">
                    We work closely with plan managers, support coordinators, and participants 
                    to ensure seamless service delivery and optimal use of allocated funding.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
