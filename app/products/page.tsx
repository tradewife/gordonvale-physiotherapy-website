import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import BackgroundAnimation from "@/components/BackgroundAnimation"

export default function ProductsPage() {
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
                Products <span className="font-normal">&amp; Equipment</span>.
              </h1>
              <p className="text-xl md:text-2xl text-black/70 mb-12 max-w-2xl leading-relaxed font-light">
                Quality products and equipment to support your health and rehabilitation journey.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-white"></div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Therabubble */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Respiratory Care
                    </div>
                  </div>
                  <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Therabubble
                  </h3>
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
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Orthotic Footwear
                    </div>
                  </div>
                  <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Archies Thongs &amp; Slides
                  </h3>
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
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Mobility Support
                    </div>
                  </div>
                  <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Walking Aids, Splints and Braces
                  </h3>
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
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Personal Care
                    </div>
                  </div>
                  <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Olive And Bee
                  </h3>
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
