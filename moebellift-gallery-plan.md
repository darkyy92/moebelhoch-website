# Image Gallery Implementation for Möbellift Cards

## Overview
Replace static images with responsive, lazy-loaded image galleries in each Möbellift card while maintaining the existing card layout and adding navigation controls.

## Components to Create

1. `MoebelLiftGallery.tsx`
   - Wrapper component using shadcn's Carousel
   - Handles image loading states with Skeleton
   - Implements swipe gestures via embla-carousel
   - Provides keyboard navigation
   - Shows navigation arrows on desktop

2. `ResponsiveImage.tsx`
   - Handles srcset and sizes
   - Implements WebP with JPEG fallback
   - Manages lazy loading
   - Shows loading skeleton

## Implementation Steps

1. Create directory structure:
```
public/images/moebellifte/
  piaggio-klein/
  piaggio-gross/
  baulift/
```

2. Create image variants:
- Generate WebP and JPEG versions
- Create multiple sizes for srcset
- Organize by lift type

3. Implement base components:
- Create ResponsiveImage component
- Create MoebelLiftGallery component
- Add loading states and error handling

4. Integrate with card layout:
- Replace static images with gallery
- Maintain aspect ratio
- Add navigation controls
- Style arrows and indicators

5. Add touch interactions:
- Implement swipe gestures
- Add touch feedback
- Handle edge cases

6. Optimize performance:
- Implement lazy loading
- Add preloading for adjacent images
- Cache loaded images

## Technical Details

### Image Sizes
- Thumbnail: 300px
- Small: 600px
- Medium: 900px
- Large: 1200px

### Features
- Keyboard navigation (left/right arrows)
- Touch swipe gestures
- Loading states with skeleton
- Automatic image format selection
- Responsive sizing
- Accessibility support

### Accessibility
- ARIA labels for controls
- Keyboard navigation
- Screen reader support
- Focus management

### Performance
- Lazy loading
- Progressive loading
- Format optimization
- Caching strategy