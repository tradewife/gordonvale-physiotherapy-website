import React from "react"
import Layout from "@/components/Layout"
import { Card, CardContent } from "@/components/ui/card"
import BackgroundAnimation from "@/components/BackgroundAnimation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogPage() {
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
                Blog <span className="font-normal">&amp; Resources</span>.
              </h1>
              <p className="text-xl md:text-2xl text-black/70 mb-12 max-w-2xl leading-relaxed font-light">
                Stay updated with the latest physiotherapy insights and health tips.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon / Contact Redirect */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-white"></div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              <Card className="bg-white border border-black backdrop-blur-sm">
                <CardContent className="p-16">
                  <h2 className="text-4xl font-light mb-12 text-black tracking-tight">
                    Coming Soon
                  </h2>
                  <p className="text-gray-700 text-xl leading-relaxed font-light mb-12">
                    We're working on bringing you valuable health and physiotherapy content. 
                    In the meantime, feel free to contact us directly for any questions or 
                    to book an appointment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/contact">
                      <Button className="bg-black text-white hover:bg-black/90 transition-all duration-300 px-8 py-4 text-lg font-medium">
                        Contact Us
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="border-black text-black hover:bg-black/10 transition-all duration-300 px-8 py-4 text-lg font-medium"
                    >
                      Call 0401 942 903
                    </Button>
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
