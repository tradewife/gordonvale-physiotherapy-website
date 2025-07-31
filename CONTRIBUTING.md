# Contributing to Gordonvale Physiotherapy Website

## Development Setup

1. Clone the repository and install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open http://localhost:3000 in your browser

## Code Style

- Follow existing TypeScript and React patterns
- Use shadcn/ui components when possible
- Maintain responsive design with Tailwind CSS
- Follow the established file structure in the `app/` directory

## Making Changes

### Adding New Pages
1. Create a new directory in `app/` with a `page.tsx` file
2. Follow the existing page structure and layout patterns
3. Add navigation links in the appropriate components
4. Test the page on both desktop and mobile

### Modifying Components
1. Components are located in the `components/` directory
2. UI components use the shadcn/ui library in `components/ui/`
3. Follow the existing component patterns and prop interfaces
4. Ensure accessibility with proper ARIA labels and semantic HTML

### Styling
- Use Tailwind CSS classes for styling
- Follow the existing design system and color palette
- Ensure responsive design with mobile-first approach
- Test across different screen sizes

## Testing

Before submitting changes:
1. Run `pnpm dev` and test all affected pages
2. Run `pnpm build` to ensure production build works
3. Run `pnpm lint` to check for code quality issues
4. Test on both desktop and mobile viewports
5. Check browser console for any errors

## Pull Request Process

1. Create a feature branch from main
2. Make your changes following the guidelines above
3. Test thoroughly as described in the Testing section
4. Create a pull request with a clear description of changes
5. Ensure all checks pass before requesting review

## Component Guidelines

### Page Structure
Each page should follow this structure:
```tsx
export default function PageName() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Page Title</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Page description
      </p>
      
      {/* Page content */}
    </div>
  )
}
```

### Using UI Components
- Import from `@/components/ui/component-name`
- Follow the shadcn/ui documentation for props and usage
- Maintain consistent spacing and typography

### Form Handling
- Use React Hook Form with Zod validation
- Follow the existing contact form patterns
- Ensure proper error handling and user feedback

## File Organization

- **Pages**: Place in `app/` directory following Next.js app router conventions
- **Components**: Reusable components in `components/`
- **UI Components**: shadcn/ui components in `components/ui/`
- **Hooks**: Custom hooks in `hooks/`
- **Utilities**: Helper functions in `lib/`
- **Types**: TypeScript types can be defined inline or in separate `.types.ts` files

## Best Practices

1. **Accessibility**: Use semantic HTML and ARIA labels
2. **Performance**: Optimize images and lazy load when appropriate
3. **SEO**: Include proper meta tags and structured data
4. **Mobile-First**: Design for mobile devices first
5. **Type Safety**: Use TypeScript for all new code
6. **Error Handling**: Implement proper error boundaries and fallbacks

## Common Issues

### WebGL Warnings
The UnicornStudio integration may show WebGL context warnings in the console. These are non-critical and don't affect functionality.

### Build Errors
- Ensure all imports are correct
- Check for TypeScript errors with `pnpm type-check`
- Verify all dependencies are installed

### Styling Issues
- Use Tailwind CSS classes consistently
- Check responsive breakpoints
- Ensure proper contrast ratios for accessibility
