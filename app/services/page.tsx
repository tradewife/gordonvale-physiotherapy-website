import React from "react"
import Layout from "@/components/Layout"
import { Card, CardContent } from "@/components/ui/card"
import BackgroundAnimation from "@/components/BackgroundAnimation"

export default function ServicesPage() {
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
                Comprehensive <span className="font-normal">physiotherapy services</span>.
              </h1>
              <p className="text-xl md:text-2xl text-black/70 mb-12 max-w-2xl leading-relaxed font-light">
                Evidence-based treatment and personalized care for all ages and conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-white"></div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Pain Management */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Pain Management
                    </div>
                  </div>
                  <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Management of Acute and Chronic Pain
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    Physiotherapy plays a crucial role in pain management through evidence-based treatments 
                    that address both the symptoms and underlying causes of pain conditions.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Our comprehensive approach includes manual therapy, exercise prescription, education, 
                    and lifestyle modifications to help you achieve lasting pain relief and improved function.
                  </p>
                </CardContent>
              </Card>

              {/* Aquatic Physiotherapy */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Aquatic Therapy
                    </div>
                  </div>
                  <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Aquatic Physiotherapy at Gordonvale Pool
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    Our hydrotherapy services utilize the unique properties of water to provide 
                    low-impact, high-resistance exercise in a supportive environment.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Perfect for post-surgical rehabilitation, arthritis management, and conditions 
                    where land-based exercise may be too challenging or painful.
                  </p>
                </CardContent>
              </Card>

              {/* Running Rehabilitation */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Running Rehab
                    </div>
                  </div>
                  <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Running Rehabilitation
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    Specialized treatment for running-related injuries including shin splints, 
                    plantar fasciitis, IT band syndrome, and other common running conditions.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Our approach includes biomechanical assessment, gait analysis, and progressive 
                    return-to-running programs to get you back to your sport safely and efficiently.
                  </p>
                </CardContent>
              </Card>

              {/* Aged Care */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Aged Care
                    </div>
                  </div>
                  <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Aged Care - Add Life to Your Years
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    Specialized physiotherapy services designed to help older adults maintain 
                    independence, improve mobility, and enhance quality of life through targeted 
                    interventions and fall prevention programs.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Our aged care services include balance training, strength conditioning, 
                    mobility aids assessment, and home safety evaluations.
                  </p>
                </CardContent>
              </Card>

              {/* Women's Health */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-pink-600/20 to-pink-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Women's Health
                    </div>
                  </div>
                  <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Women's Health and Continence
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    Helen specializes in women's health physiotherapy, offering dedicated 1-hour 
                    sessions for comprehensive assessment and treatment of pelvic floor dysfunction, 
                    pregnancy-related conditions, and continence issues.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Our women's health services provide a comfortable, private environment for 
                    addressing sensitive health concerns with expert, compassionate care.
                  </p>
                </CardContent>
              </Card>

              {/* Pediatric Physiotherapy */}
              <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="w-full h-64 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-lg mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                      Pediatric Care
                    </div>
                  </div>
                  <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    Pediatric Physiotherapy
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-light mb-6">
                    Specialized physiotherapy services for children, including NDIS clients, 
                    focusing on developmental support, motor skills development, and addressing 
                    childhood movement disorders.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    Our pediatric approach is play-based and family-centered, ensuring children 
                    feel comfortable while achieving their developmental and functional goals.
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
