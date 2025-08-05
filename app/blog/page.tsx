import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  HeroHeadline,
  SectionHeadline,
  LargeBodyText
} from "@/components/ui/Typography"

export default function BlogPage() {
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
              Blog <span className="font-normal">&amp; Resources</span>
            </HeroHeadline>
            <LargeBodyText className="text-black/70 body-text-spacing max-w-2xl text-pretty">
              Stay updated with the latest physiotherapy insights and health tips.
            </LargeBodyText>
          </div>
        </div>
      </section>

      {/* Coming Soon / Contact Redirect */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/4 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container">
          <div className="text-center">
            <Card className="glass-card">
              <CardContent className="p-16">
                <SectionHeadline className="mb-12 text-black">
                  Coming Soon
                </SectionHeadline>
                <LargeBodyText className="text-gray-700 mb-12">
                  We&apos;re working on bringing you valuable health and physiotherapy content.
                  In the meantime, feel free to contact us directly for any questions or
                  to book an appointment.
                </LargeBodyText>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <Button className="bg-black text-white hover:bg-black/90 transition-all duration-300 px-8 py-4 text-lg font-medium">
                      Contact Us
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="glass-input hover:bg-black/10 transition-all duration-300 px-8 py-4 text-lg font-medium"
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
  )
}
