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

## Layout Guidelines (Updated)
- No whitespace between navbar and hero section
- Page sections use standard vertical spacing: `py-20 md:py-28`
- Section content should be properly contained: `container mx-auto px-4`
- Card/item grids: `grid grid-cols-1 md:grid-cols-3 gap-10`
- Section headers with badge style: 
  ```jsx
  <div className="max-w-lg mx-auto text-center mb-16">
    <div className="inline-block px-4 py-1 rounded-full bg-movers-light text-movers-primary mb-4">
      <span className="text-sm font-medium">Section Label</span>
    </div>
    <h2 className="text-4xl font-bold text-movers-primary mb-6">Section Title</h2>
    <p className="text-lg text-gray-600">Description text...</p>
  </div>
  ```

## Card Design (Updated)
- Cards should use enhanced shadow and hover effects:
  ```jsx
  <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
    {/* Card content */}
  </div>
  ```
- Inner content should be vertically centered:
  ```jsx
  <div className="p-8 flex-1 flex flex-col justify-between h-full">
    <div className="flex flex-col justify-center flex-1">
      {/* Main content */}
    </div>
    <div className="pt-6">
      {/* Bottom action */}
    </div>
  </div>
  ```
- Feature badges on images:
  ```jsx
  <div className="absolute top-0 right-0 bg-movers-primary text-white px-3 py-1 text-sm font-medium rounded-bl-lg z-10">Badge</div>
  ```

## Button Styles (Updated)
- Primary action button (on blue background):
  ```jsx
  <button className="bg-white text-movers-primary hover:bg-movers-yellow hover:text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center shadow-lg">
    Button Text
    <ArrowRight size={18} className="ml-2" />
  </button>
  ```
- Standard button (on white background):
  ```jsx
  <button className="w-full bg-movers-primary hover:bg-movers-secondary text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center">
    Button Text
    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
  </button>
  ```

## Typography
- Headings: 
  - h1: `text-5xl font-bold mb-6 leading-tight`
  - h2: `text-4xl font-bold mb-6`
  - h3: `text-2xl font-bold mb-4`
- Body text:
  - Standard: `text-lg text-gray-600`
  - Large: `text-xl text-gray-100` (on dark backgrounds)
- List items: Use bulletpoint styling with colored markers

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

## Animations (Updated)
- Smooth transitions for all interactive elements
- Hover states with transform effects:
  - Cards: `hover:-translate-y-2` for subtle lift effect
  - Buttons: `group-hover:translate-x-1` for arrow movement
- Loading states
- Interactive feedback
- Add subtle section transitions when scrolling
- Ensure animations work well on mobile devices
- Respect prefers-reduced-motion

## Table Styling (Updated)
- Tables should use uniform header styling (no column separators)
- Alternating row colors for better readability
- Highlight price/important rows with subtle background colors
- Rounded corners for better visual appeal