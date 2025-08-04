import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  HeroHeadline,
  CardHeadline,
  BodyText,
  LargeBodyText,
  SmallText
} from "@/components/ui/Typography"

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
              <HeroHeadline className="mb-6 sm:mb-8 text-black text-balance">
                Meet our <span className="font-normal">expert team</span>
              </HeroHeadline>
              <LargeBodyText className="text-black/70 mb-8 sm:mb-12 max-w-2xl text-pretty">
                Our experienced physiotherapists are dedicated to providing evidence-based treatment and personalized care.
              </LargeBodyText>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              
              {/* Helen Cooper */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Helen Cooper
                  </CardHeadline>
                  <SmallText className="text-orange-400/80 mb-8 font-light uppercase tracking-wider">Principal Physiotherapist</SmallText>
                  <BodyText className="text-gray-700 mb-6">
                    Helen founded Gordonvale Physiotherapy in 2016 with a vision to provide comprehensive,
                    evidence-based physiotherapy care to the local community. With extensive experience in
                    pain management, women&apos;s health, and rehabilitation.
                  </BodyText>
                  <BodyText className="text-gray-700">
                    Helen specializes in women&apos;s health and continence, offering dedicated 1-hour sessions
                    for comprehensive care and treatment.
                  </BodyText>
                </CardContent>
              </Card>

              {/* Rhys Simpson */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Rhys Simpson
                  </CardHeadline>
                  <SmallText className="text-blue-400/80 mb-8 font-light uppercase tracking-wider">Physiotherapist</SmallText>
                  <BodyText className="text-gray-700 mb-6">
                    Rhys graduated from Australian Catholic University in 2021 and has developed a
                    particular expertise in aged care physiotherapy services.
                  </BodyText>
                  <BodyText className="text-gray-700">
                    He brings fresh perspectives and evidence-based approaches to rehabilitation,
                    with a focus on helping older adults maintain independence and quality of life.
                  </BodyText>
                </CardContent>
              </Card>

              {/* Steven Miller */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Steven Miller
                  </CardHeadline>
                  <SmallText className="text-purple-400/80 mb-8 font-light uppercase tracking-wider">Allied Health Assistant &amp; Physiotherapy Student</SmallText>
                  <BodyText className="text-gray-700">
                    Steven combines his role as an Allied Health Assistant with his ongoing physiotherapy
                    studies, bringing enthusiasm and current knowledge to patient care while supporting
                    our physiotherapists in delivering comprehensive treatment programs.
                  </BodyText>
                </CardContent>
              </Card>

              {/* Peta Leo */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Peta Leo
                  </CardHeadline>
                  <SmallText className="text-green-400/80 mb-8 font-light uppercase tracking-wider">Allied Health Assistant</SmallText>
                  <BodyText className="text-gray-700">
                    Peta provides essential support to our physiotherapy team, assisting with patient
                    care and treatment programs. Her dedication to helping patients achieve their
                    rehabilitation goals makes her an invaluable part of our team.
                  </BodyText>
                </CardContent>
              </Card>

              {/* David Holzheimer */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    David Holzheimer
                  </CardHeadline>
                  <SmallText className="text-orange-400/80 mb-8 font-light uppercase tracking-wider">CEO</SmallText>
                  <BodyText className="text-gray-700">
                    David brings extensive expertise in NDIS and Aged Care services, ensuring our
                    clinic operates at the highest standards while maintaining focus on quality
                    patient outcomes and service delivery.
                  </BodyText>
                </CardContent>
              </Card>

              {/* Hayley Barnes */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Hayley Barnes
                  </CardHeadline>
                  <SmallText className="text-blue-400/80 mb-8 font-light uppercase tracking-wider">Practice Manager</SmallText>
                  <BodyText className="text-gray-700">
                    Hayley ensures the smooth operation of our clinic, managing appointments,
                    coordinating care, and providing exceptional customer service to all our
                    patients and their families.
                  </BodyText>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
