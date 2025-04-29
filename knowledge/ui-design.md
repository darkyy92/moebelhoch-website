# UI Design

## Responsive Design
- Mobile-first approach mandatory
- Base styles should target mobile view
- Use Tailwind breakpoints consistently:
  - sm: 640px
  - md: 768px (primary mobile breakpoint)
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px
- Test all components at various screen sizes
- Use useIsMobile hook for JS-based responsive logic

## Color Scheme
- movers.primary: #3973b5 (Main brand blue)
- movers.secondary: #4A81FC
- movers.accent: #85B4FF
- movers.light: #EBF3FF
- movers.yellow: #FFD15C

## Components
- shadcn-ui based
- Customized with Tailwind
- Responsive design patterns:
  - Stack on mobile, grid on desktop
  - Hidden/visible based on screen size
  - Flexible spacing units
  - Touch-friendly tap targets (min 44px)
  - Responsive typography
  - Collapsible navigation on mobile

## Animations
- Smooth transitions
- Loading states
- Interactive feedback
- Ensure animations work well on mobile devices
- Respect prefers-reduced-motion