# Project Knowledge Base

## Project Overview
- Modern web application built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS
- Project URL: https://lovable.dev/projects/ee2b1cb3-1822-43a3-b0ca-005b340eefeb
- Mobile-first, responsive design approach required for all components

## Language & Text Guidelines
- The whole website text should be German
- Never use the German character 'ß' - always use 'ss' following Swiss German convention
- Example: Use 'Strasse' instead of 'Straße'

## Deployment
- Deploy through Lovable platform (Share -> Publish)
- For custom domains, use Netlify (see docs.lovable.dev/tips-tricks/custom-domain/)

## Development Guidelines
- Keep existing user comments exactly as they were
- Make minimal edits to accomplish requests
- Preserve existing code behavior unless explicitly changing it
- Run type checks before committing changes
- Always start with mobile layout first, then scale up to larger screens
- Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:) consistently
- Mobile breakpoint is set at 768px (useIsMobile hook)

## Verification Steps
After making changes:
1. Run `npm run lint` to check for linting errors
2. Run `npm run build` to verify build succeeds