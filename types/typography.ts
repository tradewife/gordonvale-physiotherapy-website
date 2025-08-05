export type TypographyVariant =
  | 'hero'
  | 'display'
  | 'section'
  | 'subsection'
  | 'card'
  | 'body-large'
  | 'body'

export type FontFamily = 'sans' | 'serif'

export interface TypographyStyleProps {
  variant: TypographyVariant
  family?: FontFamily
  className?: string
}

// Utility function for Copilot suggestions
export const getTypographyClasses = (variant: TypographyVariant): string => {
  const variants = {
    hero: 'font-serif text-6xl md:text-8xl font-normal leading-none tracking-tighter',
    display: 'font-serif text-5xl md:text-7xl font-normal leading-tight tracking-tight',
    section: 'font-serif text-3xl md:text-5xl font-medium leading-tight tracking-tight',
    subsection: 'font-serif text-2xl md:text-4xl font-medium leading-tight tracking-normal',
    card: 'font-serif text-xl md:text-2xl font-semibold leading-snug tracking-normal',
    'body-large': 'font-sans text-lg md:text-xl leading-relaxed tracking-normal',
    body: 'font-sans text-base md:text-lg leading-relaxed tracking-normal',
  }
  
  return variants[variant] || variants.body
}

// Typography hierarchy mapping for reference
export const TYPOGRAPHY_HIERARCHY = {
  hero: {
    font: 'Instrument Serif',
    sizeRange: '72-96px',
    useCase: 'Landing page heroes, major announcements'
  },
  display: {
    font: 'Instrument Serif',
    sizeRange: '52-72px',
    useCase: 'Page titles, section openers'
  },
  section: {
    font: 'Instrument Serif',
    sizeRange: '36-48px',
    useCase: 'Major content sections'
  },
  subsection: {
    font: 'Instrument Serif',
    sizeRange: '24-36px',
    useCase: 'Content subsections'
  },
  card: {
    font: 'Instrument Serif',
    sizeRange: '20-24px',
    useCase: 'Card titles, article headlines'
  },
  'body-large': {
    font: 'Instrument Sans',
    sizeRange: '18-20px',
    useCase: 'Introductory paragraphs, callouts'
  },
  body: {
    font: 'Instrument Sans',
    sizeRange: '16-18px',
    useCase: 'Main content, descriptions - MINIMUM SIZE for all text'
  }
} as const