# Typography System Documentation

## Overview

This comprehensive typography system provides a cohesive hierarchy of font sizes, line heights, and spacing using Instrument Sans and Instrument Serif fonts. The system is designed to maintain consistency across the entire website while providing flexibility for different use cases.

## Font Setup

### Fonts Used
- **Instrument Sans**: Primary font for body text, navigation, and most UI elements
- **Instrument Serif**: Display font for headlines and hero sections

### Font Loading
Fonts are loaded in [`app/layout.tsx`](../app/layout.tsx) using Next.js Google Fonts:

```typescript
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-instrument-serif'
})
```

## Typography Components

### Available Components

| Component | Font | Size Range | Use Case |
|-----------|------|------------|----------|
| [`HeroHeadline`](../components/ui/Typography.tsx) | Serif | 72-96px | Landing page heroes |
| [`DisplayHeadline`](../components/ui/Typography.tsx) | Serif | 52-72px | Page titles |
| [`SectionHeadline`](../components/ui/Typography.tsx) | Sans | 36-48px | Major sections |
| [`SubsectionHeadline`](../components/ui/Typography.tsx) | Sans | 24-36px | Content subsections |
| [`CardHeadline`](../components/ui/Typography.tsx) | Sans | 20-24px | Card titles |
| [`LargeBodyText`](../components/ui/Typography.tsx) | Sans | 18-20px | Introductory text |
| [`BodyText`](../components/ui/Typography.tsx) | Sans | 16-18px | Main content |
| [`SmallText`](../components/ui/Typography.tsx) | Sans | 14px | Secondary info |
| [`CaptionText`](../components/ui/Typography.tsx) | Sans | 12px | Captions, metadata |

### Usage Examples

#### Basic Usage
```tsx
import {
  HeroHeadline,
  SectionHeadline,
  BodyText,
  CardHeadline
} from '@/components/ui/Typography'

export default function ExamplePage() {
  return (
    <div>
      <HeroHeadline className="mb-6 text-black text-balance">
        Your Amazing Headline
      </HeroHeadline>
      
      <SectionHeadline className="mb-8">
        Section Title
      </SectionHeadline>
      
      <BodyText className="max-w-prose text-pretty">
        Your main content goes here with proper typography scaling.
      </BodyText>
    </div>
  )
}
```

#### Card Layout Example
```tsx
<Card>
  <CardContent className="p-8">
    <CardHeadline className="mb-4 text-gray-900">
      Card Title
    </CardHeadline>
    <BodyText className="text-gray-700">
      Card description with consistent typography.
    </BodyText>
  </CardContent>
</Card>
```

## CSS Custom Properties

### Type Scale
```css
:root {
  /* Font Families */
  --font-sans: var(--font-instrument-sans), ui-sans-serif, system-ui, sans-serif;
  --font-serif: var(--font-instrument-serif), ui-serif, Georgia, serif;
  
  /* Type Scale - Desktop */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */
  --text-7xl: 4.5rem;     /* 72px */
  --text-8xl: 6rem;       /* 96px */
}
```

### Mobile Responsive Scaling
```css
@media (max-width: 768px) {
  :root {
    --text-3xl: 1.5rem;     /* 24px */
    --text-4xl: 1.875rem;   /* 30px */
    --text-5xl: 2.25rem;    /* 36px */
    --text-6xl: 2.75rem;    /* 44px */
    --text-7xl: 3.25rem;    /* 52px */
    --text-8xl: 4rem;       /* 64px */
  }
}
```

## Utility Classes

### Typography Mixins
Available in [`app/globals.css`](../app/globals.css):

```css
.heading-hero {
  @apply font-serif text-6xl md:text-8xl font-normal leading-none tracking-tighter;
}

.heading-display {
  @apply font-serif text-5xl md:text-7xl font-normal leading-tight tracking-tight;
}

.heading-section {
  @apply font-sans text-3xl md:text-5xl font-medium leading-tight tracking-tight;
}

.body-regular {
  @apply font-sans text-base md:text-lg leading-relaxed tracking-normal;
}
```

