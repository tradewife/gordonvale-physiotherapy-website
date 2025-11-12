"use client"

import { HeroHeadline, SectionHeadline, BodyText, SmallHeadline, CardHeadline } from "@/components/ui/Typography"

export default function NavbarPreview() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-spacing bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="page-container">
          <div className="hero-content">
            <HeroHeadline className="hero-text-spacing text-black">
              Enhanced Navigation
            </HeroHeadline>
            <BodyText className="body-text-spacing text-black/70 max-w-2xl">
              Navigation links are now evenly spaced and sized to fit on one line. 
              Hover over the navigation items to see the animated horizontal bar effect.
            </BodyText>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-spacing bg-white">
        <div className="page-container">
          <div className="content-wrapper">
            <SectionHeadline className="content-spacing text-black">
              Evenly Spaced Navigation
            </SectionHeadline>
            <BodyText className="text-black/70 mb-8">
              The navigation links are now optimally sized and evenly distributed across the available space.
              Each link features an animated horizontal bar that appears on hover with smooth transitions.
            </BodyText>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gray-50 p-6 rounded-lg">
                  <CardHeadline className="mb-4 text-black">Feature {item}</CardHeadline>
                  <BodyText className="text-black/70">
                    The navigation now features optimized spacing and animated hover effects.
                    Links are sized to fit perfectly on one line with even distribution.
                  </BodyText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="page-container">
          <div className="content-wrapper">
            <SectionHeadline className="content-spacing text-black">
              Hover Animations
            </SectionHeadline>
            <BodyText className="text-black/70 mb-8">
              Each navigation link features a horizontal bar that animates from the center outward on hover.
              The animation uses smooth CSS transitions for a polished user experience.
            </BodyText>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-sm">
                  <CardHeadline className="mb-3 text-black">Animation Feature {item}</CardHeadline>
                  <BodyText className="text-black/70">
                    The horizontal bar animation provides visual feedback and enhances the user experience.
                    Smooth transitions create a professional and modern feel.
                  </BodyText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Preview */}
      <footer className="bg-transparent text-black section-spacing border-t border-black/10 relative">
        <div className="page-container">
          <div className="content-wrapper">
            <SectionHeadline className="content-spacing text-black text-center">
              Footer Text Sizing
            </SectionHeadline>
            <BodyText className="text-black/70 mb-12 text-center">
              The footer text has been reduced from text-base to text-sm for better spacing and less cramped appearance.
              Subheadings remain at text-xl for proper hierarchy.
            </BodyText>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
              <div>
                <SmallHeadline className="mb-8 text-black">Contact</SmallHeadline>
                <p className="text-black/60 leading-relaxed text-sm font-light">
                  Shop 8C, Bryce&apos;s Arcade
                  <br />
                  58 Norman St, Gordonvale
                  <br />
                  Queensland 4865
                  <br />
                  Phone: 0401 942 903
                  <br />
                  Email: reception@gordonvalephysiotherapy.com
                </p>
              </div>
              <div>
                <SmallHeadline className="mb-8 text-black">Services</SmallHeadline>
                <ul className="text-black/60 space-y-4 text-sm font-light">
                  <li className="hover:text-black transition-colors duration-500 cursor-pointer">
                    Pain &amp; Movement Management
                  </li>
                  <li className="hover:text-black transition-colors duration-500 cursor-pointer">
                    Aquatic Physiotherapy
                  </li>
                  <li className="hover:text-black transition-colors duration-500 cursor-pointer">
                    Running Rehabilitation
                  </li>
                  <li className="hover:text-black transition-colors duration-500 cursor-pointer">
                    Women&apos;s Health
                  </li>
                  <li className="hover:text-black transition-colors duration-500 cursor-pointer">
                    NDIS Services
                  </li>
                </ul>
              </div>
              <div>
                <SmallHeadline className="mb-8 text-black">Hours</SmallHeadline>
                <p className="text-black/60 leading-relaxed text-sm font-light">
                  Monday - Friday: 9:00am - 5:00pm
                  <br />
                  After hours appointments by arrangement
                  <br />
                  Closed Public Holidays
                </p>
              </div>
              <div>
                <SmallHeadline className="mb-8 text-black">Follow Us</SmallHeadline>
                <p className="text-black/60 leading-relaxed text-sm font-light">
                  <a 
                    href="https://www.facebook.com/gordonvalephysiotherapy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors duration-500"
                  >
                    Facebook
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
