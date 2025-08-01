import React from "react"
import { Card, CardContent } from "@/components/ui/card"

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 sm:mb-8 text-black leading-[0.9] tracking-tight">
                NDIS <span className="font-normal">Services</span>.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-black/70 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-light">
                Registered NDIS Provider with experienced staff and in-depth knowledge in NDIS plan reading.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              
              {/* Overview */}
              <Card className="bg-white border border-black backdrop-blur-sm mb-16">
                <CardContent className="p-16">
                  <h2 className="text-4xl font-light mb-12 text-black tracking-tight">
                    Helping Participants Achieve Their Goals
                  </h2>
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
                <h2 className="text-4xl font-light mb-12 text-black tracking-tight text-center">
                  Treatment Options
                </h2>
                <div className="grid lg:grid-cols-3 gap-8">
                  
                  <Card className="bg-white border border-black hover:border-white/20 transition-all duration-700 group backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-light mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                        Pain &amp; Movement Management
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Comprehensive pain management and movement optimization strategies.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-black hover:border-white/20 transition-all duration-700 group backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-light mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                        Post Surgery Rehabilitation
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Specialized rehabilitation programs following surgical procedures.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-black hover:border-white/20 transition-all duration-700 group backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-light mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                        Balance and Falls Prevention
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Targeted programs to improve balance and reduce fall risk.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-black hover:border-white/20 transition-all duration-700 group backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-light mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                        Strength and Conditioning
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Progressive strength training and conditioning programs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-black hover:border-white/20 transition-all duration-700 group backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-light mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                        Education and Advice
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Comprehensive education and self-management strategies.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-black hover:border-white/20 transition-all duration-700 group backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-light mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                        Equipment Supply
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Assessment and provision of appropriate mobility equipment.
                      </p>
                    </CardContent>
                  </Card>

                </div>
              </div>

              {/* Program Types */}
              <div className="mb-16">
                <h2 className="text-4xl font-light mb-12 text-black tracking-tight text-center">
                  Program Types
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                  
                  <Card className="bg-white border border-black hover:border-white/20 transition-all duration-700 group backdrop-blur-sm">
                    <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                      <h3 className="text-2xl font-light mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                        Clinic-Based Programs
                      </h3>
                      <ul className="text-gray-700 leading-relaxed text-lg font-light space-y-3">
                        <li>• Therapeutic Treatments</li>
                        <li>• Gymnasium programs with specialized equipment</li>
                        <li>• Rehabilitation programs</li>
                        <li>• Exercise physiotherapy</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-black hover:border-white/20 transition-all duration-700 group backdrop-blur-sm">
                    <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                      <h3 className="text-2xl font-light mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                        Community-Based Programs
                      </h3>
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
              <Card className="bg-white border border-black backdrop-blur-sm mb-16">
                <CardContent className="p-16">
                  <h2 className="text-4xl font-light mb-12 text-black tracking-tight">
                    Specialized Gymnasium Equipment
                  </h2>
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
              <Card className="bg-white border border-black backdrop-blur-sm">
                <CardContent className="p-16">
                  <h2 className="text-4xl font-light mb-12 text-black tracking-tight">
                    Plan Management Support
                  </h2>
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
