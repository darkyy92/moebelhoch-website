# MöbelHoch Website Development Guide

## IMPORTANT: NEVER AUTO-START DEV SERVER
- NEVER run `npm run dev` automatically
- ONLY run development server when explicitly requested by user

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## IMPORTANT GUIDELINES
- NEVER modify contact details (address, email, phone numbers) unless explicitly requested
- Preserve all legal information, privacy policies, and terms
- Maintain branding consistency across the site

## Code Style
- Use TypeScript with React functional components and hooks
- Import order: React, third-party, local (@/components, @/lib, etc.)
- Use named exports for components: `export default ComponentName`
- Use shadcn/ui components with Tailwind CSS for styling
- Use `cn()` utility from @/lib/utils for conditional class names
- State management with React hooks (useState, useEffect)
- File naming: PascalCase for components, camelCase for utilities
- Keep components small and focused on a single responsibility
- Use TypeScript interfaces for props (PascalCase with 'Props' suffix)
- Avoid any type when possible, but project uses relaxed TypeScript settings

## Project Structure
- Components in src/components/ (UI components in src/components/ui/)
- Pages in src/pages/
- Utilities in src/lib/
- Hooks in src/hooks/
- Assets in public/