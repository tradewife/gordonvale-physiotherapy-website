import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
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
                Contact <span className="font-normal">Us</span>.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-black/70 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-light">
                Get in touch to book an appointment or learn more about our services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
              
              {/* Contact Information */}
              <div>
                <Card className="glass-card/10 backdrop-blur-xl border border-white/20 shadow-lg  mb-8">
                  <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                    <h2 className="text-3xl font-light mb-8 text-black tracking-tight">
                      Visit Our Clinic
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-light mb-3 text-black">Address</h3>
                        <p className="text-gray-700 text-lg leading-relaxed font-light">
                          Shop 8C, Bryce&apos;s Arcade<br />
                          58 Norman St, Gordonvale<br />
                          Queensland 4865
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-light mb-3 text-gray-900">Phone</h3>
                        <p className="text-gray-700 text-lg leading-relaxed font-light">
                          0401 942 903
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-light mb-3 text-gray-900">Email</h3>
                        <p className="text-gray-700 text-lg leading-relaxed font-light">
                          reception@gordonvalephysiotherapy.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card/10 backdrop-blur-xl border border-white/20 shadow-lg ">
                  <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                    <h2 className="text-3xl font-light mb-8 text-black tracking-tight">
                      Opening Hours
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-lg font-light">Monday - Friday</span>
                        <span className="text-gray-900 text-lg font-light">9:00am - 5:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-lg font-light">After Hours</span>
                        <span className="text-gray-900 text-lg font-light">By arrangement</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-lg font-light">Public Holidays</span>
                        <span className="text-gray-900 text-lg font-light">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="glass-card/10 backdrop-blur-xl border border-white/20 shadow-lg ">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <h2 className="text-3xl font-light mb-8 text-black tracking-tight">
                    Send us a Message
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-700 text-lg font-light mb-3">
                        Name *
                      </label>
                      <Input 
                        className="glass-card glass-input placeholder:text-black/40 focus:border-black/40 text-lg p-4"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-lg font-light mb-3">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        className="glass-card glass-input placeholder:text-black/40 focus:border-black/40 text-lg p-4"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-lg font-light mb-3">
                        Message *
                      </label>
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
                    <p className="text-gray-700 text-lg leading-relaxed font-light mb-4">
                      Please call 0401942903 to make your appointment or for further information.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed font-light mb-4">
                      If we have your email address we can send you an online form to complete 
                      for your face to face or telehealth appointment.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed font-light">
                      Please do not try to attach any documents to this form.
                    </p>
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
