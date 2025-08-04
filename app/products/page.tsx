import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  HeroHeadline,
  SubsectionHeadline,
  LargeBodyText
} from "@/components/ui/Typography"

export default function ProductsPage() {
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
                Products <span className="font-normal">&amp; Equipment</span>
              </HeroHeadline>
              <LargeBodyText className="text-black/70 mb-8 sm:mb-12 max-w-2xl text-pretty">
                Quality products and equipment to support your health and rehabilitation journey.
              </LargeBodyText>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              
              {/* Therabubble */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Respiratory Care
                    </div>
                  </div>
                  <SubsectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500 font-light">
                    Therabubble
                  </SubsectionHeadline>
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    Get rid of excess phlegm and start breathing better. Created by physiotherapists, 
                    the Therabubble™ Original is an effective and affordable bubble PEP device.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    This device helps clear phlegm from the lungs and improve ventilation. 
                    It can be used in hospitals or at home, ideal for patients with various respiratory conditions.
                  </p>
                </CardContent>
              </Card>

              {/* Archies */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Orthotic Footwear
                    </div>
                  </div>
                  <SubsectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500 font-light">
                    Archies Thongs &amp; Slides
                  </SubsectionHeadline>
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    Orthotic support footwear with real arch support up to 2.2cm, featuring 
                    specialized foam material for superior comfort and foot health.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    These innovative thongs and slides provide the support your feet need 
                    while maintaining the casual comfort you want for everyday wear.
                  </p>
                </CardContent>
              </Card>

              {/* Walking Aids */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Mobility Support
                    </div>
                  </div>
                  <SubsectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500 font-light">
                    Walking Aids, Splints and Braces
                  </SubsectionHeadline>
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    Comprehensive range of mobility and support equipment including walking sticks, 
                    frames, crutches, moonboots, braces and various support devices.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Our team can assess your needs and provide appropriate equipment to 
                    support your mobility and recovery goals.
                  </p>
                </CardContent>
              </Card>

              {/* Olive And Bee */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Personal Care
                    </div>
                  </div>
                  <SubsectionHeadline className="mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500 font-light">
                    Olive And Bee
                  </SubsectionHeadline>
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    100% Natural Personal Lubricant designed for comfort and safety. 
                    This premium product provides natural, effective lubrication for personal care needs.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Made with natural ingredients, this product is gentle, effective, and 
                    suitable for sensitive skin and various personal care applications.
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
