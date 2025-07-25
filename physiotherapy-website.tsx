import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import BackgroundAnimation from "@/components/BackgroundAnimation"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export default function Component() {
  return (
    <div className="min-h-screen bg-white relative">
      <BackgroundAnimation />
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-black/10" style={{ zIndex: 50 }}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-light text-black tracking-wider">Gordonvale Physiotherapy</div>
          
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <Link
              href="/"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Our Team
            </Link>
            <Link
              href="/services"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Services
            </Link>
            <Link
              href="/dizzy-clinic"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Dizzy Clinic
            </Link>
            <Link
              href="/ndis"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              NDIS
            </Link>
            <Link
              href="/products"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Products
            </Link>
            <Link
              href="/telehealth"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Telehealth
            </Link>
            <Link
              href="/contact"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-black/70 hover:text-black transition-all duration-500 font-light text-sm tracking-wide uppercase"
            >
              Blog
            </Link>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] md:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left font-light text-xl tracking-wider">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-6 mt-8">
                <Link
                  href="/"
                  className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
                >
                  Our Team
                </Link>
                <Link
                  href="/services"
                  className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
                >
                  Services
                </Link>
                <Link
                  href="/dizzy-clinic"
                  className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
                >
                  Dizzy Clinic
                </Link>
                <Link
                  href="/ndis"
                  className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
                >
                  NDIS
                </Link>
                <Link
                  href="/products"
                  className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
                >
                  Products
                </Link>
                <Link
                  href="/telehealth"
                  className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
                >
                  Telehealth
                </Link>
                <Link
                  href="/contact"
                  className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="text-black/70 hover:text-black transition-all duration-500 font-light text-lg tracking-wide uppercase"
                >
                  Blog
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Button className="bg-black text-white hover:bg-black/90 transition-all duration-300 px-6 py-3 sm:px-8 font-medium text-sm tracking-wide">
            Book now
          </Button>
        </div>
      </header>

      {/* Hero Section with Professional Photography Style */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background with cinematic lighting */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white"></div>

        {/* Cinematic lighting effects matching aegnt.site */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-orange-400/8 rounded-full blur-2xl"></div>
        </div>

        {/* Professional photo overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 sm:mb-8 text-black leading-[0.9] tracking-tight">
              Physiotherapy for <span className="font-normal">everybody</span>.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-black/70 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-light">
              Hands-on, experienced, and compassionate care for all ages and conditions.
            </p>
            <Button className="bg-black text-white hover:bg-black/90 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 tracking-wide">
              Book now
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Cinematic Cards */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Sports & Injury Care */}
            <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg mb-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0">
                    <div className="absolute top-6 left-6 w-16 h-16 bg-orange-400/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-8 right-8 w-12 h-12 bg-blue-400/30 rounded-full blur-lg"></div>
                  </div>
                  <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                    Sports Care
                  </div>
                </div>
                <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  Sports &amp; injury care.
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  Treatment and rehabilitation for sports and non-related injuries, chronic pain and acute conditions.
                </p>
              </CardContent>
            </Card>

            {/* NCS & Aged Care */}
            <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="w-full h-80 bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-lg mb-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0">
                    <div className="absolute top-6 right-6 w-20 h-20 bg-orange-400/15 rounded-full blur-xl"></div>
                    <div className="absolute bottom-6 left-6 w-14 h-14 bg-blue-400/20 rounded-full blur-lg"></div>
                  </div>
                  <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">Aged Care</div>
                </div>
                <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  NCS &amp; aged care.
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  Responsive NCS expertise, accessible care and support for all ages and abilities.
                </p>
              </CardContent>
            </Card>

            {/* Women's Health */}
            <Card className="bg-white border border-black hover:border-black/80 transition-all duration-700 group backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="w-full h-80 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg mb-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0">
                    <div className="absolute top-8 left-8 w-18 h-18 bg-purple-400/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-6 right-6 w-16 h-16 bg-orange-400/15 rounded-full blur-lg"></div>
                  </div>
                  <div className="absolute bottom-8 left-8 text-white font-light text-lg tracking-wide">
                    Women's Health
                  </div>
                </div>
                <h3 className="text-3xl font-light mb-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  Women's Health
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  Specialized care including pelvic floor dysfunction, pregnancy, and women's pain care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experts Section - Professional Photography Style */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/4 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 sm:mb-12 md:mb-16 text-black leading-tight tracking-tight">
              Experts in pain, movement &amp; rehabilitation.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-black/70 max-w-4xl mb-12 sm:mb-16 md:mb-20 leading-relaxed font-light">
              Our team of experienced physiotherapists are dedicated to providing evidence-based treatment and
              personalized care for your unique needs.
            </p>

            <div className="bg-white p-16 rounded-2xl border border-black backdrop-blur-sm">
              <h4 className="font-light text-black mb-10 text-2xl tracking-wide">Gordonvale Physiotherapy</h4>
              <div className="space-y-8 text-black/70 text-xl leading-relaxed font-light">
                <p>
                  We're a team of experienced physiotherapists who are passionate about helping people move better, feel
                  better and live better. Our clinic offers a wide range of services including sports injury treatment,
                  chronic pain management, post-surgical rehabilitation, and preventive care.
                </p>
                <p>
                  Our approach combines the latest evidence-based treatments with hands-on manual therapy techniques. We
                  believe in empowering our patients through education and providing them with the tools they need for
                  long-term success.
                </p>
                <p>
                  Whether you're recovering from an injury, managing a chronic condition, or looking to optimize your
                  performance, our team is here to support you every step of the way. We work closely with other
                  healthcare professionals to ensure you receive comprehensive care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-white"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-20 md:mb-24">
            <div className="group text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-gray-50 transition-all duration-500 border border-black">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
              <h4 className="font-light text-black/80 group-hover:text-black transition-colors duration-500 text-lg tracking-wide">
                Wheelchair access
              </h4>
            </div>
            <div className="group text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-gray-50 transition-all duration-500 border border-black">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
              <h4 className="font-light text-black/80 group-hover:text-black transition-colors duration-500 text-lg tracking-wide">
                Disabled parking
              </h4>
            </div>
            <div className="group text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-gray-50 transition-all duration-500 border border-black">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
              <h4 className="font-light text-black/80 group-hover:text-black transition-colors duration-500 text-lg tracking-wide">
                Modern equipment
              </h4>
            </div>
            <div className="group text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:bg-gray-50 transition-all duration-500 border border-black">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
              <h4 className="font-light text-black/80 group-hover:text-black transition-colors duration-500 text-lg tracking-wide">
                Insurance care
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 text-center">
            <div className="text-black/70 hover:text-black transition-colors duration-500 cursor-pointer">
              <h4 className="font-light text-lg tracking-wide">Central location</h4>
            </div>
            <div className="text-black/70 hover:text-black transition-colors duration-500 cursor-pointer">
              <h4 className="font-light text-lg tracking-wide">Flexible hours</h4>
            </div>
            <div className="text-black/70 hover:text-black transition-colors duration-500 cursor-pointer">
              <h4 className="font-light text-lg tracking-wide">Fast recovery</h4>
            </div>
            <div className="text-black/70 hover:text-black transition-colors duration-500 cursor-pointer">
              <h4 className="font-light text-lg tracking-wide">Caring team</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Professional Layout */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/4 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 sm:mb-12 md:mb-16 text-black tracking-tight">Book an appointment</h3>

            <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-black backdrop-blur-sm">
              <form className="space-y-8">
                <Input
                  placeholder="Name"
                  className="bg-white border-black text-black placeholder:text-black/40 focus:border-black/70 focus:ring-black/10 h-16 text-lg backdrop-blur-sm font-light"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-white border-black text-black placeholder:text-black/40 focus:border-black/70 focus:ring-black/10 h-16 text-lg backdrop-blur-sm font-light"
                />
                <Input
                  placeholder="Phone"
                  type="tel"
                  className="bg-white border-black text-black placeholder:text-black/40 focus:border-black/70 focus:ring-black/10 h-16 text-lg backdrop-blur-sm font-light"
                />
                <Textarea
                  placeholder="Message"
                  rows={6}
                  className="bg-white border-black text-black placeholder:text-black/40 focus:border-black/70 focus:ring-black/10 text-lg backdrop-blur-sm font-light"
                />
                <Button className="w-full bg-black text-white hover:bg-black/90 py-6 text-xl font-medium transition-all duration-300 tracking-wide">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal Professional */}
      <footer className="bg-white text-black py-24 border-t border-black/10 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
            <div>
              <h4 className="font-light mb-8 text-black text-xl tracking-wide">Contact</h4>
              <p className="text-black/60 leading-relaxed text-lg font-light">
                Shop 8C, Bryce's Arcade
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
              <h4 className="font-light mb-8 text-black text-xl tracking-wide">Services</h4>
              <ul className="text-black/60 space-y-4 text-lg font-light">
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
                  Women's Health
                </li>
                <li className="hover:text-black transition-colors duration-500 cursor-pointer">
                  NDIS Services
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-8 text-black text-xl tracking-wide">Hours</h4>
              <p className="text-black/60 leading-relaxed text-lg font-light">
                Monday - Friday: 9:00am - 5:00pm
                <br />
                After hours appointments by arrangement
                <br />
                Closed Public Holidays
              </p>
            </div>
            <div>
              <h4 className="font-light mb-8 text-black text-xl tracking-wide">Follow Us</h4>
              <p className="text-black/60 leading-relaxed text-lg font-light">
                <a 
                  href="https://facebook.com/helencooper000/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors duration-500"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-black/10 mt-20 pt-12 text-center text-black/40 text-lg font-light">
            <p>&copy; 2024 Gordonvale Physiotherapy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
