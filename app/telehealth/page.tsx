import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import BackgroundAnimation from "@/components/BackgroundAnimation"

export default function TelehealthPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <BackgroundAnimation />
      <div className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-white"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-light mb-8 text-black leading-[0.9] tracking-tight">
                Telehealth <span className="font-normal">Services</span>.
              </h1>
              <p className="text-xl md:text-2xl text-black/70 mb-12 max-w-2xl leading-relaxed font-light">
                Professional physiotherapy assessment and management via smartphone, tablet or computer with webcam.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-white"></div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              
              {/* Overview */}
              <Card className="bg-white border border-black backdrop-blur-sm mb-16">
                <CardContent className="p-16">
                  <h2 className="text-4xl font-light mb-12 text-black tracking-tight">
                    Remote Physiotherapy Consultations
                  </h2>
                  <p className="text-gray-700 text-xl leading-relaxed font-light mb-8">
                    Our telehealth services allow you to receive professional physiotherapy assessment 
                    and management from the comfort of your own home using your smartphone, tablet, 
                    or computer with webcam capability.
                  </p>
                  <p className="text-gray-700 text-xl leading-relaxed font-light">
                    This service is particularly beneficial for patients who are unwell, live long 
                    distances from our clinic, or are homebound and unable to travel for appointments.
                  </p>
                </CardContent>
              </Card>

              {/* Process Steps */}
              <div className="mb-16">
                <h2 className="text-4xl font-light mb-12 text-black tracking-tight text-center">
                  How It Works
                </h2>
                <div className="grid lg:grid-cols-2 gap-12">
                  
                  <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                    <CardContent className="p-12">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-8">
                        <span className="text-blue-400 text-2xl font-light">1</span>
                      </div>
                      <h3 className="text-2xl font-light mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                        Initial Contact
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg font-light">
                        Contact us and we&apos;ll send you a contact form by SMS or email with your details. 
                        Our staff will interview you to determine if telehealth is suitable for your condition.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                    <CardContent className="p-12">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-8">
                        <span className="text-green-400 text-2xl font-light">2</span>
                      </div>
                      <h3 className="text-2xl font-light mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                        Appointment Setup
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg font-light">
                        You&apos;ll receive an email platform notification before your appointment. 
                        A questionnaire app may be sent to gather additional information about your condition.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                    <CardContent className="p-12">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-8">
                        <span className="text-purple-400 text-2xl font-light">3</span>
                      </div>
                      <h3 className="text-2xl font-light mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                        Virtual Consultation
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg font-light">
                        During your appointment, our physiotherapist will assess your condition and 
                        provide treatment recommendations. Technical support is available if needed.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                    <CardContent className="p-12">
                      <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-8">
                        <span className="text-orange-400 text-2xl font-light">4</span>
                      </div>
                      <h3 className="text-2xl font-light mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                        Follow-up Care
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg font-light">
                        After your session, you&apos;ll receive information and exercises via email. 
                        Follow-up appointments can be scheduled as needed for ongoing care.
                      </p>
                    </CardContent>
                  </Card>

                </div>
              </div>

              {/* Requirements */}
              <Card className="bg-white border border-black backdrop-blur-sm mb-16">
                <CardContent className="p-16">
                  <h2 className="text-4xl font-light mb-12 text-black tracking-tight">
                    What You&apos;ll Need
                  </h2>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-light mb-6 text-gray-900">Technical Requirements</h3>
                      <ul className="text-gray-700 text-lg leading-relaxed font-light space-y-3">
                        <li>• Smartphone, tablet, or computer with webcam</li>
                        <li>• Stable internet connection</li>
                        <li>• Quiet, private space for consultation</li>
                        <li>• Good lighting to see movement clearly</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-2xl font-light mb-6 text-gray-900">For Assessment</h3>
                      <ul className="text-gray-700 text-lg leading-relaxed font-light space-y-3">
                        <li>• Ability to position camera to show painful body parts</li>
                        <li>• Space to demonstrate movement and exercises</li>
                        <li>• Comfortable clothing for movement assessment</li>
                        <li>• Any relevant medical documents or reports</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-white border border-black backdrop-blur-sm">
                <CardContent className="p-16">
                  <h2 className="text-4xl font-light mb-12 text-black tracking-tight">
                    Benefits of Telehealth
                  </h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-blue-400 text-3xl">🏠</span>
                      </div>
                      <h3 className="text-xl font-light mb-4 text-gray-900">Convenience</h3>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Receive care from the comfort of your own home without travel time or transportation concerns.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-green-400 text-3xl">🌍</span>
                      </div>
                      <h3 className="text-xl font-light mb-4 text-gray-900">Accessibility</h3>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Perfect for patients in remote areas or those with mobility limitations that make travel difficult.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-purple-400 text-3xl">⚡</span>
                      </div>
                      <h3 className="text-xl font-light mb-4 text-gray-900">Flexibility</h3>
                      <p className="text-gray-700 leading-relaxed font-light">
                        Easier scheduling and the ability to continue care when you&apos;re unwell or unable to leave home.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
