import React from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
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
                Meet our <span className="font-normal">expert team</span>.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-black/70 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-light">
                Our experienced physiotherapists are dedicated to providing evidence-based treatment and personalized care.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              
              {/* Helen Cooper */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <h3 className="text-3xl font-light mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Helen Cooper
                  </h3>
                  <h4 className="text-xl text-orange-400/80 mb-8 font-light">Principal Physiotherapist</h4>
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    Helen founded Gordonvale Physiotherapy in 2016 with a vision to provide comprehensive, 
                    evidence-based physiotherapy care to the local community. With extensive experience in 
                    pain management, women&apos;s health, and rehabilitation.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Helen specializes in women&apos;s health and continence, offering dedicated 1-hour sessions 
                    for comprehensive care and treatment.
                  </p>
                </CardContent>
              </Card>

              {/* Rhys Simpson */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <h3 className="text-3xl font-light mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Rhys Simpson
                  </h3>
                  <h4 className="text-xl text-blue-400/80 mb-8 font-light">Physiotherapist</h4>
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    Rhys graduated from Australian Catholic University in 2021 and has developed a 
                    particular expertise in aged care physiotherapy services.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    He brings fresh perspectives and evidence-based approaches to rehabilitation, 
                    with a focus on helping older adults maintain independence and quality of life.
                  </p>
                </CardContent>
              </Card>

              {/* Steven Miller */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <h3 className="text-3xl font-light mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Steven Miller
                  </h3>
                  <h4 className="text-xl text-purple-400/80 mb-8 font-light">Allied Health Assistant &amp; Physiotherapy Student</h4>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Steven combines his role as an Allied Health Assistant with his ongoing physiotherapy 
                    studies, bringing enthusiasm and current knowledge to patient care while supporting 
                    our physiotherapists in delivering comprehensive treatment programs.
                  </p>
                </CardContent>
              </Card>

              {/* Peta Leo */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <h3 className="text-3xl font-light mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Peta Leo
                  </h3>
                  <h4 className="text-xl text-green-400/80 mb-8 font-light">Allied Health Assistant</h4>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Peta provides essential support to our physiotherapy team, assisting with patient 
                    care and treatment programs. Her dedication to helping patients achieve their 
                    rehabilitation goals makes her an invaluable part of our team.
                  </p>
                </CardContent>
              </Card>

              {/* David Holzheimer */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <h3 className="text-3xl font-light mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    David Holzheimer
                  </h3>
                  <h4 className="text-xl text-orange-400/80 mb-8 font-light">CEO</h4>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    David brings extensive expertise in NDIS and Aged Care services, ensuring our 
                    clinic operates at the highest standards while maintaining focus on quality 
                    patient outcomes and service delivery.
                  </p>
                </CardContent>
              </Card>

              {/* Hayley Barnes */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <h3 className="text-3xl font-light mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Hayley Barnes
                  </h3>
                  <h4 className="text-xl text-blue-400/80 mb-8 font-light">Practice Manager</h4>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Hayley ensures the smooth operation of our clinic, managing appointments, 
                    coordinating care, and providing exceptional customer service to all our 
                    patients and their families.
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
