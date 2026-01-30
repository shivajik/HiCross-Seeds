# HiCross Seeds - Agricultural Seed Company Website

## Overview

This is a full-stack React application for HiCross Seeds (Hicrossbrid Seeds International Pvt. Ltd.), an agricultural seed manufacturing company. The website showcases their premium seed products, company information, quality assurance processes, career opportunities, and provides contact functionality.

The application is built with React Router v7 in framework mode, featuring server-side rendering, TypeScript, and CSS Modules for styling. It follows a component-based architecture with a comprehensive design system using design tokens and semantic color variables.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React Router v7** in framework mode with server-side rendering enabled
- **React 19** as the UI library
- **TypeScript** for type safety throughout the codebase

### Styling Approach
- **CSS Modules** for component-scoped styling (`.module.css` files alongside components)
- **Design Tokens** defined in `app/styles/tokens/` for consistent spacing, colors, typography, decorations, and animations
- **Theme System** in `app/styles/theme.css` using semantic color variables that reference base tokens
- **Radix UI** as the component library foundation for accessible, unstyled primitives
- **Open Props-inspired tokens** for spacing, shadows, radii, and easings

### Component Architecture
- **UI Components** in `app/components/ui/` - reusable building blocks (Button, Card, Input, etc.)
- **Feature Components** in `app/components/` - header, footer, and page-specific components
- **Routes** in `app/routes/` - page components with co-located CSS modules
- Each route exports `meta` function for SEO and uses the shared Header/Footer layout

### Data Management
- **Static Data** in `app/data/` directory (products, blog posts, careers, team members)
- No database integration currently - content is managed through TypeScript data files
- Products organized by categories (Paddy Seeds, Maize, Wheat, Mustard, Sunflower, etc.)

### Routing Structure
Routes configured in `app/routes.ts`:
- `/` - Home page with hero, features, and product showcase
- `/about` - Company story, mission, and team
- `/products` - Product catalog with category filtering
- `/quality` - R&D and quality assurance information
- `/gallery` - Image gallery with lightbox
- `/blog` - Knowledge center with articles
- `/careers` - Job listings and company culture
- `/contact` - Contact form and company information

### Build & Deployment
- **Vite** as the build tool with React Router plugin
- **Vercel** preset configured for deployment
- Server-side rendering enabled with `ssr: true`

## External Dependencies

### UI & Components
- **radix-ui** - Accessible component primitives (Dialog, Dropdown, Accordion, etc.)
- **lucide-react** - Icon library
- **cmdk** - Command menu component
- **embla-carousel-react** - Carousel functionality
- **vaul** - Drawer component
- **sonner** - Toast notifications

### Forms & Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Form validation resolvers
- **zod** - Schema validation

### Data Visualization
- **recharts** - Charting library

### Utilities
- **classnames** - Conditional CSS class joining
- **@dazl/color-scheme** - Light/dark mode color scheme management
- **input-otp** - OTP input component
- **react-resizable-panels** - Resizable panel layouts

### Fonts
- **Google Fonts** - Inter font family loaded via `<link>` in root layout

### Deployment
- **@vercel/react-router** - Vercel deployment integration
- **@react-router/serve** - Production server for React Router