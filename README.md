# Gordonvale Physiotherapy Website

A modern, professional website for Gordonvale Physiotherapy clinic built with Next.js 15, React 19, and TypeScript.

## Features

- **Comprehensive Service Pages**: Specialized pages for physiotherapy services, dizzy clinic, NDIS support, telehealth, and products
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Contact Forms**: React Hook Form with Zod validation
- **Visual Effects**: UnicornStudio integration for professional animations
- **Accessibility**: Radix UI primitives for accessible components

## Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd gordonvale-physiotherapy-website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

### Contact Form Email Delivery

Website enquiry forms post to `/api/contact`, which forwards messages via SMTP (ideal for Vercel serverless functions). To enable delivery:

1. Choose an SMTP provider (e.g. clinic email host, Postmark, SendGrid) and generate credentials.
2. Copy `.env.example` to `.env.local` (and configure the same keys in Vercel → Project → Settings → Environment Variables for production).
3. Provide values for:
   - `CONTACT_FORM_RECIPIENT` – address that should receive submissions (e.g. `reception@gordonvalephysiotherapy.com`)
   - `CONTACT_FORM_FROM` – optional display name/from address if your SMTP service requires one
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and optionally `SMTP_SECURE`
4. Restart `pnpm dev` so Next.js can read the new variables.

Submissions will now be sent directly to reception without relying on the visitor's mail client.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm type-check` - Run TypeScript type checking
- `pnpm build:analyze` - Build with bundle analysis
- `pnpm clean` - Clean build artifacts

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── about/             # Team information and clinic background
│   ├── blog/              # Content marketing (coming soon)
│   ├── contact/           # Contact forms and clinic information
│   ├── dizzy-clinic/      # Specialized vertigo/balance treatment
│   ├── ndis/              # National Disability Insurance Scheme services
│   ├── products/          # Medical equipment and therapy products
│   ├── services/          # Core physiotherapy service offerings
│   ├── telehealth/        # Remote consultation services
│   └── layout.tsx         # Root application layout
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui component library
│   └── Layout.tsx        # Shared page layout structure
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
└── styles/               # Styling configuration
```

## Development Workflow

### Making Changes
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test locally: `pnpm dev`
4. Build and test: `pnpm build`
5. Commit and push changes
6. Create a pull request

### Testing
- Run the development server and test all pages manually
- Verify production build works: `pnpm build`
- Check for console errors in browser developer tools

## Deployment

The application is ready for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Deploy with default settings

### Manual Deployment
1. Run `pnpm build` to create production build
2. Run `pnpm start` to serve the application
3. Application will be available on port 3000

## Known Issues

- WebGL context warnings in console related to UnicornStudio animations (does not affect functionality)
- These warnings occur in headless environments and don't impact the user experience

## Contributing

1. Follow the existing code patterns and component structure
2. Use the established shadcn/ui components when possible
3. Maintain responsive design principles
4. Test changes across all pages before submitting

## Pages Overview

- **Home** (`/`) - Main landing page with clinic overview
- **Services** (`/services`) - Core physiotherapy services
- **About** (`/about`) - Team information and clinic background
- **Contact** (`/contact`) - Contact forms and clinic details
- **Dizzy Clinic** (`/dizzy-clinic`) - Specialized vertigo and balance treatment
- **NDIS Services** (`/ndis`) - National Disability Insurance Scheme support
- **Telehealth** (`/telehealth`) - Remote consultation services
- **Products** (`/products`) - Medical equipment and therapy aids
- **Blog** (`/blog`) - Content marketing (coming soon)

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Forms**: React Hook Form with Zod validation
- **Animations**: UnicornStudio integration
- **Icons**: Lucide React
- **Package Manager**: pnpm
