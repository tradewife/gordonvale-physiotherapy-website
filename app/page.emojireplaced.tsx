"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  HeroHeadline,
  SectionHeadline,
  CardHeadline,
  LargeBodyText,
  BodyText
} from "@/components/ui/Typography"
import {
  WheelchairIcon,
  CarIcon,
  HospitalIcon,
  ShieldIcon,
  LocationIcon,
  ClockIcon,
  LightningIcon,
  HeartIcon,
  HomeIcon,
  GlobeIcon
} from "@/components/icons"
import Header from "@/components/Header"

export default function EmojiReplacedPreview() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-spacing relative">
        <div className="page-container">
          <div className="hero-content">
            <HeroHeadline className="hero-text-spacing text-black">
              Emoji Icons Replaced
            </HeroHeadline>
            <LargeBodyText className="body-text-spacing text-black/70 max-w-2xl">
              All emoji icons on the HOME and TELEHEALTH pages have been successfully replaced 
              with professional unfilled 2px stroke icons from isocons.app.
            </LargeBodyText>
          </div>
        </div>
      </section>

      {/* Icon Showcase */}
      <section className="section-spacing relative">
        <div className="page-container">
          <div className="content-wrapper">
            <SectionHeadline className="content-spacing text-black">
              Replaced Icons
            </SectionHeadline>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              {/* Home Page Icons */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700">
                <CardContent className="p-6">
                  <CardHeadline className="mb-6 text-gray-900">Home Page Icons</CardHeadline>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full flex items-center justify-center">
                        <WheelchairIcon width={24} height={24} color="currentColor" />
                      </div>
                      <BodyText className="text-gray-700">Wheelchair access</BodyText>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full flex items-center justify-center">
                        <CarIcon width={24} height={24} color="currentColor" />
                      </div>
                      <BodyText className="text-gray-700">Disabled parking</BodyText>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full flex items-center justify-center">
                        <HospitalIcon width={24} height={24} color="currentColor" />
                      </div>
                      <BodyText className="text-gray-700">Modern equipment</BodyText>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full flex items-center justify-center">
                        <ShieldIcon width={24} height={24} color="currentColor" />
                      </div>
                      <BodyText className="text-gray-700">Insurance care</BodyText>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Home Page Icons - Second Row */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700">
                <CardContent className="p-6">
                  <CardHeadline className="mb-6 text-gray-900">Home Page Features</CardHeadline>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full flex items-center justify-center">
                        <LocationIcon width={24} height={24} color="currentColor" />
                      </div>
                      <BodyText className="text-gray-700">Central location</BodyText>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full flex items-center justify-center">
                        <ClockIcon width={24} height={24} color="currentColor" />
                      </div>
                      <BodyText className="text-gray-700">Flexible hours</BodyText>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full flex items-center justify-center">
                        <LightningIcon width={24} height={24} color="currentColor" />
                      </div>
                      <BodyText className="text-gray-700">Fast recovery</BodyText>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg rounded-full flex items-center justify-center">
                        <HeartIcon width={24} height={24} color="currentColor" />
                      </div>
                      <BodyText className="text-gray-700">Caring team</BodyText>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Telehealth Page Icons */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700">
                <CardContent className="p-6">
                  <CardHeadline className="mb-6 text-gray-900">Telehealth Benefits</CardHeadline>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <HomeIcon width={24} height={24} color="rgb(96 165 250)" />
                      </div>
                      <BodyText className="text-gray-700">Convenience</BodyText>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <GlobeIcon width={24} height={24} color="rgb(74 222 128)" />
                      </div>
                      <BodyText className="text-gray-700">Accessibility</BodyText>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <LightningIcon width={24} height={24} color="rgb(196 181 253)" />
                      </div>
                      <BodyText className="text-gray-700">Flexibility</BodyText>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Before/After Comparison */}
            <SectionHeadline className="mb-8 text-black">
              Before vs After
            </SectionHeadline>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <CardHeadline className="mb-4 text-gray-900">Before (Emojis)</CardHeadline>
                  <div className="space-y-3 text-2xl">
                    <div>♿ 🚗 🏥 🛡️</div>
                    <div>📍 🕐 ⚡ ❤️</div>
                    <div>🏠 🌍</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-6">
                  <CardHeadline className="mb-4 text-gray-900">After (isocons.app)</CardHeadline>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <WheelchairIcon width={24} height={24} color="currentColor" />
                      <CarIcon width={24} height={24} color="currentColor" />
                      <HospitalIcon width={24} height={24} color="currentColor" />
                      <ShieldIcon width={24} height={24} color="currentColor" />
                    </div>
                    <div className="flex gap-3">
                      <LocationIcon width={24} height={24} color="currentColor" />
                      <ClockIcon width={24} height={24} color="currentColor" />
                      <LightningIcon width={24} height={24} color="currentColor" />
                      <HeartIcon width={24} height={24} color="currentColor" />
                    </div>
                    <div className="flex gap-3">
                      <HomeIcon width={24} height={24} color="currentColor" />
                      <GlobeIcon width={24} height={24} color="currentColor" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}