import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: ReactNode
  className?: string
}

// Hero Headlines (Instrument Serif)
export function HeroHeadline({ children, className }: TypographyProps) {
  return (
    <h1 className={cn(
      // Smaller mobile for better fit, scale up responsively
      "font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter",
      className
    )}>
      {children}
    </h1>
  )
}

// Display Headlines (Instrument Serif)
export function DisplayHeadline({ children, className }: TypographyProps) {
  return (
    <h1 className={cn(
      "font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight",
      className
    )}>
      {children}
    </h1>
  )
}

// Section Headlines (Instrument Serif)
export function SectionHeadline({ children, className }: TypographyProps) {
  return (
    <h2 className={cn(
      "font-serif text-2xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight",
      className
    )}>
      {children}
    </h2>
  )
}

// Subsection Headlines (Instrument Serif)
export function SubsectionHeadline({ children, className }: TypographyProps) {
  return (
    <h3 className={cn(
      "font-serif text-xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-normal",
      className
    )}>
      {children}
    </h3>
  )
}

// Card Headlines (Instrument Serif)
export function CardHeadline({ children, className }: TypographyProps) {
  return (
    <h4 className={cn(
      "font-serif text-lg md:text-xl lg:text-2xl font-semibold leading-snug tracking-normal",
      className
    )}>
      {children}
    </h4>
  )
}

// Body Text (Instrument Sans) - Minimum text size for the site
export function BodyText({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "font-sans text-sm md:text-base lg:text-lg leading-relaxed tracking-normal",
      className
    )}>
      {children}
    </p>
  )
}

// Large Body Text (Instrument Sans)
export function LargeBodyText({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "font-sans text-base md:text-lg lg:text-xl leading-relaxed tracking-normal",
      className
    )}>
      {children}
    </p>
  )
}

// Small Headline (Instrument Serif) - For smaller headings like footer sections
export function SmallHeadline({ children, className }: TypographyProps) {
  return (
    <h4 className={cn(
      "font-serif text-lg md:text-xl font-medium leading-snug tracking-normal",
      className
    )}>
      {children}
    </h4>
  )
}

// Overlay Text (Instrument Serif) - For text overlays on images
export function OverlayText({ children, className }: TypographyProps) {
  return (
    <div className={cn(
      "font-serif text-base md:text-lg font-light leading-snug tracking-wide",
      className
    )}>
      {children}
    </div>
  )
}
