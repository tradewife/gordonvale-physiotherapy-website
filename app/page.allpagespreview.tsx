"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  HeroHeadline,
  SectionHeadline,
  CardHeadline,
  LargeBodyText
} from "@/components/ui/Typography"

export default function AllPagesPreview() {
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
              Enhanced Glass <span className="font-normal">Visibility</span>
            </HeroHeadline>
            <LargeBodyText className="text-black/70 body-text-spacing max-w-2xl text-pretty">
              All glass containers throughout the website now have significantly improved opacity for better visibility and readability.
            </LargeBodyText>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/4 rounded-full blur-3xl"></div>
        </div>

        <div className="page-container">
          <SectionHeadline className="content-spacing text-black text-center">
            Enhanced Glass Containers Across All Pages
          </SectionHeadline>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Home Page */}
            <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
              <CardContent className="p-6 sm:p-8">
                <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  Home Page
                </CardHeadline>
                <LargeBodyText className="text-gray-700 mb-6">
                  Service cards, contact form, feature icons, and footer all enhanced with improved glass visibility.
                </LargeBodyText>
                <Link href="/">
                  <Button className="w-full bg-black text-white hover:bg-black/90 transition-all duration-300">
                    View Home
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* About Page */}
            <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
              <CardContent className="p-6 sm:p-8">
                <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  About Page
                </CardHeadline>
                <LargeBodyText className="text-gray-700 mb-6">
                  Team member cards with enhanced glass container visibility for better readability.
                </LargeBodyText>
                <Link href="/about">
                  <Button className="w-full bg-black text-white hover:bg-black/90 transition-all duration-300">
                    View About
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Services Page */}
            <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
              <CardContent className="p-6 sm:p-8">
                <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  Services Page
                </CardHeadline>
                <LargeBodyText className="text-gray-700 mb-6">
                  Service cards with improved glass opacity for better content visibility and user experience.
                </LargeBodyText>
                <Link href="/services">
                  <Button className="w-full bg-black text-white hover:bg-black/90 transition-all duration-300">
                    View Services
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Contact Page */}
            <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
              <CardContent className="p-6 sm:p-8">
                <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  Contact Page
                </CardHeadline>
                <LargeBodyText className="text-gray-700 mb-6">
                  Contact information cards and form with enhanced glass input visibility.
                </LargeBodyText>
                <Link href="/contact">
                  <Button className="w-full bg-black text-white hover:bg-black/90 transition-all duration-300">
                    View Contact
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* NDIS Page */}
            <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
              <CardContent className="p-6 sm:p-8">
                <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  NDIS Page
                </CardHeadline>
                <LargeBodyText className="text-gray-700 mb-6">
                  Treatment option cards and program type cards with improved glass container opacity.
                </LargeBodyText>
                <Link href="/ndis">
                  <Button className="w-full bg-black text-white hover:bg-black/90 transition-all duration-300">
                    View NDIS
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Products Page */}
            <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
              <CardContent className="p-6 sm:p-8">
                <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  Products Page
                </CardHeadline>
                <LargeBodyText className="text-gray-700 mb-6">
                  Product showcase cards with enhanced visibility for better product information display.
                </LargeBodyText>
                <Link href="/products">
                  <Button className="w-full bg-black text-white hover:bg-black/90 transition-all duration-300">
                    View Products
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Dizzy Clinic Page */}
            <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
              <CardContent className="p-6 sm:p-8">
                <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  Dizzy Clinic
                </CardHeadline>
                <LargeBodyText className="text-gray-700 mb-6">
                  Treatment approach cards with improved glass opacity for better content readability.
                </LargeBodyText>
                <Link href="/dizzy-clinic">
                  <Button className="w-full bg-black text-white hover:bg-black/90 transition-all duration-300">
                    View Dizzy Clinic
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Telehealth Page */}
            <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
              <CardContent className="p-6 sm:p-8">
                <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  Telehealth
                </CardHeadline>
                <LargeBodyText className="text-gray-700 mb-6">
                  Process step cards and benefit cards with enhanced glass container visibility.
                </LargeBodyText>
                <Link href="/telehealth">
                  <Button className="w-full bg-black text-white hover:bg-black/90 transition-all duration-300">
                    View Telehealth
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Blog Page */}
            <Card className="glass-card hover:border-white/40 transition-all duration-700 group">
              <CardContent className="p-6 sm:p-8">
                <CardHeadline className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  Blog Page
                </CardHeadline>
                <LargeBodyText className="text-gray-700 mb-6">
                  Coming soon card with improved glass visibility and enhanced button styling.
                </LargeBodyText>
                <Link href="/blog">
                  <Button className="w-full bg-black text-white hover:bg-black/90 transition-all duration-300">
                    View Blog
                  </Button>
                </Link>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="page-container">
          <div className="text-center">
            <Card className="glass-card">
              <CardContent className="p-12">
                <SectionHeadline className="mb-8 text-black">
                  Glass Container Improvements Applied
                </SectionHeadline>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div>
                    <CardHeadline className="mb-4 text-gray-900">Opacity Increases</CardHeadline>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Glass Cards: 133% increase (0.15 → 0.35)</li>
                      <li>• Glass Inputs: 150% increase (0.12 → 0.30)</li>
                      <li>• Glass Buttons: 94% increase (0.18 → 0.35)</li>
                      <li>• Glass Navigation: 150% increase (0.10 → 0.25)</li>
                    </ul>
                  </div>
                  <div>
                    <CardHeadline className="mb-4 text-gray-900">Pages Enhanced</CardHeadline>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Home page service cards & forms</li>
                      <li>• About page team member cards</li>
                      <li>• Services page treatment cards</li>
                      <li>• Contact page forms & info cards</li>
                      <li>• NDIS page program cards</li>
                      <li>• All other pages consistently improved</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}