# Development Guidelines

## Setup
- Node.js required
- npm for package management
- Port 8080 for dev server

## Commands
- npm run dev: Start development
- npm run build: Production build
- npm run lint: Run ESLint

## Verification
1. Lint check
2. Build check
3. Dev server test

## Best Practices
- Skip build/lint checks for minor text changes
- Only run build/lint for substantial code modifications
- Use browser_logs only when needed to verify critical functionality
- Dev server hot reload is sufficient for most text/style changes