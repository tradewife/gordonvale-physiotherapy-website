import React from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function DizzyClinicPage() {
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
                Dizzy <span className="font-normal">Clinic</span>.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-black/70 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-light">
                Specialized treatment and rehabilitation for dizziness, vertigo and balance disorders.
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
                    Comprehensive Dizzy and Balance Treatment
                  </h2>
                  <p className="text-gray-700 text-xl leading-relaxed font-light mb-8">
                    Our Dizzy Clinic provides thorough assessment and treatment for patients experiencing 
                    dizziness, vertigo, and balance disorders. We use evidence-based techniques to determine 
                    the underlying causes and develop targeted treatment plans.
                  </p>
                  <p className="text-gray-700 text-xl leading-relaxed font-light">
                    Through comprehensive evaluation and specialized interventions, we help patients regain 
                    confidence in their balance and reduce symptoms that impact daily activities.
                  </p>
                </CardContent>
              </Card>

              {/* Treatment Approaches */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                
                {/* Habituation Exercises */}
                <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                  <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg mb-10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white font-light text-lg tracking-wide">
                        Habituation
                      </div>
                    </div>
                    <h3 className="text-2xl font-light mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                      Habituation Exercises
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg font-light">
                      Specialized exercises designed to help your vestibular system adapt and reduce 
                      sensitivity to movements that trigger dizziness symptoms.
                    </p>
                  </CardContent>
                </Card>

                {/* Eye-Head Coordination */}
                <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                  <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="w-full h-48 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg mb-10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white font-light text-lg tracking-wide">
                        Eye Coordination
                      </div>
                    </div>
                    <h3 className="text-2xl font-light mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                      Eye Head Coordination Exercises
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg font-light">
                      Targeted exercises to improve focus and visual stability during head movements, 
                      helping to reduce dizziness and improve overall balance function.
                    </p>
                  </CardContent>
                </Card>

                {/* Balance Training */}
                <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                  <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg mb-10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white font-light text-lg tracking-wide">
                        Balance Training
                      </div>
                    </div>
                    <h3 className="text-2xl font-light mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                      Balance and Gait Exercises
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg font-light">
                      Progressive balance training and gait exercises designed to build confidence 
                      and improve stability in various environments and situations.
                    </p>
                  </CardContent>
                </Card>

                {/* BPPV Treatment */}
                <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                  <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="w-full h-48 bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-lg mb-10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white font-light text-lg tracking-wide">
                        BPPV Treatment
                      </div>
                    </div>
                    <h3 className="text-2xl font-light mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                      Repositioning Techniques for BPPV
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg font-light">
                      Specialized repositioning techniques including the Epley manoeuvre for treating 
                      Benign Paroxysmal Positional Vertigo (BPPV) and related conditions.
                    </p>
                  </CardContent>
                </Card>

              </div>

              {/* Assessment Process */}
              <Card className="bg-white border border-black backdrop-blur-sm mt-16">
                <CardContent className="p-16">
                  <h2 className="text-4xl font-light mb-12 text-black tracking-tight">
                    Thorough Assessment Process
                  </h2>
                  <p className="text-gray-700 text-xl leading-relaxed font-light mb-8">
                    Our comprehensive assessment process begins with a detailed history and examination 
                    to determine the underlying causes of your dizziness or balance problems.
                  </p>
                  <p className="text-gray-700 text-xl leading-relaxed font-light">
                    Based on our findings, we develop an individualized treatment plan that may include 
                    various combinations of the specialized techniques above, tailored to your specific 
                    condition and goals.
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