### Text Utilities
```css
.text-balance {
  text-wrap: balance;
}

.text-pretty {
  text-wrap: pretty;
}
```

## TypeScript Integration

### Type Definitions
Available in [`types/typography.ts`](../types/typography.ts):

```typescript
export type TypographyVariant = 
  | 'hero'
  | 'display' 
  | 'section'
  | 'subsection'
  | 'card'
  | 'body-large'
  | 'body'
  | 'small'
  | 'caption'

// Utility function for programmatic class generation
export const getTypographyClasses = (variant: TypographyVariant): string => {
  // Returns appropriate Tailwind classes for the variant
}
```

## Best Practices

### Semantic Structure
```tsx
// ✅ Good - Proper hierarchy
<article>
  <HeroHeadline>Main Article Title</HeroHeadline>
  <LargeBodyText>Introduction paragraph</LargeBodyText>
  
  <section>
    <SectionHeadline>Section Title</SectionHeadline>
    <BodyText>Regular content</BodyText>
    
    <SubsectionHeadline>Subsection</SubsectionHeadline>
    <BodyText>More content</BodyText>
  </section>
</article>

// ❌ Avoid - Inconsistent hierarchy
<div>
  <h3 className="text-8xl">Wrong hierarchy</h3>
  <h1 className="text-sm">Confusing structure</h1>
</div>
```

### Responsive Considerations
```tsx
// ✅ Good - Use text-balance for headlines
<HeroHeadline className="text-balance max-w-4xl">
  Headlines should wrap beautifully
</HeroHeadline>

// ✅ Good - Use text-pretty for body text
<BodyText className="text-pretty max-w-prose">
  Body text should be readable and well-formatted
</BodyText>
```

### Accessibility
```tsx
// ✅ Good - Proper focus states
<button className="focus-visible:typography-focus">
  Accessible button
</button>

// ✅ Good - Sufficient contrast
<SmallText className="text-muted">
  Secondary information with proper contrast
</SmallText>
```

## Migration Guide

### From Old System
Replace inline Tailwind classes with semantic components:

```tsx
// Before
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 sm:mb-8 text-black leading-[0.9] tracking-tight">
  Headline
</h1>

// After
<HeroHeadline className="mb-6 sm:mb-8 text-black text-balance">
  Headline
</HeroHeadline>
```

### Gradual Migration
1. Start with new pages using the typography components
2. Update existing components one at a time
3. Use utility classes as fallback during transition
4. Test thoroughly across all breakpoints

## Performance Considerations

### Font Loading
- Fonts use `display: 'swap'` for better performance
- CSS custom properties reduce bundle size
- Responsive scaling uses CSS media queries

### Bundle Size
- Components are tree-shakeable
- Utility classes are generated only when used
- TypeScript types have no runtime cost

## Troubleshooting

### Common Issues

1. **Font not loading**: Check that font variables are properly applied to `<html>` element
2. **Inconsistent sizing**: Ensure you're using the typography components instead of raw Tailwind classes
3. **Mobile scaling**: Verify responsive breakpoints are working correctly

### Debug Tools
```tsx
// Use this component to test typography scales
import { getTypographyClasses } from '@/types/typography'

const TypographyDebug = () => (
  <div>
    {['hero', 'display', 'section'].map(variant => (
      <div key={variant} className={getTypographyClasses(variant)}>
        {variant} typography
      </div>
    ))}
  </div>
)
```

## VS Code Snippets

Add to `.vscode/snippets.json`:

```json
{
  "Typography Hero": {
    "prefix": "typo-hero",
    "body": [
      "<HeroHeadline className=\"${1:mb-6}\">",
      "  ${2:Your headline text}",
      "</HeroHeadline>"
    ]
  },
  "Typography Section": {
    "prefix": "typo-section",
    "body": [
      "<section className=\"${1:mb-16}\">",
      "  <SectionHeadline className=\"${2:mb-8}\">",
      "    ${3:Section Title}",
      "  </SectionHeadline>",
      "  <BodyText className=\"${4:max-w-prose}\">",
      "    ${5:Section content}",
      "  </BodyText>",
      "</section>"
    ]
  }
}