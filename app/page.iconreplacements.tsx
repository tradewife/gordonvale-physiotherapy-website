"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  MenuIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  ChevronDownIcon, 
  ChevronUpIcon,
  XIcon,
  CheckIcon,
  SearchIcon,
  MoreHorizontalIcon,
  GripVerticalIcon,
  CircleIcon,
  PanelLeftIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  DotIcon
} from "@/components/icons"
import { 
  HeroHeadline,
  SectionHeadline,
  SubsectionHeadline,
  CardHeadline,
  LargeBodyText,
  BodyText
} from "@/components/ui/Typography"
import Header from "@/components/Header"

export default function IconReplacementsPreview() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-spacing relative">
        <div className="page-container">
          <div className="hero-content">
            <HeroHeadline className="hero-text-spacing text-black">
              Icon Replacements Complete
            </HeroHeadline>
            <LargeBodyText className="body-text-spacing text-black/70 max-w-2xl">
              All Lucide React icons have been successfully replaced with unfilled 2px stroke icons from isocons.app. 
              The new icons maintain consistent styling and proper direction.
            </LargeBodyText>
          </div>
        </div>
      </section>

      {/* Icon Showcase */}
      <section className="section-spacing relative">
        <div className="page-container">
          <div className="content-wrapper">
            <SectionHeadline className="content-spacing text-black">
              New Icon Set
            </SectionHeadline>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              
              {/* Navigation Icons */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700">
                <CardContent className="p-6">
                  <CardHeadline className="mb-4 text-gray-900">Navigation</CardHeadline>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MenuIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Menu</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                      <ChevronLeftIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Chevron Left</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                      <ChevronRightIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Chevron Right</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                      <ChevronDownIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Chevron Down</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                      <ChevronUpIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Chevron Up</BodyText>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Icons */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700">
                <CardContent className="p-6">
                  <CardHeadline className="mb-4 text-gray-900">Actions</CardHeadline>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <XIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Close</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Check</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                      <SearchIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Search</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowLeftIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Arrow Left</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRightIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Arrow Right</BodyText>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UI Elements */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700">
                <CardContent className="p-6">
                  <CardHeadline className="mb-4 text-gray-900">UI Elements</CardHeadline>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MoreHorizontalIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">More Horizontal</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                      <GripVerticalIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Grip Vertical</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                      <CircleIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Circle</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                      <PanelLeftIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Panel Left</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                      <DotIcon width={24} height={24} color="currentColor" />
                      <BodyText className="text-gray-700">Dot</BodyText>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Implementation Details */}
              <Card className="glass-card hover:border-white/40 transition-all duration-700">
                <CardContent className="p-6">
                  <CardHeadline className="mb-4 text-gray-900">Features</CardHeadline>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckIcon width={16} height={16} color="green" />
                      <BodyText className="text-gray-700 text-sm">Unfilled 2px stroke</BodyText>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckIcon width={16} height={16} color="green" />
                      <BodyText className="text-gray-700 text-sm">Consistent sizing</BodyText>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckIcon width={16} height={16} color="green" />
                      <BodyText className="text-gray-700 text-sm">Proper direction</BodyText>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckIcon width={16} height={16} color="green" />
                      <BodyText className="text-gray-700 text-sm">Color inheritance</BodyText>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckIcon width={16} height={16} color="green" />
                      <BodyText className="text-gray-700 text-sm">React components</BodyText>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Updated Components List */}
            <SubsectionHeadline className="mb-8 text-black">
              Updated Components
            </SubsectionHeadline>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Header.tsx',
                'pagination.tsx', 
                'toast.tsx',
                'checkbox.tsx',
                'command.tsx',
                'navigation-menu.tsx',
                'select.tsx',
                'breadcrumb.tsx',
                'context-menu.tsx',
                'dropdown-menu.tsx',
                'menubar.tsx',
                'accordion.tsx',
                'calendar.tsx',
                'carousel.tsx',
                'dialog.tsx',
                'input-otp.tsx',
                'radio-group.tsx',
                'resizable.tsx',
                'sheet.tsx',
                'sidebar.tsx'
              ].map((component) => (
                <Card key={component} className="glass-card">
                  <CardContent className="p-4">
                    <BodyText className="text-gray-800 font-medium">{component}</BodyText>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}