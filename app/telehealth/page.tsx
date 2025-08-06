import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  HeroHeadline,
  SectionHeadline,
  CardHeadline,
  BodyText,
  LargeBodyText
} from "@/components/ui/Typography"
import {
  HomeIcon,
  GlobeIcon,
  LightningIcon
} from "@/components/icons"

export default function TelehealthPage() {
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
              Telehealth <span className="font-normal">Services</span>
            </HeroHeadline>
            <LargeBodyText className="text-black/70 body-text-spacing max-w-2xl text-pretty">
              Our telehealth services allow you to receive professional physiotherapy assessment
              and management from the comfort of your own home using your smartphone, tablet,
              or computer with webcam capability.
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

            {/* Process Steps */}
            <SectionHeadline className="mb-12 sm:mb-16 text-black">
              How It Works
            </SectionHeadline>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 content-spacing">
              
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-8">
                    <span className="text-blue-400 text-2xl font-light">1</span>
                  </div>
                  <CardHeadline className="mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Initial Contact
                  </CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    Contact us and we&apos;ll send you a contact form by SMS or email with your details. 
                    Our staff will interview you to determine if telehealth is suitable for your condition.
                  </LargeBodyText>
                </CardContent>
              </Card>

              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-8">
                    <span className="text-green-400 text-2xl font-light">2</span>
                  </div>
                  <CardHeadline className="mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Appointment Setup
                  </CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    You&apos;ll receive an email platform notification before your appointment. 
                    A questionnaire app may be sent to gather additional information about your condition.
                  </LargeBodyText>
                </CardContent>
              </Card>

              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-8">
                    <span className="text-purple-400 text-2xl font-light">3</span>
                  </div>
                  <CardHeadline className="mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Virtual Consultation
                  </CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    During your appointment, our physiotherapist will assess your condition and 
                    provide treatment recommendations. Technical support is available if needed.
                  </LargeBodyText>
                </CardContent>
              </Card>

              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-8">
                    <span className="text-orange-400 text-2xl font-light">4</span>
                  </div>
                  <CardHeadline className="mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Follow-up Care
                  </CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    After your session, you&apos;ll receive information and exercises via email. 
                    Follow-up appointments can be scheduled as needed for ongoing care.
                  </LargeBodyText>
                </CardContent>
              </Card>

            </div>

            <div className="space-y-8 text-black/70 text-content content-spacing mt-24 sm:mt-32 md:mt-40">
              <SectionHeadline className="text-black mb-12 sm:mb-16">
                What You&apos;ll Need
              </SectionHeadline>
              <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                <div>
                  <CardHeadline className="mb-8 text-gray-900">Technical Requirements</CardHeadline>
                  <ul className="text-gray-700 space-y-4">
                    <li><LargeBodyText className="text-gray-700">• Smartphone, tablet, or computer with webcam</LargeBodyText></li>
                    <li><LargeBodyText className="text-gray-700">• Stable internet connection</LargeBodyText></li>
                    <li><LargeBodyText className="text-gray-700">• Quiet, private space for consultation</LargeBodyText></li>
                    <li><LargeBodyText className="text-gray-700">• Good lighting to see movement clearly</LargeBodyText></li>
                  </ul>
                </div>
                <div>
                  <CardHeadline className="mb-8 text-gray-900">For Assessment</CardHeadline>
                  <ul className="text-gray-700 space-y-4">
                    <li><LargeBodyText className="text-gray-700">• Ability to position camera to show painful body parts</LargeBodyText></li>
                    <li><LargeBodyText className="text-gray-700">• Space to demonstrate movement and exercises</LargeBodyText></li>
                    <li><LargeBodyText className="text-gray-700">• Comfortable clothing for movement assessment</LargeBodyText></li>
                    <li><LargeBodyText className="text-gray-700">• Any relevant medical documents or reports</LargeBodyText></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8 text-black/70 text-content content-spacing mt-24 sm:mt-32 md:mt-40">
              <SectionHeadline className="text-black mb-12 sm:mb-16">
                Benefits of Telehealth
              </SectionHeadline>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HomeIcon width={48} height={48} color="rgb(96 165 250)" />
                  </div>
                  <CardHeadline className="mb-4 text-gray-900">Convenience</CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    Receive care from the comfort of your own home without travel time or transportation concerns.
                  </LargeBodyText>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GlobeIcon width={48} height={48} color="rgb(74 222 128)" />
                  </div>
                  <CardHeadline className="mb-4 text-gray-900">Accessibility</CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    Perfect for patients in remote areas or those with mobility limitations that make travel difficult.
                  </LargeBodyText>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <LightningIcon width={48} height={48} color="rgb(196 181 253)" />
                  </div>
                  <CardHeadline className="mb-4 text-gray-900">Flexibility</CardHeadline>
                  <LargeBodyText className="text-gray-700">
                    Easier scheduling and the ability to continue care when you&apos;re unwell or unable to leave home.
                  </LargeBodyText>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}